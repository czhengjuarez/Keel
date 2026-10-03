#!/usr/bin/env node
// Generates src/ai/component-registry.json from source.
//
//   node scripts/registry.mjs          write the registry
//   node scripts/registry.mjs --check  fail if the registry is stale or incomplete
//
// Derived from code:  variant values (src/types.ts), defaults (class helpers),
//                     the valid class set (src/styles.css), helper exports.
// Editorial input:    scripts/registry-meta.mjs

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DOCS_URL, components as meta, header, hooks } from './registry-meta.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = join(root, 'src');
const registryPath = join(src, 'ai', 'component-registry.json');

const read = (...p) => readFileSync(join(src, ...p), 'utf8');
const errors = [];
const fail = (msg) => errors.push(msg);

const types = read('types.ts');
const css = read('styles.css');
const indexTs = read('index.ts');
const componentFiles = readdirSync(join(src, 'components'))
  .filter((f) => f.endsWith('.tsx'))
  .map((f) => ({ file: f, text: read('components', f) }));

// ---- derive ---------------------------------------------------------------

function enumValues(typeName) {
  const m = types.match(new RegExp(`export type ${typeName}\\s*=\\s*([^;]+);`));
  if (!m) return fail(`types.ts: no union type ${typeName}`);
  return [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1]);
}

function helperSource(helper) {
  for (const { text } of componentFiles) {
    const i = text.indexOf(`export function ${helper}(`);
    if (i !== -1) return text.slice(i, text.indexOf(') {', i));
  }
  fail(`no exported helper ${helper}() in src/components/`);
  return '';
}

function paramDefault(helper, param, type) {
  const m = helperSource(helper).match(new RegExp(`\\b${param}\\s*=\\s*('([^']*)'|true|false)`));
  if (m) return m[2] ?? m[1] === 'true';
  if (type === 'boolean') return false; // undefined-by-default boolean flag
  fail(`${helper}(): no default found for "${param}"`);
}

function resolveOption({ source, ...rest }) {
  const out = { type: rest.type };
  if (source) {
    if (rest.type === 'enum') out.values = enumValues(source.enumType);
    out.default = paramDefault(source.helper, source.param, rest.type);
  }
  const { type, ...extra } = rest;
  return { ...out, ...extra };
}

const cssClasses = new Set(css.match(/\.of-[a-z0-9_-]+/g).map((c) => c.slice(1)));
const validClasses = new Set([...cssClasses, ...hooks]);
const claimed = new Set();
const claim = (c) => claimed.add(c);

function build(c) {
  const options = Object.fromEntries(Object.entries(c.options).map(([k, o]) => [k, resolveOption(o)]));

  claim(c.baseClass);
  for (const o of Object.values(options)) {
    if (o.values) o.values.forEach((v) => claim(o.classPattern.replace('{value}', v)));
    else claim(o.classPattern);
  }
  c.modifiers?.forEach((m) => claim(m.class));
  for (const p of Object.values(c.parts ?? {})) claim(typeof p === 'string' ? p : p.class);
  for (const h of c.relatedHelpers ?? []) {
    if (h.baseClass) claim(h.baseClass);
    h.modifiers?.forEach(claim);
  }
  for (const ex of c.examples) {
    for (const cls of ex.match(/\bof-[a-z0-9_-]+/g) ?? []) {
      if (!validClasses.has(cls)) fail(`${c.name} example uses "${cls}", which is not in styles.css`);
    }
  }
  if (!new RegExp(`\\b${c.classHelper}\\b`).test(indexTs) &&
      !componentFiles.some(({ file, text }) => text.includes(`export function ${c.classHelper}(`) &&
        indexTs.includes(`./components/${file.replace('.tsx', '')}`))) {
    fail(`${c.classHelper} is not exported from src/index.ts`);
  }

  const { docsSlug, options: _o, ...rest } = c;
  const ordered = {
    name: rest.name,
    description: rest.description,
    classHelper: rest.classHelper,
    baseClass: rest.baseClass,
    docsUrl: `${DOCS_URL}/components/${docsSlug}`
  };
  for (const k of ['relatedHelpers', 'parts']) if (rest[k]) ordered[k] = rest[k];
  ordered.options = options;
  if (rest.modifiers) ordered.modifiers = rest.modifiers;
  ordered.classPattern = rest.classPattern;
  ordered.examples = rest.examples;
  return ordered;
}

const registry = { ...header, components: meta.map(build) };

// ---- coverage: styles.css <-> registry -----------------------------------

for (const cls of cssClasses) {
  if (!claimed.has(cls)) fail(`styles.css defines .${cls}, but no registry entry covers it (add it to registry-meta.mjs)`);
}
for (const cls of claimed) {
  if (!validClasses.has(cls)) fail(`registry references "${cls}", which is not defined in styles.css`);
}

registry.classes = [...validClasses].sort();

// ---- write / check ---------------------------------------------------------

if (errors.length) {
  console.error('Registry generation failed:\n' + errors.map((e) => `  - ${e}`).join('\n'));
  process.exit(1);
}

const next = JSON.stringify(registry, null, 2) + '\n';

if (process.argv.includes('--check')) {
  let current = '';
  try { current = readFileSync(registryPath, 'utf8'); } catch {}
  if (current !== next) {
    console.error('component-registry.json is out of date. Run: npm run registry:build');
    process.exit(1);
  }
  console.log(`registry ok (${registry.components.length} components, ${registry.classes.length} classes)`);
} else {
  writeFileSync(registryPath, next);
  console.log(`wrote ${registryPath} (${registry.components.length} components, ${registry.classes.length} classes)`);
}

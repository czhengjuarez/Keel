#!/usr/bin/env node
/**
 * Keel CLI — query the component registry from the terminal.
 * Reads the registry bundled with the installed package, so answers always
 * match the version in node_modules. Zero dependencies.
 *
 *   keel ls                 list components
 *   keel doc <name> [--json] show one component's API
 *   keel docs               show every component
 *   keel check <files...>   flag of-* classes that do not exist in Keel
 *   keel ai                 print the LLM usage guide
 */

import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const pkgRoot = join(dirname(fileURLToPath(import.meta.url)), '..');
const readPkg = (...p) => readFileSync(join(pkgRoot, ...p), 'utf8');
const registry = () => JSON.parse(readPkg('src', 'ai', 'component-registry.json'));

const HELP = `Keel CLI

Usage: keel <command>

  ls                       List all components
  doc <name> [--json]      Show a component's classes, options, and examples
  docs                     Show every component
  check <files...>         Flag of-* classes that are not real Keel classes
  ai                       Print the LLM usage guide
  --version                Print the package version
`;

function find(reg, name) {
  const n = name.toLowerCase();
  return reg.components.find((c) => c.name.toLowerCase() === n || c.classHelper.toLowerCase() === n);
}

function formatComponent(c) {
  const out = [`${c.name}  (${c.classHelper}, .${c.baseClass})`, '', c.description, ''];
  out.push(`Pattern: ${c.classPattern}`);
  for (const [k, o] of Object.entries(c.options)) {
    const vals = o.values ? o.values.join(' | ') : o.type;
    out.push(`  ${k}: ${vals} (default: ${o.default}) -> ${o.classPattern}`);
  }
  for (const m of c.modifiers ?? []) out.push(`  modifier ${m.class}: ${m.description}`);
  if (c.parts) {
    out.push('Parts:');
    for (const [k, p] of Object.entries(c.parts)) {
      out.push(`  ${k}: ${typeof p === 'string' ? p : `${p.class} <${p.element}> via ${p.helper}()`}`);
    }
  }
  if (c.relatedHelpers) {
    out.push('Related helpers:');
    for (const h of c.relatedHelpers) out.push(`  ${h.name}${h.baseClass ? ` -> .${h.baseClass}` : ''}${h.description ? `: ${h.description}` : ''}`);
  }
  out.push('', 'Examples:', ...c.examples.map((e) => `  ${e}`), '', `Docs: ${c.docsUrl}`);
  return out.join('\n');
}

function distance(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}

function check(files) {
  if (!files.length) {
    console.error('Usage: keel check <files...>');
    return 2;
  }
  const valid = new Set(registry().classes);
  let bad = 0;
  for (const file of files) {
    let text;
    try {
      text = readFileSync(file, 'utf8');
    } catch (e) {
      console.error(`${file}: ${e.code ?? e.message}`);
      return 2;
    }
    text.split('\n').forEach((line, i) => {
      for (const m of line.matchAll(/(?<![\w-])of-[a-z0-9]+(?:(?:__|--|-)[a-z0-9]+)*/g)) {
        if (valid.has(m[0])) continue;
        const near = [...valid].map((c) => [c, distance(m[0], c)]).sort((a, b) => a[1] - b[1])[0];
        const hint = near && near[1] <= 4 ? ` (did you mean ${near[0]}?)` : '';
        console.log(`${file}:${i + 1}:${m.index + 1} unknown class ${m[0]}${hint}`);
        bad++;
      }
    });
  }
  if (bad) console.error(`${bad} unknown Keel class${bad === 1 ? '' : 'es'}`);
  return bad ? 1 : 0;
}

const [cmd, ...args] = process.argv.slice(2);
switch (cmd) {
  case 'ls': {
    const reg = registry();
    const w = Math.max(...reg.components.map((c) => c.name.length));
    for (const c of reg.components) console.log(`${c.name.padEnd(w)}  ${c.classHelper}  ${c.description.split(/(?<=\.)\s/)[0]}`);
    break;
  }
  case 'doc': {
    const name = args.find((a) => !a.startsWith('--'));
    if (!name) {
      console.error('Usage: keel doc <name> [--json]');
      process.exit(2);
    }
    const reg = registry();
    const c = find(reg, name);
    if (!c) {
      console.error(`No component "${name}". Available: ${reg.components.map((x) => x.name).join(', ')}`);
      process.exit(1);
    }
    console.log(args.includes('--json') ? JSON.stringify(c, null, 2) : formatComponent(c));
    break;
  }
  case 'docs':
    console.log(registry().components.map(formatComponent).join('\n\n---\n\n'));
    break;
  case 'check':
    process.exit(check(args));
    break;
  case 'ai':
    process.stdout.write(readPkg('src', 'ai', 'USAGE.md'));
    break;
  case '--version':
  case '-v':
    console.log(JSON.parse(readPkg('package.json')).version);
    break;
  case undefined:
  case 'help':
  case '--help':
  case '-h':
    console.log(HELP);
    break;
  default:
    console.error(`Unknown command "${cmd}"\n\n${HELP}`);
    process.exit(2);
}

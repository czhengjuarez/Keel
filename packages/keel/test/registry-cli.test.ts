import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

import { badgeClass, buttonClass } from '../src';
import rawRegistry from '../src/ai/component-registry.json';

type Entry = { name: string; options: Record<string, { values?: string[] }> };
const registry = rawRegistry as unknown as { classes: string[]; components: Entry[] };

const pkg = join(__dirname, '..');
const run = (script: string, ...args: string[]) =>
  spawnSync('node', [join(pkg, script), ...args], { encoding: 'utf8' });

describe('component registry', () => {
  it('is in sync with source (run `npm run registry:build` if this fails)', () => {
    const r = run('scripts/registry.mjs', '--check');
    expect(r.stderr).toBe('');
    expect(r.status).toBe(0);
  });

  it('agrees with the class helpers', () => {
    const button = registry.components.find((c) => c.name === 'Button')!;
    const valid = new Set(registry.classes);
    for (const variant of button.options.variant!.values!) {
      for (const cls of buttonClass({ variant: variant as never }).split(' ')) expect(valid.has(cls)).toBe(true);
    }
    const badge = registry.components.find((c) => c.name === 'Badge')!;
    for (const variant of badge.options.variant!.values!) {
      for (const cls of badgeClass({ variant: variant as never }).split(' ')) expect(valid.has(cls)).toBe(true);
    }
  });
});

describe('keel cli', () => {
  it('lists and documents components', () => {
    expect(run('bin/keel.js', 'ls').stdout).toContain('buttonClass');
    const doc = run('bin/keel.js', 'doc', 'button');
    expect(doc.status).toBe(0);
    expect(doc.stdout).toContain('primary | secondary | ghost | tint | danger');
    expect(JSON.parse(run('bin/keel.js', 'doc', 'Button', '--json').stdout).baseClass).toBe('of-btn');
  });

  it('exits non-zero for unknown components', () => {
    const r = run('bin/keel.js', 'doc', 'nope');
    expect(r.status).toBe(1);
    expect(r.stderr).toContain('Available:');
  });

  it('check flags invented classes and suggests fixes', () => {
    const dir = mkdtempSync(join(tmpdir(), 'keel-'));
    const bad = join(dir, 'bad.html');
    const good = join(dir, 'good.html');
    writeFileSync(bad, '<button class="of-btn of-btn--outline">x</button>');
    writeFileSync(good, '<button class="of-btn of-btn--primary of-btn--md">x</button>');

    const r = run('bin/keel.js', 'check', bad);
    expect(r.status).toBe(1);
    expect(r.stdout).toContain('unknown class of-btn--outline');
    expect(run('bin/keel.js', 'check', good).status).toBe(0);
  });
});

describe('design skill', () => {
  it('only teaches classes that exist (every **Good** example)', () => {
    const skill = readFileSync(join(pkg, '../../skills/keel-design/SKILL.md'), 'utf8');
    const good = [...skill.matchAll(/\*\*Good\*\*\s*```(?:html|css|tsx?)?\n([\s\S]*?)```/g)].map((m) => m[1]);
    expect(good.length).toBeGreaterThan(5);

    const dir = mkdtempSync(join(tmpdir(), 'keel-skill-'));
    const file = join(dir, 'good.txt');
    writeFileSync(file, good.join('\n'));
    const r = run('bin/keel.js', 'check', file);
    expect(r.stdout).toBe('');
    expect(r.status).toBe(0);
  });
});

describe('published entry points', () => {
  it('every exports target exists after build', () => {
    const manifest = JSON.parse(readFileSync(join(pkg, 'package.json'), 'utf8'));
    const targets = [manifest.main, manifest.types, ...Object.values<unknown>(manifest.bin)];
    const walk = (v: unknown): void => {
      if (typeof v === 'string') targets.push(v);
      else if (v && typeof v === 'object') Object.values(v).forEach(walk);
    };
    walk(manifest.exports);
    const built = spawnSync('npx', ['tsup'], { cwd: pkg, encoding: 'utf8' });
    expect(built.status, built.stderr).toBe(0);
    for (const t of new Set(targets)) {
      const exists = spawnSync('test', ['-e', join(pkg, t as string)]).status === 0;
      expect(exists, `${t} is declared in package.json but missing`).toBe(true);
    }
  }, 60_000);

  it('the built ESM entry imports in plain Node and exposes the helpers', () => {
    const r = spawnSync('node', ['--input-type=module', '-e', "import('./dist/index.js').then(m=>console.log(typeof m.buttonClass, typeof m.tabClass))"], { cwd: pkg, encoding: 'utf8' });
    expect(r.stderr).toBe('');
    expect(r.stdout.trim()).toBe('function function');
  });
});

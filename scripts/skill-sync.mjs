#!/usr/bin/env node
// skills/keel-design/SKILL.md is the single source for the design skill.
// docs/public/skill.md is published at /skill.md and is generated from it.
//   node scripts/skill-sync.mjs          copy source -> published
//   node scripts/skill-sync.mjs --check  fail if they differ

import { copyFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'skills/keel-design/SKILL.md');
const target = join(root, 'docs/public/skill.md');

if (process.argv.includes('--check')) {
  let published = '';
  try { published = readFileSync(target, 'utf8'); } catch {}
  if (published !== readFileSync(source, 'utf8')) {
    console.error('docs/public/skill.md is out of date. Run: npm run skill:sync');
    process.exit(1);
  }
  console.log('skill ok');
} else {
  copyFileSync(source, target);
  console.log('synced skills/keel-design/SKILL.md -> docs/public/skill.md');
}

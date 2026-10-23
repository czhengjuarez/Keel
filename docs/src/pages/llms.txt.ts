import type { APIRoute } from 'astro';
import registry from '../../../packages/keel/src/ai/component-registry.json';
import pkg from '../../../packages/keel/package.json';

const DOCS_BASE = 'https://keel.coscient.workers.dev';

const foundations = [
  { path: '/installation',        title: 'Installation',        description: 'How to install @ops-forward/keel and import styles.' },
  { path: '/design-tokens',       title: 'Design Tokens',       description: 'All CSS custom properties: color, spacing, radius, shadow, motion.' },
  { path: '/colors',              title: 'Colors',              description: 'Magenta brand palette, semantic color tokens, light/dark mode.' },
  { path: '/typography',          title: 'Typography',          description: 'Font families (Space Grotesk, Inter, JetBrains Mono), size and leading scales.' },
  { path: '/spacing',             title: 'Spacing',             description: '--of-space-* CSS custom property scale from 4px to 80px.' },
  { path: '/layout',              title: 'Layout',              description: 'Layout utilities and grid patterns.' },
  { path: '/motion',              title: 'Motion',              description: 'Easing curves and duration tokens for animation.' },
  { path: '/dark-mode',           title: 'Dark Mode',           description: 'Automatic dark mode via CSS light-dark() — no class toggling needed.' },
  { path: '/iconography',         title: 'Iconography',         description: 'Lucide icon set. Defaults: stroke-width 1.75, size 20px.' },
  { path: '/accessibility',       title: 'Accessibility',       description: 'Accessibility standards and ARIA patterns for Keel components.' },
  { path: '/browser-support',     title: 'Browser Support',     description: 'Supported browsers and CSS feature requirements.' },
  { path: '/brand/logo-usage',    title: 'Logo Usage',          description: 'Brand logo rules, clearspace, and do/don\'t guidance.' },
  { path: '/brand/voice-and-tone', title: 'Voice & Tone',       description: 'Writing style and brand voice for Ops Forward.' },
  { path: '/contributing',        title: 'Contributing',        description: 'How to add tokens, components, or docs to Keel.' },
  { path: '/migration-playbook',  title: 'Migration Playbook',  description: 'Steps to migrate an existing app to Keel.' },
  { path: '/changelog',           title: 'Changelog',           description: 'Version history and breaking changes.' },
  { path: '/release-policy',      title: 'Release Policy',      description: 'Versioning and deprecation policy.' },
];

// Component links are generated from the registry so they cannot drift from the package.
// The build fails if a component docs page has no registry entry, or the reverse.
const docsSlugs = Object.keys(import.meta.glob('./components/*.mdx')).map(p => p.replace(/^\.\/components\/|\.mdx$/g, ''));
const slugOf = (c: { docsUrl: string }) => c.docsUrl.split('/').pop()!;
const registrySlugs = registry.components.map(slugOf);
const missingEntry = docsSlugs.filter(s => !registrySlugs.includes(s));
const missingPage = registrySlugs.filter(s => !docsSlugs.includes(s));
if (missingEntry.length || missingPage.length) {
  throw new Error(
    'llms.txt: docs pages and component registry disagree.\n' +
      (missingEntry.length ? `  docs page without registry entry: ${missingEntry.join(', ')}\n` : '') +
      (missingPage.length ? `  registry entry without docs page: ${missingPage.join(', ')}\n` : ''),
  );
}

const firstSentence = (text: string) => text.split(/(?<=\.)\s/)[0];
const componentPages = registry.components.map(c => ({
  path: `/components/${slugOf(c)}`,
  title: c.name,
  description: `${c.baseClass}${c.classPattern.includes('{') ? ' (variants)' : ''} — ${firstSentence(c.description)}`,
}));

const link = (p: { path: string; title: string; description: string }) =>
  `- [${p.title}](${DOCS_BASE}${p.path}.md): ${p.description}`;

const tokenSummary = `
## Design tokens

All tokens are CSS custom properties on :root prefixed with --of-.
They use light-dark() so light and dark mode switch automatically.

Categories:
- color: --of-magenta-{50–900}, --of-gray-{0–950}, --of-success-*, --of-warning-*, --of-danger-*, --of-info-*
- semanticColor: --of-bg-*, --of-fg-*, --of-border-*, --of-ring, --of-gradient-brand, --of-gradient-brand-soft
- typography: --of-font-display (Space Grotesk), --of-font-sans (Inter), --of-font-mono (JetBrains Mono), --of-text-{xs–5xl}, --of-leading-*, --of-tracking-*
- spacing: --of-space-{1–20} (4px–80px)
- radius: --of-radius-{xs–2xl, pill}
- shadow: --of-shadow-{xs–lg}, --of-shadow-brand, --of-shadow-inset
- motion: --of-ease-{out, in-out, spring}, --of-dur-{fast 120ms, base 200ms, slow 320ms}

Brand gradient: linear-gradient(135deg, #80074D 0%, #B01273 45%, #FB41AA 100%)
Brand gradient (vertical card): linear-gradient(180deg, #FB41AA 0%, #8F1F57 100%)

Full token data: ${DOCS_BASE}/ai/tokens.json
`.trim();

const componentSummary = `
## Components

Import styles once: import '@ops-forward/keel/styles.css'
Import helpers: import { buttonClass, badgeClass, cardClass, ... } from '@ops-forward/keel'

${registry.components
  .map(c => `${c.name.padEnd(12)} ${c.classHelper.padEnd(18)} ${c.classPattern}`)
  .join('\n')}

Look up one component offline: npx keel doc <name>
Flag invented classes in markup: npx keel check <files>
Full component registry: ${DOCS_BASE}/ai/component-registry.json
`.trim();

const body = `# Keel — Ops Forward Design System
> Package: @ops-forward/keel  |  Docs: ${DOCS_BASE}  |  Version: ${pkg.version}

Keel is the Ops Forward design system. It ships design tokens as CSS custom properties, utility class helpers in TypeScript, and component CSS. It is framework-agnostic — consume the CSS classes directly or use the TypeScript class helpers with any framework.

## Install

\`\`\`
npm install @ops-forward/keel
import '@ops-forward/keel/styles.css';
import { buttonClass, badgeClass, cardClass } from '@ops-forward/keel';
\`\`\`

## Machine-readable resources

- Component registry: ${DOCS_BASE}/ai/component-registry.json
- Design tokens:      ${DOCS_BASE}/ai/tokens.json
- Design skill:       ${DOCS_BASE}/skill.md  (install: npx skills add czhengjuarez/Keel@keel-design)

Every docs page is also available as Markdown by appending .md to its URL.

## Foundations

${foundations.map(link).join('\n')}

## Component pages

${componentPages.map(link).join('\n')}

${tokenSummary}

${componentSummary}
`;

export const GET: APIRoute = () =>
  new Response(body.trim() + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });

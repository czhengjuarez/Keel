import type { APIRoute } from 'astro';

const DOCS_BASE = 'https://keel.coscient.workers.dev';

const pages = [
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
  { path: '/components/button',   title: 'Button',              description: 'of-btn with variants: primary, secondary, ghost, tint, danger. Sizes: sm, md, lg.' },
  { path: '/components/badge',    title: 'Badge',               description: 'of-badge with variants: green, amber, red, blue, purple, default.' },
  { path: '/components/card',     title: 'Card',                description: 'of-card surface with brand-elevated modifier for hero moments.' },
  { path: '/components/input',    title: 'Input',               description: 'of-input, of-field, of-label, of-field__hint, of-field__error for accessible form fields.' },
  { path: '/components/select',   title: 'Select',              description: 'of-select native dropdown.' },
  { path: '/components/textarea', title: 'Textarea',            description: 'of-textarea multi-line input.' },
  { path: '/components/switch',   title: 'Switch',              description: 'of-switch toggle with composable parts: track, thumb, label.' },
  { path: '/components/checkbox', title: 'Checkbox',            description: 'of-checkbox form control.' },
  { path: '/components/radio',    title: 'Radio',               description: 'of-radio form control.' },
  { path: '/components/banner',   title: 'Banner',              description: 'of-banner for page-level status messages.' },
  { path: '/components/breadcrumbs', title: 'Breadcrumbs',     description: 'of-breadcrumbs navigation.' },
  { path: '/components/dialog',   title: 'Dialog',              description: 'of-dialog modal overlay.' },
  { path: '/components/empty-state', title: 'Empty State',      description: 'of-empty-state for zero-data views.' },
  { path: '/components/loader',   title: 'Loader',              description: 'of-loader spinner for async states.' },
  { path: '/components/pagination', title: 'Pagination',        description: 'of-pagination for list navigation.' },
  { path: '/components/popover',  title: 'Popover',             description: 'of-popover for contextual overlays.' },
  { path: '/components/skeleton', title: 'Skeleton',            description: 'of-skeleton loading placeholder.' },
  { path: '/components/table',    title: 'Table',               description: 'of-table for data display.' },
  { path: '/components/tabs',     title: 'Tabs',                description: 'of-tabs for sectioned navigation.' },
  { path: '/components/toast',    title: 'Toast',               description: 'of-toast for ephemeral notifications.' },
  { path: '/components/tooltip',  title: 'Tooltip',             description: 'of-tooltip for contextual hints.' },
  { path: '/components/link',     title: 'Link',                description: 'of-link for styled anchor elements.' },
  { path: '/brand/logo-usage',    title: 'Logo Usage',          description: 'Brand logo rules, clearspace, and do/don\'t guidance.' },
  { path: '/brand/voice-and-tone', title: 'Voice & Tone',       description: 'Writing style and brand voice for Ops Forward.' },
  { path: '/contributing',        title: 'Contributing',        description: 'How to add tokens, components, or docs to Keel.' },
  { path: '/migration-playbook',  title: 'Migration Playbook',  description: 'Steps to migrate an existing app to Keel.' },
  { path: '/changelog',           title: 'Changelog',           description: 'Version history and breaking changes.' },
  { path: '/release-policy',      title: 'Release Policy',      description: 'Versioning and deprecation policy.' },
];

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

Button       of-btn               variants: primary secondary ghost tint danger  |  sizes: sm md lg  |  modifier: of-btn--disabled
Badge        of-badge             variants: green amber red blue purple default
Card         of-card              modifiers: of-card--brand-elevated (white text on brand gradient)
Input        of-input             compose with: of-field of-field--error of-label of-field__hint of-field__error
Select       of-select
Textarea     of-textarea
Switch       of-switch            parts: of-switch__input of-switch__track of-switch__thumb of-switch__label
Checkbox     of-checkbox
Radio        of-radio

Full component registry: ${DOCS_BASE}/ai/component-registry.json
`.trim();

const body = `# Keel — Ops Forward Design System
> Package: @ops-forward/keel  |  Docs: ${DOCS_BASE}  |  Version: 0.1.0

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

## Docs pages

${pages.map(p => `- [${p.title}](${DOCS_BASE}${p.path}): ${p.description}`).join('\n')}

${tokenSummary}

${componentSummary}
`;

export const GET: APIRoute = () =>
  new Response(body.trim() + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });

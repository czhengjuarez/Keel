# Keel design system (Ops Forward)

Keel is the Ops Forward design system monorepo. It includes a reusable package (`@ops-forward/keel`), token exports, and a docs site deployed on Cloudflare Workers.

## What is included

- `packages/keel` — publishable design-system package (class helpers + `styles.css`)
- `docs` — Astro documentation site
- `tokens` — generated token artifacts (CSS/JSON/TS)
- `assets` — brand/design assets (including `assets/exam.svg` reference)
- `SKILL.md` — coding-agent skill instructions for this repo

## Recent updates

- Added button disabled state styling and docs examples.
- Added brand elevated card style with white text on gradient.
- Updated brand card gradient to vertical with light top and dark bottom:
  `linear-gradient(180deg, #FB41AA 0%, #8F1F57 100%)`
- Added Lucide common icon previews in docs using static SVG assets.
- Documented Lucide defaults: `1.75` stroke, `20px` default size.

## Ready-to-use setup

From repo root:

```bash
npm install
```

Build core package:

```bash
npm run keel:build
```

Typecheck and test package:

```bash
npm run keel:typecheck
npm run keel:test
```

Build docs:

```bash
npm run build -w @ops-forward/docs
```

Run docs locally:

```bash
npm run dev -w @ops-forward/docs
```

## How to consume `@ops-forward/keel`

Import package CSS and use class helpers:

```ts
import '@ops-forward/keel/styles.css';
import { buttonClass, cardClass } from '@ops-forward/keel';
```

Button disabled example:

```tsx
<button className={buttonClass({ variant: 'primary', size: 'md', disabled: true })} disabled>
  Save
</button>
```

Brand elevated card example:

```html
<article class="of-card of-card--brand-elevated">
  <p class="of-card__kicker">Featured</p>
  <h3>Ops Forward</h3>
  <div class="of-card__rule"></div>
  <p>White type on brand gradient for elevated moments.</p>
</article>
```

## Design defaults

- Brand gradient: `linear-gradient(180deg, #FB41AA 0%, #8F1F57 100%)`
- Icon set: Lucide
- Icon defaults: `stroke-width: 1.75`, `size: 20px`

## Docs deployment (Cloudflare Worker)

Docs worker config is in `docs/wrangler.toml`:

- worker name: `keel`
- asset binding: `ASSETS`
- asset directory: `docs/dist`

Deploy commands:

```bash
npm run build -w @ops-forward/docs
npx wrangler deploy --cwd docs
```

Live URL:

- `https://keel.coscient.workers.dev`

## Quality checks

- Token consistency: `npm run tokens:check`
- Package checks: `npm run keel:typecheck && npm run keel:test`
- Docs build: `npm run build -w @ops-forward/docs`

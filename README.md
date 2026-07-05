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

## Installing in another app

`@ops-forward/keel` is published to npm at [npmjs.com/package/@ops-forward/keel](https://www.npmjs.com/package/@ops-forward/keel). To use Keel in any project:

```bash
npm install @ops-forward/keel
```

Import the stylesheet once in your app entry:

```ts
import '@ops-forward/keel/styles.css';
```

Then use class helpers or raw BEM classes in any framework:

```ts
import { buttonClass, badgeClass, cardClass } from '@ops-forward/keel';

buttonClass({ variant: 'primary', size: 'md' })
// → "of-btn of-btn--primary of-btn--md"
```

To publish a new version (until CI is set up):

1. Bump `version` in `packages/keel/package.json`
2. Run from the package directory:

```bash
cd packages/keel && npm publish --no-workspaces
```

`prepack` runs automatically: typecheck → tests → build → publish.

Requires an npm token with write access to `@ops-forward` set in `~/.npmrc`:

```bash
echo "//registry.npmjs.org/:_authToken=YOUR_TOKEN" >> ~/.npmrc
```

## Contributing to this repo (monorepo setup)

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

## AI / LLM tooling

Keel ships machine-readable metadata so AI agents and code generation tools can consume the design system without scraping HTML docs.

| Resource | URL | Description |
|---|---|---|
| `llms.txt` | `https://keel.coscient.workers.dev/llms.txt` | Plain-text docs index for LLM context windows |
| Component registry | `https://keel.coscient.workers.dev/ai/component-registry.json` | All components, class helpers, variants, and usage examples |
| Design tokens | `https://keel.coscient.workers.dev/ai/tokens.json` | Full token set by category |

The component registry is also importable from the package:

```ts
import registry from '@ops-forward/keel/ai/component-registry.json';
```

Source files:
- `packages/keel/src/ai/component-registry.json` — canonical registry (exported from package)
- `docs/src/pages/llms.txt.ts` — Astro endpoint for `/llms.txt`
- `docs/src/pages/ai/component-registry.json.ts` — serves registry at `/ai/component-registry.json`
- `docs/src/pages/ai/tokens.json.ts` — serves tokens at `/ai/tokens.json`

## Quality checks

- Token consistency: `npm run tokens:check`
- Package checks: `npm run keel:typecheck && npm run keel:test`
- Docs build: `npm run build -w @ops-forward/docs`

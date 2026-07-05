# Keel — Agent Knowledge Base

Keel is the Ops Forward design system monorepo. Read this file first when working in this repo.

## Where to look

| Need | Location |
|---|---|
| Design tokens (source of truth) | `colors_and_type.css` |
| Token artifacts (CSS / JSON / TS) | `tokens/` |
| Component class helpers | `packages/keel/src/components/` |
| Component types | `packages/keel/src/types.ts` |
| CSS utility helpers | `packages/keel/src/utils.ts` |
| Package entry point | `packages/keel/src/index.ts` |
| Component CSS | `packages/keel/src/styles.css` |
| AI quick-reference | `packages/keel/src/ai/USAGE.md` |
| Component registry (source) | `packages/keel/src/ai/component-registry.json` |
| Docs pages (Astro MDX) | `docs/src/pages/` |
| Docs layouts | `docs/src/layouts/` |
| Brand assets | `assets/` |

## Prefer hosted docs for lookups

When looking up component usage, token values, or class names, prefer the hosted endpoints — they are always in sync with the latest deploy:

| Resource | URL |
|---|---|
| Docs site | https://keel.coscient.workers.dev |
| LLM-friendly docs index | https://keel.coscient.workers.dev/llms.txt |
| Component registry | https://keel.coscient.workers.dev/ai/component-registry.json |
| Design tokens | https://keel.coscient.workers.dev/ai/tokens.json |

## Adding a component

1. Add CSS to `packages/keel/src/styles.css` using `.of-{component}` BEM conventions
2. Add a TypeScript class helper to `packages/keel/src/components/{Component}.tsx`
3. Export from `packages/keel/src/index.ts`
4. Add an entry to `packages/keel/src/ai/component-registry.json`
5. Add a docs page at `docs/src/pages/components/{component}.mdx`
6. Add the page to the `pages` array in `docs/src/pages/llms.txt.ts`

## Adding or changing a token

1. Edit `colors_and_type.css` — this is the only source of truth for tokens
2. Run `npm run tokens:build` to regenerate `tokens/tokens.json`, `tokens/tokens.css`, `tokens/tokens.ts`
3. Never edit `tokens/` files directly — they are generated

## CSS conventions

- All classes use the `of-` prefix (Ops Forward)
- BEM: `of-block`, `of-block--modifier`, `of-block__element`
- All CSS custom properties use the `--of-` prefix
- Use `light-dark()` for theme-aware values — never use a class-toggle dark mode approach
- Sizes and spacing come from `--of-space-*` and `--of-radius-*` tokens, not hardcoded values

## Anti-patterns

- Don't add a CSS class without a corresponding TypeScript class helper in `packages/keel/`
- Don't edit `tokens/` directly — always edit `colors_and_type.css` and regenerate
- Don't introduce React or framework-specific imports into `packages/keel/` — it must stay framework-agnostic
- Don't add runtime dependencies to `packages/keel/` — it is a CSS + TypeScript utility library only
- Don't hard-code color hex values in component CSS — use `--of-*` token variables

## Installing @ops-forward/keel in another app

The package is published to npm. Consuming apps run:

```bash
npm install @ops-forward/keel
```

Then in the app entry:

```ts
import '@ops-forward/keel/styles.css';
import { buttonClass, badgeClass } from '@ops-forward/keel';
```

Full install docs: `packages/keel/README.md` and https://keel.coscient.workers.dev/llms.txt

## Publishing a new version

CI publish is not yet set up — publish manually until then:

```bash
# bump version in packages/keel/package.json first, then:
cd packages/keel && npm publish
# prepack runs automatically: typecheck → test → build → publish
```

Requires `npm login` with access to the `@ops-forward` npm scope.

## Commands

```bash
npm install                                             # install all workspace dependencies
npm run tokens:build                                    # regenerate tokens from colors_and_type.css
npm run tokens:check                                    # verify tokens are in sync
npm run keel:build                                      # build @ops-forward/keel
npm run keel:typecheck                                  # typecheck package
npm run keel:test                                       # run package tests
npm run dev -w @ops-forward/docs                        # local docs dev server
npm run build -w @ops-forward/docs                      # build docs
npx wrangler deploy --cwd docs                          # deploy docs to Cloudflare Workers
```

## Workspace layout

```
keel/
├── colors_and_type.css        # token source of truth
├── tokens/                    # generated token artifacts
├── packages/
│   └── keel/                  # @ops-forward/keel npm package
│       └── src/
│           ├── ai/            # machine-readable metadata for AI/agents
│           ├── components/    # TypeScript class helpers
│           ├── index.ts
│           ├── styles.css
│           ├── types.ts
│           └── utils.ts
├── docs/                      # @ops-forward/docs Astro site
│   └── src/pages/
│       ├── ai/                # /ai/component-registry.json, /ai/tokens.json
│       ├── components/        # component doc pages
│       └── llms.txt.ts        # /llms.txt endpoint
├── assets/                    # brand assets
└── scripts/                   # repo-level scripts
```

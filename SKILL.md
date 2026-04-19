---
name: ops-forward-design
description: Use this skill to implement and document production-ready Keel design system work for Ops Forward, including component styling, docs updates, and Cloudflare Worker deployment.
user-invocable: true
---

Start by reading `README.md` to align with Keel foundations, package structure, and deployment flow.

Primary working areas:

- `packages/keel/src/styles.css` for tokens and component styles.
- `packages/keel/src/components/*` for class helpers.
- `docs/src/pages/**/*.mdx` for component and usage documentation.
- `docs/src/styles/global.css` for docs-side rendering parity.
- `docs/wrangler.toml` and `docs/worker.js` for docs deployment config.

When implementing changes:

1. Keep package styles and docs styles in sync so previews match real usage.
2. Preserve accessibility and contrast (especially for brand gradients and button states).
3. Use Lucide defaults unless explicitly overridden: `1.75` stroke, `20px` default size.
4. Prefer static SVG previews in docs MDX when script execution causes parsing/runtime issues.
5. Build docs before deployment: `npm run build -w @ops-forward/docs`.
6. Deploy docs worker from `docs`: `npx wrangler deploy`.

Ready-to-use expectation:

- The result should be immediately usable in production docs and package consumers.
- Include concise usage examples for any new variant or state.
- Keep naming consistent with existing `of-*` class conventions.

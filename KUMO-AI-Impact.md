# Kumo AI / Agent Findings for Keel

Date: 2026-06-17
Repository: `/Users/z/Repo/Keel`

## Summary

Kumo’s recent updates are primarily focused on AI-friendly documentation and metadata generation, not on runtime component behavior.

The key Kumo change found was the addition of an `llms.txt` documentation route and continued investment in AI/agent-oriented docs for:

- `@cloudflare/kumo/ai/component-registry.json`
- `@cloudflare/kumo/ai/schemas`
- `@cloudflare/kumo/catalog`
- `packages/kumo-docs-astro/src/pages/streaming.mdx`
- `packages/kumo-docs-astro/src/pages/registry.mdx`
- `packages/kumo-docs-astro/src/pages/llms.txt.ts`

## Findings

1. Kumo is shipping a machine-readable component registry and schema generation pipeline.
   - Source code and tooling exist in `packages/kumo/scripts/component-registry/`
   - Registry output is published as `@cloudflare/kumo/ai/component-registry.json`
   - Generated schemas are published as `@cloudflare/kumo/ai/schemas`

2. Kumo has a `Streaming UI` concept for AI-generated JSON-driven interfaces.
   - Docs in `packages/kumo-docs-astro/src/pages/streaming.mdx`
   - Core runtime lives in `packages/kumo/src/catalog/`
   - The model is a flat JSON UI tree, validated by generated Zod schemas

3. The most recent relevant commit was `853aa12 Add llms.txt route to Kumo docs (#571)`.
   - This commit created `packages/kumo-docs-astro/src/pages/llms.txt.ts`
   - It generates an LLM-friendly docs index using the component registry and docs page metadata

4. Keel currently has no direct code or docs references to Kumo’s AI/agent features.
   - No references found for `@cloudflare/kumo`, `component-registry`, `catalog`, `llms.txt`, `streaming`, `registry`, or AI-specific tooling in the current Keel repo

## Impact on Keel

- **Direct code impact:** None detected.
- **Potential architectural influence:** Moderate.
  - If Keel evolves beyond CSS utilities into a richer design system or component library, Kumo’s registry/schema approach is a valuable pattern.
- **Docs / AI tooling impact:** High.
  - Keel could adopt an `llms.txt` style route and AI-readable metadata if it wants better support for generative tooling or agent consumption.

## Suggestions

1. Keep Keel unchanged for now, as requested.
2. If you want to make Keel AI-friendly in the future, consider:
   - generating structured metadata for tokens and utility classes
   - creating an AI/LLM-friendly docs index like `llms.txt`
   - documenting a schema-driven catalog if Keel adds component-like abstractions
3. Use Kumo’s current docs as a reference architecture, not a dependency.
   - Kumo’s current update is mostly documentation and metadata generation, which is a good pattern to mirror.

## Notes

- Kumo is on `main` and the repository is otherwise focused on component library, docs, Figma integration, and screenshot worker tooling.
- The Kumo update in question is not a direct dependency or integration point for the present Keel repo.

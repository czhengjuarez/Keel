# @ops-forward/keel — Package Agent Guide

This file describes the internals of the `@ops-forward/keel` package for AI agents working directly in `packages/keel/`.

## What this package is

`@ops-forward/keel` is a framework-agnostic design system package. It ships:
- `styles.css` — all component and token CSS
- TypeScript class helpers (e.g. `buttonClass()`, `badgeClass()`) for generating BEM class strings
- Machine-readable AI metadata in `src/ai/`

It has **no runtime dependencies** and **no React components**. The class helpers are pure functions that return strings.

## File map

| File | Purpose |
|---|---|
| `src/index.ts` | Public API — re-exports all helpers and types |
| `src/types.ts` | Shared type aliases (`KeelSize`, `KeelButtonVariant`, etc.) |
| `src/utils.ts` | `cx()` helper for conditional class string assembly |
| `src/styles.css` | All component CSS (BEM classes, token variables) |
| `src/components/Button.tsx` | `buttonClass()` helper |
| `src/components/Badge.tsx` | `badgeClass()` helper |
| `src/components/Card.tsx` | `cardClass()` helper |
| `src/components/InputField.tsx` | `inputClass()`, `fieldClass()`, `labelClass()`, `hintClass()`, `errorClass()`, `fieldA11yIds()` |
| `src/components/SelectField.tsx` | `selectClass()` helper |
| `src/components/TextareaField.tsx` | `textareaClass()` helper |
| `src/components/Switch.tsx` | `switchRootClass()`, `switchInputClass()`, `switchTrackClass()`, `switchThumbClass()`, `switchLabelClass()`, `switchId()` |
| `src/ai/component-registry.json` | Machine-readable component metadata |
| `src/ai/USAGE.md` | Dense LLM quick-reference (also at /llms.txt) |

## Class helper pattern

Every component has a `{name}Class()` function that returns a BEM class string:

```ts
import { cx } from '../utils';

export function buttonClass({ variant = 'primary', size = 'md', disabled = false, className }: ButtonOptions = {}) {
  return cx('of-btn', `of-btn--${variant}`, `of-btn--${size}`, disabled && 'of-btn--disabled', className);
}
```

Rules:
- Base class always first: `of-{component}`
- Modifiers follow: `of-{component}--{modifier}`
- Always accept an optional `className` passthrough
- Use `cx()` from `../utils` — it filters falsy values

## Adding a new component helper

1. Create `src/components/{Name}.tsx`
2. Define an `interface {Name}Options` with all variant/modifier props
3. Export a `{name}Class()` function using the pattern above
4. Re-export from `src/index.ts`
5. Add an entry to `src/ai/component-registry.json`

## Consuming this package

```ts
import '@ops-forward/keel/styles.css';
import { buttonClass, badgeClass } from '@ops-forward/keel';

// AI/agent metadata
import registry from '@ops-forward/keel/ai/component-registry.json';
```

## Build

```bash
npm run build      # tsup — outputs to dist/
npm run typecheck  # tsc --noEmit
npm run test       # vitest run
npm run prepack    # runs typecheck + test + build (runs before npm publish)
```

## Invariants

- `src/styles.css` and the TypeScript helpers must stay in sync — every CSS class must have a corresponding helper
- No framework imports (no `react`, `vue`, etc.) in any source file
- All exported class names must use the `of-` prefix
- All token references in CSS must use `var(--of-*)` — no hardcoded hex values in component CSS

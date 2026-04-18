# @ops-forward/keel

Minimal installable Keel primitives package.

## Includes

- Framework-agnostic class helpers for core primitives
- Stylesheet for component classes (`./styles.css`)
- Token-compatible class names matching the docs system

## Usage

```ts
import { buttonClass, badgeClass } from '@ops-forward/keel';
import '@ops-forward/keel/styles.css';
```

Then apply generated classes in your framework templates.

## Quality and build

- `npm run keel:typecheck` validates package typing.
- `npm run keel:test` runs unit tests for class helpers.
- `npm run keel:build` emits publishable output to `packages/keel/dist`.

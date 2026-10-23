# @ops-forward/keel — LLM Quick Reference

> Full docs: https://keel.coscient.workers.dev/llms.txt
> Component registry: https://keel.coscient.workers.dev/ai/component-registry.json
> Design tokens: https://keel.coscient.workers.dev/ai/tokens.json

## CLI (offline, version-matched)

```bash
npx keel ls                 # list components
npx keel doc button         # classes, options, examples (--json for machine output)
npx keel check src/**/*.html  # flag invented of-* classes, with suggestions
```

## Install

```bash
npm install @ops-forward/keel
```

## Setup

```ts
import '@ops-forward/keel/styles.css';
import { buttonClass, badgeClass, cardClass, inputClass, fieldClass, tabsClass, dialogClass } from '@ops-forward/keel';
// every component has a {name}Class() helper — see the table below or run `npx keel ls`
```

## Component class table

<!-- registry:table:start -->
| Component | Helper | Base class | Pattern |
|-----------|--------|-----------|---------|
| Button | `buttonClass()` | `of-btn` | `of-btn of-btn--{variant} of-btn--{size} [of-btn--disabled]` |
| Badge | `badgeClass()` | `of-badge` | `of-badge of-badge--{variant}` |
| Card | `cardClass()` | `of-card` | `of-card [of-card--brand-elevated]` |
| Input | `inputClass()` `fieldClass()` `labelClass()` `hintClass()` `errorClass()` `fieldA11yIds()` | `of-input` | `of-input` |
| Select | `selectClass()` | `of-select` | `of-select` |
| Textarea | `textareaClass()` | `of-textarea` | `of-textarea` |
| Switch | `switchRootClass()` | `of-switch` | `of-switch / of-switch__input / of-switch__track / of-switch__thumb / of-switch__label` |
| Check | `checkClass()` | `of-check` | `of-check / of-check__input / of-check__label` |
| Radio | `radioClass()` | `of-radio` | `of-radio / of-radio__input / of-radio__label` |
| Banner | `bannerClass()` | `of-banner` | `of-banner of-banner--{variant}` |
| Breadcrumbs | `breadcrumbsClass()` | `of-breadcrumbs` | `of-breadcrumbs` |
| Link | `linkClass()` | `of-link` | `of-link` |
| Empty State | `emptyClass()` | `of-empty` | `of-empty / of-empty__title / of-empty__body` |
| Dialog | `dialogClass()` | `of-dialog` | `of-dialog / of-dialog__title / of-dialog__desc / of-dialog__actions` |
| Toast | `toastClass()` | `of-toast` | `of-toast of-toast--{variant}` |
| Popover | `popoverClass()` | `of-popover` | `of-popover / of-popover__title` |
| Tooltip | `tooltipClass()` `tooltipAnchorClass()` | `of-tooltip` | `of-tooltip-anchor > of-tooltip` |
| Loader | `loaderClass()` | `of-loader` | `of-loader of-loader--{size}` |
| Skeleton | `skeletonClass()` | `of-skeleton` | `of-skeleton` |
| Table | `tableClass()` | `of-table` | `of-table` |
| Pagination | `paginationClass()` | `of-pagination` | `of-pagination` |
| Tabs | `tabsClass()` `tabClass()` `tabPanelsClass()` `tabPanelClass()` | `of-tabs` | `of-tabs of-tabs--{variant}; of-tab [of-tab--active]; of-tab-panel [of-tab-panel--active]` |
<!-- registry:table:end -->

## Common patterns

### Button

```html
<button class="of-btn of-btn--primary of-btn--md">Book a call</button>
<button class="of-btn of-btn--secondary of-btn--md">Learn more</button>
<button class="of-btn of-btn--ghost of-btn--md">Cancel</button>
<button class="of-btn of-btn--danger of-btn--md">Delete</button>
<button class="of-btn of-btn--primary of-btn--md of-btn--disabled" disabled>Unavailable</button>
```

### Badge

```html
<span class="of-badge of-badge--green">Active</span>
<span class="of-badge of-badge--amber">Pending</span>
<span class="of-badge of-badge--red">Failed</span>
<span class="of-badge of-badge--default">Draft</span>
```

### Card — standard

```html
<article class="of-card">
  <h3>Title</h3>
  <p>Content goes here.</p>
</article>
```

### Card — brand elevated (hero moment)

```html
<article class="of-card of-card--brand-elevated">
  <p class="of-card__kicker">Featured</p>
  <h3>Ops Forward</h3>
  <div class="of-card__rule"></div>
  <p>White type on brand gradient for elevated moments.</p>
</article>
```

### Input field (accessible)

```html
<div class="of-field">
  <label class="of-label" for="email">Email address</label>
  <input class="of-input" id="email" type="email" />
</div>
```

### Input field with error

```html
<div class="of-field of-field--error">
  <label class="of-label" for="name">Full name</label>
  <input class="of-input" id="name" aria-describedby="name-error" />
  <p class="of-field__error" id="name-error">Name is required.</p>
</div>
```

### Switch toggle

```html
<label class="of-switch">
  <input class="of-switch__input" type="checkbox" role="switch" />
  <span class="of-switch__track">
    <span class="of-switch__thumb"></span>
  </span>
  <span class="of-switch__label">Enable notifications</span>
</label>
```

## Design tokens (key values)

### Brand

| Token | Value |
|-------|-------|
| `--of-bg-brand` | `var(--of-magenta-600)` — brand button background |
| `--of-fg-brand` | magenta 600 (light) / magenta 300 (dark) |
| `--of-gradient-brand` | `linear-gradient(135deg, #80074D 0%, #B01273 45%, #FB41AA 100%)` |
| `--of-gradient-brand-soft` | `linear-gradient(135deg, #FFD9EC 0%, #FA96CE 100%)` |

### Semantic color

| Token | Use |
|-------|-----|
| `--of-bg-base` | page background |
| `--of-bg-elevated` | card, popover surfaces |
| `--of-bg-recessed` | input backgrounds |
| `--of-fg-default` | primary text |
| `--of-fg-muted` | secondary text |
| `--of-fg-subtle` | placeholder, disabled text |
| `--of-border-line` | default border |
| `--of-border-strong` | emphasized border |
| `--of-ring` | focus ring (brand, 50% opacity) |

### Status tints

`--of-bg-success-tint` / `--of-fg-success` / `--of-success-500`
`--of-bg-warning-tint` / `--of-fg-warning` / `--of-warning-500`
`--of-bg-danger-tint` / `--of-fg-danger` / `--of-danger-500`
`--of-bg-info-tint` / `--of-fg-info` / `--of-info-500`

### Spacing

`--of-space-1: 4px` · `--of-space-2: 8px` · `--of-space-3: 12px` · `--of-space-4: 16px`
`--of-space-5: 20px` · `--of-space-6: 24px` · `--of-space-8: 32px` · `--of-space-10: 40px`
`--of-space-12: 48px` · `--of-space-16: 64px` · `--of-space-20: 80px`

### Radius

`--of-radius-xs: 4px` · `--of-radius-sm: 6px` · `--of-radius-md: 10px`
`--of-radius-lg: 14px` · `--of-radius-xl: 20px` · `--of-radius-pill: 999px`

### Typography

| Token | Value |
|-------|-------|
| `--of-font-display` | Space Grotesk, Inter, system-ui |
| `--of-font-sans` | Inter, system-ui |
| `--of-font-mono` | JetBrains Mono, monospace |
| `--of-text-xs … --of-text-5xl` | 0.75rem → 4rem |

### Motion

`--of-dur-fast: 120ms` · `--of-dur-base: 200ms` · `--of-dur-slow: 320ms`
`--of-ease-out` · `--of-ease-in-out` · `--of-ease-spring`

## Dark mode

All semantic tokens use CSS `light-dark()` automatically. No class toggling. Add `color-scheme: light dark` to `:root` and the browser handles the rest.

## Icons

Use Lucide. Defaults: `stroke-width: 1.75`, `size: 20px`.

## TypeScript usage

```ts
import { buttonClass } from '@ops-forward/keel';

const cls = buttonClass({ variant: 'primary', size: 'md', disabled: false });
// → "of-btn of-btn--primary of-btn--md"
```

## Machine-readable metadata

```ts
import registry from '@ops-forward/keel/ai/component-registry.json';
// registry.components → array of all components with class names, options, and examples
```

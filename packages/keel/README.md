# @ops-forward/keel

Framework-agnostic class helpers and CSS for the [Ops Forward](https://keel.coscient.workers.dev) design system.

## Install

```bash
npm install @ops-forward/keel
```

## Setup

Import the stylesheet once in your app entry (works with React, Vue, Svelte, plain HTML — any framework):

```ts
import '@ops-forward/keel/styles.css';
```

Then import class helpers wherever you need them:

```ts
import { buttonClass, badgeClass, cardClass } from '@ops-forward/keel';
```

## Usage

### Button

```ts
import { buttonClass } from '@ops-forward/keel';

// variants: primary | secondary | ghost | tint | danger
// sizes:    sm | md | lg
const cls = buttonClass({ variant: 'primary', size: 'md' });
// → "of-btn of-btn--primary of-btn--md"
```

```html
<button class="of-btn of-btn--primary of-btn--md">Book a call</button>
<button class="of-btn of-btn--secondary of-btn--md">Learn more</button>
<button class="of-btn of-btn--ghost of-btn--md">Cancel</button>
<button class="of-btn of-btn--danger of-btn--md of-btn--disabled" disabled>Delete</button>
```

### Badge

```html
<!-- variants: green | amber | red | blue | purple | default -->
<span class="of-badge of-badge--green">Active</span>
<span class="of-badge of-badge--amber">Pending</span>
<span class="of-badge of-badge--red">Failed</span>
```

### Card

```html
<!-- Standard -->
<article class="of-card">
  <h3>Title</h3>
  <p>Content</p>
</article>

<!-- Brand elevated — white text on brand gradient -->
<article class="of-card of-card--brand-elevated">
  <p class="of-card__kicker">Featured</p>
  <h3>Ops Forward</h3>
  <div class="of-card__rule"></div>
  <p>Elevated moment.</p>
</article>
```

### Input field (accessible)

```html
<div class="of-field">
  <label class="of-label" for="email">Email</label>
  <input class="of-input" id="email" type="email" />
</div>

<!-- With error -->
<div class="of-field of-field--error">
  <label class="of-label" for="name">Name</label>
  <input class="of-input" id="name" aria-describedby="name-error" />
  <p class="of-field__error" id="name-error">Name is required.</p>
</div>
```

### Switch

```html
<label class="of-switch">
  <input class="of-switch__input" type="checkbox" role="switch" />
  <span class="of-switch__track">
    <span class="of-switch__thumb"></span>
  </span>
  <span class="of-switch__label">Enable notifications</span>
</label>
```

## Design tokens

All tokens are CSS custom properties on `:root` using the `--of-` prefix. They use `light-dark()` for automatic dark mode — no class toggling needed.

```css
/* Brand */
--of-bg-brand          /* brand button background */
--of-fg-brand          /* brand text / icon color */
--of-gradient-brand    /* hero gradient */

/* Surfaces */
--of-bg-base           /* page background */
--of-bg-elevated       /* card / popover */
--of-bg-recessed       /* input background */

/* Text */
--of-fg-default        /* primary text */
--of-fg-muted          /* secondary text */
--of-fg-subtle         /* placeholder / disabled */

/* Spacing: --of-space-1 (4px) → --of-space-20 (80px) */
/* Radius:  --of-radius-xs (4px) → --of-radius-pill (999px) */
```

Full token reference: [keel.coscient.workers.dev/design-tokens](https://keel.coscient.workers.dev/design-tokens)

## Dark mode

Add `color-scheme: light dark` to your `:root` — Keel handles the rest via `light-dark()`.

```css
:root {
  color-scheme: light dark;
}
```

## Icons

Keel uses [Lucide](https://lucide.dev). Defaults: `stroke-width: 1.75`, `size: 20px`.

## AI / agent metadata

```ts
import registry from '@ops-forward/keel/ai/component-registry.json';
// All components, class names, variants, and usage examples
```

Or fetch directly:
- Component registry: `https://keel.coscient.workers.dev/ai/component-registry.json`
- Design tokens: `https://keel.coscient.workers.dev/ai/tokens.json`
- LLM quick-reference: `https://keel.coscient.workers.dev/llms.txt`

## Docs

Full documentation: [keel.coscient.workers.dev](https://keel.coscient.workers.dev)

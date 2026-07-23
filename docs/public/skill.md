# Keel Design Skill

> Install: `npx skills add czhengjuarez/Keel@keel-design`
> Docs: https://keel.coscient.workers.dev
> Package: `@ops-forward/keel`
> Component registry: https://keel.coscient.workers.dev/ai/component-registry.json
> Full reference: https://keel.coscient.workers.dev/skill.md

Keel is the Ops Forward design system. It ships CSS custom property tokens and BEM class helpers. All components use the `of-` prefix. Import once: `import '@ops-forward/keel/styles.css'`.

---

## Rules

### use-semantic-color-tokens

Use semantic tokens (`--of-fg-*`, `--of-bg-*`, `--of-border-*`) for all colors in component and layout CSS. Never reference primitive palette tokens (`--of-magenta-*`, `--of-gray-*`) directly in component styles.

**Good**
```css
.my-card {
  background: var(--of-bg-elevated);
  color: var(--of-fg-default);
  border: 1px solid var(--of-border-line);
}
```

**Avoid**
```css
.my-card {
  background: var(--of-gray-0);
  color: var(--of-gray-900);
  border: 1px solid var(--of-gray-200);
}
```

---

### use-spacing-tokens

All margin, padding, and gap values must come from `--of-space-*` tokens. Never hardcode pixel values for spacing.

**Good**
```css
.my-layout {
  padding: var(--of-space-6);
  gap: var(--of-space-4);
}
```

**Avoid**
```css
.my-layout {
  padding: 24px;
  gap: 16px;
}
```

---

### use-radius-tokens

All `border-radius` values must use `--of-radius-*` tokens. The Keel scale is intentionally tight and sharp — do not inflate radii.

| Token | Value | Use |
|---|---|---|
| `--of-radius-xs` | 0px | square elements |
| `--of-radius-sm` | 2px | subtle rounding |
| `--of-radius-md` | 3px | inputs, badges |
| `--of-radius-lg` | 5px | cards, panels |
| `--of-radius-xl` | 7px | modals, drawers |
| `--of-radius-2xl` | 10px | large surfaces |
| `--of-radius-pill` | 999px | tags, pill buttons |

**Good**
```css
.my-panel {
  border-radius: var(--of-radius-lg);
}
```

**Avoid**
```css
.my-panel {
  border-radius: 12px;
}
```

---

### dark-mode-via-color-scheme

Keel uses CSS `light-dark()` for automatic dark mode. Add `color-scheme: light dark` to `:root`. Never toggle a `.dark` class or duplicate styles in a media query — all semantic tokens adapt automatically.

**Good**
```css
:root {
  color-scheme: light dark;
}
```

**Avoid**
```css
.dark .my-card {
  background: #1a1a1a;
  color: #ffffff;
}
```

---

### one-primary-button-per-view

Use `of-btn--primary` for the single most important action on the page. Use `secondary`, `ghost`, or `tint` for everything else. Multiple primary buttons signal an unresolved design decision.

**Good**
```html
<button class="of-btn of-btn--primary of-btn--md">Book a call</button>
<button class="of-btn of-btn--ghost of-btn--md">Cancel</button>
```

**Avoid**
```html
<button class="of-btn of-btn--primary of-btn--md">Save</button>
<button class="of-btn of-btn--primary of-btn--md">Publish</button>
```

---

### button-variant-intent

Match button variant to intent. `danger` is for destructive actions only — not for emphasis.

| Variant | Use |
|---|---|
| `primary` | The one thing you want the user to do |
| `secondary` | Secondary actions, alternatives |
| `ghost` | Dismiss, cancel, low-emphasis |
| `tint` | Collaborative or additive actions (e.g. Invite) |
| `danger` | Destructive only (delete, remove, revoke) |

**Good**
```html
<button class="of-btn of-btn--danger of-btn--md">Delete account</button>
```

**Avoid**
```html
<!-- danger used for emphasis, not destruction -->
<button class="of-btn of-btn--danger of-btn--md">Get started</button>
```

---

### accessible-form-fields

Always pair `of-input` with `of-field`, `of-label`, and an `id`/`for` connection. Use `of-field--error` and `of-field__error` for validation states. Use `fieldA11yIds()` to generate consistent `aria-describedby` values.

**Good**
```html
<div class="of-field">
  <label class="of-label" for="email">Email address</label>
  <input class="of-input" id="email" type="email" />
</div>

<div class="of-field of-field--error">
  <label class="of-label" for="name">Full name</label>
  <input class="of-input" id="name" aria-describedby="name-error" />
  <p class="of-field__error" id="name-error">Name is required.</p>
</div>
```

**Avoid**
```html
<!-- no label association, no error wiring -->
<input class="of-input" placeholder="Email" />
<span style="color:red">Required</span>
```

---

### no-custom-class-names

Never invent new `of-` prefixed class names. Use only the classes defined in `@ops-forward/keel/styles.css`. For layout and custom styles, use your own unprefixed class names alongside Keel classes.

**Good**
```html
<div class="dashboard-header">
  <button class="of-btn of-btn--primary of-btn--md">New report</button>
</div>
```

**Avoid**
```html
<!-- of-dashboard-header doesn't exist in Keel -->
<div class="of-dashboard-header">
  <button class="of-btn of-btn--primary of-btn--md">New report</button>
</div>
```

---

### use-typography-tokens

Use `--of-font-*`, `--of-text-*`, and `--of-leading-*` tokens for all type styles. Space Grotesk (`--of-font-display`) is for headings; Inter (`--of-font-sans`) is for body text.

**Good**
```css
.my-heading {
  font-family: var(--of-font-display);
  font-size: var(--of-text-2xl);
  line-height: var(--of-leading-tight);
}
```

**Avoid**
```css
.my-heading {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 28px;
  line-height: 1.2;
}
```

---

### use-motion-tokens

Use `--of-dur-*` and `--of-ease-*` tokens for all transitions and animations.

**Good**
```css
.my-button {
  transition: background var(--of-dur-fast) var(--of-ease-out);
}
```

**Avoid**
```css
.my-button {
  transition: background 100ms ease;
}
```

---

### badge-sparsity

Badges only signal something when they are rare. Do not use badges as decoration or to label every item in a list.

**Good**
```html
<!-- one badge in a list of 20 items -->
<span class="of-badge of-badge--red">Overdue</span>
```

**Avoid**
```html
<!-- every item badged — badge loses meaning -->
<span class="of-badge of-badge--green">Active</span>
<span class="of-badge of-badge--green">Active</span>
<span class="of-badge of-badge--green">Active</span>
```

---

### card-brand-elevated-sparingly

`of-card--brand-elevated` renders white text on the brand gradient. Use it for one featured or hero moment per page — not as a general card style.

**Good**
```html
<!-- one elevated card as a hero feature -->
<article class="of-card of-card--brand-elevated">
  <p class="of-card__kicker">Featured</p>
  <h3>Ops Forward</h3>
</article>
```

**Avoid**
```html
<!-- multiple elevated cards dilute the impact -->
<article class="of-card of-card--brand-elevated">...</article>
<article class="of-card of-card--brand-elevated">...</article>
<article class="of-card of-card--brand-elevated">...</article>
```

---

### icons-lucide-defaults

Use Lucide icons. Default to `stroke-width="1.75"` and `width="20" height="20"`. Do not mix icon libraries.

**Good**
```html
<svg width="20" height="20" stroke-width="1.75" ...><!-- lucide icon --></svg>
```

**Avoid**
```html
<!-- wrong stroke, wrong library -->
<svg width="24" height="24" stroke-width="2" ...><!-- heroicon --></svg>
```

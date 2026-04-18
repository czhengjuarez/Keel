# Ops Forward — Design System

A small, opinionated design system for **Ops Forward**, a studio practicing design, operations, consulting, and coaching — four sides of the same practice.

The system is inspired by [Kumo](https://kumo-ui.com) (Cloudflare's component library) in its structural approach: semantic tokens, `light-dark()`-driven theming, Base UI-style primitives. Visual identity is our own — warm, magenta-forward, plain-spoken.

## Sources
- **Inspiration**: Kumo UI — https://kumo-ui.com · repo: https://github.com/cloudflare/kumo
- **Brand logo**: provided by the user (see `assets/logo-full.svg`)
- **Palette**: provided by the user — primary `#80074D`, accent `#F53FA5`, tint `#FA96CE`

## Index
- `colors_and_type.css` — all tokens: colors, type, radii, shadows, spacing, motion
- `SKILL.md` — Agent Skills manifest for using this system in Claude Code
- `assets/` — `logo-full.svg`, `mark.svg`, `wordmark.svg`
- `preview/` — ~20 design-system cards (tokens, type, components, brand)
- `ui_kits/dashboard/` — interactive product dashboard recreation (React/JSX)
- `ui_kits/docs/` — Kumo-style component documentation site (React/JSX)

---

## Content Fundamentals

**Voice: warm, specific, plain.**

- **Person**: use **we** for the studio and **you** for the reader.
- **Casing**: sentence case everywhere — headings, buttons, labels.
- **Tone**: declarative, not exclamatory. End sentences with periods.
- **No emoji.** Anywhere.
- **Numbers are specific** — "two weeks", "6 months", "weekly 1:1".
- **Button copy is action + object**: "Book a call", "Read the notes", "Send to client".

---

## Visual Foundations

### Colors
- **Brand primary**: `#80074D` (magenta 600)
- **Brand accent**: `#F53FA5` (magenta 300)
- **Brand tint**: `#FA96CE` (magenta 200)
- **Brand gradient**: `linear-gradient(135deg, #80074D, #B01273, #FB41AA)`
- **Semantic tokens**: `--of-bg-base`, `--of-bg-elevated`, `--of-bg-recessed`, `--of-bg-sunken`

### Type
- **Display**: Space Grotesk (600) — headings, hero moments
- **Body**: Inter (400/500/600) — paragraphs, UI, labels. 15px default
- **Mono**: JetBrains Mono — code, metadata, timestamps

### Spacing & radii
- **Base unit**: 4px. Scale 4/8/12/16/20/24/32/40/48/64/80.
- **Radii**: `xs 4` · `sm 6` · `md 10` · `lg 14` · `xl 20` · `2xl 28` · `pill`

### Iconography
- **Primary**: [Lucide](https://lucide.dev) at CDN, stroke weight 1.75, default 20px

### Layout rules
- Dashboards: 260px sidebar, sticky topbar, content max-width 1280px
- Docs: 240px nav / centered 760px content / 220px TOC

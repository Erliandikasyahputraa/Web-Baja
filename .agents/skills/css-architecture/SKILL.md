---
name: css-architecture
description: "Guidelines for organizing, writing, and maintaining clean Vanilla CSS stylesheets for responsive landing pages."
category: development
risk: safe
source: self
source_type: self
date_added: "2026-06-29"
author: antigravity
tags: [css, styling, frontend, responsive]
tools: [claude, cursor, gemini]
---

# CSS Architecture for Vanilla CSS Projects

## Overview

This skill outlines guidelines for maintaining clean, modular, scalable, and responsive stylesheets using Vanilla CSS (CSS3) without preprocessors or utility frameworks like Tailwind.

## When to Use This Skill

- Use when editing, refactoring, or optimizing Vanilla CSS files (e.g., `baja.css`).
- Use when designing responsive layouts, grid/flexbox grids, or media queries.
- Use when adding CSS Custom Properties (Variables) for theming or global design values.

## How It Works

### Section Order & Structure
Keep stylesheets organized in the following top-down hierarchy:
1. **CSS Variables & Custom Properties** (Theming, colors, fonts, spacing).
2. **Reset / Base Styles** (Box-sizing, default margins, body resets).
3. **Typography & Core Utilities** (Headings, common layout utilities, buttons).
4. **Layout Components** (Navbar, Header, Footer).
5. **Page Sections / Core Modules** (Hero, Features, Contact form, event items).
6. **Interactive Elements & Micro-animations** (Hover states, transition specifications).
7. **Media Queries / Responsiveness** (Mobile-first or desktop-down break groups).

### Naming Conventions
Use a simple BEM-lite naming system to avoid style collision:
- **Block:** `.card`, `.navbar`, `.footer`
- **Element:** `.card__title`, `.navbar__link`
- **Modifier:** `.card--featured`, `.navbar__link--active`

## Examples

### CSS Custom Variables Setup
```css
:root {
  /* Colors */
  --primary-color: #d4af37; /* gold */
  --bg-dark: #121212;
  --text-light: #ffffff;
  --text-muted: #a0a0a0;

  /* Transitions */
  --transition-smooth: all 0.3s ease;
}
```

### Clean Responsive Layout with Flex/Grid
```css
.event-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1.5rem 0;
}
```

## Best Practices

- ✅ Use CSS Custom Properties (Variables) for color palettes and font styles to enable easy site-wide modifications.
- ✅ Always use `box-sizing: border-box` to simplify layout math.
- ✅ Combine media queries at the bottom of the stylesheet or keep them close to the component block for readability.
- ❌ Avoid hardcoding absolute pixel values for text sizing; use `rem` or `em` for better accessibility.
- ❌ Avoid using `!important` as a styling crutch; use specificity structure instead.

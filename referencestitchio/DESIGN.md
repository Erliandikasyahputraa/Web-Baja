---
name: Championship Prestige
colors:
  surface: '#151515'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#d0c5af'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#99907c'
  outline-variant: '#4d4635'
  surface-tint: '#e9c349'
  primary: '#f2ca50'
  on-primary: '#3c2f00'
  primary-container: '#d4af37'
  on-primary-container: '#554300'
  inverse-primary: '#735c00'
  secondary: '#f0c056'
  on-secondary: '#402d00'
  secondary-container: '#956e00'
  on-secondary-container: '#fffbff'
  tertiary: '#bfcdff'
  on-tertiary: '#082b72'
  tertiary-container: '#97b0ff'
  on-tertiary-container: '#254188'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e9c349'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#ffdea0'
  secondary-fixed-dim: '#f0c056'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5c4300'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#27438a'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  surface-alt: '#1D1D1D'
  text-primary: '#FFFFFF'
  text-muted: '#8D8D8D'
typography:
  headline-hero:
    fontFamily: ebGaramond
    fontSize: 95px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-hero-mobile:
    fontFamily: ebGaramond
    fontSize: 50px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: ebGaramond
    fontSize: 42px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: ebGaramond
    fontSize: 30px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  title-md:
    fontFamily: plusJakartaSans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: plusJakartaSans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.7'
  body-sm:
    fontFamily: plusJakartaSans
    fontSize: 14px
    fontWeight: '300'
    lineHeight: '1.7'
  label-caps:
    fontFamily: plusJakartaSans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  xxl: 64px
  container-max: 1100px
  section-v: 100px
  section-h: 8%
  mobile-v: 60px
  mobile-h: 20px
---

# BAJA Event Organizer — Design Specification

This document serves as the single source of truth for the visual language, design system, and user experience patterns of the BAJA Event Organizer web platform. It outlines the design tokens, components, and principles necessary to build, maintain, and scale the BAJA digital experience.

---

## Product Vision

### About BAJA Event Organizer
BAJA is a premier, professional event organizer specializing in managing large-scale athletic championships, with a core focus on martial arts (Pencak Silat) at national and regional levels. The company handles end-to-end event execution, including registration management, tournament administration, digital bracket orchestration, matchmaking, and awards ceremonies.

### Brand Positioning
BAJA occupies a premium, authoritative, and trusted space in the sports management industry. It bridges the gap between athletic traditions (Pencak Silat) and modern, digital-first event execution. It stands for discipline, excellence, reliability, and championship-grade professionalism.

### User Experience Target
When visitors land on the BAJA website, they should immediately feel a sense of prestige, authority, and excitement. The interface must communicate that they are entering the portal of an elite sporting event, inspiring trust among athletic boards, government partners, and individual contestants.

---

## Brand Identity

* **Personality:** Authoritative, prestigious, energetic, disciplined, and modern.
* **Tone of Voice:** Professional, encouraging, and clear.
* **Visual Language:** Sleek, high-contrast, premium dark mode styling mixed with golden highlights.
* **Emotional Impression:** "Championship-grade." The visual layout evokes the excitement of walking into a spotlighted tournament arena.

---

## Design Principles

1. **High-Contrast Focus:** Bold visual hierarchy using pure dark backgrounds to make content, gallery showcases, and calls-to-action stand out with elite clarity.
2. **Generous Whitespace:** Give layout cards and information grids ample breathing room. Whitespace in the BAJA brand communicates prestige and prevents clutter.
3. **Robust Accessibility:** Visual elements must maintain strict WCAG contrast levels. Interactions must support keyboard focus patterns natively.
4. **Predictable Layout Rhythm:** Sections follow a logical visual flow, alternating light/dark boundaries or layout grids to keep the reader engaged.
5. **Mobile-First Responsiveness:** Because athletes and coaches access event details in real-time on-site, navigation and download mechanisms must work perfectly on small mobile screens.

---

## Color System

The color system relies on the core BAJA identity: a dark background baseline illuminated by gold elements.

| Token | HSL / Hex Value | Purpose | Usage Guide |
| :--- | :--- | :--- | :--- |
| **Primary (Gold)** | `hsl(47, 65%, 53%)` / `#D4AF37` | Core highlights, primary CTAs, active indicators. | Use sparingly for accent headers and interactive controls. |
| **Primary Hover** | `hsl(43, 75%, 38%)` / `#A87F18` | Button hovers, active link hover states. | Apply strictly to hover transformations. |
| **Background (Dark)** | `hsl(0, 0%, 4%)` / `#0A0A0A` | Page body background. | Serves as the main baseline backdrop. |
| **Surface (Card)** | `hsl(0, 0%, 8%)` / `#151515` | Content cards, modals, section inner boxes. | Lightened dark shade to separate cards from the body backdrop. |
| **Accent Text** | `hsl(0, 0%, 100%)` / `#FFFFFF` | Primary body text and headers. | High-readability white color. |
| **Muted Text** | `hsl(0, 0%, 55%)` / `#8D8D8D` | Secondary labels, descriptions, and timestamps. | Muted grey to establish typographic hierarchy. |
| **Focus Ring** | `#D4AF37` | Outline focus indicators. | 3px gold ring with an offset of 3px. |

---

## Typography

* **Font Pairing:** Cinzel (Headers) + Poppins (Body).
  * **Cinzel:** Serifs that represent heritage, prestige, and institutional authority.
  * **Poppins:** Geometric sans-serif that ensures clean, modern readability across screen sizes.
* **Font Scale & Typographic Hierarchy:**
  * **H1 (Hero Heading):** `clamp(50px, 8vw, 95px)` | Weight: Bold (700) | Line Height: 1.1 | Letter Spacing: -0.02em.
  * **H2 (Section Header):** `clamp(30px, 5vw, 42px)` | Weight: Bold (700) | Line Height: 1.2 | Letter Spacing: 0.05em.
  * **H3 (Card Title):** `clamp(20px, 2.5vw, 24px)` | Weight: Semi-Bold (600) | Line Height: 1.3.
  * **Body Text:** `16px` | Weight: Regular (400) / Light (300) | Line Height: 1.7 | Color: HSL(0, 0%, 100%) or HSL(0, 0%, 55%) for secondary.

---

## Layout System

* **Container Width:** `max-width: 1100px` (centered dynamically).
* **Section Padding:** `100px 8%` (decreased to `60px 20px` on mobile viewports).
* **Grid System:** CSS Grid using `auto-fit` and `minmax()` parameters for fluid responsiveness without excessive media queries.
* **Responsive Breakpoint:** `768px` (transitional tablet/mobile threshold).
* **Visual Spacing:** Base spacing grid of `8px` (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`) to guide padding, margin, and gap attributes consistently.

---

## Components

### 1. Navigation Bar
* **Desktop:** Fixed top bar with a translucent dark backdrop (`backdrop-filter: blur(10px)`). Text links are cleanly spaced.
* **Mobile:** Displays a 3-bar hamburger toggle. Tapping it opens a full-width overlay dropdown menu.
* **Interaction:** Nav links transition color smoothly on hover (`transition: color 0.3s ease`).

### 2. Buttons
* **Style:** Pill-shaped (border-radius: 50px), high-contrast.
* **Active State:** Gold background with black text.
* **Hover State:** Gold-dark background with white text. Supports a smooth `transform: translateY(-2px)` translation.

### 3. Cards
* **Style:** Rounded corners (`border-radius: 15px`), structured surface color (`#151515` or `#FFFFFF` depending on theme context).
* **Interaction:** Elevate slightly on hover via `transform: translateY(-10px)` and apply a subtle gold border accent.

### 4. Countdown Timer
* **Style:** Structured layout containing individual numeric boxes (`#1d1d1d`).
* **Interaction:** Gold numeric values animate or update cleanly in real-time.

### 5. Modals
* **Style:** Overlay block with dark backdrop mask. Content card features a gold border outline.
* **Accessibility:** Supports keyboard closing via escape key, close buttons must feature accessible focus outlines.

---

## Imagery

* **Photography Style:** High-action, high-contrast, professional action shots of Pencak Silat matches. Photos must capture movement, grit, and triumph.
* **Color Treatment:** Overlay gradients (semi-transparent black masking) are applied to background graphics to preserve text readability.
* **Hero Image:** Dark, textured landing page background showcasing an arena or action silhouette, illuminated with gold lighting.

---

## User Experience (UX)

* **Trust:** Evidenced by prominently displaying active mitra (BPJS, Brother, Awal Bros) logos.
* **Clarity:** Structured countdown boxes show the exact urgency of upcoming tournaments.
* **Engagement:** The interactive photo gallery keeps users interested, and a floating WhatsApp button provides direct, immediate communication.

---

## Motion & Transitions

* **Philosophy:** Micro-interactions should be functional, quick, and purposeful. Avoid excessive spinning or slow bounce effects.
* **Rhythm:** Standard transition speed is `0.3s` using an `ease` curve for hover translations, color shifts, and opacity fades.
* **Gallery Slideshow:** Slide fade animation runs at `0.8s` ease to provide a smooth, editorial showcase experience.

---

## Accessibility

* **Screen Readers:** Interactive elements feature descriptive labels.
* **Focus States:** Every button, text input, and link displays a highly visible focus ring outline (`:focus-visible`) when traversed via keyboard.
* **Contrasts:** All body text elements maintain a minimum contrast ratio of `4.5:1` against their backgrounds.

---

## SEO & Performance

* **Document Structure:** Pages must declare exactly one `<h1>` tag inside the header, followed by logical heading steps (`<h2>`, `<h3>`).
* **Performance Loading:** Lazy load media tags (`loading="lazy"`) for images below the initial fold. Ensure videos feature `preload="metadata"` settings to conserve mobile data payloads.
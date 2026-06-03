---
name: Obsidian Flow
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393f'
  surface-container-lowest: '#0c0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#282a2f'
  surface-container-highest: '#33353a'
  on-surface: '#e2e2e9'
  on-surface-variant: '#c9c4d6'
  inverse-surface: '#e2e2e9'
  inverse-on-surface: '#2e3036'
  outline: '#928e9f'
  outline-variant: '#474554'
  surface-tint: '#c7bfff'
  primary: '#c7bfff'
  on-primary: '#2a019e'
  primary-container: '#8e7fff'
  on-primary-container: '#24008c'
  inverse-primary: '#5a48cc'
  secondary: '#ffb783'
  on-secondary: '#4f2500'
  secondary-container: '#814101'
  on-secondary-container: '#ffb682'
  tertiary: '#45dccc'
  on-tertiary: '#003732'
  tertiary-container: '#00a295'
  on-tertiary-container: '#00302b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e4dfff'
  primary-fixed-dim: '#c7bfff'
  on-primary-fixed: '#170065'
  on-primary-fixed-variant: '#422cb3'
  secondary-fixed: '#ffdcc5'
  secondary-fixed-dim: '#ffb783'
  on-secondary-fixed: '#301400'
  on-secondary-fixed-variant: '#703700'
  tertiary-fixed: '#69f9e8'
  tertiary-fixed-dim: '#45dccc'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#111318'
  on-background: '#e2e2e9'
  surface-variant: '#33353a'
typography:
  display-lg:
    fontFamily: Syne
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: DM Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.7'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  grid_columns: '12'
  gutter: 24px
  margin_desktop: 64px
  margin_mobile: 24px
  bento_gap: 1.5rem
  container_max_width: 1440px
---

## Brand & Style

The design system is engineered for a high-end senior software engineer portfolio, projecting an image of technical mastery blended with avant-garde aesthetic sensibility. The brand personality is **sophisticated, technical, and atmospheric**. It targets engineering leaders and recruiters who value attention to detail, performance, and modern craftsmanship.

The visual style is **Dark Editorial Minimalism**. It leverages the depth of "Glassmorphism" through multi-layered translucent surfaces and heavy backdrop blurs, creating a sense of physical space within a digital environment. Subtle noise/film grain overlays are used to reduce banding and add a tactile, organic quality to the deep-space palette. The layout follows a "Bento" philosophy—modular, structured, yet fluid—organizing complex technical information into digestible, high-contrast visual blocks.

## Colors

The palette is anchored by a near-black blue-gray background, providing a high-contrast foundation for vibrant accents. 

- **Primary (Electric Violet):** Used for primary calls-to-action, active states, and glowing brand moments.
- **Secondary (Warm Amber):** Used sparingly for highlighting key metrics, special project statuses, or warning indicators.
- **Tertiary (Teal):** Used for success states, code tags, and secondary action highlights.
- **Gradients:** Utilize a "Mesh" style blending Electric Violet to Teal for background atmosphere and high-impact section headers.
- **Surface Strategy:** Cards use a semi-transparent base with backdrop-blur (minimum 20px) to maintain legibility while showcasing the depth of the layout.

## Typography

This design system uses a high-contrast typographic pairing to signal both creativity and precision. 

- **Display & Headlines:** 'Syne' provides a bold, wide, and expressive editorial feel. Use Extrabold for main hero sections and Bold for section headers.
- **Body Text:** 'DM Sans' ensures maximum legibility for long-form case studies and technical descriptions. Its low-contrast, geometric shapes complement the editorial look without competing with headlines.
- **Mono:** 'JetBrains Mono' is the technical backbone. It is used for all labels, tags, metadata, and code snippets, grounding the design in a developer-centric context.

## Layout & Spacing

The layout is based on a **Fluid Bento Grid**. Elements should be organized into modular cards that span multiple columns and rows, creating a mosaic of content.

- **Desktop:** 12-column grid with a 1440px max-width. Use 24px (1.5rem) as the standard gap between bento cards.
- **Tablet:** 8-column grid with reduced margins (40px).
- **Mobile:** 4-column grid with 24px margins. Bento cards typically stack vertically, but small metric cards can remain side-by-side (2-columns).
- **Rhythm:** Use a 4px baseline grid for all internal card padding and micro-spacing to ensure rigorous alignment.

## Elevation & Depth

Hierarchy is established through **translucency and backdrop filters** rather than traditional drop shadows.

1.  **Level 0 (Base):** The #0B0D12 background with a global 5% noise overlay.
2.  **Level 1 (Cards):** Surface/Card at 72% opacity. Apply a `backdrop-filter: blur(24px)` and a 1px hairline border in `border_hairline`.
3.  **Level 2 (Floating/Modals):** Surface Elevated (#1C2330). Apply a subtle Electric Violet glow (`box-shadow: 0 20px 40px rgba(124, 108, 240, 0.15)`).
4.  **Level 3 (Active Interactors):** Navigation and primary buttons use higher contrast and more intense blurs to appear as if they are floating closest to the user.

## Shapes

The shape language is defined by large, friendly radii for containers contrasted with sharp, precise internal elements.

- **Bento Cards:** Use a fixed `32px (2rem)` radius for all outer corners to create the distinct bento-box feel.
- **Buttons & Chips:** Use **Pill-shaped (Full radius)** to differentiate interactive elements from static content containers.
- **Form Inputs:** Use `12px (0.75rem)` radius for a modern, slightly softened technical look.
- **Hairline Borders:** All borders must be exactly `1px`. On high-density displays, use `0.5px` if possible for an ultra-premium "hairline" effect.

## Components

- **Floating Navigation:** A pill-shaped bar fixed at the bottom or top center. It must use `backdrop-filter: blur(32px)` and a subtle `primary_color` top-border highlight.
- **Bento Cards:** Each card should have internal padding of `32px`. Content within cards should be aligned to the top-left, with metrics or "call-out" tags in the top-right.
- **Buttons:** 
    - **Primary:** Full-pill shape, Electric Violet background, white text. On hover, apply a `20px` spread violet outer glow.
    - **Secondary:** Transparent with a 1px border.
- **Segmented Controls:** Used for project filtering. A pill-shaped container where the active state is a sliding "glass" pill that sits behind the label.
- **Timeline:** A vertical line in `Text Muted`. Active nodes are `Tertiary/Success` (Teal) with a `12px` radial outer glow to simulate a "live" signal.
- **Input Fields:** Deep surface color (#141820), 1px border, with `JetBrains Mono` for placeholder text to maintain the technical aesthetic.
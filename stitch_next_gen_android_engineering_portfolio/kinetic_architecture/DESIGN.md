---
name: Kinetic Architecture
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c7c4d8'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#918fa1'
  outline-variant: '#464555'
  surface-tint: '#c3c0ff'
  primary: '#c3c0ff'
  on-primary: '#1d00a5'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#4d44e3'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#bcc7de'
  on-tertiary: '#263143'
  tertiary-container: '#566175'
  on-tertiary-container: '#d1dcf4'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter-desktop: 24px
  margin-desktop: 80px
  gutter-mobile: 16px
  margin-mobile: 20px
  container-max: 1280px
---

## Brand & Style

This design system is tailored for a Senior Systems Architect and Android Engineer, emphasizing technical precision, structural integrity, and high-performance execution. The brand personality is authoritative yet lean, reflecting a "Deep Tech" aesthetic that prioritizes clarity and systemic logic over decorative flair.

The design style is **Modern Corporate with a Technical Edge**, leaning into minimalism with high-density information layouts. It utilizes a dark mode foundation to reduce eye strain during deep work while employing sharp typography and subtle glassmorphism to create a sense of multi-layered architectural depth. The goal is to evoke a feeling of "controlled power"—where complex systems are rendered with effortless, professional poise.

## Colors

The palette is anchored by "Electric Indigo" (#4F46E5), a high-energy accent that signals innovation and connectivity. This is set against a "Deep Space" background hierarchy to ensure maximum contrast and professional gravitas.

- **Primary (Electric Indigo):** Used for critical actions, active states, and highlighting key architectural nodes.
- **Secondary (Slate Midnight):** The foundational surface color, providing a low-light environment that feels premium and focused.
- **Tertiary (Steel Gray):** Used for container backgrounds, dividers, and secondary surfaces to create structural depth.
- **Neutral (Cloud White):** Reserved for high-readability text and essential data points.

Contrast is maintained at a minimum of 7:1 for body text to ensure accessibility and professional rigor in documentation-heavy sections.

## Typography

The typography system reflects a hybrid of engineering utility and modern design. **Geist** is used for headings and UI labels to provide a clean, technical, and highly legible interface. Its geometric precision aligns with the systems-architecture narrative.

**JetBrains Mono** is utilized for all body text and data visualizations. As an Android Engineer, using a typeface designed for developers bridges the gap between the person and the craft. It emphasizes the "Deep Tech" aesthetic, ensuring that even standard paragraphs feel like part of a technical specification or high-level architecture document.

## Layout & Spacing

This design system employs a **Fixed Grid** model for desktop to maintain a structured, editorial feel, transitioning to a fluid model for mobile devices. The rhythm is based on a **4px baseline grid**, ensuring all elements (icons, type, padding) are mathematically aligned.

- **Desktop:** 12-column grid with wide margins to create a focused "reading lane" for technical case studies.
- **Tablet:** 8-column grid with reduced margins (40px).
- **Mobile:** 4-column grid.

Spacing is intentionally generous around headline elements to suggest "room to breathe" within complex topics, while data density is kept high within components like "System Schematics" or "Code Blocks."

## Elevation & Depth

To achieve a "Deep Tech" look, this design system avoids heavy, traditional shadows in favor of **Tonal Layers and Glassmorphism**.

1.  **Level 0 (Base):** #0F172A. The canvas.
2.  **Level 1 (Cards/Sections):** #1E293B. Subtly lifted with a 1px solid border (#334155) to define boundaries without heavy shadows.
3.  **Level 2 (Modals/Popovers):** Semi-transparent #1E293B with a 12px backdrop blur and a vibrant top-edge highlight (0.5px white at 10% opacity).

Depth is communicated through color value shifts rather than light-source simulation, creating a "HUD" (Heads-Up Display) effect that feels digital and precise.

## Shapes

The shape language is **Soft (0.25rem)**. This provides just enough rounding to feel modern and polished while maintaining a sharp, professional silhouette. Larger components like project cards use `rounded-lg` (0.5rem) to differentiate them from smaller interactive elements like buttons or chips. This restrained approach to corner radii reinforces the architectural and technical focus of the design system.

## Components

### Buttons
Primary buttons use the Electric Indigo fill with white text. Secondary buttons are "Ghost" style—1px border in #334155 with a subtle hover transition to a 10% Indigo tint.

### Inputs & Text Fields
Fields are dark-filled (#0F172A) with a bottom-border only or a very subtle 4-sided stroke. Focus states must trigger a glow effect using the primary color to simulate an active terminal state.

### Tech Chips
Used for listing languages (Kotlin, Rust, C++). These should be small, high-contrast badges using a dark background and the primary color for the text, emphasizing the technical stack.

### Cards
Cards are the primary container for architectural diagrams and project summaries. They feature a "Glass" header—a semi-transparent top bar that stays fixed as the card content scrolls, reinforcing the sense of depth.

### Code Blocks
As an Android Engineer, code blocks are first-class citizens. They should feature syntax highlighting optimized for dark mode, using the primary indigo for keywords and a muted teal for strings.
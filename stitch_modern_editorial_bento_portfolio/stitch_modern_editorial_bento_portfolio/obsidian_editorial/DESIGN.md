---
name: Obsidian Digital
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#E5E1E4'
  on-surface-variant: '#CBC3D7'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#958ea0'
  outline-variant: rgba(73, 68, 84, 0.3)
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#b9c7df'
  on-secondary: '#233144'
  secondary-container: '#3c4a5e'
  on-secondary-container: '#abb9d1'
  tertiary: '#d0bcff'
  on-tertiary: '#37265e'
  tertiary-container: '#9987c6'
  on-tertiary-container: '#301f57'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#d5e3fc'
  secondary-fixed-dim: '#b9c7df'
  on-secondary-fixed: '#0d1c2e'
  on-secondary-fixed-variant: '#3a485b'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#210f48'
  on-tertiary-fixed-variant: '#4d3d76'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
  glass-bg: rgba(255, 255, 255, 0.03)
typography:
  headline-lg:
    fontFamily: Instrument Serif
    fontSize: 64px
    fontWeight: '400'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Instrument Serif
    fontSize: 40px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Instrument Serif
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  container-max: 1280px
  section-gap: 120px
---

## Brand & Style
Obsidian Digital is a design system crafted for high-stakes engineering and technical portfolios. It balances **Minimalism** with **Glassmorphism**, evoking a sense of "digital quietude"—a space where technical performance is expressed through visual restraint and precision. 

The aesthetic is characterized by deep, obsidian-like surfaces, subtle atmospheric blurs, and a single high-energy focal point (Violet). It targets developers and architects who value clean code and resilient systems. The emotional response should be one of sophisticated calm, authority, and futuristic elegance.

## Colors
The palette is rooted in a "Deep Space" dark mode. The background is a true obsidian black (#09090B), providing the maximum possible contrast for the Violet accent.

- **Primary (Violet):** Used sparingly as a signal of intelligence and life—pulse indicators, hover states, and key links.
- **Surface & Neutrals:** Surfaces use a slightly elevated charcoal grey. Content is set in a soft off-white to reduce eye strain, while secondary text is muted with a violet-tinted grey.
- **Glass:** Semi-transparent layers are used for floating navigation and cards to maintain a sense of depth without breaking the dark flow.

## Typography
The system uses a sophisticated "Serif for Headlines, Sans for Systems" pairing. 

**Instrument Serif** provides an editorial, intellectual feel for large titles. It should be typeset with tight tracking to emphasize its elegant curves. 

**Geist** is the workhorse for all functional content. As a monospaced-influenced sans, it communicates technical precision. Use `label-md` and `label-sm` in all-caps with generous tracking for metadata and section headers to evoke an "architectural drawing" aesthetic.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy with a maximum container width of 1280px. 

- **Vertical Rhythm:** Large section gaps (120px) create the "quietude" essential to the brand, allowing each project or experience block to stand alone.
- **Margins:** Desktop views use 48px side margins, while mobile tightens to 16px.
- **Project Grid:** A 3-column grid is standard for desktop, collapsing to 1 column for mobile.
- **Nav:** The navigation is a floating, centered "pill" that maintains a fixed position at the top, emphasizing the fluid nature of the glass surfaces.

## Elevation & Depth
Depth is created through **Glassmorphism** and backdrop filters rather than traditional shadows.

1.  **Level 0 (Base):** Solid #09090B with a subtle animated radial gradient (40% opacity) for texture.
2.  **Level 1 (Cards/Floating Nav):** Glass containers with `backdrop-filter: blur(20px)`, a 1px border at 30% opacity, and a very subtle `rgba(0,0,0,0.8)` shadow to lift them off the background.
3.  **Level 2 (Interaction):** Upon hover, cards increase border opacity and tint toward the primary violet color. Images within cards transition from grayscale/low-opacity to full color/high-opacity.

## Shapes
The shape language is "Soft-Modern." 

Standard components (Cards, Container) use a **12px (0.75rem)** radius to maintain a professional look that isn't overly bubbly. Interactive elements like the top navigation and status badges use a **Pill (Full)** rounding to contrast against the structured grid of the content. Icons should be "Outlined" style with a 400 weight to match the thinness of the typography.

## Components
- **Floating Nav:** A pill-shaped bar with `bg-white/5` and `backdrop-blur-xl`. Links use `label-md` and scale down slightly (95%) on click for a tactile feel.
- **Glass Cards:** The primary container for projects. Must include a 1px border. Images inside should have a `grayscale` filter by default, removing it only on hover.
- **Status Badges:** Small pill-shaped badges for availability. They include a small animated pulse dot in the accent color (Green for status, Violet for primary).
- **Separators:** Horizontal rules use `outline-variant` at 10% opacity—they should be barely visible, acting more as a structural guide than a hard divider.
- **Interactive Hover:** Elements like experience list items should change text color to the primary violet when hovered, providing a clear but minimal feedback loop.
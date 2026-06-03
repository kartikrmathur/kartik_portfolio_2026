---
name: Editorial Noir
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
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e2e2e9'
  inverse-on-surface: '#2e3036'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#bac8da'
  on-secondary: '#243240'
  secondary-container: '#3d4a5a'
  on-secondary-container: '#acbacc'
  tertiary: '#ffffff'
  on-tertiary: '#2a303d'
  tertiary-container: '#dde2f3'
  on-tertiary-container: '#5e6472'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#d6e4f7'
  secondary-fixed-dim: '#bac8da'
  on-secondary-fixed: '#0f1d2a'
  on-secondary-fixed-variant: '#3b4857'
  tertiary-fixed: '#dde2f3'
  tertiary-fixed-dim: '#c1c6d6'
  on-tertiary-fixed: '#161c27'
  on-tertiary-fixed-variant: '#414754'
  background: '#111318'
  on-background: '#e2e2e9'
  surface-variant: '#33353a'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  transition-smooth: 400ms cubic-bezier(0.23, 1, 0.32, 1)
  transition-slow: 700ms cubic-bezier(0.23, 1, 0.32, 1)
---

## Brand & Style
The design system moves away from typical tech-minimalism into a **High-End Editorial** aesthetic. It targets a sophisticated audience that values deep work, curation, and atmospheric immersion. 

The style is a fusion of **Glassmorphism** and **Modern Serif** typography. It prioritizes depth through translucent layering, high-contrast details, and a tactile "film grain" texture that makes the digital interface feel like premium printed media. The emotional response is one of calm, focus, and prestige—a "dark mode" that feels intentional and luxurious rather than just utilitarian.

## Colors
The palette is rooted in a deep, ink-like base. Contrast is the primary driver of hierarchy.

- **Base:** The primary background is a solid `#0B0D12`, providing a bottomless depth for glass layers to sit upon.
- **Primary:** Pure `#FFFFFF` is reserved for typography and key interactive signals to ensure razor-sharp legibility.
- **Glass Layers:** Surfaces utilize a white-tinted transparency (`rgba(255, 255, 255, 0.04)`) to create the frosted effect against the dark base.
- **Accents:** Muted silvers and slate greys are used for non-essential borders and secondary labels to maintain a monochromatic, high-end feel.

## Typography
The typographic soul of the design system is the contrast between the expressive, high-drama **Playfair Display** (Serif) and the clinical precision of **Hanken Grotesk** (Sans).

- **Headlines:** Use Playfair Display for all major headings. It should feel like a masthead—elegant and authoritative.
- **Body:** Hanken Grotesk provides a modern, neutral balance that ensures long-form reading remains comfortable.
- **Labels:** Use uppercase Hanken Grotesk with generous letter spacing to evoke the feeling of high-fashion captions or architectural blueprints.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to mimic the structured columns of a premium magazine, while transitioning to a fluid model on mobile.

- **Atmospheric Transitions:** All state changes (hover, active, entry) use an elongated, sophisticated cubic-bezier curve to emphasize a sense of "weight" and luxury.
- **The Grain:** A global noise texture overlay (opacity 0.03) is applied to the entire UI to break digital perfection and add organic grit.
- **Rhythm:** Spacing is generous. Content is allowed to breathe, with large outer margins (`64px`) on desktop to center the user's focus on the editorial content.

## Elevation & Depth
Depth is achieved through **Deep Glassmorphism** rather than traditional drop shadows.

- **Backdrop Blur:** Glass surfaces use a heavy `24px` to `40px` blur radius to create a soft, ethereal diffusion of the background.
- **Inner Glow:** Instead of outer shadows, use a `1px` white inner stroke with 10% opacity on the top and left edges to simulate light hitting the edge of a glass pane.
- **Layering:** Hierarchy is communicated by increasing the opacity of the glass tint. Lower layers are darker; active foreground layers are lighter and sharper.

## Shapes
Shapes are disciplined and "Soft" (`roundedness: 1`). Large radii are avoided to keep the aesthetic feeling professional and high-end rather than "bubbly" or casual. 

- **Standard Elements:** Use `0.25rem` (4px) for inputs, small cards, and buttons.
- **Feature Cards:** Use `0.75rem` (12px) for large editorial blocks to provide a subtle containerization without losing the architectural edge.

## Components
- **Buttons:** Primary buttons are solid white with black text. Secondary buttons are "ghost" style with a 1px border. Transitions must be slow and smooth.
- **Cards:** Cards do not have background colors; they are defined by their glass backdrop-blur and a very thin, low-opacity border.
- **Inputs:** Underline-only or subtle glass fills. Focus states should be a sharp, 1px white border.
- **Chips:** Small, uppercase labels with a slight background tint. No heavy rounding; keep them rectangular with a 2px radius.
- **Atmospheric Overlay:** A persistent, non-interactive SVG grain filter should sit at the top of the DOM stack to unify all components under a single tactile texture.
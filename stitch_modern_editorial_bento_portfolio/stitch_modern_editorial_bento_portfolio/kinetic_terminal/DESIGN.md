---
name: Kinetic Terminal
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bbcac6'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#859491'
  outline-variant: '#3c4947'
  surface-tint: '#45dccc'
  primary: '#62f3e2'
  on-primary: '#003732'
  primary-container: '#3dd6c6'
  on-primary-container: '#005951'
  inverse-primary: '#006a61'
  secondary: '#c7bfff'
  on-secondary: '#2a019e'
  secondary-container: '#442fb6'
  on-secondary-container: '#b8afff'
  tertiary: '#dcdddd'
  on-tertiary: '#2f3131'
  tertiary-container: '#c0c1c1'
  on-tertiary-container: '#4d4f4f'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#69f9e8'
  primary-fixed-dim: '#45dccc'
  on-primary-fixed: '#00201d'
  on-primary-fixed-variant: '#005049'
  secondary-fixed: '#e4dfff'
  secondary-fixed-dim: '#c7bfff'
  on-secondary-fixed: '#170065'
  on-secondary-fixed-variant: '#422cb3'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-xl:
    fontFamily: Syne
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Syne
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
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
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  stack-sm: 12px
  stack-md: 32px
  stack-lg: 80px
---

## Brand & Style
The design system is engineered for the high-performance software landscape. It targets an audience of technical recruiters and engineering leaders who value precision, speed, and deep technical competence. 

The aesthetic is a fusion of **Modern Corporate** and **Technical Brutalism**. It prioritizes extreme legibility and information density, utilizing high-contrast accents against a deep "Pure Technical Black" foundation. The emotional response is one of authority and reliability—evoking the feeling of a high-end IDE or a sophisticated command-line interface. Visual interest is generated through kinetic transitions, subtle glowing borders, and the interplay between wide-character display type and monospaced utility type.

## Colors
The palette is rooted in a deep-space black to maximize the luminosity of the accent colors.

- **Primary (Electric Teal):** Used for "Active" states, primary calls to action, and success indicators. It represents the "kinetic" energy of live code.
- **Secondary (Deep Violet):** Used for decorative accents, subtle gradients, and distinguishing between different categories of technical metadata.
- **Neutral/Surface:** The background is a strict `#050505` to ensure high contrast. Surfaces use `#0D0D0D` to create a shallow hierarchical lift.
- **Accent Highlighting:** Use low-opacity versions of the Primary color (10-15%) for surface washes to indicate focus or selection.

## Typography
The typography system uses three distinct families to categorize information:

1.  **Impact (Syne):** Reserved for large headlines and section titles. It provides a progressive, avant-garde feel that breaks the monotony of standard technical sites.
2.  **Narrative (Inter):** Used for long-form descriptions and project summaries. Chosen for its neutrality and superior legibility at standard reading sizes.
3.  **Technical (JetBrains Mono):** Used for all metadata, navigation items, buttons, and status indicators. This reinforces the "Terminal" persona and signals technical expertise.

All text should be rendered with `antialiased` smoothing. For headlines, use tight tracking to emphasize the geometric nature of the letterforms.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid Grid**. Content is centered within a 1440px max-width container, using a 12-column structure for desktop.

- **Grid Alignment:** Elements should snap to an 8px baseline grid to maintain mathematical precision.
- **Margins:** Use wide 64px horizontal margins on desktop to allow the "Pure Black" background to frame the content, creating a premium, gallery-like feel.
- **Information Density:** While the margins are wide, internal component spacing should be tight (12px - 24px) to mimic the density of professional developer tools.
- **Responsive Reflow:** On mobile, shift to a 4-column grid with 20px margins. Headlines should scale aggressively using the defined mobile variants to avoid awkward word breaks.

## Elevation & Depth
This design system rejects traditional soft shadows in favor of **Tonal Layering** and **Luminous Borders**.

- **Surface Tiers:** Depth is communicated by shifting from the `#050505` background to `#0D0D0D` surfaces. 
- **Glowing Borders:** Instead of drop shadows, "elevated" elements (like active cards) utilize a 1px solid border using the Primary color at 30-50% opacity, often with a subtle 4px outer blur of the same color to simulate a faint neon glow.
- **Glassmorphism:** For overlays (modals/navigation bars), use a backdrop blur of `12px` combined with a `#0D0D0D` fill at 70% opacity. This maintains the "Kinetic" feel without losing the crispness of the UI.

## Shapes
The shape language balances the "sharpness" of technical interfaces with the "premium" feel of modern software. 

We utilize a `0.5rem` base radius for standard components. This provides a subtle softening that prevents the UI from feeling overly aggressive or "dated" (retro-brutalist), while still appearing structured and architectural. 

- **Small Components (Chips/Badges):** Use the base `0.5rem`.
- **Large Components (Cards/Sections):** Use `rounded-lg` (1rem) to create a clear container hierarchy.
- **Interactive States:** Use sharp transitions—avoid "bouncy" animations in favor of high-speed linear or "expo-out" easing functions.

## Components
Consistent styling across technical components:

- **Buttons:** All buttons use **JetBrains Mono** in All-Caps. Primary buttons feature a solid Primary Teal fill with black text. Secondary buttons are outlined with a 1px Primary Teal border and no fill.
- **Technical Chips:** Used for "Tech Stack" tags. These should have a background of `#1A1A1A`, a border of `#333333`, and use `label-sm` typography. 
- **Input Fields:** Use the Surface color (`#0D0D0D`) with a bottom-only border of `#1A1A1A`. On focus, the bottom border transitions to Primary Teal with a subtle glow.
- **Project Cards:** Deep black backgrounds with a faint `#1A1A1A` border. On hover, the border color shifts to the Secondary Violet and the image (if present) increases in contrast.
- **Terminal Display:** A specific component for code snippets or "About Me" sections that mimics a terminal window, featuring a header bar with three dots (Window controls) and a subtle inner glow.
- **Navigation:** A fixed top-bar with a heavy backdrop blur and a single 1px bottom border to separate it from the scrolling content.
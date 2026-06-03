---
name: Kinetic Logic
colors:
  surface: '#111318'
  surface-dim: '#111318'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#bbcbbc'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#869587'
  outline-variant: '#3c4a3f'
  surface-tint: '#43e188'
  primary: '#60f99e'
  on-primary: '#00391c'
  primary-container: '#3ddc84'
  on-primary-container: '#005c31'
  inverse-primary: '#006d3b'
  secondary: '#99cbff'
  on-secondary: '#003355'
  secondary-container: '#0474b8'
  on-secondary-container: '#eff5ff'
  tertiary: '#86edff'
  on-tertiary: '#00363d'
  tertiary-container: '#00d5ed'
  on-tertiary-container: '#005863'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#66fea2'
  primary-fixed-dim: '#43e188'
  on-primary-fixed: '#00210e'
  on-primary-fixed-variant: '#00522b'
  secondary-fixed: '#cfe5ff'
  secondary-fixed-dim: '#99cbff'
  on-secondary-fixed: '#001d34'
  on-secondary-fixed-variant: '#004a78'
  tertiary-fixed: '#9cf0ff'
  tertiary-fixed-dim: '#00daf3'
  on-tertiary-fixed: '#001f24'
  on-tertiary-fixed-variant: '#004f58'
  background: '#111318'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '800'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is engineered for a Senior Engineer's portfolio, prioritizing a "Sophisticated Tech" aesthetic. The brand personality is authoritative, precise, and innovative, balancing high-level architectural thinking with low-level technical mastery. 

The visual style is a fusion of **Minimalism** and **Glassmorphism**, set against a **Corporate Modern** foundation. It utilizes deep, immersive backgrounds to allow vibrant technical accents to pop, simulating the environment of a premium IDE. The UI should evoke a sense of "stability meets speed"—the reliability of Java backend systems combined with the fluid, modern motion of high-end Android development. 

Key visual hallmarks include:
- **Precision Grids:** Visible but subtle alignment markers.
- **Luminescent Accents:** Controlled use of glow effects to highlight key interactive nodes.
- **Architectural Depth:** Layering of surfaces to represent a complex system stack.

## Colors

The palette is anchored in a specialized dark mode. The primary background is a deep charcoal-navy (`#0A0C10`), providing more depth than pure black.

- **Primary (Android Green):** `#3DDC84` is used for "Success" states, primary calls to action, and representing the Android ecosystem.
- **Secondary (Java Blue):** `#0073B7` represents the backend stability and corporate reliability.
- **Tertiary (Sleek Cyan):** `#00E5FF` is used for data visualization, code highlights, and interactive hover states.
- **Neutrals:** A scale of cool greys is used for borders, secondary text, and surface levels to maintain high legibility and professional contrast.

## Typography

The typography strategy leverages three distinct typefaces to define a clear hierarchy between branding, content, and technical detail.

1.  **Hanken Grotesk (Headlines):** A sharp, contemporary sans-serif used for large-scale impact. It feels engineered and precise.
2.  **Inter (Body):** The industry standard for UI readability. Used for all long-form text and project descriptions to ensure zero friction in consumption.
3.  **JetBrains Mono (Labels/Technical):** Used for metadata, chips, and small labels. It injects a "developer-first" feel, subtly referencing the tools used to build the software.

**Hierarchy Rules:**
- Use `display-lg` exclusively for hero sections and major project titles.
- Use `label-caps` for section headers and category tags.
- Apply `code-sm` to any technical snippets or versioning information.

## Layout & Spacing

This design system employs a **12-column fixed-grid** layout for desktop, transitioning to a **4-column fluid-grid** for mobile. The layout emphasizes premium whitespace to suggest confidence and clarity.

- **Rhythm:** An 8px base grid governs all padding and margins.
- **Sectioning:** Large vertical gaps (`120px`) are used to separate major portfolio phases (e.g., Hero to Featured Work).
- **Alignment:** Elements should strictly adhere to the vertical grid lines. Technical "asides" or code snippets can occasionally break the grid to create visual interest, but primary content must remain aligned.
- **Mobile Reflow:** On mobile, side-by-side elements (like skill cards) stack vertically, and horizontal padding reduces to `20px` to maximize screen real estate for code snippets.

## Elevation & Depth

Depth is conveyed through **Tonal Layers** and **Backdrop Blurs**, avoiding traditional heavy drop shadows which can feel dated in tech contexts.

- **Surface 0 (Base):** The core background (`#0A0C10`).
- **Surface 1 (Cards/Containers):** A slightly lighter navy-grey with 60% opacity and a `20px` backdrop blur to create a glass effect.
- **Surface 2 (Floating/Interactive):** Used for tooltips and navigation bars. These feature a `1px` stroke (primary or neutral-light at 10% opacity) to define edges.
- **Glow Effects:** Critical interactive elements use a "Technical Glow"—a diffused outer shadow with 0px offset and a color tint matching the Primary or Tertiary hex, set at 15% opacity.

## Shapes

The shape language is **Soft (0.25rem)**, leaning towards a more structured, industrial feel. This choice reinforces the "Senior Engineer" persona—logical and structured rather than whimsical.

- **Buttons & Inputs:** Use the standard `0.25rem` radius.
- **Cards & Large Containers:** Use `rounded-lg` (0.5rem) to provide just enough softness to look modern without losing the "grid" feel.
- **Icons:** Should be stroke-based (not filled) with consistent 2px line weight to match the technical typography.

## Components

### Buttons
- **Primary:** Solid `#3DDC84` background with black text. No shadow, but a subtle glow on hover.
- **Secondary:** Outline-only with `#00E5FF` stroke. On hover, fills with 10% opacity cyan.
- **Ghost:** Text-only in `JetBrains Mono` with a leading `>` character.

### Cards
- **Project Cards:** Feature a dark, semi-transparent background with a 1px border. Images should have a subtle desaturation filter that activates (becomes full color) on hover.
- **Skill Chips:** Small, `rounded-lg` badges using `label-caps` typography. Backgrounds should be 5% opacity of the associated technology (Green for Android, Blue for Java).

### Input Fields
- Underline-only or very subtle border inputs to maintain the minimal look. 
- Focus state triggers a Primary Green bottom border and a faint glow.

### Code Blocks
- Custom-styled containers with a top-bar including "window controls" (red, yellow, green dots) to mimic a code editor.
- Uses `JetBrains Mono` with syntax highlighting based on the system's primary and tertiary colors.

### Navigation
- A fixed, top-docked "Glass" navbar with a 1px bottom border. 
- Links utilize the `label-caps` style for a technical, utilitarian feel.
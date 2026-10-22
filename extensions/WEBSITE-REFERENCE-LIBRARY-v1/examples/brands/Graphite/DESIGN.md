# Graphite — Style Reference
> Luminous terminal lattice. Build dark, bordered product surfaces around precise white typography and sparse bursts of spectral light.

**Theme:** dark

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Graphite — luminous terminal lattice. The interface is a near-black developer workspace where bright off-white type, hairline graphite borders, and softly glowing product visuals carry the hierarchy. Large 500-weight headlines are tightly tracked and compact in line height, while dense product panels use restrained 14–16px utility text. Saturated color is reserved for animated-looking technical graphics, partner surfaces, and orange text links; conversion controls remain deliberately monochrome.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian Canvas | `#0a0a0a` | `--color-obsidian-canvas` | Page backgrounds, footer backgrounds, dark card interiors |
| True Black | `#000000` | `--color-true-black` | Deep media backdrops, product-preview fades, black overlays |
| Charcoal Surface | `#171717` | `--color-charcoal-surface` | Announcement strips, compact icon controls, elevated dark surfaces |
| Graphite Edge | `#262626` | `--color-graphite-edge` | Secondary filled controls, card borders, navigation shell borders, dividers |
| Steel Border | `#464646` | `--color-steel-border` | Emphasized borders around selected controls and media frames |
| Cloud White | `#fafafa` | `--color-cloud-white` | Primary headings, high-emphasis text, icons, strokes, and dark-surface foregrounds |
| Paper White | `#e5e5e5` | `--color-paper-white` | Filled conversion buttons and pale partner-card surfaces |
| Fog | `#a1a1a1` | `--color-fog` | Navigation labels, secondary body text, subdued interface icons |
| Ash | `#737373` | `--color-ash` | Tertiary labels, inactive icon strokes, focus-ring details |
| Signal Orange | `#ff8833` | `--color-signal-orange` | Inline text links and small directional-arrow accents — the sole warm reading cue within the monochrome interface |
| Solar Spectrum | `linear-gradient(90deg, #ffb931 15%, #ffffff 30%, #ffffff 40%, #2e73fc 50%)` | `--color-solar-spectrum` | Decorative technical linework and animated graphic borders — yellow-to-white-to-blue light turns abstract geometry into an active code signal |

## Tokens — Typography

### matterFont — Single-family UI and marketing typography. Use 14px/500 for navigation and controls, 16px/400 for links and product copy, 24px/600 for feature-card headings, 36px/500 for section headings, and 60px/500 for the hero. The 60px display treatment uses -1.5px tracking and a 60px line height, making the headline read as a compact block rather than a loose marketing statement. · `--font-matterfont`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 10px, 12px, 14px, 16px, 18px, 20px, 24px, 36px, 60px
- **Line height:** 1.00, 1.11, 1.17, 1.25, 1.33, 1.40, 1.43, 1.50, 1.56, 2.00
- **Letter spacing:** -1.5px at 60px; -0.9px at 18px where the compact link treatment is used; normal elsewhere
- **OpenType features:** `"clig" 0, "liga" 0`
- **Role:** Single-family UI and marketing typography. Use 14px/500 for navigation and controls, 16px/400 for links and product copy, 24px/600 for feature-card headings, 36px/500 for section headings, and 60px/500 for the hero. The 60px display treatment uses -1.5px tracking and a 60px line height, making the headline read as a compact block rather than a loose marketing statement.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| micro-nav | matterFont | 700 | 10px | 2 | 0px | `--text-micro-nav` |
| caption | matterFont | 400 | 12px | 1.33 | 0px | `--text-caption` |
| nav-control | matterFont | 500 | 14px | 1.43 | 0px | `--text-nav-control` |
| body | matterFont | 400 | 16px | 1.25 | 0px | `--text-body` |
| body-relaxed | matterFont | 400 | 16px | 1.5 | 0px | `--text-body-relaxed` |
| body-large | matterFont | 400 | 18px | 1.25 | 0px | `--text-body-large` |
| subheading | matterFont | 500 | 20px | 1.4 | 0px | `--text-subheading` |
| feature-heading | matterFont | 600 | 24px | 1.17 | 0px | `--text-feature-heading` |
| section-heading | matterFont | 500 | 36px | 1.11 | 0px | `--text-section-heading` |
| display | matterFont | 500 | 60px | 1 | -1.5px | `--text-display` |

## Tokens — Spacing & Shapes

**Base unit:** 8px

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 64 | 64px | `--spacing-64` |
| 72 | 72px | `--spacing-72` |
| 128 | 128px | `--spacing-128` |
| 224 | 224px | `--spacing-224` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 10px |
| pills | 9999px |
| badges | 20px |
| images | 10px |
| inputs | 10px |
| buttons | 8px |
| mediaFrames | 10px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `rgba(0, 0, 0, 0.25) 0px 4px 4px 0px` | `--shadow-sm` |
| subtle | `rgba(101, 129, 128, 0.15) 0px 0px 2px 2px inset, rgba(32,...` | `--shadow-subtle` |
| subtle-2 | `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0p...` | `--shadow-subtle-2` |
| md | `rgba(0, 0, 0, 0.3) 0px 8px 10px 0px` | `--shadow-md` |
| subtle-3 | `rgb(255, 255, 255) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0...` | `--shadow-subtle-3` |
| sm-2 | `rgb(0, 0, 0) 0px 0px 8px 8px` | `--shadow-sm-2` |
| sm-3 | `rgba(0, 0, 0, 0.5) 0px 0px 8px 8px` | `--shadow-sm-3` |
| sm-4 | `oklab(0.268999 -0.00000260025 0.00000627339) 0px 2px 4px ...` | `--shadow-sm-4` |
| md-2 | `lab(15.204 0 -0.00000596046) 0px 0px 12px 0px inset` | `--shadow-md-2` |

### Layout

- **Page max-width:** 1152px
- **Section gap:** 224px
- **Card padding:** 16px
- **Element gap:** 8px

## Components

### Top Announcement Bar
**Role:** Full-width product announcement above primary navigation

Use a #171717 strip with 1px #262626 borders, compact centered 14px/600 Cloud White text, and a low-emphasis Fog trailing link. Keep the bar visually shallow with 8px internal vertical spacing.

### Floating Primary Navigation
**Role:** Contained top navigation shell

Place the logo, six 14px/500 Fog navigation links, account controls, and sign-up control inside an Obsidian Canvas shell with a 1px #262626 border, 10px radius, 16px horizontal padding, and 8px control gaps.

### Pale Conversion Button
**Role:** High-emphasis public conversion control

Use Paper White #e5e5e5 with #171717 14px/500 text, an 8px radius, 8px 16px padding, a 1px rgba(255,255,255,0.1) edge, and the inset shadow rgb(255,255,255) 0px 1px 0px 0px, rgba(0,0,0,0.1) 0px -2px 6px 0px.

### Charcoal Secondary Button
**Role:** Lower-emphasis public conversion control

Use #262626 fill with Cloud White 14px/500 text, a 1px #464646 border, 8px radius, 8px 16px padding, and box-shadow rgba(0,0,0,0.1) 0px 1px 3px 0px, rgba(0,0,0,0.1) 0px 1px 2px -1px.

### Transparent Navigation Control
**Role:** Menu trigger or compact utility control

Keep the background transparent with Fog 14px/500 text, a 1px rgba(255,255,255,0.1) border, 8px radius, and 8px 16px padding.

### Dark Pill Icon Button
**Role:** Carousel navigation and compact product controls

Use #171717 with Cloud White iconography, a #262626 edge, 9999px radius, and a 32px square hit area. Apply rgba(0,0,0,0.25) 0px 4px 4px 0px shadow.

### Product Demo Frame
**Role:** Large contained product showcase

Frame the dark product capture in Obsidian Canvas with a 1px #262626 border, 10px radius, overflow hidden, and inset shadow rgba(101,129,128,0.15) 0px 0px 2px 2px inset, rgba(32,47,46,0.15) 0px 0px 4px 4px inset. Use a dark image fade so Cloud White overlay labels remain legible.

### Demo Feature Tab
**Role:** Bottom-aligned selector within a product preview

Use a True Black tab with a 1px #262626 border, 4px radius, 12px horizontal padding, 8px gaps between icons and labels, and 12–14px Fog text. Arrange tabs in one tight horizontal row.

### Customer Story Card
**Role:** Carousel card for customer proof

Build a 10px-radius card with a #262626 1px border, Obsidian Canvas lower content area, and an isolated logo panel above. Use a 12px/400 outlined label chip and 16px body copy; allow the top panel to use a customer-specific light or saturated background without recoloring the core UI.

### Feature Mosaic Card
**Role:** Dark explanatory feature module

Use an Obsidian Canvas panel with 1px #262626 border, 10px radius, 16px padding around copy, and embedded product imagery clipped to the same radius. Pair a 24px/600 Cloud White heading with Fog 16px copy and a Signal Orange 16px/400 text link.

### Inline Orange Link
**Role:** Directional content link

Set Signal Orange #ff8833 at 16px/400 with 20px line height and pair it with a small right arrow. Do not place it in a filled container.

### Luminous Polygon Graphic
**Role:** Hero atmosphere and section-transition artwork

Use several offset, rotated rounded-square outlines with 10–20px corner rounding, mostly Cloud White strokes, soft black glow, and sparse Solar Spectrum gradient accents. Keep the center hollow and allow blurred duplicate outlines to create depth without turning the graphic into a filled illustration.

## Do's and Don'ts

### Do
- Use Obsidian Canvas #0a0a0a as the dominant page background and separate modules with 1px Graphite Edge #262626 borders.
- Set public navigation and standard buttons in matterFont 14px/500 with a 20px line height.
- Use the 60px/500, 60px line-height display style with -1.5px tracking only for major hero statements.
- Use 8px as the default gap between related controls, icons, and compact UI elements.
- Use 10px radii for cards, product media frames, and navigation shells; use 8px radii for rectangular buttons.
- Reserve Paper White #e5e5e5 filled controls for high-emphasis conversion moments and use Charcoal Surface #262626 for secondary controls.
- Use Signal Orange #ff8833 only for inline links and directional text accents.

### Don't
- Do not use bright blue, yellow, orange, or red as a universal filled button color.
- Do not place broad white content sections against the Obsidian Canvas background.
- Do not use radii larger than 10px on product frames or customer cards; reserve 9999px for circular and pill controls.
- Do not replace #262626 module borders with borderless floating cards.
- Do not set display headlines in weights above 600 or add loose line spacing to the 60px headline style.
- Do not use saturated fills for body copy, navigation labels, or dense product-interface text.
- Do not use soft pastel shadows; use black drop shadows or the muted teal-gray inset frame treatment.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | True Black | `#000000` | Media fades, deepest visual recesses, and black overlays |
| 1 | Obsidian Canvas | `#0a0a0a` | Main page canvas, footer, and card interiors |
| 2 | Charcoal Surface | `#171717` | Announcement strips, compact control surfaces, and elevated utility elements |
| 3 | Graphite Edge | `#262626` | Secondary control fills, borders, and structural separators |

## Elevation

- **Floating Primary Navigation:** `rgba(0, 0, 0, 0.25) 0px 4px 4px 0px`
- **Charcoal Secondary Button:** `rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px`
- **Product Demo Frame:** `rgba(101, 129, 128, 0.15) 0px 0px 2px 2px inset, rgba(32, 47, 46, 0.15) 0px 0px 4px 4px inset`
- **Customer Story Card:** `rgba(0, 0, 0, 0.3) 0px 8px 10px 0px`

## Imagery

Imagery is product-first and abstract rather than photographic. Large dark code-review screenshots are contained inside thin #262626 frames, heavily blurred or faded at their edges, and overlaid with sparse Cloud White labels; the product UI itself is the visual proof. The hero uses a hollow stack of glowing, rotated rounded-square outlines with blurred white duplicates and occasional yellow-to-blue spectral treatment. Customer cards use flat logo panels with sharp internal horizontal divisions, including white and vivid partner-colored bands. Icons are small, mono, and mostly Cloud White or Fog, with fine outlined strokes.

## Layout

The page is a centered, max-width 1152px composition on an uninterrupted #0a0a0a canvas. A narrow announcement bar sits above a contained floating navigation shell; the first screen uses an asymmetric hero with a left-aligned display statement and conversion controls opposite a luminous abstract polygon. Product demonstration media follows as a wide framed module, then customer proof appears as a three-column card carousel. The lower page changes into a compact bordered mosaic: one wide text-and-product panel followed by paired feature cards and further stacked modules, with thin gaps and repeated 10px media corners rather than alternating color bands. The navigation remains visually present as a dark bordered top bar while sections flow beneath it.

## Agent Prompt Guide

Quick Color Reference:
- Obsidian Canvas: #0a0a0a — Page backgrounds, footer backgrounds, dark card interiors
- True Black: #000000 — Deep media backdrops, product-preview fades, black overlays
- Charcoal Surface: #171717 — Announcement strips, compact icon controls, elevated dark surfaces
- Graphite Edge: #262626 — Secondary filled controls, card borders, navigation shell borders, dividers
- Steel Border: #464646 — Emphasized borders around selected controls and media frames
- Cloud White: #fafafa — Primary headings, high-emphasis text, icons, strokes, and dark-surface foregrounds
- Paper White: #e5e5e5 — Filled conversion buttons and pale partner-card surfaces
- Fog: #a1a1a1 — Navigation labels, secondary body text, subdued interface icons
- Ash: #737373 — Tertiary labels, inactive icon strokes, focus-ring details
- Signal Orange: #ff8833 — Inline text links and small directional-arrow accents — the sole warm reading cue within the monochrome interface
- Solar Spectrum: linear-gradient(90deg, #ffb931 15%, #ffffff 30%, #ffffff 40%, #2e73fc 50%) — Decorative technical linework and animated graphic borders — yellow-to-white-to-blue light turns abstract geometry into an active code signal

Create a left-aligned hero on Obsidian Canvas #0a0a0a with a matterFont 60px/500 headline, 60px line height, -1.5px tracking in Cloud White #fafafa; place a hollow glowing polygon graphic on the right and pair Paper White #e5e5e5 and Graphite Edge #262626 14px/500 buttons below.
Create a 10px-radius Product Demo Frame in Obsidian Canvas #0a0a0a with a 1px Graphite Edge #262626 border, dark blurred code-review media, a Cloud White overlay label, and compact True Black #000000 feature tabs along the bottom.
Create three Customer Story Cards in a row with #262626 1px borders, 10px radii, light or partner-color logo panels, Obsidian Canvas #0a0a0a descriptions, 12px labels, and 16px matterFont body copy.
Create a bordered feature mosaic with an Obsidian Canvas #0a0a0a surface, 10px radius, Cloud White #fafafa 24px/600 title, Fog #a1a1a1 16px copy, embedded dark product UI, and a Signal Orange #ff8833 16px/400 inline link.

## Similar Brands

- **Linear** — Dark product showcases, sharply constrained typography, fine dark borders, and bright monochrome conversion controls.
- **Vercel** — Near-black canvas with white type, restrained surfaces, and product interface media used as the central visual evidence.
- **Raycast** — Compact dark control treatments, high-contrast interface framing, and occasional luminous abstract graphics.
- **Warp** — Developer-tool visual language built from dark terminal-like surfaces, framed product captures, and vivid technical accent moments.

# AVNIER — Style Reference
> AVNIER — nocturnal film set. White production labels and sharp grid lines cut through black equipment-room imagery.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

AVNIER treats the storefront like a production call sheet: an almost binary black-and-white system, technical monospace utility text, and oversized custom-display category labels. Photography is deliberately dark, grainy, and equipment-focused, while purple product color remains inside imagery rather than escaping into the interface palette. Full-bleed black product and footer zones alternate with large, empty white editorial fields; every control stays square, outlined, and mechanically precise.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Black | `#000000` | `--color-black` | Dark hero and footer surfaces, primary reading text on white, hairline rules, outlined controls, and the sole filled conversion button |
| White | `#ffffff` | `--color-white` | Page canvas, reversed text over black imagery, footer rules, outlined dark-surface fields, and utility-strip background |
| Charcoal Ink | `#0a0a0a` | `--color-charcoal-ink` | Subtle SVG and icon strokes within black visual compositions |
| Focus Gray | `#737373` | `--color-focus-gray` | Restrained input focus shadow |

## Tokens — Typography

### Space Mono — Default operational type for navigation, product descriptions, buttons, shipping notices, form fields, footer lists, and small labels. Uppercase mono text turns commerce information into technical equipment markings. · `--font-space-mono`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 12px, 13px, 14px, 15px, 16px
- **Line height:** 1.20, 1.25, 1.40, 1.43, 1.80
- **Letter spacing:** 0.8px-2px at 12px-16px for tracked utility labels; use normal tracking for the 13px product description and 14px footer headings.
- **Role:** Default operational type for navigation, product descriptions, buttons, shipping notices, form fields, footer lists, and small labels. Uppercase mono text turns commerce information into technical equipment markings.

### avnier-font — Custom display face for product headings, editorial introduction headings, image-panel titles, and oversized category rows. Its broad, compact letterforms keep a 55px category label feeling like industrial signage rather than a fashion serif statement. · `--font-avnier-font`
- **Substitute:** Space Mono
- **Weights:** 400, 500
- **Sizes:** 15px, 25px, 33px, 55px
- **Line height:** 1.14, 1.18, 1.30, 1.50, 1.80
- **Role:** Custom display face for product headings, editorial introduction headings, image-panel titles, and oversized category rows. Its broad, compact letterforms keep a 55px category label feeling like industrial signage rather than a fashion serif statement.

### Rubik — Rubik — detected in extracted data but not described by AI · `--font-rubik`
- **Weights:** 400, 700
- **Sizes:** 13px, 14px
- **Line height:** 1.25, 1.5
- **Role:** Rubik — detected in extracted data but not described by AI

### Arial — Arial — detected in extracted data but not described by AI · `--font-arial`
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.2
- **Role:** Arial — detected in extracted data but not described by AI

### GTStandard-M — GTStandard-M — detected in extracted data but not described by AI · `--font-gtstandard-m`
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.5
- **Role:** GTStandard-M — detected in extracted data but not described by AI

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| utility-link | Space Mono | 400 | 12px | 1.4 | 0.996px | `--text-utility-link` |
| body | Space Mono | 400 | 13px | 1.2 | 0px | `--text-body` |
| footer-heading | Space Mono | 400 | 14px | 1.43 | 0px | `--text-footer-heading` |
| account-label | Space Mono | 400 | 14px | 1.2 | 0px | `--text-account-label` |
| image-panel-heading | avnier-font | 500 | 15px | 1.14 | 0px | `--text-image-panel-heading` |
| hero-heading | avnier-font | 500 | 25px | 1.18 | 0px | `--text-hero-heading` |
| editorial-heading | avnier-font | 500 | 33px | 1.3 | 0px | `--text-editorial-heading` |
| category-heading | avnier-font | 500 | 55px | 1.18 | 0px | `--text-category-heading` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 5 | 5px | `--spacing-5` |
| 8 | 8px | `--spacing-8` |
| 10 | 10px | `--spacing-10` |
| 12 | 12px | `--spacing-12` |
| 13 | 13px | `--spacing-13` |
| 15 | 15px | `--spacing-15` |
| 16 | 16px | `--spacing-16` |
| 19 | 19px | `--spacing-19` |
| 20 | 20px | `--spacing-20` |
| 22 | 22px | `--spacing-22` |
| 24 | 24px | `--spacing-24` |
| 27 | 27px | `--spacing-27` |
| 30 | 30px | `--spacing-30` |
| 50 | 50px | `--spacing-50` |
| 80 | 80px | `--spacing-80` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 0px |
| images | 0px |
| inputs | 0px |
| buttons | 0px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgb(0, 0, 0) 0px 0px 0px 1px` | `--shadow-subtle` |
| subtle-2 | `rgba(0, 0, 0, 0.55) 0px 0px 0px 1px` | `--shadow-subtle-2` |

### Layout

- **Section gap:** 50px
- **Card padding:** 30px
- **Element gap:** 10px

## Components

### Hero Split Carousel
**Role:** Landing-page product feature

Use a full-width black composition split between a dark product photograph and a black information panel. Set the product title in avnier-font 25px/29.5px weight 500 in #ffffff; set the supporting copy in Space Mono 13px, uppercase, #ffffff. Place a 1px #ffffff carousel rule beneath the copy with numbered stops and no rounded corners.

### Minimal Top Navigation
**Role:** Public site navigation

Place Space Mono 13px uppercase links in #ffffff across the top of the dark hero, with a centered white AVNIER wordmark and thin outlined search, account, and bag icons. Keep navigation controls unfilled and square.

### Dark Hero Discovery Link
**Role:** Product-discovery link

Render as #ffffff uppercase mono text beside a circular outlined play-arrow icon. Use a transparent background, 0px radius, no internal padding, and a 1px #ffffff outline only on the icon.

### White Editorial Introduction
**Role:** Brand statement section

Use a #ffffff full-width surface with a compact text block offset toward the left and extensive empty space around it. Set the main line in avnier-font 33px/42.9px weight 500, #000000, uppercase; use Space Mono 13px uppercase for the paragraph and an outlined black play-arrow link below.

### Category Index Row
**Role:** Shop-category navigation

Build full-width stacked rows on #ffffff with 1px solid #000000 top rules. Set labels in avnier-font 55px/64.9px weight 500, #000000, uppercase; place small count text beside the label and a right-aligned thin outlined triangular arrow. Use 0px corners and no card fill.

### Editorial Image Tile
**Role:** Brand and method navigation

Use edge-to-edge, sharp-cornered dark photographic tiles with text anchored at the lower left. Set the eyebrow in Space Mono 13px #ffffff and the title in avnier-font 15px/17.1px weight 500 #ffffff, followed by a simple right arrow.

### Shipping Utility Strip
**Role:** Commerce reassurance row

Use a #ffffff horizontal strip with Space Mono 13px uppercase #000000 text, separated by small plus signs. Keep the strip flat, unrounded, and tightly set around a 10px element gap.

### Service Benefit Block
**Role:** Footer commerce information

Place four compact blocks across a #000000 surface, each pairing a thin #ffffff line icon with Space Mono 12px uppercase #ffffff copy. Keep iconography outlined, monochrome, and separated from copy by 10px.

### Footer Link Column
**Role:** Footer navigation

Use a #000000 background, Space Mono 14px/20.02px #ffffff column titles, and smaller Space Mono links beneath. Divide the benefit row, link matrix, and legal row with 1px #ffffff rules.

### Newsletter Email Field
**Role:** Footer signup input

Use a transparent #000000-surface field with 1px solid #ffffff border, #ffffff text, 0px radius, and padding 15px 50px 15px 0px. Add a right-aligned outlined arrow submit affordance; preserve the uninterrupted rectangular silhouette.

### Black Skip Button
**Role:** Accessibility shortcut

Use a #000000 filled rectangular button with #ffffff Space Mono 15px uppercase text tracked at 1px. Apply padding 9px 30px 11px, 0px radius, and no visible border.

### Close Control
**Role:** Floating overlay dismissal

Use a compact circular #000000 control with a #ffffff diagonal-cross icon. This is the exception to the square control system: use a fully round silhouette only for floating dismiss actions.

## Do's and Don'ts

### Do
- Use #ffffff as the default canvas and #000000 for full-bleed hero, commerce-information, and footer bands.
- Set navigation, labels, footer links, product descriptions, and inputs in Space Mono 12px-15px.
- Set major category labels in avnier-font 55px/64.9px weight 500 with #000000 text on #ffffff.
- Use 1px solid #000000 or #ffffff rules instead of card shadows to divide rows, fields, and footer zones.
- Keep cards, image frames, buttons, and inputs at 0px radius.
- Use 50px section gaps, 30px card padding where contained content needs an inset, and 10px gaps between compact control elements.
- Keep product photography dark and near-monochrome; let any garment color remain contained inside the image.

### Don't
- Do not introduce saturated interface accents, gradients, colored status pills, or tinted button fills.
- Do not round commerce controls beyond the circular floating close control.
- Do not use soft drop shadows; use 1px rules and flat surface changes between #ffffff and #000000.
- Do not set large headings in Space Mono when avnier-font is available.
- Do not use lowercase or sentence-case for navigation, utility copy, category labels, and product metadata.
- Do not turn every link into a filled button; preserve transparent text-and-arrow discovery links on both #000000 and #ffffff surfaces.
- Do not place bright, high-key lifestyle photography beside the black equipment-room visual treatment.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | White Canvas | `#ffffff` | Editorial content fields, category index, and commerce utility strips. |
| 1 | Black Stage | `#000000` | Hero information panel, dark photographic framing, service area, footer, and filled skip control. |

## Elevation

Keep surfaces physically flat. Structural separation comes from abrupt #ffffff/#000000 bands and 1px rules; the only depth cue is a restrained 0 0 0 1px outline on isolated controls and focused inputs.

## Imagery

Imagery is photographic and product-focused: close crops of bags, garments, production hardware, and work surfaces in low-key lighting. Images are full-bleed inside sharp rectangular panels, often so dark that equipment silhouettes merge with #000000 page sections. The visual role is atmosphere and proof of use rather than catalog isolation; purple or warm production-light color appears as a contained photographic event, not a UI accent. Icons are thin outlined white or black line drawings with a technical, equipment-label character.

## Layout

The page is full-bleed rather than container-bound. A dark split hero combines a product photograph on one side with product information and slider pagination on the other, followed by a white horizontal commerce-utility strip. The main content shifts to an expansive white editorial field, then a stack of oversized ruled category rows; dark photographic navigation tiles bridge into a black, multi-column footer. Navigation is a minimal top bar over the hero, while the footer uses a four-block service row, ruled link columns, newsletter field, and a final legal/payment row.

## Agent Prompt Guide

Quick Color Reference:
- Black: #000000 — Dark hero and footer surfaces, primary reading text on white, hairline rules, outlined controls, and the sole filled conversion button
- White: #ffffff — Page canvas, reversed text over black imagery, footer rules, outlined dark-surface fields, and utility-strip background
- Charcoal Ink: #0a0a0a — Subtle SVG and icon strokes within black visual compositions
- Focus Gray: #737373 — Restrained input focus shadow

Create a black split-carousel hero with a dark close-up product photograph on the left and a #000000 information panel on the right; set the white product heading in avnier-font 25px, weight 500, line-height 29.5px, and the supporting uppercase copy in Space Mono 13px.
Create a white brand-introduction section with an offset text block and broad empty canvas; set its black uppercase heading in avnier-font 33px, weight 500, line-height 42.9px, followed by Space Mono 13px copy and a black outlined play-arrow link.
Create a stacked shop-category index on #ffffff with 1px #000000 rules, black avnier-font 55px headings at weight 500 and 64.9px line-height, small counts, and right-edge outlined triangle arrows.
Create a #000000 newsletter footer module with Space Mono 14px white heading text and a transparent, 0px-radius email field outlined in #ffffff with 15px 50px 15px 0px padding.

## Similar Brands

- **A-COLD-WALL*** — Shared industrial workwear framing, monochrome surfaces, technical typography, and equipment-oriented imagery.
- **Nike ACG** — Shares functional garment storytelling through dark outdoor or equipment-led photography and utility-signage details.
- **Carhartt WIP** — Similar workwear category architecture with direct product navigation and practical commerce information.
- **Stone Island** — Shares a product-first technical-clothing language where material detail and functional context carry the visuals.

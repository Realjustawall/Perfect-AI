# Apple — Style Reference
> Midnight endurance instrument. Build screens as a sequence of black exhibition bays where oversized SF Pro headlines frame precision hardware, active data, and carefully rationed electric color.

**Theme:** dark

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Apple — midnight endurance instrument. The page stages a titanium watch as an isolated object against near-black, with enormous white display type, dense product crops, and color withheld until it signals battery, links, or purchase. Rounded media tiles interrupt the black canvas in long, cinematic sections; pale cards and white footer bands arrive late as contrast breaks rather than becoming the default surface.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Polar White | `#f5f5f7` | `--color-polar-white` | Primary headlines, body copy on dark surfaces, light tile backgrounds, footer bands |
| Absolute Black | `#000000` | `--color-absolute-black` | Hero canvas, immersive product media, dark cards |
| Carbon | `#111111` | `--color-carbon` | Page canvas, local navigation bar, dark section bands |
| White | `#ffffff` | `--color-white` | Light content tiles, dark-surface button text |
| Graphite | `#1d1d1f` | `--color-graphite` | Primary text on White and Polar White surfaces |
| Steel | `#86868b` | `--color-steel` | Muted body copy, inactive labels, subdued control fills |
| Divider Gray | `#6e6e73` | `--color-divider-gray` | 1px input borders and restrained dividers |
| Control Charcoal | `#333336` | `--color-control-charcoal` | Dark translucent control and selector fills |
| Glyph Silver | `#cccccc` | `--color-glyph-silver` | Global navigation icons and secondary navigation glyphs |
| Battery Green | `#00d959` | `--color-battery-green` | Battery-performance display headlines and metrics — vivid green makes endurance data read like an instrument signal |
| Link Blue | `#0066cc` | `--color-link-blue` | Inline editorial links and technical-reference navigation |
| Purchase Blue | `#0071e3` | `--color-purchase-blue` | Filled Buy and Learn more buttons — the sole saturated purchase punctuation on black navigation and media |
| Launch Orange | `#ff791b` | `--color-launch-orange` | Availability badge text for future-release messaging |
| New Orange | `#b64400` | `--color-new-orange` | New-status badge text |
| Ember Black | `#311400` | `--color-ember-black` | Dark orange-tinted availability badge surface |

## Tokens — Typography

### SF Pro Display — Product display headlines and large numerical callouts. The 64px/68px, -0.576px headline treatment is forceful without becoming heavy; near-tight tracking keeps large all-caps statements compact. · `--font-sf-pro-display`
- **Substitute:** Inter
- **Weights:** 600
- **Sizes:** 19px, 21px, 28px, 32px, 40px, 48px, 56px, 64px
- **Line height:** 1.00-1.42
- **Letter spacing:** -0.576px at 64px; -0.144px at 48px; +0.128px at 32px; across the family -0.009em to 0.012em
- **OpenType features:** `"numr"`
- **Role:** Product display headlines and large numerical callouts. The 64px/68px, -0.576px headline treatment is forceful without becoming heavy; near-tight tracking keeps large all-caps statements compact.

### SF Pro Text — Navigation, purchase controls, product copy, labels, and compact section headings. At 12px it gives the global navigation its compressed Apple cadence; 17px/600 is used for local product identity and emphatic compact headings. · `--font-sf-pro-text`
- **Substitute:** Inter
- **Weights:** 400, 600
- **Sizes:** 10px, 12px, 14px, 17px, 20px, 26px, 44px
- **Line height:** 1.00-1.83
- **Letter spacing:** -0.37px at 10px; -0.12px at 12px; -0.224px at 14px and 17px; across the family -0.037em to -0.003em
- **OpenType features:** `"numr"`
- **Role:** Navigation, purchase controls, product copy, labels, and compact section headings. At 12px it gives the global navigation its compressed Apple cadence; 17px/600 is used for local product identity and emphatic compact headings.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| micro-label | SF Pro Text | 600 | 10px | 1.24 | -0.37px | `--text-micro-label` |
| global-nav | SF Pro Text | 400 | 12px | 1 | -0.12px | `--text-global-nav` |
| button-label | SF Pro Text | 400 | 12px | 1.33 | -0.12px | `--text-button-label` |
| body | SF Pro Text | 400 | 17px | 1.47 | -0.374px | `--text-body` |
| body-strong | SF Pro Text | 600 | 17px | 1.24 | -0.374px | `--text-body-strong` |
| product-label | SF Pro Display | 600 | 19px | 1.21 | 0.228px | `--text-product-label` |
| section-heading | SF Pro Display | 600 | 28px | 1.14 | 0.196px | `--text-section-heading` |
| metric-heading | SF Pro Display | 600 | 32px | 1.13 | 0.128px | `--text-metric-heading` |
| display-metric | SF Pro Display | 600 | 48px | 1 | -0.144px | `--text-display-metric` |
| hero-display | SF Pro Display | 600 | 64px | 1.06 | -0.576px | `--text-hero-display` |
| accent-display | SF Pro Display | 600 | 64px | 1.06 | -0.576px | `--text-accent-display` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 10 | 10px | `--spacing-10` |
| 12 | 12px | `--spacing-12` |
| 14 | 14px | `--spacing-14` |
| 16 | 16px | `--spacing-16` |
| 18 | 18px | `--spacing-18` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 90 | 90px | `--spacing-90` |
| 144 | 144px | `--spacing-144` |
| 210 | 210px | `--spacing-210` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 28px |
| links | 10px |
| pills | 9999px |
| badges | 5px |
| inputs | 980px |
| buttons | 980px |
| mediaTiles | 28px |
| selectorChips | 36px |

### Layout

- **Section gap:** 24px
- **Card padding:** 16px
- **Element gap:** 4px

## Components

### Global Commerce Navigation
**Role:** 44px sitewide product navigation

Use a #111111 bar with compact SF Pro Text 12px/12px weight 400 labels in rgba(255,255,255,0.8), #cccccc utility glyphs, and 4px-scale internal gaps. Keep the Apple mark and category links visually smaller than the product content.

### Product Local Navigation
**Role:** 52px product-specific subnavigation

Set a #111111 bar directly beneath the global navigation. Render the product title in SF Pro Text 17px/21px weight 600 in rgba(255,255,255,0.8); render supporting links at 12px/12px and use a fine Polar White active underline.

### Purchase Blue Pill Button
**Role:** Compact conversion button

Fill with Purchase Blue #0071e3, set White text in SF Pro Text 12px/16px weight 400, use a 980px radius, and pad 3px vertically and 10px horizontally.

### Dark Selector Chip
**Role:** Product-detail tabs and feature selectors

Use rgba(66,66,69,0.72) fill, rgba(255,255,255,0.8) text, 36px radius, and no visible border. Present inactive controls as compact floating pills on #000000 media.

### Light Selector Chip
**Role:** Controls placed on pale sections

Use transparent fill with Graphite #1d1d1f text and border, 28px radius, and no added padding beyond the measured control content.

### Hero Purchase Stack
**Role:** Centered purchase affordance beneath the hero product render

Place a Purchase Blue #0071e3 980px-radius button above centered Polar White pricing copy in SF Pro Text 14px/18px weight 600. Keep the supporting finance line in the same 14px/18px treatment.

### Black Product Media Tile
**Role:** Contained cinematic feature card

Use #000000 surface, 28px corner radius, no shadow, and 14px padding when a framed internal product view is needed. Crop product photography aggressively against black so hardware edges dissolve into the canvas.

### White Information Tile
**Role:** Late-page retail and informational card

Use #ffffff background, 28px radius, no shadow, Graphite #1d1d1f text, and 16px minimum internal padding. This is a deliberate inversion from the dark product-story tiles.

### Feature Accordion Row
**Role:** Expandable hardware-detail navigation

Render each row as a Control Charcoal #333336 pill with 36px radius and rgba(255,255,255,0.8) text. Prepend a circular plus glyph; the selected row may use a brighter gray fill without changing the pill geometry.

### Availability Badge
**Role:** Release-status label

Use Launch Orange #ff791b text for future availability or New Orange #b64400 for newness. Pair release text with Ember Black #311400 when a colored badge surface is required; set SF Pro Text 12px/16px weight 600.

### Pill Search Input
**Role:** Dark utility input

Use rgba(255,255,255,0.04) fill, Polar White #f5f5f7 text, a 1px Divider Gray #6e6e73 border, 980px radius, 24px left padding, and 45px right padding.

### Technical Reference Link
**Role:** Inline navigation into detailed specifications

Use Link Blue #0066cc as unfilled text links; reserve the color for references and editorial navigation rather than filled controls.

## Do's and Don'ts

### Do
- Use Absolute Black #000000 for hero product stages and Carbon #111111 for the surrounding page bands.
- Set display statements in SF Pro Display 600; use the measured 64px/68px/-0.576px treatment for hero-scale headlines.
- Use Polar White #f5f5f7 for text on black and Graphite #1d1d1f for text on White #ffffff tiles.
- Use 28px radius on media tiles and cards; use 36px only for dark selector chips.
- Use Purchase Blue #0071e3 only on compact filled Buy or Learn more buttons with 980px radius and 3px 10px padding.
- Reserve Battery Green #00d959 for battery and performance metrics, not navigation or purchase controls.
- Keep global navigation at 44px high with SF Pro Text 12px/12px labels.

### Don't
- Do not place gradients behind the hero hardware; keep its stage #000000.
- Do not use rectangular 4px or 8px button corners; use 980px or 9999px radii for pill controls.
- Do not turn Link Blue #0066cc into a filled button background; use Purchase Blue #0071e3 for supported filled purchase controls.
- Do not use Battery Green #00d959 as a generic success state or card fill.
- Do not add drop shadows to 28px media tiles and cards; their separation comes from canvas contrast and clipping.
- Do not use warm lifestyle photography as the dominant visual; favor isolated product hardware, athletic movement, and data-led product views.
- Do not loosen display tracking beyond the measured SF Pro Display range of -0.009em to 0.012em.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Carbon Canvas | `#111111` | Default dark page background and navigation bands |
| 1 | Black Media Stage | `#000000` | Hero, immersive product renders, and dark media cards |
| 2 | Control Charcoal | `#333336` | Floating feature chips and dark selector controls |
| 3 | White Retail Tile | `#ffffff` | Pale informational and retail cards |
| 4 | Polar Footer Band | `#f5f5f7` | Footer and broad light-content bands |

## Elevation

Avoid box shadows entirely on cards and media. Depth comes from the switch between #111111 page bands, #000000 image stages, clipped 28px tile edges, and the occasional white surface.

## Imagery

Imagery is product-first and cinematic: large isolated Apple Watch renders float on pure black, tightly cropped to show case edges, crown texture, straps, and illuminated watch faces. Feature media includes high-contrast black-and-white athletic photography with overlaid white copy and restrained Battery Green data emphasis. Visuals occupy more area than prose, remain contained in 28px rounded tiles when framed, and use no decorative illustration layer; icons are small monochrome utility glyphs while watch-face content supplies the only dense multicolor detail.

## Layout

The page is a vertically sequenced product narrative on Carbon #111111 and Absolute Black #000000, led by a 44px global bar and a 52px local product bar. The opening screen centers a small product lockup, a large all-caps display statement, a floating watch render, and a compact centered purchase stack. Subsequent sections use left-aligned oversized section headings followed by wide, rounded 28px cinematic tiles; content alternates between full-width product photography, text-over-media highlights, and close-look modules with a left column of selector pills beside an oversized hardware crop. The long page stays spacious and image-led, then transitions into pale retail, environmental, value, and cross-product sections near the footer.

## Agent Prompt Guide

Quick Color Reference:
- Polar White: #f5f5f7 — Primary headlines, body copy on dark surfaces, light tile backgrounds, footer bands
- Absolute Black: #000000 — Hero canvas, immersive product media, dark cards
- Carbon: #111111 — Page canvas, local navigation bar, dark section bands
- White: #ffffff — Light content tiles, dark-surface button text
- Graphite: #1d1d1f — Primary text on White and Polar White surfaces
- Steel: #86868b — Muted body copy, inactive labels, subdued control fills
- Divider Gray: #6e6e73 — 1px input borders and restrained dividers
- Control Charcoal: #333336 — Dark translucent control and selector fills
- Glyph Silver: #cccccc — Global navigation icons and secondary navigation glyphs
- Battery Green: #00d959 — Battery-performance display headlines and metrics — vivid green makes endurance data read like an instrument signal
- Link Blue: #0066cc — Inline editorial links and technical-reference navigation
- Purchase Blue: #0071e3 — Filled Buy and Learn more buttons — the sole saturated purchase punctuation on black navigation and media
- Launch Orange: #ff791b — Availability badge text for future-release messaging
- New Orange: #b64400 — New-status badge text
- Ember Black: #311400 — Dark orange-tinted availability badge surface

Create a black product hero with an isolated titanium smartwatch render centered below a SF Pro Display 64px/68px weight 600 uppercase Polar White headline with -0.576px tracking; add a compact Purchase Blue #0071e3 Buy pill and Polar White SF Pro Text 14px/18px pricing beneath.
Create a Carbon #111111 highlights section with a left-aligned Polar White SF Pro Display heading and one 28px-radius black-and-white running photograph tile; overlay Polar White SF Pro Text 17px/25px copy and emphasize the battery metric in Battery Green #00d959.
Create a #000000 close-look module with a left stack of rgba(66,66,69,0.72) 36px-radius selector pills in rgba(255,255,255,0.8), beside an oversized cropped watch render; use Polar White SF Pro Display headings.
Create a White #ffffff 28px-radius information tile with Graphite #1d1d1f SF Pro Text content and a Link Blue #0066cc text-only reference link; do not add shadows.

## Similar Brands

- **Apple iPhone Pro** — Same black hardware-stage heroes, oversized SF Pro display typography, and compact blue purchase pills.
- **Apple AirPods Pro** — Shares isolated product photography on black, sparse navigation, and rounded media-card framing.
- **Garmin** — Shares data-led endurance storytelling and performance metrics, though Apple uses more cinematic black space.
- **Nike** — Shares tightly cropped high-contrast athlete imagery and kinetic performance framing against dark fields.

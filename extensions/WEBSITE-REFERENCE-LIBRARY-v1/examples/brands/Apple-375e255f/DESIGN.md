# Apple — Style Reference
> Bronze sensor in darkness. Treat the watch hardware and its health readings as illuminated objects suspended in a near-black gallery.

**Theme:** dark

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Apple Watch Series 12 uses a cinematic black field interrupted by contained white merchandising panels and large, softly rounded product modules. Monumental SF Pro Display headlines sit directly against product imagery, while small SF Pro Text labels, pricing, and navigation stay tightly tracked and subdued. Saturated blue is reserved for purchase controls and deep links; red and luminous green belong to health metrics inside product demonstrations rather than general interface chrome.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Gallery Black | `#000000` | `--color-gallery-black` | Full-bleed hero backgrounds, black media cards, product-stage canvas |
| Charcoal Stage | `#111111` | `--color-charcoal-stage` | Dark section backgrounds and contained comparison modules |
| Ink | `#1d1d1f` | `--color-ink` | Primary text on white surfaces, dark control text |
| Porcelain | `#f5f5f7` | `--color-porcelain` | Primary text on dark surfaces, pale alternate section fill |
| Paper | `#ffffff` | `--color-paper` | White merchandising surfaces, card fills, bright button and text treatment |
| Steel | `#86868b` | `--color-steel` | Secondary copy, subdued control fills, inactive interface details |
| Graphite | `#6e6e73` | `--color-graphite` | Muted helper text and 1px input outlines |
| Control Charcoal | `#333336` | `--color-control-charcoal` | Dark translucent-looking utility control fills and navigation details |
| Cloud Gray | `#e8e8ed` | `--color-cloud-gray` | Light neutral fills for quiet supporting surfaces |
| Apple Blue | `#0071e3` | `--color-apple-blue` | Filled purchase buttons and focus treatment — the single vivid purchase signal within the monochrome stage |
| Link Blue | `#0066cc` | `--color-link-blue` | Inline product links and informational navigation |
| Pulse Red | `#ff3037` | `--color-pulse-red` | Heart-rate numerals and health-performance emphasis inside watch content |
| Vital Green | `#00d959` | `--color-vital-green` | Battery-duration metrics and glowing health-sensor readouts |
| Signal Orange | `#ff791b` | `--color-signal-orange` | Availability-status badge text |
| New Orange | `#b64400` | `--color-new-orange` | Compact new-item badge text on light contexts |
| Burnt Badge Wash | `#311400` | `--color-burnt-badge-wash` | Dark orange availability badge background behind Signal Orange |

## Tokens — Typography

### SF Pro Display — Large product statements, section headlines, and health metrics. The 80px hero line uses -1.2px tracking; the 56-64px headlines keep a much tighter-than-normal display rhythm, so product claims read as a single sculpted silhouette rather than stacked editorial type. · `--font-sf-pro-display`
- **Substitute:** Inter
- **Weights:** 600
- **Sizes:** 19px, 21px, 28px, 48px, 56px, 64px, 80px
- **Line height:** 1.00-1.38
- **Letter spacing:** -1.2px at 80px, -0.576px at 64px, -0.28px at 56px, -0.144px at 48px; slight positive tracking appears at smaller display sizes
- **OpenType features:** `"numr"`
- **Role:** Large product statements, section headlines, and health metrics. The 80px hero line uses -1.2px tracking; the 56-64px headlines keep a much tighter-than-normal display rhythm, so product claims read as a single sculpted silhouette rather than stacked editorial type.

### SF Pro Text — Navigation, links, body copy, product-card labels, pricing, badges, and compact feature titles. Small UI copy remains optically compact with negative tracking, while 17px body copy opens to a 1.47 line-height for explanatory text. · `--font-sf-pro-text`
- **Substitute:** Inter
- **Weights:** 400, 600
- **Sizes:** 10px, 12px, 14px, 17px, 20px, 26px, 34px, 44px
- **Line height:** 1.00-1.83
- **Letter spacing:** -0.444px at 12px, -0.374px at 17px, -0.224px at 14px; -0.037em at 10px
- **OpenType features:** `"numr"`
- **Role:** Navigation, links, body copy, product-card labels, pricing, badges, and compact feature titles. Small UI copy remains optically compact with negative tracking, while 17px body copy opens to a 1.47 line-height for explanatory text.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| nav | SF Pro Text | 400 | 12px | 1 | -0.12px | `--text-nav` |
| utility-button | SF Pro Text | 400 | 12px | 1.33 | -0.12px | `--text-utility-button` |
| body-strong | SF Pro Text | 600 | 14px | 1.29 | -0.224px | `--text-body-strong` |
| body | SF Pro Text | 400 | 17px | 1.47 | -0.374px | `--text-body` |
| feature-label | SF Pro Text | 600 | 17px | 1.24 | -0.374px | `--text-feature-label` |
| card-heading | SF Pro Display | 600 | 28px | 1.14 | 0.196px | `--text-card-heading` |
| metric-display | SF Pro Display | 600 | 48px | 1 | -0.144px | `--text-metric-display` |
| section-heading | SF Pro Display | 600 | 56px | 1.07 | -0.28px | `--text-section-heading` |
| feature-display | SF Pro Display | 600 | 64px | 1.06 | -0.576px | `--text-feature-display` |
| hero-display | SF Pro Display | 600 | 80px | 1.05 | -1.2px | `--text-hero-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 52 | 52px | `--spacing-52` |
| 76 | 76px | `--spacing-76` |
| 80 | 80px | `--spacing-80` |
| 120 | 120px | `--spacing-120` |
| 144 | 144px | `--spacing-144` |
| 208 | 208px | `--spacing-208` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 28px |
| links | 10px |
| badges | 5px |
| inputs | 980px |
| buttons | 9999px |
| utilityControls | 36px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgb(245, 245, 247) 0px -1px 0px 0px` | `--shadow-subtle` |

### Layout

- **Section gap:** 24px
- **Card padding:** 16px
- **Element gap:** 4px

## Components

### Global Navigation Bar
**Role:** Persistent top-level product navigation

Use a 44px-tall #111111 bar with compact SF Pro Text 12px/400 navigation labels at -0.12px tracking, rendered at 80% white. Keep brand identification in SF Pro Text 17px/600 and use #cccccc for glyph icons.

### Local Product Navigation
**Role:** Product-level navigation below the global bar

Use a 52px bar beneath global navigation. Keep its field dark, with restrained #f5f5f7 product text and a single Apple Blue purchase pill reserved for the buy route.

### Blue Purchase Pill
**Role:** Filled purchase action

Fill with Apple Blue (#0071e3), set text in white, and use a 980px pill radius. The compact product purchase treatment uses SF Pro Text 12px/400, 16px line-height, and -0.12px tracking.

### White Outline Pill
**Role:** Dark-stage secondary product control

Use transparent fill, white text and border, 999px radius, and 16px horizontal padding. Do not convert this treatment into a filled neutral button.

### Dark Utility Capsule
**Role:** Floating price and financing summary

Use a #333336 capsule on the black hero with a 36px radius. Set pricing lines in #f5f5f7 SF Pro Text 14px/600 with 18px line-height; attach the Apple Blue 980px-radius purchase pill at the trailing edge.

### Hero Product Stage
**Role:** Full-bleed launch statement and hardware showcase

Set the stage on Gallery Black (#000000), with a large isolated hardware render and #f5f5f7 SF Pro Display 80px/600 headline at 84px line-height and -1.2px tracking. Keep ancillary labels small and avoid container borders or shadows.

### Black Feature Media Card
**Role:** Health-feature storytelling panel

Use a #000000 fill with a 28px radius and no shadow. Combine a contained watch render or interface animation with #f5f5f7 SF Pro Text 17px/600 labels; reserve Pulse Red (#ff3037) and Vital Green (#00d959) for the demonstrated metric.

### White Merchandising Card
**Role:** Light-surface product or commerce panel

Use Paper (#ffffff) with a 28px radius and no shadow. Set headline and control text in Ink (#1d1d1f); card outer spacing is carried by the page rather than an invented internal padding system.

### Upgrade Comparison Module
**Role:** Contained upgrade selector and feature matrix

Place on Charcoal Stage (#111111) with a 28px radius. Use #f5f5f7 SF Pro Display 56px/600 at 60px line-height for the statement, then arrange compact black feature tiles in a three-column grid with 16px card padding.

### Feature Metric Tile
**Role:** Small benefit card within dark comparison modules

Use Gallery Black (#000000), 28px radius, no shadow, and 16px padding. Set supporting labels in Steel (#86868b); health or battery values may use Vital Green (#00d959) or Pulse Red (#ff3037) only when the metric itself warrants color.

### Pill Select Input
**Role:** Device-model selector

Use rgba(255,255,255,0.04) fill, a 1px Graphite (#6e6e73) outline, #f5f5f7 value text, 980px radius, 24px left padding, and 45px right padding. Preserve the low-contrast dark control rather than using a white form field.

### Availability Badge
**Role:** Future-release status marker

Use Burnt Badge Wash (#311400) with Signal Orange (#ff791b) text, a 5px radius, and 4px 6px padding. Typography is SF Pro Text 12px/600 with 16px line-height and -0.12px tracking.

### Inline Product Link
**Role:** Textual detail navigation

Set in Link Blue (#0066cc) without a filled background. Keep link treatment embedded in SF Pro Text body copy rather than promoting it to a pill or button.

## Do's and Don'ts

### Do
- Build dark hero and media stages with Gallery Black (#000000) and set their principal copy in Porcelain (#f5f5f7).
- Use 28px radius for media cards, comparison modules, and white merchandising cards.
- Use 9999px or 980px radius for pills, purchase controls, and select inputs.
- Keep purchase fills Apple Blue (#0071e3) with white text; use Link Blue (#0066cc) only for inline text links.
- Use SF Pro Display 80px/600, 84px line-height, and -1.2px tracking for the largest launch statement.
- Use a 4px base rhythm; apply 16px padding to black feature tiles and 24px section gaps between adjacent module groups.
- Reserve Pulse Red (#ff3037) and Vital Green (#00d959) for quantified health and battery content inside product demonstrations.

### Don't
- Do not use shadows to lift cards; use #000000 and #111111 surface changes with 28px corners.
- Do not apply Apple Blue (#0071e3) to navigation, decorative graphics, or every control.
- Do not replace the dark pill select with a rectangular white input; retain the 980px radius and #6e6e73 outline.
- Do not use 8px or 12px card corners; cards and contained media use 28px radius.
- Do not set large display headlines in a heavy 700-900 weight; use SF Pro Display 600.
- Do not place Pulse Red (#ff3037), Vital Green (#00d959), or Signal Orange (#ff791b) in generic decorative gradients.
- Do not crowd feature tiles with more than 16px internal padding or replace their black fill with elevated gray.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Gallery Black | `#000000` | Hero canvas and black feature-media panels |
| 1 | Charcoal Stage | `#111111` | Dark section bands and comparison-module backgrounds |
| 2 | Paper | `#ffffff` | Light merchandising canvas and white card surfaces |
| 3 | Porcelain | `#f5f5f7` | Pale alternate fill and primary copy on dark surfaces |

## Elevation

Avoid drop shadows entirely. Product hierarchy comes from full-bleed black stages, the #000000-to-#111111 surface step, large 28px corner cuts, and occasional 1px #f5f5f7 top-edge separation.

## Imagery

Imagery is product-first 3D hardware photography and close-cropped watch-interface visualization, not lifestyle photography. Watches float or stand against pure black with dramatic bronze-metal highlights, raw black-edge blending, and no visible framed image boundary beyond the 28px media-card mask. Health screens provide explanatory content through red heart graphics, green sensor glow, and readable watch UI; imagery occupies more visual area than surrounding copy. Navigation icons are small monochrome glyphs, while the pause control appears as a compact circular dark overlay.

## Layout

The page opens with a 44px global navigation bar and a 52px local product bar over a full-bleed black hero. The hero places a huge isolated watch render centrally toward the right, while the 80px launch line occupies the lower left and a floating purchase capsule sits low on the opposite side. Subsequent dark sections use a centered content field with large section headings, then broad 28px-radius black media cards; feature imagery and short copy are often arranged side by side within those cards. Later commerce and comparison content breaks the black sequence with a white page field holding a large #111111 rounded module, followed by dense three-column metric-tile grids and lower informational sections.

## Agent Prompt Guide

Quick Color Reference:
- Gallery Black: #000000 — Full-bleed hero backgrounds, black media cards, product-stage canvas
- Charcoal Stage: #111111 — Dark section backgrounds and contained comparison modules
- Ink: #1d1d1f — Primary text on white surfaces, dark control text
- Porcelain: #f5f5f7 — Primary text on dark surfaces, pale alternate section fill
- Paper: #ffffff — White merchandising surfaces, card fills, bright button and text treatment
- Steel: #86868b — Secondary copy, subdued control fills, inactive interface details
- Graphite: #6e6e73 — Muted helper text and 1px input outlines
- Control Charcoal: #333336 — Dark translucent-looking utility control fills and navigation details
- Cloud Gray: #e8e8ed — Light neutral fills for quiet supporting surfaces
- Apple Blue: #0071e3 — Filled purchase buttons and focus treatment — the single vivid purchase signal within the monochrome stage
- Link Blue: #0066cc — Inline product links and informational navigation
- Pulse Red: #ff3037 — Heart-rate numerals and health-performance emphasis inside watch content
- Vital Green: #00d959 — Battery-duration metrics and glowing health-sensor readouts
- Signal Orange: #ff791b — Availability-status badge text
- New Orange: #b64400 — Compact new-item badge text on light contexts
- Burnt Badge Wash: #311400 — Dark orange availability badge background behind Signal Orange

Create a full-bleed Gallery Black hero with a bronze Apple Watch hardware render cropped large at center-right; place a Porcelain headline in SF Pro Display 80px/600, 84px line-height, -1.2px tracking at lower left, and attach a Control Charcoal financing capsule with an Apple Blue purchase pill.
Create a Charcoal Stage comparison module with 28px corners; set its lead statement in Porcelain SF Pro Display 56px/600, 60px line-height, then place three Gallery Black 28px metric tiles per row with 16px padding.
Create a Gallery Black health-feature media card with 28px corners: pair Porcelain SF Pro Text 17px/600 copy with two large watch renders, using Pulse Red for heart-rate readouts and Vital Green for the sensor graphic.
Create a Paper commerce section around a single Charcoal Stage 28px-radius module; set all module copy in Porcelain and use the Pill Select Input with its #6e6e73 outline and 980px radius.

## Similar Brands

- **Apple iPhone** — Shares the full-bleed product-render hero, SF Pro display typography, black launch stage, and restrained blue purchase pills.
- **Apple AirPods Pro** — Uses isolated hardware as the dominant visual object against uninterrupted dark or light product-gallery backgrounds.
- **Google Pixel Watch** — Combines large wearable hardware photography with health-dashboard color accents and contained feature storytelling.
- **Garmin** — Shares quantified health and fitness visualization, especially vivid metric colors embedded within wearable product screens.

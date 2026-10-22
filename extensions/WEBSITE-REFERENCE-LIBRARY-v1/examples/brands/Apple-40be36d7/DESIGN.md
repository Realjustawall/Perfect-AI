# Apple — Style Reference
> Midnight hardware gallery. Treat each section as a dark, museum-like plinth for one precisely lit product detail, with typography and blue controls operating as restrained labels around it.

**Theme:** dark

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Apple — a black-stage product reveal where oversized SF Pro Display headlines sit beneath meticulously rendered hardware imagery. The page moves between absolute black hero scenes, charcoal information bands, and occasional white comparison surfaces; blue is reserved for purchase and navigational links while burgundy product finishes stay inside the device storytelling. Broad 28px media corners, near-invisible elevation, compact utility navigation, and dense product-detail modules make the interface feel like a controlled exhibition rather than a conventional card-based storefront.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Obsidian | `#000000` | `--color-obsidian` | Hero canvas, full-bleed media stages, feature-tile backgrounds, and dark product controls |
| Graphite | `#0e0e0e` | `--color-graphite` | Raised navigation and near-black control surfaces |
| Carbon | `linear-gradient(#1d1d1f, #000000 288px)` | `--color-carbon` | Charcoal content bands, comparison panels, and dark text on white sections |
| Steel | `#333336` | `--color-steel` | Hairline card borders, translucent control fills, and dark chrome |
| Slate | `#6e6e73` | `--color-slate` | Input outlines, secondary dividers, and subdued interface text |
| Ash | `#86868b` | `--color-ash` | Muted explanatory copy, inactive labels, and subdued metadata |
| Porcelain | `#f5f5f7` | `--color-porcelain` | Primary text on dark surfaces and pale alternate section backgrounds |
| White | `#ffffff` | `--color-white` | High-contrast dark-surface text, bright comparison cards, and icon details |
| Apple Blue | `#0071e3` | `--color-apple-blue` | Filled Buy and Learn More controls — a concentrated blue punctuates the otherwise monochrome purchase path |
| Electric Link | `#2997ff` | `--color-electric-link` | Links on black and charcoal surfaces, including inline learning paths and section navigation |
| Cobalt Link | `#0066cc` | `--color-cobalt-link` | Links on pale surfaces and footer-like utility contexts |
| Copper New | `#b64400` | `--color-copper-new` | Small New labels and release-status annotations |
| Optical Yellow | `#ffd500` | `--color-optical-yellow` | Technical camera-spec emphasis within product storytelling |

## Tokens — Typography

### SF Pro Text — Navigation, purchase controls, links, body copy, product labels, legal markers, input text, and compact feature explanations. The compact negative tracking keeps dense interface language visually quiet beside large hardware imagery. · `--font-sf-pro-text`
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 14px, 17px, 20px, 26px, 44px
- **Line height:** 1.00, 1.18, 1.24, 1.29, 1.33, 1.43, 1.47
- **Letter spacing:** -0.264px at 12px, -0.224px at 14px, -0.374px at 17px, -0.38px at 20px, -0.26px at 26px, -0.132px at 44px
- **OpenType features:** `"numr"`
- **Role:** Navigation, purchase controls, links, body copy, product labels, legal markers, input text, and compact feature explanations. The compact negative tracking keeps dense interface language visually quiet beside large hardware imagery.

### SF Pro Display — Section labels, product names, feature metrics, and exhibition-scale headlines. At 80px and 96px, -1.2px and -1.44px tracking compress the heavy 600 weight into a single sculptural block rather than a loud promotional banner. · `--font-sf-pro-display`
- **Substitute:** Inter
- **Weights:** 500, 600
- **Sizes:** 19px, 21px, 28px, 32px, 40px, 48px, 56px, 80px, 96px
- **Line height:** 1.00, 1.04, 1.05, 1.07, 1.08, 1.13, 1.14, 1.19, 1.21, 1.38
- **Letter spacing:** -1.44px at 96px, -1.2px at 80px, -0.84px at 56px, -0.24px at 48px, -0.12px at 40px, 0.128px at 32px, 0.196px at 28px, 0.231px at 21px, 0.228px at 19px
- **OpenType features:** `"numr"`
- **Role:** Section labels, product names, feature metrics, and exhibition-scale headlines. At 80px and 96px, -1.2px and -1.44px tracking compress the heavy 600 weight into a single sculptural block rather than a loud promotional banner.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| utility-nav | SF Pro Text | 400 | 12px | 1.33 | -0.12px | `--text-utility-nav` |
| body | SF Pro Text | 400 | 14px | 1.29 | -0.224px | `--text-body` |
| body-strong | SF Pro Text | 600 | 14px | 1.29 | -0.224px | `--text-body-strong` |
| section-nav | SF Pro Text | 500 | 17px | 1.47 | -0.374px | `--text-section-nav` |
| product-label | SF Pro Display | 600 | 19px | 1.21 | 0.228px | `--text-product-label` |
| feature-stat | SF Pro Display | 600 | 28px | 1 | 0.196px | `--text-feature-stat` |
| hero-product-name | SF Pro Display | 600 | 32px | 1.13 | 0.128px | `--text-hero-product-name` |
| display | SF Pro Display | 600 | 80px | 1.05 | -1.2px | `--text-display` |
| display-xl | SF Pro Display | 600 | 96px | 1.04 | -1.44px | `--text-display-xl` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 6 | 6px | `--spacing-6` |
| 7 | 7px | `--spacing-7` |
| 8 | 8px | `--spacing-8` |
| 10 | 10px | `--spacing-10` |
| 12 | 12px | `--spacing-12` |
| 14 | 14px | `--spacing-14` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 32 | 32px | `--spacing-32` |
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
| images | 28px |
| inputs | 980px |
| buttons | 170px |
| navigation | 20px |
| compactButtons | 36px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgb(40, 40, 40) 0px 0px 0px 1px` | `--shadow-subtle` |
| subtle-2 | `rgb(110, 110, 115) 0px 0px 0px 1px` | `--shadow-subtle-2` |

### Layout

- **Section gap:** 24px
- **Card padding:** 16px
- **Element gap:** 4px

## Components

### Global Utility Navigation
**Role:** 44px-tall global product navigation

Use a #000000 bar with compact SF Pro Text at 12px/400, -0.12px tracking, and rgba(255,255,255,0.8) labels. Keep logo and utility glyphs #cccccc; opened dark navigation uses #161617 with a 20px radius where it becomes contained.

### Upgrade Announcement Strip
**Role:** Global promotional message

Set the strip on #1d1d1f with 14px/400 SF Pro Text in #f5f5f7, 20px line-height, and -0.224px tracking. Render embedded links in Electric Link #2997ff.

### Product Section Navigation
**Role:** Sticky local product header

Use a #0e0e0e contained bar with a 20px radius and a 1px #282828 keyline. Product name is SF Pro Display 19px/600, #f5f5f7; section links use SF Pro Text 17px/500, 25px line-height, and -0.374px tracking.

### Blue Purchase Pill
**Role:** Filled purchase control

Fill with Apple Blue #0071e3, set white SF Pro Text at 12px/400 with 16px line-height and -0.12px tracking, and use a 170px radius. Compact instances use 7px vertical and 14px horizontal padding.

### Dark Pricing Capsule
**Role:** Hero price and financing disclosure

Use rgba(66,66,69,0.72) fill with rgba(255,255,255,0.8) text and a 36px radius. Pair it directly with the Blue Purchase Pill rather than turning every hero action into a blue block.

### Outlined Explore Pill
**Role:** Secondary local-navigation control

Use transparent fill, #f5f5f7 text, a 1px #6e6e73 outline, and a 9999px radius. Keep the label in SF Pro Text at 12px/400, 16px line-height, with -0.12px tracking.

### Hero Product Stage
**Role:** Full-bleed product reveal

Place photorealistic hardware on an uninterrupted #000000 stage. Use #f5f5f7 SF Pro Display product name at 32px/600, 36px line-height, and a 80px/600, 84px-line-height display statement with -1.2px tracking; position pricing controls along the lower edge.

### Highlights Media Frame
**Role:** Large feature-film or camera demonstration

Use a contained cinematic image or video with a 28px radius and no drop shadow. Overlay #f5f5f7 SF Pro Display messaging directly over dark imagery; playback pagination lives in a translucent #333336 pill.

### Feature Metric Tile
**Role:** Product capability module

Use #000000 fill and a 28px radius with no shadow. Center product crop or technical iconography with #f5f5f7 SF Pro Display at 28px/600, 28px line-height, 0.196px tracking, plus supporting #86868b SF Pro Text.

### Upgrade Comparison Panel
**Role:** Device comparison workspace

Set the parent panel on #1d1d1f with a 28px radius and no shadow. Use #f5f5f7 SF Pro Display at 40px or larger for the comparison statement, #86868b for support text, and arrange black 28px feature tiles in a multi-column grid.

### Device Selector Input
**Role:** Comparison device picker

Use rgba(255,255,255,0.04) fill, a 1px #6e6e73 border, #f5f5f7 input text, 980px radius, and 24px left / 45px right padding. Apply a 1px Apple Blue #0071e3 focus outline with a 1px offset.

### New Release Marker
**Role:** Small status label

Render as text-only Copper New #b64400 in SF Pro Text 12px/600, 16px line-height, and -0.12px tracking. Do not place it in a colored badge container.

### Pale Comparison Card
**Role:** Light-mode product comparison surface

Use #ffffff fill, #1d1d1f text, a 28px radius, and no shadow. Preserve the same 16px internal spacing rhythm as dark tiles; use Cobalt Link #0066cc for links.

## Do's and Don'ts

### Do
- Use Obsidian #000000 for full-bleed product reveals and Feature Metric Tile backgrounds.
- Set dark-surface headlines in Porcelain #f5f5f7; use Ash #86868b for supporting copy.
- Use SF Pro Display 80px/600 with 84px line-height and -1.2px tracking for hero-scale statements.
- Use 28px corners for media frames, comparison panels, and feature tiles.
- Reserve Apple Blue #0071e3 filled pills for Buy and Learn More controls.
- Use Electric Link #2997ff for links on Carbon #1d1d1f or Obsidian #000000 surfaces and Cobalt Link #0066cc on White #ffffff surfaces.
- Keep local product navigation at 20px radius and global utility navigation at 44px height.

### Don't
- Do not use shadows on product media, cards, or comparison tiles; retain 28px shape separation instead.
- Do not use Apple Blue #0071e3 as a general section background or feature-card fill.
- Do not round feature tiles below 28px or replace purchase pills with rectangular buttons.
- Do not use White #ffffff as the default dark-surface headline color when Porcelain #f5f5f7 is available.
- Do not set hero display text in SF Pro Text or above the measured 96px/600 display treatment.
- Do not use Copper New #b64400 for error messages, purchase controls, or large headings.
- Do not introduce gradients beyond the Carbon #1d1d1f-to-Obsidian #000000 section fade.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Obsidian Stage | `#000000` | Full-bleed hero, product media, and black feature-tile canvas. |
| 1 | Graphite Chrome | `#0e0e0e` | Raised local navigation and dark control surfaces. |
| 2 | Carbon Panel | `#1d1d1f` | Charcoal content sections and rounded comparison workspaces. |
| 3 | White Comparison | `#ffffff` | Pale product-comparison cards and light contextual surfaces. |

## Elevation

Elevation is almost entirely absent: separate layers through black-to-charcoal surface shifts, 1px keylines, blur-backed navigation, and 28px media geometry. The only shadow-like treatment is a 1px outline—rgb(40, 40, 40) 0px 0px 0px 1px on navigation and rgb(110, 110, 115) 0px 0px 0px 1px on compact outlined controls.

## Imagery

Imagery is product-first, not lifestyle-first: large photorealistic iPhone renders, extreme camera-module crops, illuminated chip graphics, and sparse capability symbols occupy most of the visual field. Hardware is isolated against pure black or deep burgundy-black environments, with high-contrast rim lighting and glossy metal detail; media is contained in 28px rounded frames when it enters content sections. Visuals explain specific product systems—camera, processor, battery, and controls—while text overlays remain minimal and bright. Icons are predominantly monochrome, thin utility glyphs; the single green battery graphic and occasional yellow camera value operate as technical visual cues, not a broad illustration palette.

## Layout

The page is a long, full-bleed dark product narrative under a compact global utility bar, a 72px announcement strip, and a contained local product-navigation bar. The opening screen is an Obsidian hardware stage: a centered phone render dominates the upper field while product name, oversized slogan, pricing capsule, and Buy pill anchor the lower edge. Subsequent sections switch to Carbon bands with contained headers and wide 28px media frames, then move into a large rounded comparison panel with a multi-column grid of black feature tiles. Content remains spacious at the page level but tightly composed inside media overlays and feature modules; white comparison surfaces appear later as deliberate visual resets rather than alternating page bands.

## Agent Prompt Guide

Quick Color Reference:
- Obsidian: #000000 — Hero canvas, full-bleed media stages, feature-tile backgrounds, and dark product controls
- Graphite: #0e0e0e — Raised navigation and near-black control surfaces
- Carbon: linear-gradient(#1d1d1f, #000000 288px) — Charcoal content bands, comparison panels, and dark text on white sections
- Steel: #333336 — Hairline card borders, translucent control fills, and dark chrome
- Slate: #6e6e73 — Input outlines, secondary dividers, and subdued interface text
- Ash: #86868b — Muted explanatory copy, inactive labels, and subdued metadata
- Porcelain: #f5f5f7 — Primary text on dark surfaces and pale alternate section backgrounds
- White: #ffffff — High-contrast dark-surface text, bright comparison cards, and icon details
- Apple Blue: #0071e3 — Filled Buy and Learn More controls — a concentrated blue punctuates the otherwise monochrome purchase path
- Electric Link: #2997ff — Links on black and charcoal surfaces, including inline learning paths and section navigation
- Cobalt Link: #0066cc — Links on pale surfaces and footer-like utility contexts
- Copper New: #b64400 — Small New labels and release-status annotations
- Optical Yellow: #ffd500 — Technical camera-spec emphasis within product storytelling

Create an Obsidian Stage hero with a centered photorealistic phone render, a #f5f5f7 SF Pro Display product label at 32px/600, 36px line-height and 0.128px tracking, then a #f5f5f7 display statement at 80px/600, 84px line-height and -1.2px tracking.
Create a compact purchase cluster: a rgba(66,66,69,0.72) pricing capsule with rgba(255,255,255,0.8) copy beside an Apple Blue #0071e3 Buy pill in SF Pro Text 12px/400, 16px line-height, -0.12px tracking, 170px radius, and 7px × 14px padding.
Create a black 28px-radius feature metric tile with an isolated chip or battery visual, a #f5f5f7 SF Pro Display metric at 28px/600, 28px line-height and 0.196px tracking, and #86868b supporting copy.
Create a Carbon #1d1d1f comparison panel with 28px corners, #f5f5f7 SF Pro Display section text, an input with rgba(255,255,255,0.04) fill and #6e6e73 border, and a grid of Obsidian 28px feature tiles.

## Similar Brands

- **Google Store** — Uses sparse hardware-led product storytelling, isolated device renders, and blue purchase controls against broad neutral fields.
- **Samsung** — Shares full-bleed flagship-device launches with cinematic black product stages and oversized display typography.
- **Sony** — Uses black product photography, technical camera emphasis, and restrained monochrome interface chrome around premium hardware.
- **Tesla** — Pairs an image-dominant dark product presentation with minimal navigation and narrowly deployed blue conversion controls.

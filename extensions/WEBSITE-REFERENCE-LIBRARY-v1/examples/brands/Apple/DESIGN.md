# Apple — Style Reference
> foldable device in a white gallery. Center product renders as the visual event, with typography and blue controls kept deliberately quiet around it.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Apple treats the product page as a white gallery: enormous product photography occupies the center while compact black typography gives each claim a controlled, almost editorial weight. The page alternates seamless white storytelling sections with #f5f5f7 feature bands containing oversized #ffffff cards, using one saturated blue only for links and compact conversion controls. Rounded 28px media frames soften the hardware-led composition without turning the page into a card dashboard; nearly every surface stays flat and shadowless.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Gallery White | `#ffffff` | `--color-gallery-white` | Primary page canvas, hero background, product story sections, and feature-card surfaces |
| Studio Mist | `#f5f5f7` | `--color-studio-mist` | Alternate full-width section background, feature-stage backdrop, footer surface, and muted content blocks |
| Paper Frost | `#fafafc` | `--color-paper-frost` | Opened global-navigation surface and secondary pale fill |
| Hairline Silver | `#d6d6d6` | `--color-hairline-silver` | 1px dividers, restrained control outlines, and subtle separators |
| Control Gray | `#e6e6e8` | `--color-control-gray` | Disabled control fills, subdued utility surfaces, and single-pixel navigation edge treatment |
| Ink | `#1d1d1f` | `--color-ink` | Headlines, primary body copy, navigation labels, and dark utility icons |
| Slate | `#707070` | `--color-slate` | Secondary copy, legal text, subdued navigation content, and low-emphasis glyphs |
| Steel | `#86868b` | `--color-steel` | Input outlines, inactive indicators, and fine outlined-control edges |
| Apple Blue | `#0066cc` | `--color-apple-blue` | Inline links, section links, and blue text controls — a precise blue punctuation against monochrome product storytelling |
| Pricing Blue | `#0071e3` | `--color-pricing-blue` | Filled pricing and learn-more controls — the brighter blue reserves visual urgency for compact conversion moments |
| Launch Orange | `#b64400` | `--color-launch-orange` | Small launch-status labels such as new-product markers |

## Tokens — Typography

### SF Pro Display — Product names, display headlines, large feature statements, and section-level product claims. The 80px/600 hero treatment tightens to -1.2px, making the largest type feel compact rather than promotional. · `--font-sf-pro-display`
- **Substitute:** Inter, Helvetica Neue, Arial
- **Weights:** 400, 500, 600
- **Sizes:** 19px, 21px, 24px, 28px, 40px, 48px, 80px
- **Line height:** 1.00, 1.05, 1.08, 1.14, 1.17, 1.21, 1.33, 1.38
- **Letter spacing:** -1.2px at 80px; normal at 40px; +0.23px at 19-21px; profile range -0.015em to 0.012em
- **OpenType features:** `"numr"`
- **Role:** Product names, display headlines, large feature statements, and section-level product claims. The 80px/600 hero treatment tightens to -1.2px, making the largest type feel compact rather than promotional.

### SF Pro Text — Navigation, body copy, links, compact buttons, pricing details, labels, and footnotes. The consistently negative tracking lets small interface text remain dense and Apple-specific instead of looking like generic system UI. · `--font-sf-pro-text`
- **Substitute:** Inter, Helvetica Neue, Arial
- **Weights:** 400, 500, 600
- **Sizes:** 10px, 12px, 14px, 17px, 20px, 26px, 44px
- **Line height:** 1.00, 1.18, 1.24, 1.29, 1.33, 1.43, 1.47
- **Letter spacing:** -0.37px at 10px, -0.12px at 12px, -0.22px at 14px, -0.37px at 17px; profile range -0.037em to -0.003em
- **OpenType features:** `"numr"`
- **Role:** Navigation, body copy, links, compact buttons, pricing details, labels, and footnotes. The consistently negative tracking lets small interface text remain dense and Apple-specific instead of looking like generic system UI.

### Arial — Fallback text inside the observed search/input control only. · `--font-arial`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.20
- **Role:** Fallback text inside the observed search/input control only.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| global-nav | SF Pro Text | 400 | 12px | 1 | -0.12px | `--text-global-nav` |
| compact-control | SF Pro Text | 400 | 12px | 1.33 | -0.12px | `--text-compact-control` |
| body-small | SF Pro Text | 400 | 14px | 1.29 | -0.224px | `--text-body-small` |
| body | SF Pro Text | 400 | 17px | 1.47 | -0.374px | `--text-body` |
| feature-copy | SF Pro Text | 400 | 17px | 1.24 | -0.374px | `--text-feature-copy` |
| product-nav-title | SF Pro Display | 600 | 19px | 1.21 | 0.228px | `--text-product-nav-title` |
| product-kicker | SF Pro Display | 600 | 21px | 1 | 0.231px | `--text-product-kicker` |
| feature-heading | SF Pro Display | 600 | 40px | 1 | 0px | `--text-feature-heading` |
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
| 64 | 64px | `--spacing-64` |
| 76 | 76px | `--spacing-76` |
| 80 | 80px | `--spacing-80` |
| 128 | 128px | `--spacing-128` |
| 144 | 144px | `--spacing-144` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 28px |
| links | 10px |
| pills | 36px |
| badges | 0px |
| images | 28px |
| inputs | 980px |
| buttons | 9999px |
| navigation | 20px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgb(230, 230, 232) 0px 0px 0px 1px` | `--shadow-subtle` |
| subtle-2 | `rgb(134, 134, 139) 0px 0px 0px 1px` | `--shadow-subtle-2` |

### Layout

- **Section gap:** 90px
- **Card padding:** 28px
- **Element gap:** 20px

## Components

### Global Store Navigation
**Role:** Persistent utility navigation

A 44px-tall white navigation bar with Apple glyph, compact SF Pro Text 12px/400 links, and rgba(0,0,0,0.8) labels. Keep controls unboxed; opened navigation uses #fafafc with a 1px #e6e6e8 edge and blur(20px).

### Product Local Navigation
**Role:** Product-page header and conversion controls

A white local bar carries the product name in SF Pro Display 19px/600 and compact right-aligned pill controls. Use a 20px container radius where the local bar is floated over the page, with #d6d6d6 as the hairline boundary.

### Outlined Explore Pill
**Role:** Secondary product-navigation control

Use transparent fill, #1d1d1f text, a 1px #86868b outline, and a 9999px radius. Set compact SF Pro Text 12px/400 type with 16px line height; do not give this secondary control a colored fill.

### Pricing Blue Pill
**Role:** Filled conversion control

Use #0071e3 fill with #ffffff SF Pro Text 12px/400 at 16px line height and -0.12px tracking. Set a 9999px radius; this blue treatment stays compact inside the product bar and floating pricing callout.

### Hero Product Stage
**Role:** Launch introduction

Set a #ffffff full-bleed visual stage with centered product name in SF Pro Display 21px/600, then an 80px/600 display statement at 84px line height and -1.2px tracking. Place the foldable-device render directly beneath the text without a containing card.

### Floating Pricing Callout
**Role:** Purchase context over product imagery

Float a #ffffff rounded 28px capsule near the lower product render with 14px/600 #1d1d1f pricing text and compact secondary copy. Keep the blue Pricing Blue pill inside the callout; do not use drop shadows.

### Section Anchor Navigation
**Role:** In-page feature navigation

Render a horizontal list of SF Pro Text 17px/500 labels at 25px line height and -0.374px tracking in #1d1d1f. Use transparent backgrounds, 28px vertical padding, and no card or underline treatment.

### Highlights Stage
**Role:** Feature-carousel section

Use #f5f5f7 as the full section background, with a large #1d1d1f section heading and an Apple Blue text link aligned opposite it. Feature slides are #ffffff 28px-radius cards with no shadow.

### Feature Media Card
**Role:** Product-detail showcase

Use a #ffffff surface, 28px radius, no border, and no shadow. Center the device render with an SF Pro Display 24px/600 or 40px/600 feature statement above it; media may crop beyond the card edge.

### Carousel Playback Control
**Role:** Highlights media control

Use a translucent control track based on rgba(210,210,215,0.64), 36px radius, and subdued rgba(0,0,0,0.56) glyphs. Keep slide dots and pause control grouped in a small pill rather than adding visible card chrome.

### Editorial Feature Block
**Role:** Long-form product story

Place a small #1d1d1f SF Pro Display kicker above a large left-aligned display statement, followed by SF Pro Text 17px/400 body copy at approximately 21px line height and -0.374px tracking. The accompanying hardware image is oversized and allowed to enter from the opposite side.

### Rounded Search Input
**Role:** Global navigation search

Use #ffffff fill, #1d1d1f 13px Arial text, 24px left padding, 45px right padding, a 1px #86868b outline, and a 980px radius. Keep the default field visually absent until expanded from navigation.

### Launch Status Label
**Role:** New-product annotation

Use #b64400 SF Pro Text 12px/600 with 16px line height and -0.12px tracking. Leave it as plain text with no pill background or border.

## Do's and Don'ts

### Do
- Use #ffffff as the default product-story canvas and reserve #f5f5f7 for full-width feature bands and footer regions.
- Set display hero statements in SF Pro Display 80px/600, 84px line height, and -1.2px tracking.
- Use SF Pro Text 17px/400 with -0.374px tracking for feature paragraphs and in-page navigation at 17px/500.
- Use 28px radius for feature cards and contained media; keep those cards shadowless.
- Use #0071e3 only for compact filled conversion pills with #ffffff 12px SF Pro Text.
- Use #0066cc for inline links and textual section links rather than turning every navigation item blue.
- Space major storytelling sections by 90px and use 20px gaps between related interface elements.

### Don't
- Do not add gradients; product imagery supplies the page’s color and visual depth.
- Do not use shadows on feature cards, editorial blocks, or floating pricing capsules.
- Do not replace the 28px feature-card radius with 8px, 12px, or square corners.
- Do not use #0071e3 as a large hero background or a universal filled button color.
- Do not set hero headlines in bold 700 or wider tracking than -1.2px at 80px.
- Do not introduce colored status pills for launch labels; use bare #b64400 12px text.
- Do not place dense boxed UI panels over the product renders; keep #ffffff space around hardware imagery.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Gallery White | `#ffffff` | Primary hero, editorial canvas, local navigation, and feature-card surface. |
| 1 | Studio Mist | `#f5f5f7` | Alternate section band, carousel backdrop, muted content area, and footer. |
| 2 | Paper Frost | `#fafafc` | Opened global-navigation layer. |
| 3 | Control Gray | `#e6e6e8` | Disabled or subdued utility-control fill and thin navigation edge. |

## Elevation

Surfaces gain separation through #ffffff against #f5f5f7, 28px media corners, and sparse 1px #d6d6d6 edges rather than cast shadows. The only elevation-like marks are 0 0 0 1px outlines on navigation and selected controls.

## Imagery

The page is dominated by high-resolution product photography and device renders rather than illustration. Hardware is isolated against pure white or warm neutral image backdrops, often cropped at an oversized scale so the fold and thin profile become the composition; hands appear in the hero to demonstrate physical scale. Images are either edge-free on the white hero canvas or contained in large 28px-radius white cards against #f5f5f7. Product UI appears inside device screens as explanatory evidence, while icons remain small, monochrome global-navigation glyphs.

## Layout

The page begins with a compact global store navigation above a product-local navigation bar, then opens into a centered white hero with stacked product label, oversized headline, preorder copy, a dominant foldable-phone render, and a floating pricing capsule. Storytelling proceeds through a light-gray #f5f5f7 highlights band with a horizontally advancing set of large white 28px-radius media cards, followed by wide white editorial sections that pair left-aligned text blocks with oversized product imagery entering from the right or below. Section headers introduce each chapter, while an in-page horizontal anchor navigation supports long-form scrolling; the page is spacious, image-led, and does not rely on visible grid lines or conventional card stacks.

## Agent Prompt Guide

Quick Color Reference:
- Gallery White: #ffffff — Primary page canvas, hero background, product story sections, and feature-card surfaces
- Studio Mist: #f5f5f7 — Alternate full-width section background, feature-stage backdrop, footer surface, and muted content blocks
- Paper Frost: #fafafc — Opened global-navigation surface and secondary pale fill
- Hairline Silver: #d6d6d6 — 1px dividers, restrained control outlines, and subtle separators
- Control Gray: #e6e6e8 — Disabled control fills, subdued utility surfaces, and single-pixel navigation edge treatment
- Ink: #1d1d1f — Headlines, primary body copy, navigation labels, and dark utility icons
- Slate: #707070 — Secondary copy, legal text, subdued navigation content, and low-emphasis glyphs
- Steel: #86868b — Input outlines, inactive indicators, and fine outlined-control edges
- Apple Blue: #0066cc — Inline links, section links, and blue text controls — a precise blue punctuation against monochrome product storytelling
- Pricing Blue: #0071e3 — Filled pricing and learn-more controls — the brighter blue reserves visual urgency for compact conversion moments
- Launch Orange: #b64400 — Small launch-status labels such as new-product markers

Create a #ffffff launch hero with centered SF Pro Display 21px/600 product label and a centered 80px/600, 84px-line-height headline in Ink (#1d1d1f); place an oversized foldable-device render directly below with no enclosing card.
Create a Product Local Navigation bar with an SF Pro Display 19px/600 Ink product title, an outlined Explore Pill, and a Pricing Blue (#0071e3) 9999px-radius pricing pill using #ffffff SF Pro Text 12px/400.
Create a Studio Mist (#f5f5f7) highlights section with an Ink heading and Apple Blue (#0066cc) text link; use a #ffffff 28px-radius feature media card with no shadow and an SF Pro Display 40px/600 feature statement.
Create a white editorial product section with a left-aligned Ink feature statement and SF Pro Text 17px/400 body copy at 21px line height and -0.374px tracking; crop a large product photograph into the right side.
Create a floating #ffffff 28px-radius pricing callout over a product render using Ink 14px/600 pricing copy and a compact Pricing Blue 9999px-radius pill.

## Similar Brands

- **Google Pixel** — Product-led landing pages pair isolated hardware renders with generous white space and compact blue conversion controls.
- **Sony** — Large hardware photography and restrained editorial feature chapters make the product, rather than decorative interface chrome, carry the page.
- **Nothing** — Uses oversized device imagery and sparse product storytelling, though Apple’s palette is more monochrome and its controls are smaller.
- **Tesla** — Full-width product visual stages and minimal surrounding UI create a similarly showroom-like conversion flow.

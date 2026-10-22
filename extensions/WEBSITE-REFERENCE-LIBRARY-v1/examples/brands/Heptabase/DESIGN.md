# Heptabase — Style Reference
> Sunlit research desk. Warm paper-like surfaces, charcoal controls, and floating research windows make the interface feel like an organized study space rather than a software dashboard.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Heptabase — sunlit research desk. An eggshell canvas holds a centered, type-led landing page where Instrument Sans headlines carry quiet intellectual weight and Inter keeps navigation, labels, and product UI compact. Nearly every marketing surface stays warm-white or soft gray; charcoal pill actions and a restrained electric-blue link color punctuate the page without turning it into a blue-branded interface. Large product demonstrations sit like physical documents over atmospheric landscape footage, while the surrounding page remains sparse, flat, and carefully spaced.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Eggshell Canvas | `#fdfcfb` | `--color-eggshell-canvas` | Page backgrounds, navigation background, white cards, and light button surfaces |
| Cloud Surface | `#f7f7f7` | `--color-cloud-surface` | Secondary section fills, muted panels, and subtle card interiors |
| Paper Beige | `#f0f0ea` | `--color-paper-beige` | Feature-box surfaces and warm inset cards |
| Whiteboard Gray | `#eeeded` | `--color-whiteboard-gray` | Product canvas and document-workspace surfaces |
| Linen Border | `#e4ded3` | `--color-linen-border` | Hairline borders, muted outlined badges, and warm separator details |
| Graphite | `#2e2e2e` | `--color-graphite` | Primary text, logo marks, dark filled buttons, and dense product-interface chrome |
| Charcoal Copy | `#454545` | `--color-charcoal-copy` | Secondary dark text and iconography |
| Quiet Gray | `#6a6972` | `--color-quiet-gray` | Tertiary links, helper copy, and secondary product-interface labels |
| Disabled Ash | `#a8a8a8` | `--color-disabled-ash` | Disabled controls, subdued icons, and low-emphasis metadata |
| Research Blue | `#207dff` | `--color-research-blue` | Editorial text links, tutorial links, active product-interface accents, and small illustrative strokes — the isolated blue makes knowledge references feel connected rather than promotional |

## Tokens — Typography

### Instrument Sans — Display and section headings. The medium weight and compressed tracking make large statements feel written with a typesetter's restraint instead of the heavy 600–700 weight used by most product pages. · `--font-instrument-sans`
- **Substitute:** DM Sans
- **Weights:** 500
- **Sizes:** 36px, 44px, 48px
- **Line height:** 1.30, 1.40
- **Letter spacing:** -0.54px at 36px; -1.45px at 44px; -1.58px at 48px
- **Role:** Display and section headings. The medium weight and compressed tracking make large statements feel written with a typesetter's restraint instead of the heavy 600–700 weight used by most product pages.

### Inter — Navigation, paragraph copy, buttons, badges, product UI, and card headings. Use 16px/400 for navigation and standard controls, 16px/600 for strong labels, 18px/400 with 27px leading for introductory copy, and 20px/500 for feature-card titles. · `--font-inter`
- **Substitute:** Arial
- **Weights:** 400, 450, 500, 600, 700
- **Sizes:** 12px, 13px, 14px, 16px, 17px, 18px, 20px
- **Line height:** 1.00, 1.25, 1.40, 1.43, 1.50, 1.53, 2.22
- **Letter spacing:** Normal for interface copy; -0.36px at the 18px, 600 wordmark treatment
- **Role:** Navigation, paragraph copy, buttons, badges, product UI, and card headings. Use 16px/400 for navigation and standard controls, 16px/600 for strong labels, 18px/400 with 27px leading for introductory copy, and 20px/500 for feature-card titles.

### ui-monospace — Small technical metadata and code-like product-interface content. · `--font-ui-monospace`
- **Substitute:** SFMono-Regular, Consolas, Liberation Mono
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.60
- **Letter spacing:** normal
- **Role:** Small technical metadata and code-like product-interface content.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| utility | Inter | 400 | 12px | 1.5 | 0px | `--text-utility` |
| segmented-control | Inter | 500 | 13px | 1 | 0px | `--text-segmented-control` |
| caption | Inter | 400 | 14px | 1.5 | 0px | `--text-caption` |
| body-nav | Inter | 400 | 16px | 1.5 | 0px | `--text-body-nav` |
| body-strong | Inter | 600 | 16px | 1.5 | 0px | `--text-body-strong` |
| card-heading | Inter | 500 | 20px | 1.5 | 0px | `--text-card-heading` |
| section-heading | Instrument Sans | 500 | 36px | 1.3 | -0.54px | `--text-section-heading` |
| hero-display | Instrument Sans | 500 | 48px | 1.3 | -1.584px | `--text-hero-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** compact

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
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 52 | 52px | `--spacing-52` |
| 60 | 60px | `--spacing-60` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 12px |
| links | 0px |
| pills | 9999px |
| badges | 6px |
| images | 12px |
| inputs | 6px |
| buttons | 6px |
| featureCards | 8px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `rgba(0, 0, 0, 0.03) 0px 0px 4px 0px, rgba(0, 0, 0, 0.04) ...` | `--shadow-sm` |
| subtle | `rgba(0, 0, 0, 0.04) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0...` | `--shadow-subtle` |
| subtle-2 | `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | `--shadow-subtle-2` |
| subtle-3 | `rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0...` | `--shadow-subtle-3` |
| subtle-4 | `rgba(0, 0, 0, 0.06) 0px 0px 0px 1px, rgba(0, 0, 0, 0.08) ...` | `--shadow-subtle-4` |
| subtle-5 | `rgba(15, 15, 15, 0.05) 0px 0px 0px 1px, rgba(15, 15, 15, ...` | `--shadow-subtle-5` |
| sm-2 | `rgba(0, 0, 0, 0.08) 0px 0px 6px 0px` | `--shadow-sm-2` |

### Layout

- **Section gap:** 128px
- **Card padding:** 16px
- **Element gap:** 8px

## Components

### Public Top Navigation
**Role:** 72px-tall site header with brand at left, centered public links, and account controls at right.

Use Eggshell Canvas #fdfcfb as the bar surface. Set navigation labels in Inter 16px/400 with a 20px line-height and Graphite #2e2e2e; keep link groups on an 8px grid. Render the wordmark in Inter 18px/600 with -0.36px tracking beside a compact black H-shaped mark.

### Charcoal Pill Conversion Button
**Role:** Public navigation and hero conversion control.

Fill with Graphite #2e2e2e, set white text in Inter 16px/500 or 600 with a 20px line-height, and use a 9999px radius. Apply 7px vertical and 22px horizontal padding for the compact pill form; do not use Research Blue as this button fill.

### Compact Outlined Tool Button
**Role:** Small product-demo control for source types and workspace tools.

Use a transparent background, 1px solid rgba(0,0,0,0.13) border, Graphite #2e2e2e text, 6px radius, and asymmetric padding of 8px 10px 8px 12px. Keep icon and label separated by 6px.

### Pill Segmented Switcher
**Role:** Small contextual page-mode selector above a hero.

Place the switcher on a soft Cloud Surface #f7f7f7 track with a 9999px radius. Use Inter 13px/500 with 13px line-height; the selected segment is Eggshell Canvas #fdfcfb with Graphite #2e2e2e text and a restrained 0 1px 2px rgba(0,0,0,0.05) shadow, while inactive text uses Quiet Gray #6a6972.

### Standard Content Card
**Role:** Primary content container for feature explanations and library material.

Use Eggshell Canvas #fdfcfb, 12px radius, 24px padding, and no shadow. Keep the card visually defined by adjacent Cloud Surface #f7f7f7 or a 1px rgba(0,0,0,0.08) boundary rather than elevation.

### Translucent Workspace Card
**Role:** Compact product-interface panel and secondary content grouping.

Use rgba(252,252,252,0.5), a 6px radius, 16px padding, and no shadow. Pair it with 1px rgba(0,0,0,0.08) dividers and small Inter interface labels.

### Paper Feature Box
**Role:** Warm-toned feature tile or explanatory inset.

Fill with Paper Beige #f0f0ea, use an 8px radius, and apply 16px top/bottom with 17px left/right padding. Set supporting text in Charcoal Copy #454545 and avoid adding shadows.

### Whiteboard Workspace Surface
**Role:** Document and knowledge-map canvas inside product demonstrations.

Use Whiteboard Gray #eeeded for the canvas, 12px outer corners, and 10px inner padding where nested panels appear. Separate documents with 1px rgba(0,0,0,0.08) lines and use Graphite #2e2e2e for dense application chrome.

### Floating Product Preview
**Role:** Large visual demonstration of the desktop research workspace.

Frame the application image in an Eggshell Canvas #fdfcfb window with 12px corners. Use the image elevation stack: 0 0 4px rgba(0,0,0,0.03), 0 4px 8px rgba(0,0,0,0.04), 0 16px 26px rgba(0,0,0,0.05); place it over a contained atmospheric image or video field.

### Award Outline Badge
**Role:** Compact social-proof marker beneath a product preview.

Use a transparent or Eggshell Canvas #fdfcfb fill, 1px solid Linen Border #e4ded3, 6px radius, and 8px vertical by 12px horizontal padding. Keep award iconography small and use Inter 12px/600 for the label with warm orange/red artwork reserved for the badge graphic.

### Investor Proof Row
**Role:** Centered quiet social-proof strip.

Set the lead-in in Inter 14px/500, 20px line-height, and Disabled Ash #a8a8a8. Render partner marks in desaturated gray or Graphite #2e2e2e at low visual weight with 12px-or-larger gaps; do not put the logos inside cards.

### Editorial Blue Link
**Role:** Text-only reference, guide, demo, or tutorial link.

Use Research Blue #207dff with Inter 18px/500 and 27px line-height for prominent links; supporting inline links may use Inter 13px/400 and Quiet Gray #6a6972 when they are navigational rather than editorial. Keep backgrounds transparent and corners square.

## Do's and Don'ts

### Do
- Use Eggshell Canvas #fdfcfb as the default page and navigation surface.
- Set display headlines in Instrument Sans 500 with -1.58px tracking at 48px and a 62.4px line-height.
- Use Graphite #2e2e2e fills with 9999px radius for public conversion buttons.
- Keep standard cards flat: 12px radius, 24px padding, and no shadow.
- Build internal control spacing from the 4px base unit; use 8px for icon-label and sibling-control gaps.
- Use Research Blue #207dff only for links and small active product-interface accents.
- Separate light surfaces with 1px rgba(0,0,0,0.08) or Linen Border #e4ded3 rather than broad gray blocks.

### Don't
- Do not use Research Blue #207dff as a universal filled conversion button.
- Do not set public display headlines heavier than Instrument Sans 500.
- Do not replace 9999px conversion-button pills with 6px rounded rectangles.
- Do not add shadows to standard 12px content cards.
- Do not use pure white as the dominant page canvas when Eggshell Canvas #fdfcfb is available.
- Do not compress major sections below the 128px section gap.
- Do not introduce gradients into marketing surfaces; keep color concentrated in product imagery and small badge artwork.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Eggshell Canvas | `#fdfcfb` | Page background, header, primary cards, and light controls. |
| 1 | Cloud Surface | `#f7f7f7` | Soft secondary bands, tracks, and muted card interiors. |
| 2 | Paper Beige | `#f0f0ea` | Warm feature insets and explanatory tiles. |
| 3 | Whiteboard Gray | `#eeeded` | Embedded product canvases and document workspace backgrounds. |

## Elevation

- **Floating Product Preview:** `0 0 4px rgba(0,0,0,0.03), 0 4px 8px rgba(0,0,0,0.04), 0 16px 26px rgba(0,0,0,0.05)`
- **Large Workspace Overlay:** `0 0 0 1px rgba(0,0,0,0.04), 0 14px 32px rgba(0,0,0,0.1), 0 28px 70px rgba(0,0,0,0.14)`
- **Pill Segmented Switcher:** `0 1px 2px rgba(0,0,0,0.05)`

## Imagery

Imagery is product-showcase dominant: wide desktop workspace screenshots are contained in rounded white application windows and float above soft, painterly landscape video or photography. The backdrop supplies pale sky, peach cloud, green, and orange atmosphere, but those hues do not spread into interface tokens; the white product window remains the subject. Product screenshots are detailed, document-heavy, and explanatory, showing columns, notes, source pages, and AI responses. Icons inside the product UI are small, mostly monochrome outlined glyphs with occasional Research Blue #207dff emphasis; lifestyle photography and decorative illustrations are absent.

## Layout

The page uses a light full-page canvas with a 72px top navigation and a centered public-navigation arrangement. The hero is a centered stack: a small pill switcher, two-line display headline, restrained explanatory paragraph, charcoal conversion button, then a wide contained product preview over a soft landscape/video backdrop. Social-proof badges and a centered investor-logo row follow the preview before the page moves into spacious feature sections led by left-aligned Instrument Sans headlines and large product-workspace demonstrations. The seven-section sequence stays mostly seamless on Eggshell Canvas, using warm inset panels and full-width visual previews instead of alternating dark bands; navigation remains minimal, with no sidebar or dense menu treatment.

## Agent Prompt Guide

Quick Color Reference:
- Eggshell Canvas: #fdfcfb — Page backgrounds, navigation background, white cards, and light button surfaces
- Cloud Surface: #f7f7f7 — Secondary section fills, muted panels, and subtle card interiors
- Paper Beige: #f0f0ea — Feature-box surfaces and warm inset cards
- Whiteboard Gray: #eeeded — Product canvas and document-workspace surfaces
- Linen Border: #e4ded3 — Hairline borders, muted outlined badges, and warm separator details
- Graphite: #2e2e2e — Primary text, logo marks, dark filled buttons, and dense product-interface chrome
- Charcoal Copy: #454545 — Secondary dark text and iconography
- Quiet Gray: #6a6972 — Tertiary links, helper copy, and secondary product-interface labels
- Disabled Ash: #a8a8a8 — Disabled controls, subdued icons, and low-emphasis metadata
- Research Blue: #207dff — Editorial text links, tutorial links, active product-interface accents, and small illustrative strokes — the isolated blue makes knowledge references feel connected rather than promotional

Create a centered learning-product hero on Eggshell Canvas #fdfcfb with an Instrument Sans 48px/500 headline, 62.4px line-height, and -1.58px tracking in Graphite #2e2e2e; place an Inter 18px/400, 27px-leading paragraph beneath it and a Graphite 9999px pill button with white Inter 16px/600 text.
Create a small two-option mode switcher with Inter 13px/500 text: selected segment on Eggshell Canvas #fdfcfb, inactive text in Quiet Gray #6a6972, a Cloud Surface #f7f7f7 track, and a 9999px radius.
Create a large research-workspace preview in a 12px Eggshell Canvas #fdfcfb application frame over a contained, muted peach-and-green landscape image; use the specified Floating Product Preview shadow and dense Graphite #2e2e2e document UI inside.
Create a feature section with an Instrument Sans 36px/500 heading, 46.8px line-height, and -0.54px tracking in Graphite #2e2e2e, followed by Paper Beige #f0f0ea feature boxes at 8px radius and 16px padding.

## Similar Brands

- **Milanote** — Shares the visual-knowledge-workspace framing, large board-like product demonstrations, and document-oriented canvas language.
- **Notion** — Shares the warm near-white canvas, compact monochrome navigation, restrained text hierarchy, and document-first product screenshots.
- **Readwise Reader** — Shares the research-tool focus, source-document imagery, quiet editorial typography, and sparse use of saturated color.
- **Tana** — Shares the knowledge-management product emphasis, dense nested workspace previews, and charcoal-on-light interface treatment.

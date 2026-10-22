# Bejamas — Style Reference
> Bejamas — acid lime through black glass. Build quiet light-gray editorial pages interrupted by immersive black panels where blurred green light streaks cut across the surface.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Bejamas pairs a pale gray editorial canvas with black, image-led hero bands and a single acid-lime conversion color. Neue Montreal carries nearly everything: oversized light-weight display copy feels direct and spacious, while medium-weight supporting copy and navigation keep the interface grounded. Content moves between large, dark photographic panels, restrained white and gray work grids, hairline divisions, and rounded project tiles rather than shadowed containers.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper Gray | `#f3f3f4` | `--color-paper-gray` | Page backgrounds, footer ground, quiet section bands, pale action outlines |
| Carbon Ink | `#131314` | `--color-carbon-ink` | Primary text, black hero and statement-card surfaces, dark icons |
| Cloud White | `#ffffff` | `--color-cloud-white` | Text over dark imagery, card and popover surfaces |
| Divider Ash | `#e0dfdf` | `--color-divider-ash` | Project-card surfaces, 1px dividers, quiet link and outline borders |
| Muted Graphite | `#66646d` | `--color-muted-graphite` | Section labels, supporting copy, subdued navigation and metadata |
| Disabled Steel | `#838384` | `--color-disabled-steel` | Disabled or inactive control fills |
| Voltage Lime | `#befc65` | `--color-voltage-lime` | Filled conversion buttons and selected controls — the sudden vivid green punctuates an otherwise near-monochrome interface |

## Tokens — Typography

### NeueMontreal — Single-family system for display, editorial body, navigation, buttons, and footer. The 72px weight-400 display treatment is intentionally lighter than the medium-weight supporting hierarchy; it makes major statements feel open rather than dense. · `--font-neuemontreal`
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 14px, 16px, 18px, 20px, 24px, 30px, 32px, 56px, 72px
- **Line height:** 1.00, 1.18, 1.20, 1.33, 1.40, 1.43, 1.50, 1.56, 1.60
- **Letter spacing:** -2.52px at 72px, -1.40px at 56px, -0.64px at 32px, and normal tracking from 30px downward.
- **Role:** Single-family system for display, editorial body, navigation, buttons, and footer. The 72px weight-400 display treatment is intentionally lighter than the medium-weight supporting hierarchy; it makes major statements feel open rather than dense.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| skip-link | NeueMontreal | 600 | 14px | 1.43 | 0px | `--text-skip-link` |
| metadata | NeueMontreal | 400 | 14px | 1.43 | 0px | `--text-metadata` |
| body | NeueMontreal | 500 | 16px | 1.5 | 0px | `--text-body` |
| navigation | NeueMontreal | 400 | 18px | 1.56 | 0px | `--text-navigation` |
| button | NeueMontreal | 500 | 20px | 1.4 | 0px | `--text-button` |
| footer-nav | NeueMontreal | 500 | 20px | 1.6 | 0px | `--text-footer-nav` |
| lead | NeueMontreal | 500 | 24px | 1.2 | 0px | `--text-lead` |
| section-heading | NeueMontreal | 500 | 30px | 1.2 | 0px | `--text-section-heading` |
| testimonial | NeueMontreal | 500 | 30px | 1.5 | 0px | `--text-testimonial` |
| problem-heading | NeueMontreal | 500 | 32px | 1.18 | -0.64px | `--text-problem-heading` |
| editorial-display | NeueMontreal | 500 | 56px | 1.18 | -1.4px | `--text-editorial-display` |
| hero-display | NeueMontreal | 400 | 72px | 1.2 | -2.52px | `--text-hero-display` |

## Tokens — Spacing & Shapes

**Base unit:** 4px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 128 | 128px | `--spacing-128` |

### Border Radius

| Element | Value |
|---------|-------|
| hero | 32px |
| cards | 17.6px |
| links | 17.6px |
| images | 17.6px |
| buttons | 9999px |
| compactButtons | 8px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| md | `rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1)...` | `--shadow-md` |

### Layout

- **Section gap:** 32px
- **Card padding:** 20px
- **Element gap:** 20px

## Components

### Overlay Site Header
**Role:** Top-level navigation placed over both dark hero imagery and pale page sections.

Use Neue Montreal 18px/28px weight 400 for the horizontal navigation and a compact wordmark at the left. On dark imagery, use Cloud White text; switch to Carbon Ink on Paper Gray sections. Keep the header visually unboxed with no card fill or shadow.

### Lime Pill Conversion Button
**Role:** Public contact and conversion control.

Fill with Voltage Lime #befc65 and Carbon Ink #131314 text. Use Neue Montreal 20px/28px weight 500, 9999px radius, and 0px 24px horizontal padding; the compact header version uses 18px/28px text, 8px 16px padding, and an 8px radius.

### Dark Outline Pill Button
**Role:** Secondary control over black photographic surfaces.

Use a transparent fill, Cloud White #ffffff text, a 1px solid Paper Gray #f3f3f4 border, 9999px radius, and 10px 20px padding. Set label text in Neue Montreal 18px/28px weight 400.

### Translucent Dark Pill Button
**Role:** Secondary button when a dark fill must remain visible over variable imagery.

Use rgba(19, 19, 20, 0.5) fill with Cloud White text, a 1px solid rgba(255, 255, 255, 0.25) border, 9999px radius, and 0px 24px horizontal padding.

### Immersive Hero Panel
**Role:** Primary introductory band and high-contrast conversion surface.

Use a Carbon Ink #131314 base with abstract blurred green photographic light; round contained versions to 32px. Set display copy in Cloud White using Neue Montreal 72px/86.4px weight 400 with -2.52px tracking, with muted supporting labels in 16px/24px weight 500 at reduced white opacity.

### Trust Mark Row
**Role:** Small proof strip inside dark hero compositions.

Set the lead-in in 16px/24px Neue Montreal weight 500 using translucent Cloud White, then place monochrome Cloud White customer marks in a horizontal row with 20px gaps. Do not place these logos in individual cards.

### Editorial Problem Split
**Role:** Two-column issue or narrative section on the pale canvas.

Separate the columns with a 1px Divider Ash #e0dfdf rule. Use Carbon Ink headings: smaller problem statements use 32px/37.76px weight 500 with -0.64px tracking, while the adjacent statement uses 56px/66.08px weight 500 with -1.40px tracking.

### Featured Project Card
**Role:** Work showcase tile with a large visual and concise editorial caption.

Use a 17.6px radius and no shadow. Visual areas can be Divider Ash #e0dfdf or contained photography; retain rounded image corners. Place project title and caption in Carbon Ink beneath the image, using Neue Montreal 20px/32px weight 500 for titles and 16px/24px weight 500 for metadata.

### Project Metric Chip
**Role:** Compact evidence label over a project image.

Use Cloud White #ffffff fill, Carbon Ink #131314 text, 9999px radius, and 8px 16px padding. Set labels in Neue Montreal 14px/20px weight 600 and stack multiple chips with a 6px gap.

### Dark Testimonial Card
**Role:** Large quote or statement module.

Fill with Carbon Ink #131314, use a 17.6px radius, no shadow, and 128px 90px padding. Set the quote in near-white Neue Montreal 30px/45px weight 500.

### Footer Navigation Column
**Role:** Grouped footer links beneath the final conversion area.

Use Carbon Ink #131314 for 20px/32px weight-500 group labels and 14px/20px weight-400 indexing text. Keep the surrounding footer on Paper Gray #f3f3f4 with Divider Ash #e0dfdf rules rather than raised panels.

## Do's and Don'ts

### Do
- Use Paper Gray #f3f3f4 as the default page and footer canvas.
- Reserve Voltage Lime #befc65 for filled conversion buttons and selected controls.
- Set display statements in Neue Montreal 72px/86.4px weight 400 with -2.52px tracking.
- Use Neue Montreal 56px/66.08px weight 500 with -1.40px tracking for large editorial section statements.
- Round project cards and media to 17.6px; round immersive hero panels to 32px.
- Use 1px Divider Ash #e0dfdf rules to separate pale sections and split editorial columns.
- Keep filled public conversion buttons at 9999px radius with 24px horizontal padding.

### Don't
- Do not use Voltage Lime #befc65 as a page background, project-card fill, or decorative gradient.
- Do not replace the dark hero treatment with a flat lime or white hero surface.
- Do not use heavy card shadows; project cards use no shadow.
- Do not set major headlines in weight 600 or 700; use weight 400 at 72px and weight 500 at 56px or below.
- Do not use square project imagery; retain the 17.6px media radius.
- Do not introduce saturated blue, red, purple, or orange interface accents.
- Do not turn every section into a white card; preserve Paper Gray #f3f3f4 as uninterrupted editorial ground.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper Gray Canvas | `#f3f3f4` | Main page ground, footer, and pale editorial sections. |
| 1 | Cloud White | `#ffffff` | Popover, chip, and light content surface. |
| 2 | Ash Project Surface | `#e0dfdf` | Project visual backdrops and structural borders. |
| 3 | Carbon Ink Surface | `#131314` | Hero, testimonial, and high-contrast statement panels. |

## Elevation

Surfaces are separated by color fields, 1px Divider Ash rules, and radius changes rather than persistent elevation. Limit shadows to the rare floating control treatment: 0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1).

## Imagery

Imagery is sparse but dominant when present: dark, abstract macro photography of blurred lime-green ribbons and glassy highlights fills hero panels, creating atmospheric contrast behind white text. Work cards use contained product-focused photography or bold brand graphics, rounded to 17.6px and presented as explanatory portfolio evidence rather than decorative lifestyle imagery. Icons and marks are predominantly monochrome; visual space alternates between text-dominant pale sections and image-dominant black or project-card blocks.

## Layout

The page is a light, full-bleed editorial canvas with a minimal top bar and large interruptions of black visual content. The opening composition uses a dark abstract-image hero with left-aligned display copy, proof marks, and a conversion control; another dark rounded panel uses a right-aligned explanatory block and paired pill buttons. Pale content sections flow with fine horizontal and vertical rules into asymmetric two-column editorial statements, followed by a featured-project grid with one larger left tile and a narrower right tile. Navigation stays as a sparse horizontal top bar, while the footer expands into grouped link columns on Paper Gray.

## Agent Prompt Guide

Quick Color Reference:
- Paper Gray: #f3f3f4 — Page backgrounds, footer ground, quiet section bands, pale action outlines
- Carbon Ink: #131314 — Primary text, black hero and statement-card surfaces, dark icons
- Cloud White: #ffffff — Text over dark imagery, card and popover surfaces
- Divider Ash: #e0dfdf — Project-card surfaces, 1px dividers, quiet link and outline borders
- Muted Graphite: #66646d — Section labels, supporting copy, subdued navigation and metadata
- Disabled Steel: #838384 — Disabled or inactive control fills
- Voltage Lime: #befc65 — Filled conversion buttons and selected controls — the sudden vivid green punctuates an otherwise near-monochrome interface

Create a Carbon Ink Surface hero with blurred acid-green abstract photography, Cloud White Neue Montreal 72px/86.4px weight-400 display copy at -2.52px tracking, and a Voltage Lime pill conversion button with Carbon Ink 20px/28px weight-500 text.
Create a Paper Gray editorial split section divided by a 1px Divider Ash rule; set one Carbon Ink statement in Neue Montreal 32px/37.76px weight 500 at -0.64px tracking and the companion statement at 56px/66.08px weight 500 at -1.40px tracking.
Create a two-tile featured-work row on Paper Gray: a large 17.6px-radius brand-graphic tile beside a narrower 17.6px-radius product-photography tile, both with Carbon Ink captions below.
Create a Carbon Ink testimonial card with 17.6px corners, 128px 90px padding, and near-white Neue Montreal 30px/45px weight-500 quote text.
Create a secondary dark-hero control with transparent fill, Cloud White 18px/28px weight-400 text, 1px Paper Gray border, 9999px radius, and 10px 20px padding.

## Similar Brands

- **Instrument** — Large editorial typography, sparse navigation, and image-led agency portfolio compositions.
- **Uncommon** — Near-monochrome layouts punctuated by a single vivid acid-green accent.
- **Locomotive** — Immersive dark visual bands paired with restrained, spacious editorial text layouts.
- **Ueno** — Project-first agency grids with oversized type and minimal surface elevation.

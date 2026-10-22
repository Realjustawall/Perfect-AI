# Capacities — Style Reference
> Capacities - sunlit desk of ideas. Build pages as an open white workspace where connected notes drift around one central thought.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Capacities is a white knowledge-work canvas animated by small, paper-like object cards, faint pastel category tints, and a warm yellow halo behind the opening statement. Nearly black type carries the page; color stays peripheral in the announcement strip, floating note labels, tiny icon tiles, and lightly tinted product surfaces. Large Inter display headlines use tight negative tracking and stacked line breaks, while the remaining interface stays compact in system sans typography, thin warm-gray rules, restrained shadows, and generously rounded cards.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper White | `#ffffff` | `--color-paper-white` | Page backgrounds, card surfaces, inverted text, and light navigation |
| Ink | `#1a1a1d` | `--color-ink` | Display headlines, logo marks, icons, and filled conversion buttons; the near-black creates the system's decisive contrast against Paper White |
| Charcoal | `#454447` | `--color-charcoal` | Navigation labels, links, and secondary dark interface text |
| Graphite | `#5c5959` | `--color-graphite` | Body copy, explanatory text, and secondary content |
| Ash | `#a7a2a1` | `--color-ash` | Captions, trust statements, quiet metadata, and low-emphasis links |
| Porcelain | `#f5f4f3` | `--color-porcelain` | Hairline card borders, dividers, and pale neutral fills |
| Stone | `#ecebea` | `--color-stone` | Visible card outlines and quiet structural borders |
| Butter Paper | `#fffbeb` | `--color-butter-paper` | Warm-tinted object tiles and selected audience-filter surfaces |
| Sunlit Wash | `radial-gradient(100% 70% at 50% 0%, oklch(0.9243 0.1151 95.76 / 0.5) 0%, rgba(0, 0, 0, 0) 100%)` | `--color-sunlit-wash` | Announcement-strip fill, soft decorative highlights, and the warm hero atmosphere |
| Honey Line | `#fde68a` | `--color-honey-line` | Borders around warm audience pills and promotional surfaces |
| Amber Ink | `#945424` | `--color-amber-ink` | Orange text accent for links, tags, and emphasized short phrases |
| Cloud Blue | `#eff6ff` | `--color-cloud-blue` | Pale blue object-card fills and background accents |
| Blue Note Edge | `#d2e6fe` | `--color-blue-note-edge` | Borders for blue-tinted note objects |
| Lilac Note Edge | `#f0e2ff` | `--color-lilac-note-edge` | Borders for lilac-tinted note objects |

## Tokens — Typography

### Inter — Display family for the 64px/700 hero and 48px/700 editorial transition headings. The -3% tracking makes broad, heavy letters lock into dense multi-line thought blocks rather than airy marketing headlines. · `--font-inter`
- **Substitute:** Arial, ui-sans-serif, system-ui
- **Weights:** 500, 700
- **Sizes:** 9px, 48px, 64px
- **Line height:** 1.05, 1.25, 1.33
- **Letter spacing:** -1.92px at 64px; -1.44px at 48px; -0.0300em to -0.0250em
- **Role:** Display family for the 64px/700 hero and 48px/700 editorial transition headings. The -3% tracking makes broad, heavy letters lock into dense multi-line thought blocks rather than airy marketing headlines.

### ui-sans-serif — Interface and body family: 14px/500 navigation, 16px/500 buttons, 16px/400 body copy, 18px/600 feature headings, and 36px/700 section headings. It keeps UI labels compact while section type retains the same firm, close-set voice as Inter display. · `--font-ui-sans-serif`
- **Substitute:** Inter, system-ui, -apple-system, Segoe UI
- **Weights:** 400, 500, 600, 700, 800
- **Sizes:** 9px, 10px, 11px, 12px, 13px, 14px, 15px, 16px, 17px, 18px, 28px, 36px
- **Line height:** 1.10, 1.25, 1.30, 1.33, 1.43, 1.50, 1.56, 1.60, 1.63, 1.70
- **Letter spacing:** -0.9px at 36px; -0.45px at 18px; +0.35px at 14px uppercase; otherwise normal to -0.0200em
- **Role:** Interface and body family: 14px/500 navigation, 16px/500 buttons, 16px/400 body copy, 18px/600 feature headings, and 36px/700 section headings. It keeps UI labels compact while section type retains the same firm, close-set voice as Inter display.

### JetBrains Mono — Small structured text inside product-like objects and technical note content; its fixed-width texture distinguishes metadata and snippets from prose. · `--font-jetbrains-mono`
- **Substitute:** SFMono-Regular, Menlo, Consolas, monospace
- **Weights:** 400, 500
- **Sizes:** 12px
- **Line height:** 1.33
- **Letter spacing:** normal
- **Role:** Small structured text inside product-like objects and technical note content; its fixed-width texture distinguishes metadata and snippets from prose.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| micro | ui-sans-serif | 400 | 10px | 1.5 | 0px | `--text-micro` |
| mono-metadata | JetBrains Mono | 400 | 12px | 1.33 | 0px | `--text-mono-metadata` |
| nav | ui-sans-serif | 400 | 14px | 1.43 | 0px | `--text-nav` |
| eyebrow | ui-sans-serif | 600 | 14px | 1.43 | 0.35px | `--text-eyebrow` |
| body | ui-sans-serif | 400 | 16px | 1.5 | 0px | `--text-body` |
| heading-small | ui-sans-serif | 600 | 18px | 1.56 | -0.45px | `--text-heading-small` |
| heading | ui-sans-serif | 700 | 36px | 1.25 | -0.9px | `--text-heading` |
| display | Inter | 700 | 48px | 1.05 | -1.44px | `--text-display` |
| hero-display | Inter | 700 | 64px | 1.05 | -1.92px | `--text-hero-display` |

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
| 56 | 56px | `--spacing-56` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 128 | 128px | `--spacing-128` |
| 224 | 224px | `--spacing-224` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 16px |
| links | 6px |
| pills | 9999px |
| images | 12px |
| inputs | 8px |
| buttons | 6px |
| iconTiles | 8px |
| compactCards | 6px |
| featureCards | 20px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.04) 0px 1px 2px 0px` | `--shadow-subtle` |
| sm | `rgba(0, 0, 0, 0.05) 0px 2px 4px 0px, rgba(0, 0, 0, 0.03) ...` | `--shadow-sm` |
| subtle-2 | `rgba(0, 0, 0, 0.05) 0px 1px 2px 0px` | `--shadow-subtle-2` |
| md | `rgba(0, 0, 0, 0.08) 0px 4px 12px 0px, rgba(0, 0, 0, 0.04)...` | `--shadow-md` |
| sm-2 | `rgba(0, 0, 0, 0.05) 0px 4px 6px -1px, rgba(0, 0, 0, 0.12)...` | `--shadow-sm-2` |

### Layout

- **Page max-width:** 1280px
- **Section gap:** 73px
- **Card padding:** 28px
- **Element gap:** 6px

## Components

### Top Navigation Bar
**Role:** Public-site header

Use a 64px-high Paper White bar with Ink logo text at 18px/700 and Charcoal navigation at 14px/500. Space compact controls on the 4px grid; use 8px radius on icon controls and a 1px solid Porcelain separator only where needed.

### Seasonal Announcement Strip
**Role:** Promotional message

Place a full-width Sunlit Wash strip below navigation with a 1px solid Honey Line border. Set copy in Amber Ink at 14px/500 with 8px vertical padding and a compact icon-plus-text gap.

### Compact Inverted Header Button
**Role:** Header conversion control

Use Ink fill, Paper White 14px/500 text, 6px radius, and 6px 10px padding. Keep the white border treatment at 1px where it sits against pale navigation surfaces.

### Filled Conversion Button
**Role:** Primary page conversion

Use Ink fill with Paper White 16px/500 text, 6px radius, and 8px 14px padding. Pair with a simple arrow icon at a 6px gap; do not replace it with a chromatic fill.

### Text Discovery Button
**Role:** Secondary conversion link

Use a transparent surface, Charcoal 16px/500 text, a 1px Charcoal border, 8px radius, and 8px 12px padding. Keep its weight visually lighter than the Filled Conversion Button.

### Pill Audience Filter
**Role:** Segment selector

Use Paper White fill, Ash text at 14px, a 1px solid Porcelain border, 9999px radius, and 8px 14px padding. The selected warm treatment uses Butter Paper fill, Honey Line border, and Amber Ink text.

### Floating Knowledge Object
**Role:** Hero decorative product artifact

Build small Paper White note cards with 12px or 16px radius, a 1px Stone or pastel-tinted border, and the shadow 0 1px 2px rgba(0,0,0,0.04). Use 14px/600 Ink titles, tiny muted metadata, and isolated pastel icon tiles; position these as peripheral, slightly rotated fragments around the central hero copy.

### Metric Card
**Role:** Trust and social-proof statistic

Use a Paper White surface with a 1px Stone border, 16px radius, 28px padding, and 0 1px 2px rgba(0,0,0,0.04). Center an 8px icon tile, an Ink 36px/700 value, a 14px/600 label, and Ash 12px supporting copy.

### Testimonial Card
**Role:** Customer quote

Use a Paper White card with a 1px Stone border, 16px radius, 28px padding, and 0 1px 2px rgba(0,0,0,0.04). Set the quote in Graphite at 15px/400 with 1.7 line-height and use an oversized Ash quotation glyph as a quiet corner detail.

### Media Testimonial Frame
**Role:** Embedded product-story video

Use a contained photographic frame with 12px radius and the shadow 0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04). Overlay a solid black circular play control with a white triangular icon; keep the caption centered below in Graphite italic styling.

### Publication Logo Row
**Role:** Press recognition

Set an uppercase Ash 10px/400 label above a centered row of monochrome gray publication marks. Keep logos subdued rather than black, with 24px or greater horizontal separation.

### Footer Link Group
**Role:** Footer navigation

Use 14px/400 Ash links in vertical lists with 8px gaps; group headings use 14px/600 uppercase labels with 0.35px tracking. Separate footer regions using 1px Porcelain rules.

## Do's and Don'ts

### Do
- Use Paper White (#ffffff) as the default canvas and card surface.
- Set display headlines in Inter 700: use 64px/1.05 with -1.92px tracking for hero statements and 48px/1.05 with -1.44px tracking for major editorial transitions.
- Use Ink (#1a1a1d) with Paper White text for filled conversion buttons; use 6px radius and 8px 14px padding.
- Build trust, metric, and testimonial cards with 16px radius, 28px padding, a 1px Stone (#ecebea) border, and 0 1px 2px rgba(0,0,0,0.04).
- Use Sunlit Wash (#fef3c7), Honey Line (#fde68a), and Amber Ink (#945424) together for promotional strips and warm selected pills.
- Keep body copy Graphite (#5c5959) at 16px/1.5 and use Ash (#a7a2a1) only for metadata and supporting text.
- Use 4px as the spacing base; compose compact clusters with 6px, 8px, 12px, and 16px gaps, then give major sections a 73px gap.

### Don't
- Do not use saturated blue, violet, green, or red as page-wide conversion colors; reserve pastel blue and lilac for object-card accents.
- Do not use pill radii on rectangular conversion buttons; keep filled and discovery buttons at 6px or 8px radius.
- Do not make cards borderless or heavily elevated; use Stone (#ecebea) outlines and the 0 1px 2px rgba(0,0,0,0.04) card shadow.
- Do not set body text in Ink (#1a1a1d) by default; reserve Ink for headings, emphatic labels, and filled controls.
- Do not spread the Sunlit Wash (#fef3c7) across whole content sections; confine it to the announcement layer, selected filters, and localized hero glow.
- Do not use loose positive tracking on large headings; keep display tracking at -0.0300em and section-heading tracking at -0.0250em.
- Do not introduce dense dashboard grids above the fold; lead with one centered thought and peripheral object fragments.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper White | `#ffffff` | Primary page canvas, navigation, cards, and footer. |
| 1 | Butter Paper | `#fffbeb` | Warm object surfaces and selected audience controls. |
| 2 | Cloud Blue | `#eff6ff` | Pastel knowledge-object backgrounds and small icon areas. |

## Elevation

- **Floating Knowledge Object:** `0 1px 2px rgba(0,0,0,0.04)`
- **Metric Card:** `0 1px 2px rgba(0,0,0,0.04)`
- **Media Testimonial Frame:** `0 4px 12px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)`

## Imagery

Imagery is sparse and product-adjacent: the hero uses contained floating note, task, document, and bookmark objects rather than a large illustration, each rendered as a white or softly tinted mini-card with a tiny pastel icon and faint shadow. A single contained lifestyle video frame supplies human context; it uses natural, bright photography, rounded corners, and a black circular play overlay. Faint outline file and note icons drift in the whitespace of subsequent sections as low-contrast atmosphere. The page is text-dominant, with imagery acting as evidence that ideas are tangible connected objects rather than decorative wallpaper.

## Layout

The page is a centered, max-width-contained marketing composition on a full Paper White canvas. A 64px top navigation is followed by a slim full-width yellow announcement bar; the hero centers a large multi-line statement, supporting paragraph, and paired conversion controls while small pastel note objects float asymmetrically around its edges. The hero flows into a contained landscape video with rounded corners and a centered caption, then spacious white sections with centered text introductions, three-column metric cards, monochrome publication-logo rows, and multi-column testimonial cards. Sections are separated primarily by generous blank space and extremely pale horizontal boundaries rather than alternating dark bands; the footer returns to grouped link columns.

## Agent Prompt Guide

Quick Color Reference:
- Paper White: #ffffff — Page backgrounds, card surfaces, inverted text, and light navigation
- Ink: #1a1a1d — Display headlines, logo marks, icons, and filled conversion buttons; the near-black creates the system's decisive contrast against Paper White
- Charcoal: #454447 — Navigation labels, links, and secondary dark interface text
- Graphite: #5c5959 — Body copy, explanatory text, and secondary content
- Ash: #a7a2a1 — Captions, trust statements, quiet metadata, and low-emphasis links
- Porcelain: #f5f4f3 — Hairline card borders, dividers, and pale neutral fills
- Stone: #ecebea — Visible card outlines and quiet structural borders
- Butter Paper: #fffbeb — Warm-tinted object tiles and selected audience-filter surfaces
- Sunlit Wash: radial-gradient(100% 70% at 50% 0%, oklch(0.9243 0.1151 95.76 / 0.5) 0%, rgba(0, 0, 0, 0) 100%) — Announcement-strip fill, soft decorative highlights, and the warm hero atmosphere
- Honey Line: #fde68a — Borders around warm audience pills and promotional surfaces
- Amber Ink: #945424 — Orange text accent for links, tags, and emphasized short phrases
- Cloud Blue: #eff6ff — Pale blue object-card fills and background accents
- Blue Note Edge: #d2e6fe — Borders for blue-tinted note objects
- Lilac Note Edge: #f0e2ff — Borders for lilac-tinted note objects

Create a centered hero on Paper White with a 64px/700 Inter Ink headline, 67.2px line-height, -1.92px tracking, a localized Sunlit Wash radial glow, and scattered 12px-radius floating knowledge objects edged in Blue Note Edge or Lilac Note Edge.
Create a Filled Conversion Button with Ink fill, Paper White 16px/500 system-sans text, 6px radius, 8px 14px padding, and a small arrow separated by 6px.
Create a three-column Metric Card row using Paper White cards, Stone 1px borders, 16px radius, 28px padding, and Ink 36px/700 numeric values.
Create a contained video testimonial using a bright lifestyle photograph in a 12px-radius frame with the Media Testimonial Frame shadow and a black circular play control.
Create a seasonal announcement strip using Sunlit Wash fill, Honey Line 1px borders, and Amber Ink 14px/500 text.

## Similar Brands

- **Notion** — White knowledge-work canvas, near-black interface text, contained document-like cards, and sparse monochrome navigation.
- **Milanote** — Scattered idea-object compositions make notes and artifacts feel spatial rather than file-bound.
- **Craft** — Editorially spaced productivity marketing, soft rounded white cards, and restrained pastel surface accents.
- **Readwise** — Text-led knowledge-management presentation with centered statements, testimonial proof, and quiet warm accent treatments.

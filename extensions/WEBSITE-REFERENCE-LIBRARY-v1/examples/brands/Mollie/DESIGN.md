# Mollie — Style Reference
> cashmere counter, dark ledger. Keep broad white editorial space around black type, then anchor product moments in warm cream, espresso-brown, and tactile real-world payment photography.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Mollie is a white-canvas payments site built around oversized, tightly tracked black typography and photographic proof points. The page alternates quiet editorial space with contained product and customer imagery; warm cream cards, dark espresso product panels, and a restrained burnt-orange link accent interrupt the monochrome foundation. Inter’s low-weight display scale keeps large statements open and direct, while IBM Plex Mono uppercase labels provide a compact operational layer above products, media, and categories.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper | `#ffffff` | `--color-paper` | Page backgrounds, navigation, text-on-dark, and light button surfaces |
| Ink | `#000000` | `--color-ink` | Display headings, navigation, body copy, icons, dark media panels, and hairline graphic details |
| Near Black | `#111111` | `--color-near-black` | Secondary dark text and headings where pure Ink is not used |
| Quiet Graphite | `#595959` | `--color-quiet-graphite` | Supporting body copy, explanatory text, and subdued interface labels |
| Soft Gray | `#919191` | `--color-soft-gray` | Muted metadata, inactive supporting text, and low-emphasis labels |
| Oat Surface | `#f7f4f1` | `--color-oat-surface` | Feature-card surfaces, pale pill buttons, understated separators, and surface outlines |
| Ledger Brown | `#3b281d` | `--color-ledger-brown` | Filled pill buttons and dark navigation controls — the brown-black fill keeps conversion controls tactile rather than corporate-blue |
| Espresso Panel | `#211006` | `--color-espresso-panel` | Dark product-demo surfaces, data-led card backgrounds, and high-contrast visual blocks |
| Copper Link | `#e07122` | `--color-copper-link` | Inline product-card links and compact interface highlights — a warm cue that reads as commerce material rather than a universal brand wash |
| Terracotta Disc | `#d66733` | `--color-terracotta-disc` | Large circular decorative card accents and isolated graphic moments |
| Active Green | `#1e681d` | `--color-active-green` | Green text accent for links, tags, and emphasized short phrases. Use as a supporting accent, not as a status color |
| Active Green Surface | `#288a26` | `--color-active-green-surface` | Green text accent for links, tags, and emphasized short phrases. Use as a supporting accent, not as a status color |
| Pending Ochre | `#8b6900` | `--color-pending-ochre` | Yellow text accent for links, tags, and emphasized short phrases. Use as a supporting accent, not as a status color |
| Expiry Red | `#99001c` | `--color-expiry-red` | Red text accent for links, tags, and emphasized short phrases. Use as a supporting accent, not as a status color |
| Harbor Depth Gradient | `linear-gradient(45deg, #060b0e 0%, #254764 100%)` | `--color-harbor-depth-gradient` | Dark atmospheric product-media backdrop |

## Tokens — Typography

### sans-serif — sans-serif — detected in extracted data but not described by AI · `--font-sans-serif`
- **Weights:** 400
- **Sizes:** 12px
- **Line height:** 1.2
- **Role:** sans-serif — detected in extracted data but not described by AI

### Inter Variable — Primary display and interface family. The 82px weight-400 display treatment is deliberately light for its scale; its tight tracking makes large claims feel typeset rather than loud. · `--font-inter-variable`
- **Substitute:** Inter
- **Weights:** 400, 500, 600, 700
- **Sizes:** 12px, 14px, 16px, 18px, 22px, 32px, 36px, 56px, 82px
- **Line height:** 1.00, 1.10, 1.20, 1.30
- **Letter spacing:** -2.4px at 82px; otherwise -0.46px to -0.14px on display and interface sizes, with occasional +0.14px labels
- **OpenType features:** `"cv02", "cv03", "cv04", "cv08", "cv10", "cv12", "cv13", "dlig", "ss03"`
- **Role:** Primary display and interface family. The 82px weight-400 display treatment is deliberately light for its scale; its tight tracking makes large claims feel typeset rather than loud.

### Inter — Navigation, body copy, buttons, links, card content, and secondary headings. Medium-weight 14px navigation uses notably tight tracking, so menus read as small typeset labels rather than utility chrome. · `--font-inter`
- **Substitute:** Arial, Helvetica Neue, sans-serif
- **Weights:** 400, 500, 600
- **Sizes:** 9px, 11px, 12px, 13px, 14px, 15px, 16px, 17px, 18px, 20px, 22px, 96px
- **Line height:** 1.20, 1.30, 1.40
- **Letter spacing:** -4.8px at 96px; -0.55px at 14px; -0.40px at 16px; -0.40px at 18px
- **Role:** Navigation, body copy, buttons, links, card content, and secondary headings. Medium-weight 14px navigation uses notably tight tracking, so menus read as small typeset labels rather than utility chrome.

### IBM Plex Mono — Uppercase eyebrow labels, category labels, and product-media captions. The monospaced labels create a compact payment-infrastructure register against the soft editorial display type. · `--font-ibm-plex-mono`
- **Substitute:** IBM Plex Mono, SFMono-Regular, Consolas, monospace
- **Weights:** 400, 500
- **Sizes:** 11px, 13px
- **Line height:** 1.00, 1.30
- **Letter spacing:** +0.11px at 11px and +0.39px at 13px
- **Role:** Uppercase eyebrow labels, category labels, and product-media captions. The monospaced labels create a compact payment-infrastructure register against the soft editorial display type.

### Adamina — Customer quotation copy; the restrained serif separates testimonial voice from product-interface text. · `--font-adamina`
- **Substitute:** Georgia, serif
- **Weights:** 400
- **Sizes:** 16px
- **Line height:** 1.30
- **Letter spacing:** -0.10px at 16px
- **Role:** Customer quotation copy; the restrained serif separates testimonial voice from product-interface text.

### Inter Tight — Inter Tight — detected in extracted data but not described by AI · `--font-inter-tight`
- **Weights:** 400
- **Sizes:** 9px
- **Line height:** 
- **Letter spacing:** 0.039em
- **Role:** Inter Tight — detected in extracted data but not described by AI

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| media-label | IBM Plex Mono | 400 | 11px | 1 | 0.11px | `--text-media-label` |
| body | Inter | 400 | 13px | 1.3 | -0.325px | `--text-body` |
| eyebrow | IBM Plex Mono | 500 | 13px | 1.3 | 0px | `--text-eyebrow` |
| nav | Inter | 500 | 14px | 1.3 | -0.322px | `--text-nav` |
| testimonial | Adamina | 400 | 16px | 1.3 | -0.096px | `--text-testimonial` |
| section-heading | Inter | 600 | 18px | 1.4 | -0.396px | `--text-section-heading` |
| display | Inter Variable | 400 | 82px | 1 | -2.378px | `--text-display` |

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
| 32 | 32px | `--spacing-32` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 56 | 56px | `--spacing-56` |
| 60 | 60px | `--spacing-60` |
| 80 | 80px | `--spacing-80` |
| 100 | 100px | `--spacing-100` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 16px |
| links | 32px |
| media | 24px |
| pills | 9999px |
| badges | 9999px |
| images | 16px |
| buttons | 9999px |
| iconControls | 28px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgb(245, 242, 240) 0px 0px 0px 1px` | `--shadow-subtle` |
| subtle-2 | `rgba(255, 255, 255, 0.17) 0px 1px 0px 0px inset, rgba(255...` | `--shadow-subtle-2` |
| subtle-3 | `rgba(255, 255, 255, 0.08) 0px 1px 0px 0px inset` | `--shadow-subtle-3` |
| subtle-4 | `rgba(255, 255, 255, 0.17) 0px 1px 0px 0px inset, rgba(255...` | `--shadow-subtle-4` |

### Layout

- **Section gap:** 32px
- **Card padding:** 40px
- **Element gap:** 10px

## Components

### Public Navigation Bar
**Role:** Top-level site navigation

A 54px-high Paper bar with the wordmark at left, 14px/500 Inter navigation links at 18.2px line-height and -0.32px tracking, and a Ledger Brown 9999px sign-up pill at right.

### Display Hero
**Role:** Primary landing-page introduction

Use an Ink Inter Variable display at 82px/400 with 82px line-height and -2.4px tracking. Pair it with a 16px/400 supporting paragraph at 20.8px line-height and -0.4px tracking; place the content above a wide 16px-radius photo or payment demonstration.

### Monospace Eyebrow
**Role:** Section and product category label

IBM Plex Mono 13px/500 uppercase text at 16.9px line-height; use Ink on light surfaces. Smaller media labels use IBM Plex Mono 11px/400, uppercase, 11px line-height, and +0.11px tracking in Paper.

### Ledger Brown Pill Button
**Role:** Filled public conversion control

Ledger Brown #3b281d background, Paper label, 9999px radius, and 16px 24px padding. Set the label in Inter 16px/500 with 19.2px line-height and -0.2px tracking; retain the subtle inset top highlight of rgba(255, 255, 255, 0.08) 0 1px 0.

### Oat Surface Pill Button
**Role:** Secondary public conversion control

Oat Surface #f7f4f1 background with Ink text, 9999px radius, and 16px 24px padding. Use Inter 16px/500 at 19.2px line-height and -0.2px tracking.

### Product Category Cell
**Role:** Payment capability navigation

A Paper grid cell with a fine #f7f4f1 separator and 22px padding on all sides. Pair a small monochrome line icon with compact Ink text; assemble as two rows of five equal cells inside a lightly rounded 16px outer frame.

### Cream Product Feature Card
**Role:** Product pathway teaser

Use Oat Surface #f7f4f1, 16px radius, no shadow, and 40px top padding. Lead with an IBM Plex Mono uppercase category label, then an Ink product title and a Copper Link #e07122 inline link; reserve the lower card area for product imagery.

### Espresso Product Demo Card
**Role:** Product-interface showcase

Use Espresso Panel #211006 with a 16px radius and no shadow. Set interface chrome, transactional data, and small controls in Paper; treat the dark panel as a contained demo surface, not a page-wide dark theme.

### Hero Media Frame
**Role:** Payment photography and media carousel

Use natural-color payment photography in a contained 16px-radius frame. Overlay small Paper or translucent dark controls without adding external drop shadows; dark media can carry IBM Plex Mono 11px uppercase labels.

### Payment Approval Toast
**Role:** In-media transactional confirmation

Place a compact rounded dark overlay over imagery with a small outlined approval icon and Paper text. Keep it visually secondary to the photo and use the same dark espresso family as product-demo surfaces.

### Customer Story Carousel Card
**Role:** Customer proof and testimonial module

Pair a contained 16px-radius customer photo with a centered brand mark and an Adamina 16px/400 testimonial at 20.8px line-height. Use isolated circular arrow controls with 28px radius over media.

### Status Label
**Role:** Embedded product-state indicator

Use Active Green #1e681d for active states, Pending Ochre #8b6900 for setup or forthcoming states, and Expiry Red #99001c for expired states. Keep labels compact and pair status text with an optional Active Green Surface #288a26 dot.

### Terracotta Graphic Disc
**Role:** Decorative card graphic

Use a #d66733 circular surface with a 50% radius and no shadow. Restrict it to large isolated visual punctuation within cards or illustrations.

## Do's and Don'ts

### Do
- Use Paper #ffffff as the dominant canvas and reserve Oat Surface #f7f4f1 for contained cards and secondary pill controls.
- Set display headlines in Inter Variable 82px/400, 82px line-height, and -2.4px tracking.
- Use IBM Plex Mono uppercase labels at 13px/500 with 16.9px line-height above product and media content.
- Use Ledger Brown #3b281d only for filled public pill buttons with 9999px radius and 16px 24px padding.
- Give product cards and media frames a 16px radius; use 24px only for larger image and media treatments.
- Use Copper Link #e07122 for inline product-card links and small commerce-oriented highlights.
- Keep the default page rhythm on the 4px base unit, using 10px element gaps and 32px section gaps.

### Don't
- Do not use blue #0040ff or browser-default #0000ee as a brand or button color.
- Do not turn the Ledger Brown #3b281d filled treatment into a square button; public conversion controls use 9999px radius.
- Do not use heavy outer drop shadows on cards; cards use no shadow and rely on Oat Surface #f7f4f1, borders, and rounded media.
- Do not use bold 600-700 weights for the 82px display role; retain Inter Variable 400.
- Do not replace IBM Plex Mono uppercase labels with Inter body text.
- Do not apply Terracotta Disc #d66733 as a broad page background or universal action color.
- Do not use status colors outside compact payment and account-state contexts.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper | `#ffffff` | Primary page canvas, header, grid cells, and light content fields. |
| 1 | Oat Surface | `#f7f4f1` | Feature cards, pale controls, thin surface outlines, and soft sectional contrast. |
| 2 | Ledger Brown | `#3b281d` | Filled public controls and compact dark navigation affordances. |
| 3 | Espresso Panel | `#211006` | Contained product demonstrations and dark transactional media. |

## Elevation

Avoid floating-card elevation. Light surfaces separate through Oat Surface fills, 16px corners, and occasional 1px #f5f2f0 outlines; dark buttons use a faint inset white highlight rather than a cast shadow.

## Imagery

Photography is central and product-adjacent: hands using phones, countertop terminals, retail environments, and customer scenes are shown as warm, natural-color crops rather than stock-office portraits. Images are wide, contained, and softly rounded at 16px, with occasional dark translucent payment overlays or circular arrow controls placed directly on the image. The page is text-led between media moments, while customer logos and sparse monochrome line icons provide the non-photographic visual layer. Dark product demonstrations use realistic interface fragments, data, and device screens as explanatory content rather than abstract fintech decoration.

## Layout

The page is a white, full-bleed editorial composition with a fixed-height top navigation bar and generous unruled white space around the opening message. The hero uses a wide text composition: an oversized left-aligned headline, a narrower explanatory and conversion block to the right, then a broad contained payment photograph with 16px corners. Product content moves through a dark horizontal media selector, a centered customer-logo strip, and a two-row five-column payment-capability grid before splitting into paired cream feature cards. Customer stories use a wide three-panel horizontal carousel with image-first cards and centered quote text below, followed by large dark product-media sections; the footer returns to a dense multi-link structure.

## Agent Prompt Guide

Quick Color Reference:
- Paper: #ffffff — Page backgrounds, navigation, text-on-dark, and light button surfaces
- Ink: #000000 — Display headings, navigation, body copy, icons, dark media panels, and hairline graphic details
- Near Black: #111111 — Secondary dark text and headings where pure Ink is not used
- Quiet Graphite: #595959 — Supporting body copy, explanatory text, and subdued interface labels
- Soft Gray: #919191 — Muted metadata, inactive supporting text, and low-emphasis labels
- Oat Surface: #f7f4f1 — Feature-card surfaces, pale pill buttons, understated separators, and surface outlines
- Ledger Brown: #3b281d — Filled pill buttons and dark navigation controls — the brown-black fill keeps conversion controls tactile rather than corporate-blue
- Espresso Panel: #211006 — Dark product-demo surfaces, data-led card backgrounds, and high-contrast visual blocks
- Copper Link: #e07122 — Inline product-card links and compact interface highlights — a warm cue that reads as commerce material rather than a universal brand wash
- Terracotta Disc: #d66733 — Large circular decorative card accents and isolated graphic moments
- Active Green: #1e681d — Green text accent for links, tags, and emphasized short phrases. Use as a supporting accent, not as a status color
- Active Green Surface: #288a26 — Green text accent for links, tags, and emphasized short phrases. Use as a supporting accent, not as a status color
- Pending Ochre: #8b6900 — Yellow text accent for links, tags, and emphasized short phrases. Use as a supporting accent, not as a status color
- Expiry Red: #99001c — Red text accent for links, tags, and emphasized short phrases. Use as a supporting accent, not as a status color
- Harbor Depth Gradient: linear-gradient(45deg, #060b0e 0%, #254764 100%) — Dark atmospheric product-media backdrop

Create a white hero with an Ink display headline in Inter Variable 82px/400, 82px line-height, -2.4px tracking; set the supporting copy in Quiet Graphite Inter 16px/400 at 20.8px line-height, then add Ledger Brown and Oat Surface pill buttons.
Create a 54px Paper public navigation bar using Ink Inter 14px/500 at 18.2px line-height and -0.32px tracking, with one Ledger Brown 9999px sign-up pill.
Create a pair of Oat Surface product cards with 16px corners and 40px top padding; use an Ink IBM Plex Mono 13px/500 uppercase eyebrow, an Ink heading, a Copper Link inline link, and product imagery anchored at the card bottom.
Create a contained Espresso Panel product demo with 16px corners, Paper transactional text, IBM Plex Mono 11px/400 uppercase labels, and small positive-state text in Active Green.
Create a customer-story carousel card with a 16px-radius natural-light retail photograph, a centered monochrome customer logo, and an Adamina 16px/400 testimonial at 20.8px line-height.

## Similar Brands

- **Adyen** — Payments-platform composition built from expansive editorial white space, real-world commerce photography, and contained product-interface demonstrations.
- **Wise** — Uses large direct sans-serif statements on a light canvas with restrained color punctuating operational financial content.
- **Klarna** — Shares oversized low-weight display typography, broad image-led sections, and rounded pill conversion controls.
- **Square** — Uses tactile merchant and point-of-sale photography as the proof layer around payment-product content.
- **Monzo** — Combines approachable consumer-facing financial product imagery with compact status-led interface details.

# Avoice — Style Reference
> lime drafting mark on midnight plans. Build pale, document-like page sections around near-black product stages, then use electric lime as the high-visibility signal for conversion, selection, and architectural annotation.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Avoice pairs a white architectural workspace with near-black operating-system panels and a single electric lime interruption. Large Aspekta headlines are tightly tracked and heavy at weight 650, while the surrounding navigation and product metadata stay unusually light, creating a deliberate shift between decisive statements and technical detail. Product imagery is treated as evidence: drawings, architecture photography, and compact software panels live inside broad rounded modules rather than decorative illustration.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Drawing Ink | `#0a1217` | `--color-drawing-ink` | Primary text, dark product panels, dark feature sections, icons, and structural strokes |
| Paper | `#ffffff` | `--color-paper` | Page canvas, card surfaces, light product panels, and reversed text |
| Drafting Gray | `#f1f1f1` | `--color-drafting-gray` | Muted card surfaces, logo tiles, product-widget backgrounds, and secondary action surfaces |
| Hairline | `#e6e7e8` | `--color-hairline` | 1px card, navigation, and input-like dividers |
| Stone | `#85898b` | `--color-stone` | Muted helper text, secondary metadata, and low-emphasis interface marks |
| Graphite | `#54595d` | `--color-graphite` | Supporting body copy on light surfaces |
| Archive Black | `#000000` | `--color-archive-black` | Footer canvas and the deepest visual anchor |
| Signal Lime | `#cdfe00` | `--color-signal-lime` | Filled demo buttons, active selection, announcement highlights, and graphic framing — the acid-lime mark punctures the otherwise monochrome document palette |
| Blueprint Wash | `#dceaf8` | `--color-blueprint-wash` | Pale blue feature-card surface for specification and document workflows |
| Material Wash | `#f4e3cd` | `--color-material-wash` | Pale warm feature-card surface for architectural content modules |
| Site Wash | `#ddefe2` | `--color-site-wash` | Pale green-tinted feature-card surface |
| Review Status | `#5b4678` | `--color-review-status` | In-review status badges in product interfaces |
| Input Status | `#9a6700` | `--color-input-status` | Needs-input status badges in product interfaces |
| Complete Status | `#1a7f55` | `--color-complete-status` | Green wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Use as a supporting accent, not as a status color |
| Plan Blue | `#24476b` | `--color-plan-blue` | Blue wash for highlight backgrounds, decorative bands, and soft emphasis behind content |

## Tokens — Typography

### Aspekta — The site-wide sans for display headings, body copy, navigation, buttons, badges, and product UI. Weight 650 carries the broad, tightly packed statements; weight 350 keeps utility navigation and body metadata thin and technical rather than corporate. · `--font-aspekta`
- **Substitute:** Inter
- **Weights:** 350, 400, 450, 500, 550, 600, 650, 700
- **Sizes:** 9px, 10px, 11px, 12px, 13px, 14px, 15px, 16px, 17px, 18px, 20px, 24px, 32px, 48px, 56px, 72px
- **Line height:** 0.95-1.70
- **Letter spacing:** -1.96px at 56px, -1.2px at 48px, -0.4px at 20px, -0.24px at 24px; normal at navigation sizes; +0.96px at 12px uppercase links and +0.88px at 11px uppercase product tabs.
- **Role:** The site-wide sans for display headings, body copy, navigation, buttons, badges, and product UI. Weight 650 carries the broad, tightly packed statements; weight 350 keeps utility navigation and body metadata thin and technical rather than corporate.

### ui-monospace — Sparse technical labels and machine-like product metadata, set with tight -0.36px tracking to make document references feel system-generated. · `--font-ui-monospace`
- **Substitute:** Geist Mono
- **Weights:** 350, 700
- **Sizes:** 12px
- **Line height:** 1.50
- **Letter spacing:** -0.36px at 12px
- **Role:** Sparse technical labels and machine-like product metadata, set with tight -0.36px tracking to make document references feel system-generated.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| micro-label | aspekta | 500 | 10px | 1.5 | 0px | `--text-micro-label` |
| product-tab | aspekta | 450 | 11px | 1.5 | 1.1px | `--text-product-tab` |
| utility-link | aspekta | 550 | 12px | 1.5 | 0.96px | `--text-utility-link` |
| utility-nav | aspekta | 350 | 13px | 1.5 | 0px | `--text-utility-nav` |
| body | aspekta | 350 | 16px | 1.5 | 0px | `--text-body` |
| trust-heading | aspekta | 400 | 20px | 1.35 | -0.4px | `--text-trust-heading` |
| card-heading | aspekta | 550 | 24px | 1.2 | -0.24px | `--text-card-heading` |
| hero-display | aspekta | 650 | 48px | 0.95 | -1.2px | `--text-hero-display` |
| section-display | aspekta | 650 | 48px | 1.5 | -1.2px | `--text-section-display` |
| dark-section-display | aspekta | 650 | 56px | 0.98 | -1.96px | `--text-dark-section-display` |

## Tokens — Spacing & Shapes

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 5 | 5px | `--spacing-5` |
| 6 | 6px | `--spacing-6` |
| 8 | 8px | `--spacing-8` |
| 9 | 9px | `--spacing-9` |
| 10 | 10px | `--spacing-10` |
| 11 | 11px | `--spacing-11` |
| 12 | 12px | `--spacing-12` |
| 14 | 14px | `--spacing-14` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 44 | 44px | `--spacing-44` |
| 56 | 56px | `--spacing-56` |

### Border Radius

| Element | Value |
|---------|-------|
| tabs | 22.4px |
| cards | 12px |
| links | 8px |
| badges | 999px |
| images | 16px |
| inputs | 8px |
| buttons | 999px |
| largePanels | 35.2px |
| featureCards | 24px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(10, 18, 23, 0.15) 0px 1px 2px 0px` | `--shadow-subtle` |
| md | `oklab(0 0 0 / 0.15) 0px 10px 15px -3px, oklab(0 0 0 / 0.1...` | `--shadow-md` |
| xl | `rgba(0, 0, 0, 0.34) 0px 24px 80px 0px` | `--shadow-xl` |

### Layout

- **Section gap:** 24px
- **Card padding:** 16px
- **Element gap:** 6px

## Components

### Announcement Strip
**Role:** Full-width report or release notice above the navigation.

Use a #cdfe00 background with #0a1217 text; place the 10px weight-650 label on a #0a1217 dark chip and track it at 1.2px. Keep the following report text compact at 13px with the report link at weight 550.

### Two-Tier Header
**Role:** Public-site navigation with a utility row and primary navigation row.

Use a #ffffff surface divided by 1px #e6e7e8 rules. Set utility navigation in Aspekta 13px weight 350 and primary navigation in 15px weight 400; preserve small 6px gaps around compact controls.

### Lime Pill Demo Button
**Role:** Public conversion button.

Fill with #cdfe00, set #0a1217 label text in Aspekta 14px weight 550 with 0.35px tracking, use a 999px radius, horizontal padding of 24px, and no visible border.

### Secondary Gray Tile Button
**Role:** Large muted action or selectable feature tile.

Use #f1f1f1 fill, #0a1217 text, a 1px #e6e7e8 border, 8px radius, and 36px padding on every side.

### Dark Product Tab
**Role:** Mode switcher embedded over a dark product preview.

Set inactive tabs as transparent pills with rgba(255,255,255,0.75) text, 22.4px radius, and 8px 14px padding. Use Aspekta 11px weight 450, uppercase, with 0.88px tracking; the selected tab switches to #ffffff with #0a1217 text.

### Hero Split Panel
**Role:** Opening two-column composition pairing product positioning with a product demonstration.

Use a #0a1217 left panel with 35.2px radius and a neighboring 24px-radius visual panel. Set the title in #ffffff Aspekta 48px weight 650, uppercase, 45.6px line-height, and -1.2px tracking; keep supporting copy in muted light gray.

### Trust Logo Tile
**Role:** Partner-logo container in a horizontal credibility row.

Place each monochrome mark on #f1f1f1 with an 8px radius and no shadow. Keep logo tiles visually quiet against the #ffffff page canvas.

### Platform Feature Card
**Role:** Three-column product-area overview card.

Use a #f1f1f1 background, 8px radius, 36px internal padding, and #0a1217 heading text in Aspekta 24px weight 550 with -0.24px tracking. Embed a white product widget with 12px radius and 16px padding near the lower edge.

### Pale Workflow Module
**Role:** Large editorial product module for a single workflow.

Use one of #dceaf8, #f4e3cd, or #ddefe2 as the panel surface with a 24px or 35.2px radius. Keep the module title in #0a1217 and use the uppercase utility link style: Aspekta 12px weight 550, 0.96px tracking.

### Dark Workflow Module
**Role:** High-contrast workflow module within a dark section.

Fill with #0a1217 and reverse headings and utility links to #ffffff. Use the 56px weight-650 heading treatment only for the enclosing section title, then retain compact 12px uppercase links inside the module.

### Product Status Badge
**Role:** Compact state label inside software preview cards.

Use #3e4a50 for drafting, #5b4678 for review, and #9a6700 for needs-input states; every badge uses #ffffff text, 999px radius, 3px vertical and 11px horizontal padding, and Aspekta 13px weight 450.

### Document Preview Card
**Role:** Contained specification or drawing interface preview.

Use #ffffff with a 12px radius, 16px padding, and 1px #e6e7e8 dividers. Set primary interface copy in #0a1217, metadata in #85898b, completion marks in #1a7f55, and progress strokes in #24476b.

### Footer Conversion Field
**Role:** Deep closing section and footer.

Use #000000 as the full-width surface with #ffffff display text and #cdfe00 as the only saturated callout. Avoid additional tinted cards; retain broad rounded dark modules only where product content needs containment.

## Do's and Don'ts

### Do
- Use #ffffff as the main canvas and #0a1217 for major contrast sections.
- Reserve #cdfe00 for Lime Pill Demo Buttons, selected states, announcement emphasis, and graphic framing.
- Set hero display copy in Aspekta 48px weight 650 with -1.2px tracking and 45.6px line-height when it is uppercase.
- Set dark-section display copy in Aspekta 56px weight 650 with -1.96px tracking and 54.88px line-height.
- Use Aspekta 12px weight 550 with 0.96px tracking for uppercase utility links.
- Use 1px #e6e7e8 borders and no shadow for ordinary white cards.
- Use 999px radii for demo buttons and status badges; use 12px for document cards and 24px or 35.2px for major feature panels.

### Don't
- Do not use gradients; all major surfaces are solid fills.
- Do not apply #cdfe00 as a page background or body-text color outside short highlighted signals.
- Do not replace the #0a1217 feature fields with softer charcoal tones.
- Do not use a 16px default radius for every component; reserve 16px for media and image containers.
- Do not make public navigation heavier than Aspekta 15px weight 400 or utility navigation heavier than 13px weight 350.
- Do not add shadows to standard cards; keep them flat with #e6e7e8 hairlines.
- Do not use semantic badge colors outside compact product-status contexts.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper Canvas | `#ffffff` | Primary page background, light cards, and product-document surfaces. |
| 1 | Drafting Gray Surface | `#f1f1f1` | Feature cards, logo tiles, and muted interactive tiles. |
| 2 | Pale Workflow Surface | `#dceaf8` | Large contextual workflow panels. |
| 3 | Drawing Ink Surface | `#0a1217` | Hero panels, dark content bands, and high-contrast product contexts. |
| 4 | Archive Black Surface | `#000000` | Footer and terminal conversion field. |

## Elevation

- **Floating media card:** `0px 24px 80px 0px rgba(0, 0, 0, 0.34)`
- **Elevated button or control:** `0px 10px 15px -3px oklab(0 0 0 / 0.15), 0px 4px 6px -4px oklab(0 0 0 / 0.15)`
- **Icon control:** `0px 1px 2px 0px rgba(10, 18, 23, 0.15)`

## Imagery

Imagery is product-led rather than lifestyle-led: contained software screenshots show specifications, status lists, progress bars, and document markup, while architecture photography and black-on-white plan drawings provide the domain context. Photography is dark and atmospheric, often cropped behind a floating white product interface; plans are presented as raw technical sheets, sometimes framed by #cdfe00 side blocks. Graphics occupy large rounded modules and alternate with dense UI demonstrations. Icons are small, mostly monochrome outlined utility marks; the visual role is explanatory product proof, not decorative atmosphere.

## Layout

The page begins with a full-width lime announcement strip, followed by a slim utility row and a white primary header separated by hairline rules. The opening content is a contained two-column split: a broad near-black text panel on the left and a rounded product demonstration on the right. A horizontal trust row follows, then a large left-aligned section heading and a three-column grid of pale product cards. Later content switches to a full-width #0a1217 band with a large left-aligned white headline, arranging oversized pale workflow modules and architecture-plan imagery in asymmetric two-column compositions. The page remains spacious at the section scale but packs product UI with 6px to 12px internal gaps; it closes in a full-width black footer field.

## Agent Prompt Guide

Quick Color Reference:
- Drawing Ink: #0a1217 — Primary text, dark product panels, dark feature sections, icons, and structural strokes
- Paper: #ffffff — Page canvas, card surfaces, light product panels, and reversed text
- Drafting Gray: #f1f1f1 — Muted card surfaces, logo tiles, product-widget backgrounds, and secondary action surfaces
- Hairline: #e6e7e8 — 1px card, navigation, and input-like dividers
- Stone: #85898b — Muted helper text, secondary metadata, and low-emphasis interface marks
- Graphite: #54595d — Supporting body copy on light surfaces
- Archive Black: #000000 — Footer canvas and the deepest visual anchor
- Signal Lime: #cdfe00 — Filled demo buttons, active selection, announcement highlights, and graphic framing — the acid-lime mark punctures the otherwise monochrome document palette
- Blueprint Wash: #dceaf8 — Pale blue feature-card surface for specification and document workflows
- Material Wash: #f4e3cd — Pale warm feature-card surface for architectural content modules
- Site Wash: #ddefe2 — Pale green-tinted feature-card surface
- Review Status: #5b4678 — In-review status badges in product interfaces
- Input Status: #9a6700 — Needs-input status badges in product interfaces
- Complete Status: #1a7f55 — Green wash for highlight backgrounds, decorative bands, and soft emphasis behind content. Use as a supporting accent, not as a status color
- Plan Blue: #24476b — Blue wash for highlight backgrounds, decorative bands, and soft emphasis behind content

Create a #0a1217 hero panel with a #ffffff uppercase headline in Aspekta 48px weight 650, 45.6px line-height, and -1.2px tracking; pair it with a 24px-radius architecture-photo product preview and a #cdfe00 999px demo button.
Create a three-column #f1f1f1 feature-card grid with 8px radii and 36px padding; use #0a1217 Aspekta 24px weight-550 titles and place a #ffffff, 12px-radius document widget at the card base.
Create a dark #0a1217 workflow section with a #ffffff Aspekta 56px weight-650 headline at 54.88px line-height and -1.96px tracking; place a #dceaf8 24px-radius specification module beside a plan image framed in #cdfe00.
Create a white document-preview card with 16px padding, 12px radius, and #e6e7e8 dividers; use #85898b metadata, #24476b progress marks, and #1a7f55 completion indicators.
Create a compact dark product tab bar using transparent 22.4px-radius tabs with rgba(255,255,255,0.75) Aspekta 11px labels; render the selected tab as #ffffff with #0a1217 text.

## Similar Brands

- **Linear** — High-contrast product demonstrations, compact technical metadata, and restrained use of a single vivid signal color.
- **Notion** — Document-first product framing with white workspace surfaces, thin dividers, and dense embedded interface previews.
- **Arkitect** — Architecture-domain presentation through drawings, material imagery, and oversized editorial software modules.
- **Raycast** — Near-black interface stages paired with compact controls and sharply differentiated utility typography.

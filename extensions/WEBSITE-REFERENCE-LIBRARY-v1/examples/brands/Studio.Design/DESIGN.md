# Studio.Design — Style Reference
> Gallery wall in motion. Build each screen as a quiet gray exhibition surface where editorial typography and overlapping creative work compete for attention.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Studio.Design frames web creation as an art-board collage: a pale gray canvas, oversized near-black type, and an irregular stack of vivid portfolio previews that interrupts the grid. The interface itself stays achromatic and materially light, reserving black panels and #222222 controls for decisive navigation moments while allowing creator work to supply the color. Inter headlines use tightly tracked, heavy-but-not-maximal weights; enormous 80px statements sit beside compact utility navigation and small rounded controls.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Studio Canvas | `#eeeeee` | `--color-studio-canvas` | Page backgrounds, hero fields, footer fields, and large seamless content bands |
| Paper White | `#ffffff` | `--color-paper-white` | Light inset surfaces, reversed text, icon fills, and white action treatment |
| Charcoal Ink | `#222222` | `--color-charcoal-ink` | Display and body text, dark navigation panels, filled controls, and primary action backgrounds |
| Graphite | `#333333` | `--color-graphite` | Secondary text and text on dark filled controls |
| Soft Ash | `#555555` | `--color-soft-ash` | Footer legal copy, locale links, and subdued helper text |
| Absolute Black | `linear-gradient(180deg, #000000 0%, #eeeeee 100%)` | `--color-absolute-black` | Portfolio feature cards, hairline ghost controls, and decorative black-to-canvas transitions |

## Tokens — Typography

### sans-serif — sans-serif — detected in extracted data but not described by AI · `--font-sans-serif`
- **Weights:** 400, 700
- **Sizes:** 16px, 19px
- **Line height:** 1
- **Role:** sans-serif — detected in extracted data but not described by AI

### Inter — Core display, body, navigation, and control family. Headlines run at 48px/700, 64px/600, and 80px/600 with -0.04em tracking: compressed letterforms let very large statements remain like editorial labels rather than billboard type. · `--font-inter`
- **Substitute:** Arial, Helvetica Neue, sans-serif
- **Weights:** 400, 500, 600, 700
- **Sizes:** 11px, 14px, 16px, 19px, 20px, 48px, 64px, 80px
- **Line height:** 1.00, 1.10, 1.15, 1.20, 1.40, 1.66
- **Letter spacing:** -3.2px at 80px, -2.56px at 64px, -1.92px at 48px, -0.64px at 16px; -0.11px at 11px
- **OpenType features:** `"palt"`
- **Role:** Core display, body, navigation, and control family. Headlines run at 48px/700, 64px/600, and 80px/600 with -0.04em tracking: compressed letterforms let very large statements remain like editorial labels rather than billboard type.

### Inter Tight — Compact public navigation, small labels, and 16px strong body labels. Its narrower proportions keep the navigation dense against the large, spacious display type. · `--font-inter-tight`
- **Substitute:** Inter, Arial Narrow, sans-serif
- **Weights:** 500, 700
- **Sizes:** 15px, 16px
- **Line height:** 1.40
- **Letter spacing:** normal
- **OpenType features:** `"palt"`
- **Role:** Compact public navigation, small labels, and 16px strong body labels. Its narrower proportions keep the navigation dense against the large, spacious display type.

### Arial — Fallback treatment for isolated button and icon utilities. · `--font-arial`
- **Substitute:** sans-serif
- **Weights:** 400
- **Sizes:** 16px
- **Line height:** 1.20
- **Letter spacing:** normal
- **Role:** Fallback treatment for isolated button and icon utilities.

### Font Awesome 6 Brands — Brand-social icons in navigation and footer clusters. · `--font-font-awesome-6-brands`
- **Substitute:** Simple Icons
- **Weights:** 400
- **Sizes:** 18px
- **Line height:** 1.00
- **Letter spacing:** normal
- **Role:** Brand-social icons in navigation and footer clusters.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| legal | Inter | 400 | 11px | 1.66 | -0.11px | `--text-legal` |
| nav | Inter Tight | 500 | 15px | 1.4 | 0px | `--text-nav` |
| body | sans-serif | 400 | 16px | 1 | 0px | `--text-body` |
| body-strong | Inter | 700 | 16px | 1.4 | -0.64px | `--text-body-strong` |
| feature-nav-heading | Inter | 700 | 16px | 1.66 | 0px | `--text-feature-nav-heading` |
| feature-nav-link | Inter | 400 | 16px | 1.66 | 0px | `--text-feature-nav-link` |
| section-heading | Inter | 700 | 48px | 1.1 | -1.92px | `--text-section-heading` |
| editor-heading | Inter | 600 | 64px | 1.66 | -2.56px | `--text-editor-heading` |
| hero-display | Inter | 600 | 80px | 1 | -3.2px | `--text-hero-display` |

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
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 60 | 60px | `--spacing-60` |
| 64 | 64px | `--spacing-64` |
| 100 | 100px | `--spacing-100` |
| 140 | 140px | `--spacing-140` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 8px |
| links | 4px |
| images | 4px |
| buttons | 8px |
| compactButtons | 4px |
| utilitySurfaces | 12px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| md | `rgba(0, 0, 0, 0.1) 0px 2px 15px 0px` | `--shadow-md` |

### Layout

- **Section gap:** 60px
- **Card padding:** 24px
- **Element gap:** 16px

## Components

### Studio Wordmark
**Role:** Top-left brand anchor in the header.

Set the compact monochrome wordmark against Studio Canvas #eeeeee; keep it visually small relative to the 80px hero display and align it in a header with 20px top offset.

### Public Navigation Link
**Role:** Header navigation and small public links.

Use Inter Tight 15px/500 with 21px line-height in Charcoal Ink #222222; space neighboring links by 16px or 24px and use a 4px radius only when a link receives a surface treatment.

### Filled Account Button
**Role:** Dark account and conversion control in the public header.

Use a Charcoal Ink #222222 fill with Paper White #ffffff text in Inter 16px/600, -0.64px tracking, 22.4px line-height; apply 8px radius and 12px 24px padding.

### Compact Dark Arrow Button
**Role:** Inline conversion button with a trailing directional icon.

Use Charcoal Ink #222222 fill, 4px radius, 12px top and bottom padding, 24px left padding, and 20px right padding; keep the label at 16px and pair it with a small arrow icon.

### White Inverse Button
**Role:** Action control on black or #222222 panels.

Use Paper White #ffffff fill, Graphite #333333 text, a 1px Charcoal Ink #222222 border, 8px radius, and 12px 24px padding.

### Bare Text Control
**Role:** Minimal utility button and link-like trigger.

Use a transparent background, #000000 text and border, 0px radius, and no intrinsic padding; preserve the raw text-like silhouette rather than placing it in a pill.

### Portfolio Mosaic Tile
**Role:** Hero and creator-work showcase image panel.

Use raw vivid project artwork as the fill, with tiles overlapping at mismatched sizes rather than forming a uniform grid; image corners alternate between 4px and 8px radius, and no card padding or shadow.

### Black Showcase Card
**Role:** High-contrast content or project feature surface.

Use Absolute Black #000000 background, 8px radius, no box shadow, and 0px internal padding when the visual itself fills the card edge to edge.

### Dark Feature Navigation Panel
**Role:** Expanded feature-menu or footer navigation block.

Use Charcoal Ink #222222 as the panel background; headings are Paper White #ffffff in Inter 16px/700 with 26.56px line-height, while child links are #f7f7f7 in Inter 16px/400 at the same line-height.

### Footer Link Cluster
**Role:** Dense multi-column footer navigation.

Place clusters on Studio Canvas #eeeeee with 4px internal micro-gaps and 15px or 16px row/column gaps; use Inter Tight 15px/500 in Charcoal Ink #222222 and Soft Ash #555555 for legal or locale items.

### Hover Lift Control
**Role:** Elevated state for prominent buttons.

Retain the 8px button radius and apply 0px 2px 15px 0px rgba(0, 0, 0, 0.1); do not extend this shadow to portfolio tiles or black showcase cards.

## Do's and Don'ts

### Do
- Use Studio Canvas #eeeeee as the default page field and Charcoal Ink #222222 for nearly all display text.
- Set hero statements in Inter 80px/600, 80px line-height, with -3.2px tracking.
- Set major section headings in Inter 48px/700, 52.8px line-height, with -1.92px tracking.
- Use Inter Tight 15px/500 with 21px line-height for public navigation and compact labels.
- Use 16px element gaps, 24px horizontal control padding, and 12px vertical control padding.
- Use 8px radius for standard buttons and dark cards; reserve 4px radius for compact buttons and image tiles.
- Let portfolio artwork provide the page color while UI chrome remains limited to #eeeeee, #ffffff, #222222, #333333, and #000000.

### Don't
- Do not introduce saturated UI accents, semantic-color badges, or colored primary buttons.
- Do not use pill-shaped 9999px controls; standard public buttons use 8px radius and compact dark controls use 4px.
- Do not add padding inside edge-to-edge portfolio mosaic tiles or Black Showcase Cards.
- Do not use broad card shadows; only prominent button hover states use 0px 2px 15px 0px rgba(0, 0, 0, 0.1).
- Do not loosen display tracking to normal spacing; use -0.04em on the 48px, 64px, and 80px Inter display steps.
- Do not turn every section into a white card; maintain large uninterrupted Studio Canvas #eeeeee fields.
- Do not regularize the hero artwork into equal columns; preserve mismatched overlap and cropped project-image edges.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Studio Canvas | `#eeeeee` | Default page, hero, and footer background. |
| 1 | Paper White | `#ffffff` | Inverse controls and light inset surfaces. |
| 2 | Graphite Surface | `#333333` | Secondary dark utility surface. |
| 3 | Charcoal Surface | `#222222` | Navigation panels and filled controls. |
| 4 | Absolute Black Surface | `#000000` | Full-bleed showcase cards and deepest contrast blocks. |

## Elevation

- **Hover Lift Control:** `0px 2px 15px 0px rgba(0, 0, 0, 0.1)`

## Imagery

Imagery is creator-work-led rather than stock-led: vivid editorial graphics, illustrated scenes, bold typography, photography, and graphic poster crops appear as the portfolio content. In the hero, these works form an overlapping, uneven collage with hard rectangular crops and occasional 4px to 8px softened corners; the images occupy more visual area than the supporting explanatory copy. The site UI remains monochrome so every artwork can retain its own color language. Icons are sparse, compact, and primarily monochrome, with brand-social glyphs used in footer or navigation contexts.

## Layout

The page is a long, full-bleed light-canvas composition rather than a boxed product shell. A slim header places the wordmark at left and a compact horizontal navigation/action cluster at right. The opening screen is asymmetric: an oversized left-aligned hero statement, overlapping portfolio tiles concentrated through the center and upper right, and a compact descriptive text-and-button block at lower right. Subsequent content follows spacious showcase rhythm with large headline-led sections and product or creator visuals, then closes in a dense multi-column footer/navigation zone; contrast is created by occasional black and #222222 bands rather than regular border-separated sections.

## Agent Prompt Guide

Quick Color Reference:
- Studio Canvas: #eeeeee — Page backgrounds, hero fields, footer fields, and large seamless content bands
- Paper White: #ffffff — Light inset surfaces, reversed text, icon fills, and white action treatment
- Charcoal Ink: #222222 — Display and body text, dark navigation panels, filled controls, and primary action backgrounds
- Graphite: #333333 — Secondary text and text on dark filled controls
- Soft Ash: #555555 — Footer legal copy, locale links, and subdued helper text
- Absolute Black: linear-gradient(180deg, #000000 0%, #eeeeee 100%) — Portfolio feature cards, hairline ghost controls, and decorative black-to-canvas transitions

Create an asymmetric hero on Studio Canvas #eeeeee: set the left headline in Inter 80px/600, 80px line-height, -3.2px tracking, Charcoal Ink #222222; overlap a center-right collage of raw vivid portfolio images with 4px and 8px corners; place a compact right-side description and an 8px Charcoal Ink button with Paper White text.
Create a feature introduction on Studio Canvas #eeeeee with a Charcoal Ink #222222 heading in Inter 48px/700, 52.8px line-height, -1.92px tracking; pair it with an edge-to-edge product or creative-work visual rather than a padded white card.
Create a dark expanded navigation panel in Charcoal Ink #222222: use Paper White headings in Inter 16px/700 at 26.56px line-height and #f7f7f7 child links in Inter 16px/400, organized with 16px gaps.
Create a footer link cluster on Studio Canvas #eeeeee using Inter Tight 15px/500, 21px line-height, Charcoal Ink links, Soft Ash #555555 legal text, and 15px to 16px grid gaps.

## Similar Brands

- **Cargo** — Portfolio-first layouts where creator imagery dominates a restrained monochrome interface.
- **Readymag** — Editorial web-builder composition with oversized display typography and intentionally irregular visual placement.
- **Framer** — Large tightly tracked sans headlines paired with compact dark conversion controls on pale neutral canvases.
- **Awwwards** — Gallery-like presentation of diverse, colorful creative work against sparse UI framing.

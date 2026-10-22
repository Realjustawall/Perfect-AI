# Azione — Style Reference
> Sunlit editorial diptych. Pair warm, imperfect campaign imagery with gallery-like typography and rust-colored information blocks.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Azione — sunlit editorial diptych. The interface pairs cinematic, full-bleed campaign photography with enormous cream wordmarks and delicate editorial-serif statements, then cuts to tightly framed image-and-copy panels in rust brown and off-white. Typography is deliberately triadic: PP Editorial Old carries dramatic cultural weight, Saans TRIAL handles concise human copy, and Favorit Mono turns navigation, labels, and controls into small technical annotations. Surfaces stay flat and tactile, with 16px rounded content containers, hairline cream rules on dark treatments, and color reserved for the rust information panels rather than universal controls.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Gallery Black | `#000000` | `--color-gallery-black` | Dark page bands, navigation overlays, menu surfaces, and primary text |
| Paper Cream | `#fbfaf6` | `--color-paper-cream` | Primary canvas, light cards, reversed display type, navigation text, and hairline outlined controls |
| Ink Charcoal | `#222222` | `--color-ink-charcoal` | Text on pale utility controls and understated dark labels |
| Mist Gray | `#e3e3e9` | `--color-mist-gray` | Pale circular utility-control fills |
| Input Ash | `#dadbdd` | `--color-input-ash` | Form-field divider and border lines |
| Card White | `#ffffff` | `--color-card-white` | Portfolio tile and card surface within the Paper Cream canvas |
| Azione Rust | `#813413` | `--color-azione-rust` | Large editorial copy panels and branded content fields — an earthy counterpoint to cool campaign photography |

## Tokens — Typography

### PP Editorial Old — Display headlines, oversized navigation title, client-name marquee, and prominent contact links. The unbolded high-contrast serif makes 72–100px statements feel like magazine typography rather than advertising sans headlines. · `--font-pp-editorial-old`
- **Substitute:** Cormorant Garamond
- **Weights:** 400
- **Sizes:** 16px, 40px, 72px, 78px, 100px
- **Line height:** 1.00, 1.11, 1.50
- **Role:** Display headlines, oversized navigation title, client-name marquee, and prominent contact links. The unbolded high-contrast serif makes 72–100px statements feel like magazine typography rather than advertising sans headlines.

### Saans TRIAL — Short hero positioning lines, editorial body copy, and form inputs. Its straightforward sans construction keeps the expressive PP Editorial Old from overtaking informational text. · `--font-saans-trial`
- **Substitute:** Archivo
- **Weights:** 400
- **Sizes:** 19px, 20px, 28px
- **Line height:** 1.10, 1.20, 1.30
- **Role:** Short hero positioning lines, editorial body copy, and form inputs. Its straightforward sans construction keeps the expressive PP Editorial Old from overtaking informational text.

### Favorit Mono — Uppercase navigation, buttons, service links, labels, and footer metadata. At 14px it uses 0.42px tracking, creating a compact utilitarian contrast against the ornamental serif. · `--font-favorit-mono`
- **Substitute:** IBM Plex Mono
- **Weights:** 400
- **Sizes:** 12px, 14px, 16px
- **Line height:** 1.20, 1.50
- **Letter spacing:** 0.36px at 12px; 0.42px at 14px
- **Role:** Uppercase navigation, buttons, service links, labels, and footer metadata. At 14px it uses 0.42px tracking, creating a compact utilitarian contrast against the ornamental serif.

### system-ui — Accessibility utility text and the thin close control. · `--font-system-ui`
- **Substitute:** Arial
- **Weights:** 100, 400
- **Sizes:** 16px
- **Line height:** 1.20, 1.50
- **Role:** Accessibility utility text and the thin close control.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| mono-label | Favorit Mono | 400 | 14px | 1.2 | 0.42px | `--text-mono-label` |
| nav | Favorit Mono | 400 | 14px | 1.5 | 0.42px | `--text-nav` |
| footer-meta | Favorit Mono | 400 | 16px | 1.5 | 0px | `--text-footer-meta` |
| input | Saans TRIAL | 400 | 20px | 1.2 | 0px | `--text-input` |
| hero-positioning | Saans TRIAL | 400 | 28px | 1.1 | 0px | `--text-hero-positioning` |
| display | PP Editorial Old | 400 | 72px | 1 | 0px | `--text-display` |
| marquee-display | PP Editorial Old | 400 | 78px | 1.5 | 0px | `--text-marquee-display` |
| navigation-display | PP Editorial Old | 400 | 100px | 1.11 | 0px | `--text-navigation-display` |

## Tokens — Spacing & Shapes

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 5 | 5px | `--spacing-5` |
| 8 | 8px | `--spacing-8` |
| 10 | 10px | `--spacing-10` |
| 11 | 11px | `--spacing-11` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 20 | 20px | `--spacing-20` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 30 | 30px | `--spacing-30` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 50 | 50px | `--spacing-50` |
| 60 | 60px | `--spacing-60` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 16px |
| links | 6px |
| pills | 9999px |
| badges | 16px |
| images | 24px |
| inputs | 0px |
| buttons | 9999px |
| utilityButtons | 50% |

### Layout

- **Section gap:** 24px
- **Card padding:** 16px
- **Element gap:** 10px

## Components

### Cinematic Hero
**Role:** Top-of-page campaign introduction

Use a full-bleed, warm-toned lifestyle or movement photograph beneath an oversized cream brand wordmark. Place the 28px/30.8px Saans TRIAL positioning line centrally over the image, followed by a 14px Favorit Mono outlined pill with 16px 40px padding, 1000px radius, and a 1px Paper Cream border.

### Hero Client Marquee
**Role:** Moving proof strip over the hero image

Set oversized client names in 78px PP Editorial Old, weight 400, line-height 117px, in Paper Cream. Run the line as a horizontal marquee across the lower edge of the hero; retain the 20s linear marquee motion.

### Split Editorial Feature Panel
**Role:** Image-and-copy introduction block

Build an equal visual split inside a 16px rounded container: a tightly cropped campaign photograph on one side and an Azione Rust #813413 copy panel on the other. Set the panel headline in Paper Cream PP Editorial Old and paragraph copy in light Saans TRIAL; keep both halves flush with no card shadow.

### Portfolio Image Tile
**Role:** Project preview card

Use a Card White #ffffff surface with a 16px radius, no shadow, and 2px horizontal interior padding. Let the imagery dominate; reserve large lower space for project metadata rather than enclosing it in a dense caption box.

### Outlined Work Pill
**Role:** Reversed hero link

Use transparent fill, Paper Cream #fbfaf6 text and 1px border, 1000px radius, and 16px 40px padding. Set Favorit Mono at 14px with 0.42px tracking; include a small diagonal-arrow glyph before the label.

### Service Arrow Link
**Role:** Editorial panel link

Pair a 24px circular Paper Cream icon field with a small dark diagonal arrow and a Paper Cream Favorit Mono label at 14px/21px with 0.42px tracking. Keep the label unboxed and separated from the icon by 10px.

### Mono Navigation Link
**Role:** Public site navigation

Render links in uppercase Favorit Mono at 14px/21px with 0.42px tracking and Paper Cream text on dark or photographic surfaces. Use compact 8px vertical and 20px horizontal hit-area padding without filled backgrounds.

### Circular Utility Control
**Role:** Minimal icon-only control

Use a #e3e3e9 fill at 27% opacity, transparent icon color treatment, and a 50% radius. Keep padding at 0px and center a single icon inside the circular field.

### Text-Only Utility Button
**Role:** Dark-on-light secondary control

Use transparent fill, Ink Charcoal #222222 text, a 1px Ink Charcoal border, and 0px radius or padding. This remains a bare utility treatment rather than a pill.

### Underlined Contact Input
**Role:** Contact form field

Use a transparent background, 0px radius, and a 1px Input Ash #dadbdd bottom-rule treatment. Set input text in Paper Cream Saans TRIAL at 20px/24px with 11px vertical padding; do not wrap fields in white boxes.

### Contact Submit Button
**Role:** Form submission control

Use transparent fill, Paper Cream #fbfaf6 text, 7px radius, and 8px 20px padding. Set the label in uppercase Favorit Mono at 14px with 0.42px tracking.

### Editorial Footer Contact Link
**Role:** High-emphasis footer address

Set the contact address in 40px PP Editorial Old, weight 400, line-height 40px, in Paper Cream on a Gallery Black footer field. Pair surrounding legal metadata with 16px Favorit Mono.

### Main Navigation Overlay
**Role:** Expanded navigation screen

Use Gallery Black as the full navigation surface with a 100px/111px PP Editorial Old navigation heading in black only when shown against Paper Cream; invert heading and links to Paper Cream for dark overlay states. Use the system-ui close mark at 46px, weight 100, with a 69px line-height.

## Do's and Don'ts

### Do
- Use Paper Cream #fbfaf6 as the dominant light canvas and Gallery Black #000000 for full-width navigation or footer fields.
- Set display statements in PP Editorial Old at the measured 72px, 78px, or 100px steps; keep the weight at 400.
- Use Favorit Mono at 14px with 0.42px tracking for navigation, service links, and button labels.
- Keep feature-card corners at 16px and image corners at 24px.
- Build outlined reversed pills with a 1000px radius, 16px 40px padding, and a 1px Paper Cream border.
- Use Azione Rust #813413 for large copy-bearing editorial panels, paired with Paper Cream display type.
- Use 10px as the default icon-to-label gap and 24px as the compact section gap.

### Don't
- Do not use gradients; all principal surfaces are flat color or raw photography.
- Do not add drop shadows to portfolio cards or editorial split panels.
- Do not set PP Editorial Old heavier than 400.
- Do not replace Favorit Mono labels with generic bold sans-serif text or remove its 0.42px tracking at 14px.
- Do not use square 0px corners for image-led feature panels; use 16px containers and 24px image corners.
- Do not turn every link into a filled button; preserve transparent text links and outlined Paper Cream hero pills.
- Do not introduce saturated UI colors beyond Azione Rust #813413; campaign-photo color belongs inside imagery.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper Canvas | `#fbfaf6` | Primary page background and light content field. |
| 1 | Card White | `#ffffff` | Portfolio tile surface. |
| 2 | Mist Utility Surface | `#e3e3e9` | Subtle circular utility-control fill. |
| 3 | Gallery Black Field | `#000000` | Navigation, footer, and dark overlay surface. |

## Elevation

Content is separated through cinematic cropping, hard color-field changes, and rounded boundaries rather than shadows. Portfolio cards and editorial panels remain shadowless.

## Imagery

Photography is the central visual material: candid, movement-led lifestyle and product campaign scenes with warm, slightly hazy natural light or high-saturation color backdrops. Images are tightly cropped and either fill the entire hero or occupy one half of a rounded editorial diptych; they are not used as small decorative thumbnails. Large typography overlays photography directly in Paper Cream, while graphic elements are sparse: small mono arrows, circular icons, and the giant wordmark act as the only UI-like graphics. The page is image-forward, but text panels balance photography at a near-equal visual weight.

## Layout

The page moves between immersive full-bleed photographic fields and inset editorial modules on a Paper Cream canvas. The opening hero is image-first: an oversized wordmark dominates the upper frame, a compact centered positioning line and outlined pill sit in the middle, and a continuous serif client-name marquee crosses the lower edge. Below, content is organized as rounded image-and-copy diptychs, with imagery cropped tightly beside a rust text panel; portfolio content continues as rounded visual tiles rather than dense text cards. Navigation occupies a shallow top bar and can expand into a dedicated full-screen navigation treatment, while the footer becomes a dark contact field with an oversized editorial email link. Vertical rhythm is compact at 24px between modules, but photographs create the page's large visual pauses.

## Agent Prompt Guide

Quick Color Reference:
- Gallery Black: #000000 — Dark page bands, navigation overlays, menu surfaces, and primary text
- Paper Cream: #fbfaf6 — Primary canvas, light cards, reversed display type, navigation text, and hairline outlined controls
- Ink Charcoal: #222222 — Text on pale utility controls and understated dark labels
- Mist Gray: #e3e3e9 — Pale circular utility-control fills
- Input Ash: #dadbdd — Form-field divider and border lines
- Card White: #ffffff — Portfolio tile and card surface within the Paper Cream canvas
- Azione Rust: #813413 — Large editorial copy panels and branded content fields — an earthy counterpoint to cool campaign photography

Create a full-bleed campaign hero with warm, hazy movement photography, a giant Paper Cream wordmark, a centered 28px/30.8px Saans TRIAL line in Paper Cream, and an outlined Paper Cream work pill using 14px Favorit Mono with 0.42px tracking.
Create a 16px-radius editorial diptych: tightly cropped high-saturation product photography on the left and an Azione Rust #813413 panel on the right with a Paper Cream PP Editorial Old headline and light Saans TRIAL body copy.
Create a Gallery Black #000000 footer contact field with a 40px/40px PP Editorial Old Paper Cream email link, 16px Favorit Mono metadata, and no shadow.
Create a dark navigation overlay with Paper Cream 14px/21px uppercase Favorit Mono links at 0.42px tracking and a thin 46px system-ui close symbol.
Create a Paper Cream portfolio grid of Card White #ffffff image tiles with 16px corners, 2px horizontal padding, no shadow, and imagery prioritized over captions.

## Similar Brands

- **Dazed** — Overscaled editorial type placed directly over raw, culturally focused photography.
- **Aesop** — Restrained earthy brown fields paired with high-contrast editorial serif messaging.
- **Creative Blood** — Photography-led agency presentation with oversized typography and project-first pacing.
- **Mischief** — Large wordmark-led hero compositions and direct, image-dominant agency storytelling.

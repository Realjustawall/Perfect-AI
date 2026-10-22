# Apple — Style Reference
> Apple - cinema on white. Vast white editorial space gives way to full-bleed product films, where silhouetted movement and saturated light carry the visual drama.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Apple AirPods pages pair an almost clinical white editorial canvas with immersive full-bleed films that shift from amber performance art to electric blue soundscapes. Product navigation is exceptionally thin and quiet, while the product itself is introduced through oversized SF Pro Display headlines, restrained 600 weight, and large cinematic media panels rather than decorative UI. Bright blue appears only as concise purchase and text-link punctuation; large rounded controls, translucent media overlays, and near-shadowless surfaces keep attention on the film frame.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Gallery White | `#fafafc` | `--color-gallery-white` | Global navigation fill, light product panels, light icons, and inverse text |
| Cloud Gray | `#f5f5f7` | `--color-cloud-gray` | Alternate section backgrounds, quiet cards, footer bands, and pale control surfaces |
| Studio White | `#ffffff` | `--color-studio-white` | Primary document canvas and white-on-dark display text |
| Graphite | `#1d1d1f` | `--color-graphite` | Primary headlines, body copy, dark media cards, and dark iconography |
| Slate | `#5b5b61` | `--color-slate` | Secondary editorial copy and supporting headings |
| Steel | `#86868b` | `--color-steel` | Muted explanatory copy and de-emphasized labels |
| Divider Gray | `#d6d6d6` | `--color-divider-gray` | Hairline section and footer dividers |
| Control Mist | `#e2e2e5` | `--color-control-mist` | Pale media-control and subdued action backgrounds |
| Apple Blue | `#0071e3` | `--color-apple-blue` | Filled purchase buttons and keyboard focus treatment — a concentrated blue mark against otherwise neutral controls |
| Link Blue | `#0066cc` | `--color-link-blue` | Text links, film links, and inline disclosure affordances |
| New Orange | `#b64400` | `--color-new-orange` | New-product labels and limited-status annotations |

## Tokens — Typography

### SF Pro Display — Display and section headlines. The 600 weight remains controlled rather than heavy; hero headlines scale to 64px/68px and cinematic chapter statements to 80px/84px. Tracking tightens as type grows: -0.58px at 64px and -1.2px at 80px, while compact labels open slightly to +0.20px at 28px. · `--font-sf-pro-display`
- **Substitute:** Arial, Helvetica Neue, system-ui
- **Weights:** 600
- **Sizes:** 20px, 21px, 24px, 28px, 32px, 48px, 56px, 64px, 80px
- **Line height:** 1.00-1.25
- **Letter spacing:** -1.2px at 80px, -0.58px at 64px, -0.29px at 32px, +0.20px at 28px, +0.22px at 24px
- **OpenType features:** `"numr"`
- **Role:** Display and section headlines. The 600 weight remains controlled rather than heavy; hero headlines scale to 64px/68px and cinematic chapter statements to 80px/84px. Tracking tightens as type grows: -0.58px at 64px and -1.2px at 80px, while compact labels open slightly to +0.20px at 28px.

### SF Pro Text — Navigation, purchase controls, links, body copy, badges, and footer text. Small navigation uses 12px/12px at -0.12px tracking; standard readable copy uses 17px with -0.37px tracking; 600 distinguishes product names and pricing without changing the family. · `--font-sf-pro-text`
- **Substitute:** Arial, Helvetica Neue, system-ui
- **Weights:** 400, 600
- **Sizes:** 12px, 17px, 20px, 26px, 44px
- **Line height:** 1.00-1.83
- **Letter spacing:** -0.37px at 17px, -0.19px at 12px, -0.38px at 20px, -0.26px at 26px, -0.13px at 44px
- **OpenType features:** `"numr"`
- **Role:** Navigation, purchase controls, links, body copy, badges, and footer text. Small navigation uses 12px/12px at -0.12px tracking; standard readable copy uses 17px with -0.37px tracking; 600 distinguishes product names and pricing without changing the family.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| nav | SF Pro Text | 400 | 12px | 1.33 | -0.12px | `--text-nav` |
| badge | SF Pro Text | 600 | 12px | 1.33 | -0.12px | `--text-badge` |
| body | SF Pro Text | 400 | 17px | 1.47 | -0.374px | `--text-body` |
| body-strong | SF Pro Text | 600 | 17px | 1.24 | -0.374px | `--text-body-strong` |
| button-label | SF Pro Text | 400 | 17px | 1.24 | -0.374px | `--text-button-label` |
| section-heading | SF Pro Display | 600 | 24px | 1.17 | 0.216px | `--text-section-heading` |
| chapter-kicker | SF Pro Display | 600 | 28px | 1.14 | 0.196px | `--text-chapter-kicker` |
| product-title | SF Pro Display | 600 | 32px | 1.13 | 0.128px | `--text-product-title` |
| hero-heading | SF Pro Display | 600 | 64px | 1.06 | -0.576px | `--text-hero-heading` |
| cinematic-heading | SF Pro Display | 600 | 80px | 1.05 | -1.2px | `--text-cinematic-heading` |

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
| 44 | 44px | `--spacing-44` |
| 48 | 48px | `--spacing-48` |
| 52 | 52px | `--spacing-52` |
| 76 | 76px | `--spacing-76` |
| 80 | 80px | `--spacing-80` |
| 160 | 160px | `--spacing-160` |
| 208 | 208px | `--spacing-208` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 28px |
| links | 10px |
| buttons | 9999px |
| mediaCards | 20px |
| mediaControls | 36px |
| purchaseCapsules | 36px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(0, 0, 0, 0.11) 0px 0px 1px 0px inset` | `--shadow-subtle` |

### Layout

- **Section gap:** 163px
- **Card padding:** 20px
- **Element gap:** 4px

## Components

### Global Product Navigation
**Role:** 44px-high global commerce navigation

Use a 44px bar with compact 12px/12px SF Pro Text 400 labels at -0.12px tracking. On dark film, set labels and icons to rgba(255,255,255,0.8); on light surfaces use Graphite #1d1d1f or dark gray navigation text.

### Local Product Navigation
**Role:** Product-level sticky navigation

Use a 52px product bar beneath the global navigation with a 32px/36px SF Pro Display 600 product title at +0.13px tracking. Keep utility links at 12px and use a 9999px Apple Blue #0071e3 purchase pill with 3px 10px padding.

### Cinematic Hero
**Role:** Full-bleed product-film introduction

Place white product text directly over full-bleed video or still imagery with no enclosing card. Use a 64px/68px SF Pro Display 600 headline at -0.58px tracking, a smaller 32px/36px product label, and a floating 36px-radius purchase capsule near the lower edge.

### Price-and-Buy Capsule
**Role:** Floating commerce control over media

Use a 36px-radius capsule with rgba(210,210,215,0.64) fill and rgba(0,0,0,0.56) price text. Nest the Apple Blue #0071e3 9999px Buy pill inside it; use 17px SF Pro Text for the price and button label.

### Blue Buy Pill
**Role:** Filled purchase action

Use #0071e3 fill, white text, 980px or 9999px radius, and 3px vertical by 10px horizontal padding for compact navigation-scale purchase actions. Use SF Pro Text 400 at 12px/16px in the local navigation treatment.

### Film Text Link
**Role:** Inline editorial and media link

Set link text in Link Blue #0066cc, typically SF Pro Text 400 at 17px/25px with -0.37px tracking. Pair watch links with a compact circular disclosure/play glyph rather than a filled button.

### Media Pause Control
**Role:** Video playback control

Use a 36px circular control with rgba(210,210,215,0.64) fill and rgba(0,0,0,0.56) iconography. Keep it floating over video; do not add a cast shadow.

### Media Progress Capsule
**Role:** Segmented video progress indicator

Use a 36px-radius translucent control rail beside the pause control. Render inactive segment dots in muted gray and the active segment as a short dark rounded bar; preserve the pale rgba(210,210,215,0.64) control fill.

### Highlight Media Card
**Role:** Contained product-film panel

Use a 20px corner radius for image/video clips, with text overlaid directly on the footage. For frosted overlays, use rgba(255,255,255,0.25) and retain the 20px radius; do not add shadows or opaque content blocks.

### Editorial Feature Card
**Role:** Quiet light-background product feature module

Use Cloud Gray #f5f5f7 fill, 28px radius, 20px internal padding, and Graphite #1d1d1f text. Cards remain flat with no shadow and support product imagery, concise headings, and blue text links.

### New Product Label
**Role:** Product-status annotation

Use New Orange #b64400 in SF Pro Text 600 at 12px/16px with -0.12px tracking. Keep the label text-only with no badge fill or rounded chip treatment.

### Footer Divider
**Role:** Low-emphasis content boundary

Use a 1px solid Divider Gray #d6d6d6 line between footer groups and low-priority utility content. Pair with 12px SF Pro Text metadata or 17px supporting copy in Steel #86868b.

## Do's and Don'ts

### Do
- Use Studio White #ffffff or Cloud Gray #f5f5f7 as the default editorial canvas.
- Set display headlines in SF Pro Display 600; use 64px/68px with -0.58px tracking for hero statements and 80px/84px with -1.2px tracking for cinematic chapters.
- Use Apple Blue #0071e3 only for filled purchase pills with 980px or 9999px radius.
- Use Link Blue #0066cc for text links and film affordances, not as a general surface color.
- Build large media panels with 20px radius and light editorial cards with 28px radius.
- Maintain 163px section gaps across major editorial transitions and use the 4px base unit for local alignment.
- Keep cards and floating media controls shadowless; use only the 0 0 1px rgba(0,0,0,0.11) inset edge where a control needs separation.

### Don't
- Do not replace SF Pro Display 600 headlines with 700-900 weight type.
- Do not use square or 4px-radius purchase controls; use 980px or 9999px radii.
- Do not turn Link Blue #0066cc into a filled button background.
- Do not put large hero copy in opaque cards; set it directly over the cinematic media.
- Do not add drop shadows to Cloud Gray #f5f5f7 feature cards.
- Do not use New Orange #b64400 for warnings, errors, or large decorative fields; reserve it for new-product annotations.
- Do not compress major sections below the 163px section-gap rhythm.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Studio White | `#ffffff` | Primary page canvas behind editorial sections. |
| 1 | Gallery White | `#fafafc` | Navigation and light utility surfaces. |
| 2 | Cloud Gray | `#f5f5f7` | Alternate sections, cards, and footer fields. |
| 3 | Control Mist | `#e2e2e5` | Translucent-looking playback and subdued utility controls. |

## Elevation

Surfaces are separated by canvas shifts, generous whitespace, rounding, and occasional 1px inset edges rather than raised cards. Playback controls gain presence from translucent fills over moving imagery, not drop shadows.

## Imagery

Cinematic product film is the dominant visual language. Full-bleed footage uses dramatic monochrome silhouettes against saturated amber, deep navy, and electric-blue light fields; the AirPods are small but bright focal points within human movement rather than isolated packshots. Secondary films are contained in 20px-radius panels, often with sparse white copy over the footage and translucent playback controls. Photography is performance-led and deliberately stylized rather than lifestyle candid; iconography remains compact, monochrome, and thin enough to disappear into the navigation.

## Layout

The page uses a full-bleed editorial model: a narrow 44px global navigation sits above a 52px local product navigation, then the opening product film fills the viewport with left-aligned white copy and a lower-edge floating commerce capsule. White and pale-gray sections create long breathing intervals between media chapters; section headers such as highlight and closer-look introductions sit on open canvas before large contained video panels. Cinematic chapters reverse to dark blue or near-black full-bleed footage with centered white kicker-plus-headline stacks and silhouetted performers. The page is text-led between films, then resolves into quiet product cards and exploration/footer bands rather than dense application-style grids.

## Agent Prompt Guide

Quick Color Reference:
- Gallery White: #fafafc — Global navigation fill, light product panels, light icons, and inverse text
- Cloud Gray: #f5f5f7 — Alternate section backgrounds, quiet cards, footer bands, and pale control surfaces
- Studio White: #ffffff — Primary document canvas and white-on-dark display text
- Graphite: #1d1d1f — Primary headlines, body copy, dark media cards, and dark iconography
- Slate: #5b5b61 — Secondary editorial copy and supporting headings
- Steel: #86868b — Muted explanatory copy and de-emphasized labels
- Divider Gray: #d6d6d6 — Hairline section and footer dividers
- Control Mist: #e2e2e5 — Pale media-control and subdued action backgrounds
- Apple Blue: #0071e3 — Filled purchase buttons and keyboard focus treatment — a concentrated blue mark against otherwise neutral controls
- Link Blue: #0066cc — Text links, film links, and inline disclosure affordances
- New Orange: #b64400 — New-product labels and limited-status annotations

Create a full-bleed AirPods launch hero over amber performance-film imagery; overlay a 32px/36px SF Pro Display 600 product label and a 64px/68px SF Pro Display 600 white headline with -0.58px tracking, then add a lower-edge 36px-radius translucent price-and-buy capsule with an Apple Blue #0071e3 purchase pill.
Create a Studio White #ffffff highlights section with an open editorial header, then a 20px-radius contained blue-toned product film card with white overlay copy and paired 36px translucent pause and segmented-progress controls.
Create a full-bleed deep-blue sound-feature chapter with a centered 28px/32px SF Pro Display 600 white kicker and an 80px/84px SF Pro Display 600 white headline at -1.2px tracking above silhouetted movement.
Create a Cloud Gray #f5f5f7 editorial feature card with 28px corners, 20px padding, Graphite #1d1d1f SF Pro Display 600 heading text, Steel #86868b supporting copy, and a Link Blue #0066cc text link.
Create a 44px dark global navigation with rgba(255,255,255,0.8) 12px SF Pro Text labels, followed by a 52px dark local product bar with a 32px SF Pro Display title and compact Apple Blue #0071e3 Buy pill.

## Similar Brands

- **Apple iPhone** — Uses oversized SF Pro display typography, full-bleed product cinematography, thin dual navigation, and compact blue purchase pills.
- **Apple Watch** — Shares film-first product storytelling, deep color-saturated feature chapters, and pale editorial sections with large whitespace.
- **Google Pixel** — Uses device storytelling through expansive photography and restrained rounded purchase controls, though Apple is more typographically sparse.
- **Sony** — Shares dark performance-led audiovisual imagery and immersive product-media panels for headphone and entertainment hardware.
- **Nothing** — Shares a product-centric hardware landing-page structure with strong visual media, large headlines, and sparse commerce controls.

# Bevel — Style Reference
> Morning metrics in cloudlight. Build screens as a bright white health journal punctuated by a softly glowing wearable dashboard.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Bevel frames health data as a sunlit consumer device experience: a white editorial canvas, near-black SF Pro headlines, mist-blue bento surfaces, and realistic iPhone/Apple Watch product imagery. Oversized 600-weight headings use tight negative tracking and compact line-height, while supporting copy stays soft gray and generously spaced. Color is restrained in the site shell; pale sky gradients and small multicolor health-data rings are reserved for product visuals and feature atmosphere rather than universal controls.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper White | `#ffffff` | `--color-paper-white` | Page backgrounds, navigation surfaces, footer backgrounds, and open whitespace |
| Charcoal | `#1f2025` | `--color-charcoal` | Filled download controls, dark surface blocks, logos, and monochrome iconography |
| Ink | `#222326` | `--color-ink` | Display headings, section headings, feature titles, and primary text |
| Cloud Card | `#ebf0f8` | `--color-cloud-card` | Feature-card surfaces, light icon fills, and text inside Charcoal download controls |
| Body Gray | `#747679` | `--color-body-gray` | Body copy, muted navigation links, helper text, and secondary labels |
| Signal Gold | `#ffca00` | `--color-signal-gold` | Rating stars and small positive health-data indicators |
| Coral Signal | `#ffab94` | `--color-coral-signal` | Warm metric accents and lower-edge washes in feature visualizations |
| Recovery Green | `#31ce01` | `--color-recovery-green` | Recovery rings and green-tinted metric visualizations |
| Metric Blue | `#415eee` | `--color-metric-blue` | Circular metric indicators and blue gradient treatments in product visuals |
| Sleep Lilac | `#b9a6ff` | `--color-sleep-lilac` | Sleep-oriented metric rings and soft violet visual accents |
| Hero Sky | `linear-gradient(#d2e5ff, #fff9ee)` | `--color-hero-sky` | Top hero atmosphere behind the device composition, fading from cool daylight into warm paper |

## Tokens — Typography

### -apple-system, BlinkMacSystemFont, Inter, "Segoe UI", sans-serif — SF Pro system typography carries every interface layer. Use 600-weight display text at 40px–80px with -0.03em tracking: its compact, almost lockup-like lines make wellness claims feel like product labels rather than editorial copy. Use 400-weight body text at 18px–24px and 500-weight navigation/actions at 16px–18px. · `--font-apple-system-blinkmacsystemfont-inter-segoe-ui-sans-serif`
- **Substitute:** Inter
- **Weights:** 400, 500, 600
- **Sizes:** 12px, 16px, 18px, 24px, 40px, 64px, 80px
- **Line height:** 0.90, 1.00, 1.10, 1.30, 1.40
- **Letter spacing:** -2.4px at 80px, -1.92px at 64px, -1.2px at 40px, -0.24px at 24px, +0.16px at 18px navigation, and normal at 16px body controls
- **Role:** SF Pro system typography carries every interface layer. Use 600-weight display text at 40px–80px with -0.03em tracking: its compact, almost lockup-like lines make wellness claims feel like product labels rather than editorial copy. Use 400-weight body text at 18px–24px and 500-weight navigation/actions at 16px–18px.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | -apple-system | 400 | 12px | 1.1 | 0px | `--text-caption` |
| nav | -apple-system | 500 | 16px | 1.4 | 0px | `--text-nav` |
| brand-nav | -apple-system | 500 | 18px | 1.4 | 0.162px | `--text-brand-nav` |
| body | -apple-system | 400 | 24px | 1.3 | 0px | `--text-body` |
| section-label | -apple-system | 600 | 24px | 0.9 | -0.24px | `--text-section-label` |
| card-heading | -apple-system | 600 | 40px | 1 | -1.2px | `--text-card-heading` |
| display | -apple-system | 600 | 64px | 1 | -1.92px | `--text-display` |
| hero-display | -apple-system | 600 | 80px | 1 | -2.4px | `--text-hero-display` |

## Tokens — Spacing & Shapes

**Base unit:** 8px

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 8 | 8px | `--spacing-8` |
| 16 | 16px | `--spacing-16` |
| 24 | 24px | `--spacing-24` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 80 | 80px | `--spacing-80` |
| 96 | 96px | `--spacing-96` |
| 160 | 160px | `--spacing-160` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 24-32px |
| pills | 9999px |
| images | 16-24px |
| buttons | 128px |
| navigation | 32px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| md | `rgba(0, 0, 0, 0.25) 0px 0px 16px -8px` | `--shadow-md` |
| subtle | `rgb(255, 255, 255) 0px 1px 0px 0px inset, rgba(255, 255, ...` | `--shadow-subtle` |
| lg | `rgb(255, 255, 255) 0px 0px 24px 0px inset` | `--shadow-lg` |
| md-2 | `rgba(0, 0, 0, 0.15) 0px 2px 16px 0px` | `--shadow-md-2` |
| subtle-2 | `rgba(255, 255, 255, 0.36) 0px 1px 0px 0px inset` | `--shadow-subtle-2` |

### Layout

- **Section gap:** 80px
- **Card padding:** 32px
- **Element gap:** 16px

## Components

### Floating Capsule Navigation
**Role:** Public-site header

Use a Paper White (#ffffff) rounded bar with a 32px radius, a 12-20px backdrop blur, and 16px internal control spacing. Brand text is Ink at 18px/25.2px, weight 500, +0.16px tracking; secondary links are Body Gray at 16px/22.4px, weight 500.

### Charcoal Download Pill
**Role:** Public conversion control

Fill with Charcoal (#1f2025), set Cloud Card (#ebf0f8) label and Apple icon color, use 128px radius, 8px vertical and 16px horizontal padding, and 16px/22.4px weight-500 text. Keep the control short and capsule-shaped rather than promoting it into a rectangular button.

### Cloudlight Device Hero
**Role:** Hero product showcase

Use the Hero Sky gradient from #d2e5ff to #fff9ee as a tall rounded visual field, then center layered iPhone and Apple Watch renders beneath an Ink headline. Keep the device artwork raw and dimensional; the hero background, not a card border, contains the composition.

### Hero Rating Strip
**Role:** App-store proof

Place compact Signal Gold (#ffca00) stars beside small Body Gray metadata below the Charcoal download pill. Use 12px text for metadata and keep the strip visually subordinate to the hero callout.

### Wearable Partner Row
**Role:** Compatibility proof

Center an Ink 24px/21.6px, weight-600 heading with -0.24px tracking above a single horizontal row of monochrome partner wordmarks. Keep wordmarks Charcoal (#1f2025) with generous 24px gaps and no enclosing cards.

### Recognition Laurel Pair
**Role:** Editorial social proof

Render two small neutral-gray laurel marks and award labels centered above the next display headline. Use Body Gray (#747679) for the labels and preserve a 16px gap between the two awards.

### Community Story Carousel Card
**Role:** Member social-proof media

Use portrait-format photographic and app-capture tiles with 16px rounded corners. Apply the image lift shadow rgba(0, 0, 0, 0.25) 0px 0px 16px -8px and allow outer carousel tiles to fade into the page edge.

### Cloud Feature Card
**Role:** Health metric explanation

Use a Cloud Card (#ebf0f8) surface with a 24px radius and 32px padding. Set the feature name in Ink at 40px/40px, weight 600, -1.2px tracking; body copy uses Body Gray at 24px/31.2px, weight 400.

### Inset Metric Visualization
**Role:** Feature-card product preview

Layer compact health charts, circular scores, and metric chips inside rounded 16px-24px imagery. Use Recovery Green (#31ce01), Metric Blue (#415eee), Sleep Lilac (#b9a6ff), and Coral Signal (#ffab94) only as data-category accents against pale surfaces.

### Elevated QR Download Card
**Role:** Persistent mobile-download prompt

Use a compact Charcoal (#1f2025) card with Cloud Card (#ebf0f8) text and a high-contrast QR code. Round the card to 16px and apply rgba(0, 0, 0, 0.15) 0px 2px 16px 0px elevation.

### Footer Link Group
**Role:** Site footer navigation

Group Ink (#222326) 18px/25.2px weight-500 links under compact headings on Paper White (#ffffff). Use 16px vertical link spacing and preserve the generous 160px section padding used around footer content.

## Do's and Don'ts

### Do
- Use Paper White (#ffffff) as the default canvas and Cloud Card (#ebf0f8) for large feature surfaces.
- Set display headings in Ink (#222326), weight 600, with -0.03em tracking at the 40px, 64px, and 80px steps.
- Use 80px vertical section gaps and 32px padding inside Cloud Feature Cards.
- Use 128px radius, 8px 16px padding, Charcoal (#1f2025) fill, and Cloud Card (#ebf0f8) text for public download buttons.
- Use 24px or 32px card radii and 16px-24px radii for product imagery.
- Keep Body Gray (#747679) supporting copy at 24px/31.2px, weight 400.
- Restrict Recovery Green (#31ce01), Metric Blue (#415eee), Sleep Lilac (#b9a6ff), and Coral Signal (#ffab94) to health-data visuals and soft washes.

### Don't
- Do not use saturated metric colors as universal page backgrounds or filled public conversion buttons.
- Do not set large headings above 600 weight or remove their -0.03em tracking.
- Do not use square buttons; public download controls require a 128px radius.
- Do not add visible borders to Cloud Feature Cards; use #ebf0f8 surfaces with no border and no shadow.
- Do not replace the 80px section rhythm with dense 24px-40px stacked sections.
- Do not use heavy drop shadows on cards; reserve rgba(0, 0, 0, 0.25) 0px 0px 16px -8px for floating imagery.
- Do not turn the supporting Body Gray (#747679) copy into black or weight 600 text.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper White | `#ffffff` | Primary page canvas, open sections, navigation, and footer. |
| 1 | Cloud Card | `#ebf0f8` | Feature-card backgrounds and pale inset surfaces. |
| 2 | Charcoal | `#1f2025` | Download pills, QR prompt surfaces, and dark monochrome blocks. |

## Elevation

- **Community Story Carousel Card:** `rgba(0, 0, 0, 0.25) 0px 0px 16px -8px`
- **Elevated QR Download Card:** `rgba(0, 0, 0, 0.15) 0px 2px 16px 0px`

## Imagery

Product-render imagery leads the page: a realistic iPhone dashboard and Apple Watch overlap within the hero, with soft reflections and raw device edges rather than flat illustrations. Community proof appears as a horizontal sequence of portrait social posts, candid fitness images, food captures, and app screenshots, each rounded at 16px and softly lifted from the white canvas. Product visuals use small multicolor data rings and metric chips against mostly pale UI surfaces; the site shell itself remains almost entirely monochrome. Partner logos are black wordmarks, while award laurels are faint gray editorial marks. The composition is text-dominant between media moments, with imagery used as product evidence and member proof rather than decoration.

## Layout

The page is a vertically scrolling, center-aligned public landing page on Paper White, opening with a large rounded full-width hero field rather than a boxed content panel. A floating capsule navigation bar sits over the hero and remains visually available as the page moves through product imagery. The first screen centers a large two-line headline, muted supporting copy, a pill download control, compact rating proof, and overlapping phone-and-watch renders over a pale sky-to-warm gradient. Subsequent sections use broad white bands with centered compatibility logos, award proof, and large centered display statements; a horizontal community-media strip breaks the text rhythm with edge-faded portrait tiles. The lower content shifts to centered introduction copy followed by a three-column row of pale-blue feature cards, creating spacious 80px section intervals rather than dense dashboard stacking.

## Agent Prompt Guide

Quick Color Reference:
- Paper White: #ffffff — Page backgrounds, navigation surfaces, footer backgrounds, and open whitespace
- Charcoal: #1f2025 — Filled download controls, dark surface blocks, logos, and monochrome iconography
- Ink: #222326 — Display headings, section headings, feature titles, and primary text
- Cloud Card: #ebf0f8 — Feature-card surfaces, light icon fills, and text inside Charcoal download controls
- Body Gray: #747679 — Body copy, muted navigation links, helper text, and secondary labels
- Signal Gold: #ffca00 — Rating stars and small positive health-data indicators
- Coral Signal: #ffab94 — Warm metric accents and lower-edge washes in feature visualizations
- Recovery Green: #31ce01 — Recovery rings and green-tinted metric visualizations
- Metric Blue: #415eee — Circular metric indicators and blue gradient treatments in product visuals
- Sleep Lilac: #b9a6ff — Sleep-oriented metric rings and soft violet visual accents
- Hero Sky: linear-gradient(#d2e5ff, #fff9ee) — Top hero atmosphere behind the device composition, fading from cool daylight into warm paper

Create a centered health-app hero on the Hero Sky gradient, with an Ink (#222326) 80px/80px, weight-600 headline tracked at -2.4px; place Body Gray (#747679) 24px/31.2px copy, a Charcoal Download Pill, then overlapping iPhone and Apple Watch renders.
Create a compatibility section on Paper White (#ffffff) with an Ink (#222326) 24px/21.6px, weight-600 heading tracked at -0.24px and a centered monochrome partner-wordmark row with 24px gaps.
Create three Cloud Feature Cards using #ebf0f8, 24px radius, and 32px padding; set each title in Ink at 40px/40px, weight 600, -1.2px tracking, and its supporting copy in Body Gray at 24px/31.2px.
Create a community-story carousel of rounded 16px portrait media tiles, using photographic member posts and app captures with rgba(0, 0, 0, 0.25) 0px 0px 16px -8px shadows and faded outer edges.

## Similar Brands

- **Gentler Streak** — Shares the Apple-platform health framing, large SF-style type, pale surfaces, and wearable-data visualization.
- **Apple Fitness+** — Shares prominent Apple Watch product imagery, dark capsule controls, and restrained metric-color accents.
- **Oura** — Shares a bright wellness canvas with product-led health insights and compact circular score visualizations.
- **WHOOP** — Shares wearables-centered performance tracking, recovery-focused metric categories, and member-proof content.

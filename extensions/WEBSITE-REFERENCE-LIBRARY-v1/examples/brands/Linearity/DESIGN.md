# Linearity — Style Reference
> glowing studio console. Build screens as sparse black workspaces with precise white interface chrome and isolated bursts of molten orange.

**Theme:** dark

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Linearity — luminous creation console. The page is an almost uninterrupted black field where compact white type, hairline outlines, and pill-shaped controls seem to float without conventional card elevation. AcidGrotesk headlines stay light at weight 400, while a hot orange conversion color and occasional spectral green-to-violet marks puncture the monochrome restraint. Sections use expansive empty space and isolated product demonstrations rather than dense content blocks.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void | `#000000` | `--color-void` | Page canvas, full-bleed section backgrounds, dark product-demo interiors |
| Near Black | `#050505` | `--color-near-black` | Subtle recessed surface and dark overlay layer |
| Carbon | `#292929` | `--color-carbon` | Raised dark controls, prompt-composer depth, subdued surface detail |
| Graphite | `#4d4d4d` | `--color-graphite` | Secondary dark surface fills and inactive internal UI detail |
| Ash | `#666666` | `--color-ash` | Low-emphasis metadata, tiny helper copy, and quiet interface marks |
| Steel | `#808080` | `--color-steel` | Muted labels, inactive controls, and secondary icon strokes |
| Fog | `#999999` | `--color-fog` | Supporting body copy and descriptive text on black |
| Silver | `#bfbfbf` | `--color-silver` | Navigation text, higher-emphasis secondary copy, and fine strokes |
| White | `#ffffff` | `--color-white` | Headlines, button labels, prominent UI text, borders, and logo marks |
| Signal Orange | `#ff4800` | `--color-signal-orange` | Filled conversion buttons and circular submit controls — a concentrated warm interruption against Void |
| Ember | `#ff5e23` | `--color-ember` | Orange hover treatment, active link fill, and thin warm inset highlight |
| Burnt Orange | `#ca4e17` | `--color-burnt-orange` | Warm product-preview card fill and contained campaign-art surface |
| Electric Yellow | `#ffd900` | `--color-electric-yellow` | Orange-button glow, bright decorative borders, and vivid campaign-art accents |
| Vector Green | `linear-gradient(to right, #08c380 0%, #fd7c0f 31.73%, #ff2b2b 62.5%, #9500ff 100%)` | `--color-vector-green` | Sweeping decorative strokes and gradient-led editorial emphasis; Decorative line treatment, highlighted headline underlines, and expressive graphic strokes |

## Tokens — Typography

### Inter — Dense interface system for navigation, prompt text, buttons, metadata, product-demo controls, and body copy. Tight small labels may use expanded tracking, while normal body and navigation copy stays untracked. · `--font-inter`
- **Substitute:** Arial
- **Weights:** 400, 500, 600
- **Sizes:** 9px, 10px, 12px, 14px, 15px
- **Line height:** 1.00, 1.40, 1.50, 1.71
- **Letter spacing:** 0.60px at 12px, 1px at 10px, 2.27px at 12px, and 2.64px at 12px for uppercase micro-label treatments
- **Role:** Dense interface system for navigation, prompt text, buttons, metadata, product-demo controls, and body copy. Tight small labels may use expanded tracking, while normal body and navigation copy stays untracked.

### AcidGrotesk — Display and section-heading family. Weight 400 keeps large statements open and conversational rather than heavy; use its 34px treatment for compact hero statements and 45px for editorial section lines. · `--font-acidgrotesk`
- **Substitute:** Space Grotesk
- **Weights:** 400, 500
- **Sizes:** 17px, 21px, 34px, 45px, 75px
- **Line height:** 0.90, 1.00, 1.20, 1.30, 1.40
- **Letter spacing:** -0.34px at 34px; -0.45px at 45px; -0.75px at 75px
- **Role:** Display and section-heading family. Weight 400 keeps large statements open and conversational rather than heavy; use its 34px treatment for compact hero statements and 45px for editorial section lines.

### AcidGroteskSubset — Supporting brand copy in footer links, compact UI labels, and small explanatory text; it keeps utility text visually related to the expressive display face. · `--font-acidgrotesksubset`
- **Substitute:** Space Grotesk
- **Weights:** 400, 500
- **Sizes:** 12px, 14px, 15px
- **Line height:** 1.40, 1.50
- **Letter spacing:** normal
- **Role:** Supporting brand copy in footer links, compact UI labels, and small explanatory text; it keeps utility text visually related to the expressive display face.

### system-ui — system-ui — detected in extracted data but not described by AI · `--font-system-ui`
- **Weights:** 400
- **Sizes:** 2880px
- **Line height:** 1
- **Role:** system-ui — detected in extracted data but not described by AI

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| micro-label | Inter | 400 | 10px | 1.4 | 0px | `--text-micro-label` |
| button-label | Inter | 500 | 12px | 1.5 | 0px | `--text-button-label` |
| body | Inter | 400 | 14px | 1.5 | 0px | `--text-body` |
| nav | Inter | 500 | 14px | 1.4 | 0px | `--text-nav` |
| footer-body | AcidGroteskSubset | 400 | 14px | 1.5 | 0px | `--text-footer-body` |
| hero-display | AcidGrotesk | 400 | 34px | 1.2 | 0px | `--text-hero-display` |
| section-display-tight | AcidGrotesk | 400 | 45px | 1 | 0px | `--text-section-display-tight` |
| section-display | AcidGrotesk | 400 | 45px | 1.2 | 0px | `--text-section-display` |
| section-display-compressed | AcidGrotesk | 400 | 45px | 0.9 | 0px | `--text-section-display-compressed` |

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
| 24 | 24px | `--spacing-24` |
| 56 | 56px | `--spacing-56` |
| 168 | 168px | `--spacing-168` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 17.1429px |
| links | 9999px |
| pills | 9999px |
| images | 8.57143px |
| inputs | 17.1429px |
| buttons | 9999px |
| campaign-tiles | 12px |
| product-panels | 25.7143px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(255, 94, 35, 0.4) 0px 0px 0px 1px inset` | `--shadow-subtle` |

### Layout

- **Page max-width:** 1680px
- **Section gap:** 27px
- **Card padding:** 17.1429px
- **Element gap:** 17px

## Components

### Header Navigation Link
**Role:** Top-level navigation trigger and text link

Use Inter 14px/1.4 at weight 500 in Silver #bfbfbf or White #ffffff, with 3-4px gaps around a small chevron. Keep the control unfilled and square-edged; the navigation bar relies on text floating directly on Void #000000.

### Header Get Started Pill
**Role:** Compact public-navigation conversion control

Use a White #ffffff 5% translucent fill, 1px White #ffffff border, 9999px radius, and 10.2857px 17.1429px padding. Set its label in White #ffffff at Inter 12px weight 500; add a Carbon #292929 halo rather than a drop shadow.

### Signal Orange Pill Button
**Role:** Filled conversion button for sales and purchase paths

Fill with Signal Orange #ff4800, set White #ffffff text, use a 1px White #ffffff border, 9999px radius, and 12px 20.5714px padding. Add Electric Yellow #ffd900 glow around the button; use Ember #ff5e23 for hover.

### Dark Outline Pill Button
**Role:** Secondary conversion control

Use a White #ffffff 5% fill, White #ffffff text, a 1px White #ffffff border, 9999px radius, and 10.2857px 17.1429px padding. It should stay dark and tactile beside the Signal Orange Pill Button.

### Hero Prompt Composer
**Role:** Large AI-prompt demonstration input

Use a Carbon #292929 shell with a 1px White #ffffff low-opacity outline, 17.1429px radius, and 20.5714px internal padding. Prompt text is Inter 12px/1.71 in Steel #808080; embed a small brown-orange brand token and place a circular Signal Orange #ff4800 send button at the right edge.

### Prompt Submit Orb
**Role:** Inline prompt submission control

Use a circular Signal Orange #ff4800 fill with White #ffffff arrow iconography and a 9999px radius. Keep it compact inside the Hero Prompt Composer, with no rectangular button container.

### Product Demonstration Panel
**Role:** Contained brand-kit and asset-management preview

Use a White #ffffff 10% translucent surface, 25.7143px radius, a 0 1.71429px 1.71429px rgba(0,0,0,0.15) shadow, and inset 0 0 9.42857px rgba(255,255,255,0.16). Nest Carbon #292929 controls and 8.57143px rounded asset thumbnails within the frame.

### Role Selector Chip
**Role:** Connected workflow role node

Use a near-black transparent fill, 1px White #ffffff 10% outline, 9999px radius, and a compact horizontal layout with an orange circular icon. Set the role label in White #ffffff at Inter 12px weight 500.

### Campaign Asset Tile
**Role:** Small visual preview within product demonstrations

Use an 8.57143px image radius for standard preview tiles and a 12px radius for orange campaign blocks. Use Burnt Orange #ca4e17 for the dedicated warm tile, with image-led content kept inside clipped corners.

### Micro Eyebrow Label
**Role:** Section kicker above a display statement

Use Inter 10px/1.4 weight 400 in Steel #808080 with 1px to 2.64px letter spacing and uppercase text. Keep it separated from the display line by a 10px gap.

### Trust Marquee
**Role:** Low-emphasis logo and award strip

Place a 1px White #ffffff 10% top divider above subdued Silver #bfbfbf and Graphite #4d4d4d logos. Keep the strip on Void #000000 with compact 12px-scale labels and isolated play-control pill.

## Do's and Don'ts

### Do
- Use Void #000000 as the default canvas and preserve large uninterrupted black areas between content groups.
- Set public conversion buttons to 9999px radius; use Signal Orange #ff4800 only for supported filled conversion controls.
- Pair Signal Orange #ff4800 buttons with an Electric Yellow #ffd900 glow rather than a neutral gray shadow.
- Use AcidGrotesk at weight 400 for display text; set the compact hero display at 34px/1.2 and section displays at 45px/1.0 or 45px/1.2.
- Use Inter 14px/1.5 for body, navigation, and product-interface copy; reserve Inter 10-12px for micro-labels and controls.
- Use 17.1429px radius and 17.1429px padding for standard dark cards, then reserve 25.7143px radius for large product-demo panels.
- Use the Spectrum Rail gradient only as a contained underline, stroke, or abstract graphic accent.

### Don't
- Do not introduce light page sections, white cards, or pale gray canvases; keep the page surface Void #000000.
- Do not use 4px, 6px, or square corners for public buttons, chips, links, or compact conversion controls; use 9999px radius.
- Do not make display headlines bold; keep AcidGrotesk at weight 400 with its -0.01em tracking.
- Do not use Signal Orange #ff4800 as a general surface color or product-panel fill.
- Do not replace the Electric Yellow #ffd900 button halo with a standard black shadow.
- Do not create heavy floating-card shadows; use 1px low-opacity outlines, translucency, and occasional white inset glow.
- Do not spread the Spectrum Rail gradient across full page backgrounds or body text.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void Canvas | `#000000` | Primary page, navigation, and section background |
| 1 | Near Black Recess | `#050505` | Subtle inset and overlay surface |
| 2 | Carbon Control | `#292929` | Prompt shells, compact dark controls, and raised UI detail |
| 3 | Frosted White Panel | `#ffffff` | Use at 5-10% opacity for outlined buttons and translucent product-demo frames |

## Elevation

Avoid conventional elevation. Components separate from Void #000000 through 1px white outlines, 5-10% white translucency, subtle blur, and rare inset white glow; the only emphatic depth belongs to orange conversion controls with Electric Yellow #ffd900 light.

## Imagery

Visual content is predominantly product UI and abstract graphic treatment rather than lifestyle photography. Product screens are contained in dark, thickly rounded frames with miniature asset thumbnails, thin connectors, role chips, and clipped campaign tiles; isolated photo-like campaign crops appear only as small edge fragments or inside those tiles. Decorative graphics are bold, simple, and high-chroma: a broad Vector Green #08c380 curved stroke and the Spectrum Rail gradient act as sparse editorial interruptions. Icons are compact, mostly monochrome white or gray line marks, with orange circular role symbols providing the principal multicolor UI accent.

## Layout

The page is a full-bleed Void #000000 narrative contained within a declared 1680px maximum-width system with 40px horizontal container padding. A slim top navigation sits above a centered first-screen hero: compact two-line display copy, a wide rounded prompt composer, supporting copy, paired pill buttons, then a low-contrast trust/logo strip divided by a hairline. The following sections remain black rather than alternating bands, using very large visual breathing room around centered editorial statements; product imagery enters as clipped fragments at the far edges or as a later asymmetric split with copy on the left, role chips in the center, and a tall brand-kit panel on the right. The page is text-dominant, with product UI demonstrations functioning as the principal visual content.

## Agent Prompt Guide

Quick Color Reference:
- Void: #000000 — Page canvas, full-bleed section backgrounds, dark product-demo interiors
- Near Black: #050505 — Subtle recessed surface and dark overlay layer
- Carbon: #292929 — Raised dark controls, prompt-composer depth, subdued surface detail
- Graphite: #4d4d4d — Secondary dark surface fills and inactive internal UI detail
- Ash: #666666 — Low-emphasis metadata, tiny helper copy, and quiet interface marks
- Steel: #808080 — Muted labels, inactive controls, and secondary icon strokes
- Fog: #999999 — Supporting body copy and descriptive text on black
- Silver: #bfbfbf — Navigation text, higher-emphasis secondary copy, and fine strokes
- White: #ffffff — Headlines, button labels, prominent UI text, borders, and logo marks
- Signal Orange: #ff4800 — Filled conversion buttons and circular submit controls — a concentrated warm interruption against Void
- Ember: #ff5e23 — Orange hover treatment, active link fill, and thin warm inset highlight
- Burnt Orange: #ca4e17 — Warm product-preview card fill and contained campaign-art surface
- Electric Yellow: #ffd900 — Orange-button glow, bright decorative borders, and vivid campaign-art accents
- Vector Green: linear-gradient(to right, #08c380 0%, #fd7c0f 31.73%, #ff2b2b 62.5%, #9500ff 100%) — Sweeping decorative strokes and gradient-led editorial emphasis; Decorative line treatment, highlighted headline underlines, and expressive graphic strokes

Create a centered black hero using AcidGrotesk 34px weight 400 with 41px line height in White, followed by a Carbon prompt composer at 17.1429px radius and an inline Signal Orange send orb.
Create a paired conversion row on Void: a Dark Outline Pill Button with White 5% fill and a Signal Orange Pill Button with Electric Yellow glow; both use Inter 12px weight 500.
Create an asymmetric workflow section with AcidGrotesk 45px weight 400 white copy on the left, four outlined role chips in the middle, and a 25.7143px frosted Product Demonstration Panel on the right.
Create a centered editorial statement in AcidGrotesk 45px weight 400 White, with a short Spectrum Rail gradient underline only beneath one emphasized phrase.
Create a low-contrast trust strip on Void with a 1px White 10% divider, small Silver logos, and a compact dark pill video-play control.

## Similar Brands

- **Runway** — Shares the black AI-creation canvas, restrained white typography, and isolated saturated controls around generative product demos.
- **Linear** — Shares the near-black interface field, hairline borders, compact nav density, and quiet grayscale hierarchy.
- **Figma** — Shares multicolor creative-tool accents embedded inside dark product previews rather than across the overall page surface.
- **Framer** — Shares oversized light-weight editorial display type set against expansive dark space with contained product imagery.

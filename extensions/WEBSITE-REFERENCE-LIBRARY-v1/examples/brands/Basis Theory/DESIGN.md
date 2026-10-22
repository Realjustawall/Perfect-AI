# Basis Theory — Style Reference
> payment rails in a drafting studio. White technical paper, stacked translucent transaction layers, and one switched-on aqua control define the visual direction.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Basis Theory — payment rails in a drafting studio. The interface is a bright white working canvas interrupted by graphite product panels, with electric aqua and acid-lime controls used as precise operational signals rather than ambient decoration. Enormous, tightly tracked Neo Grotesk headlines create compressed, mechanical urgency; compact Inter navigation and explanatory copy keep the surrounding system quiet. Product diagrams float as layered white technical sheets with faint gray construction lines, while dark cards frame code, customer proof, and implementation detail.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper | `#ffffff` | `--color-paper` | Page backgrounds, light cards, navigation surfaces, and white text on graphite panels |
| Ink | `#18181b` | `--color-ink` | Display headings, primary text, logo marks, dark page bands, and high-contrast icons |
| Graphite | `#27272a` | `--color-graphite` | Dark cards, code panels, dark utility buttons, and contained product demonstrations |
| Cloud | `#f4f4f5` | `--color-cloud` | Muted section surfaces and pale technical-card backgrounds |
| Steel | `#d4d4d8` | `--color-steel` | Hairline separators, diagram outlines, and subdued borders |
| Slate | `#71717a` | `--color-slate` | Navigation labels, long-form supporting copy, inactive tabs, and secondary icons |
| Charcoal | `#3f3f46` | `--color-charcoal` | Emphasized body copy and dense explanatory labels |
| Aqua Relay | `#94faf0` | `--color-aqua-relay` | Filled conversion buttons, selected use-case markers, and small product-diagram highlights — the cool signal that makes a workflow feel live |
| Lime Notice | `#d4f796` | `--color-lime-notice` | Full-width announcement strips and occasional lightweight promotional controls — a broad highlighter wash above the restrained header |
| Volt Lime | `#bff660` | `--color-volt-lime` | Developer-oriented filled buttons and compact product highlights |
| Signal Sweep | `linear-gradient(90deg, #07cddf 52%, #9eed15 100%)` | `--color-signal-sweep` | Rare horizontal technical accent for connector lines and illustrated signal paths |

## Tokens — Typography

### sans-serif — sans-serif — detected in extracted data but not described by AI · `--font-sans-serif`
- **Weights:** 400
- **Sizes:** 12px, 14px
- **Line height:** 1.2
- **Role:** sans-serif — detected in extracted data but not described by AI

### Neo Grotesk Medium — Display and section headlines. The -0.04em tracking and 0.8 line-height at 80px deliberately pack words into a dense payment-infrastructure voice rather than a spacious editorial headline. · `--font-neo-grotesk-medium`
- **Substitute:** Arial Narrow, Helvetica Neue
- **Weights:** 400, 500
- **Sizes:** 32px, 56px, 64px, 80px
- **Line height:** 0.80, 0.90, 1.00, 1.20
- **Letter spacing:** -3.2px at 80px; -2.24px at 56px; -0.96px at 32px
- **Role:** Display and section headlines. The -0.04em tracking and 0.8 line-height at 80px deliberately pack words into a dense payment-infrastructure voice rather than a spacious editorial headline.

### Neo Grotesk Bold — Occasional compact 32px feature headings requiring a firmer silhouette than the Medium display face. · `--font-neo-grotesk-bold`
- **Substitute:** Arial Bold, Helvetica Neue Bold
- **Weights:** 400
- **Sizes:** 32px
- **Line height:** 1.00
- **Letter spacing:** -0.32px at 32px
- **Role:** Occasional compact 32px feature headings requiring a firmer silhouette than the Medium display face.

### Inter — Navigation, buttons, labels, body copy, and large testimonial copy. At 14px it stays compact and firm; at 32px it serves as a softer, lower-contrast quote treatment on dark panels. · `--font-inter`
- **Substitute:** system-ui, Arial, sans-serif
- **Weights:** 500, 600, 700
- **Sizes:** 14px, 16px, 18px, 24px, 32px
- **Line height:** 1.00, 1.14, 1.20, 1.30, 1.40, 1.50
- **Letter spacing:** -1.28px at 32px; -0.32px at 16px; -0.14px at 14px
- **OpenType features:** `"salt"; "cv10", "cv11", "cv12", "cv13", "salt", "ss01", "ss02", "ss03", "ss04"; "salt", "ss01", "ss03", "ss04", "tnum"`
- **Role:** Navigation, buttons, labels, body copy, and large testimonial copy. At 14px it stays compact and firm; at 32px it serves as a softer, lower-contrast quote treatment on dark panels.

### Chivo Mono — Technical metadata, code-adjacent labels, and small implementation details. · `--font-chivo-mono`
- **Substitute:** IBM Plex Mono, ui-monospace, monospace
- **Weights:** 400
- **Sizes:** 14px
- **Line height:** 1.50
- **Letter spacing:** normal
- **Role:** Technical metadata, code-adjacent labels, and small implementation details.

### Kode Mono — Code samples and microscopic diagram annotations, introducing an explicitly technical layer beneath the grotesk marketing typography. · `--font-kode-mono`
- **Substitute:** JetBrains Mono, ui-monospace, monospace
- **Weights:** 400, 600
- **Sizes:** 8px, 12px, 14px, 16px
- **Line height:** 0.90, 1.00, 1.20
- **Letter spacing:** -0.32px at 16px; 0.24px at 12px
- **Role:** Code samples and microscopic diagram annotations, introducing an explicitly technical layer beneath the grotesk marketing typography.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| nav | Inter | 500 | 14px | 1 | 0px | `--text-nav` |
| body | Inter | 500 | 14px | 1.4 | -0.098px | `--text-body` |
| body-compact | Inter | 500 | 14px | 1.14 | -0.14px | `--text-body-compact` |
| button-label | Inter | 500 | 14px | 1 | -0.14px | `--text-button-label` |
| technical-label | Chivo Mono | 400 | 14px | 1.5 | 0px | `--text-technical-label` |
| feature-heading | Neo Grotesk Medium | 500 | 32px | 1.2 | -0.96px | `--text-feature-heading` |
| testimonial | Inter | 500 | 32px | 1.3 | -1.28px | `--text-testimonial` |
| display-section | Neo Grotesk Medium | 400 | 56px | 1 | -2.24px | `--text-display-section` |
| display-section-inverse | Neo Grotesk Medium | 500 | 56px | 1 | -2.24px | `--text-display-section-inverse` |
| display-hero | Neo Grotesk Medium | 400 | 80px | 0.8 | -3.2px | `--text-display-hero` |

## Tokens — Spacing & Shapes

**Density:** compact

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 8 | 8px | `--spacing-8` |
| 10 | 10px | `--spacing-10` |
| 12 | 12px | `--spacing-12` |
| 16 | 16px | `--spacing-16` |
| 22 | 22px | `--spacing-22` |
| 24 | 24px | `--spacing-24` |
| 30 | 30px | `--spacing-30` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |
| 72 | 72px | `--spacing-72` |
| 88 | 88px | `--spacing-88` |
| 112 | 112px | `--spacing-112` |
| 120 | 120px | `--spacing-120` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 16px |
| links | 4px |
| pills | 1000px |
| images | 1000px |
| buttons | 12px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgba(255, 255, 255, 0.13) 0px 0px 0px 2px inset` | `--shadow-subtle` |
| subtle-2 | `rgba(255, 255, 255, 0.03) 0px 0px 0px 1px inset` | `--shadow-subtle-2` |

### Layout

- **Section gap:** 40px
- **Card padding:** 16px
- **Element gap:** 8px

## Components

### Lime Announcement Strip
**Role:** Site-wide release notice above the main navigation.

Use a full-width #d4f796 bar with square 0px corners, 8px vertical and 16px horizontal padding. Set the message in 14px/21px Inter 500, #18181b at 80% opacity, centered as one compact line.

### Public Navigation Bar
**Role:** White top navigation with logo, grouped links, and conversion controls.

Place on #ffffff with 14px Inter 500 labels in #71717a; use 16px gaps between utility controls and 24px grouping gaps. Keep the logo and icons in #18181b, use 4px rounding only for small link-focus treatments, and separate from following dark content with a 1px #d4d4d8 rule.

### Graphite Header Button
**Role:** Compact high-emphasis conversion control in public navigation.

Use #27272a fill, white 14px Inter 500 text, 12px radius, and 8px 16px padding. Add the observed inset edge: 0 0 0 2px rgba(255, 255, 255, 0.13) inset.

### Aqua Conversion Button
**Role:** Large filled conversion control for light sections.

Use #94faf0 fill with #18181b 14px Inter 500 text, 16px radius, and 12px 16px 12px 22px padding. Reserve 8px between label and a directional arrow icon.

### Translucent Secondary Button
**Role:** Paired secondary control on dark surfaces.

Use rgba(255, 255, 255, 0.1) fill with white 14px Inter 500 text, 16px radius, and 12px 22px padding. Apply 0 0 0 2px rgba(255, 255, 255, 0.13) inset rather than an opaque border.

### Volt Documentation Button
**Role:** Developer-path filled control.

Use #bff660 fill, #18181b 14px Inter 500 text, 12px radius, and 8px 16px padding; do not reuse it for general sales conversion.

### Hero Capability Row
**Role:** Inline proof-point list below hero support copy.

Set three compact items in a horizontal row with 16px gaps. Pair each label with a 12px dark square icon tile and use 14px Inter 500 in #18181b; keep icon-to-label spacing at 8px.

### Use-Case Filter Row
**Role:** Inline category selector beneath a section introduction.

Use 14px Inter 500 labels with 16px gaps and 8px icon-to-label spacing. Mark the selected item with a small #94faf0 filled icon tile; render unselected labels and icons in #71717a.

### Layered Payment Diagram
**Role:** Hero and feature visual for payment-routing concepts.

Build contained, overlapping white and #f4f4f5 sheets with 16px corners, thin #d4d4d8 outlines, and sparse technical labels. Float a #27272a central tile above the sheets; use #94faf0 and #bff660 only as tiny route, icon, or partner-logo signals.

### Cloud Product Card
**Role:** Light contained product or workflow preview.

Use #f4f4f5 with 16px radius and the Cloud Product Card elevation stack. Keep outer shell padding at 0px; place visual layers edge-to-edge within the rounded frame.

### Graphite Code Card
**Role:** Dark implementation preview and technical proof block.

Use #27272a with 16px radius and the Graphite Product Card elevation stack. Set code in 14px/21px Chivo Mono or Kode Mono; use white for core syntax and reserve colored syntax accents for code content only.

### Inverse Testimonial Panel
**Role:** Dark customer-proof section.

Use an #18181b band with white 56px Neo Grotesk Medium heading and a 32px/41.6px Inter 500 quote at rgba(255, 255, 255, 0.5). Keep cards within the band at #27272a and 16px radius.

## Do's and Don'ts

### Do
- Use #ffffff as the default canvas and #18181b for all large light-theme headings.
- Set hero display copy in Neo Grotesk Medium 80px/64px, weight 400, with -3.2px tracking.
- Set major section displays in Neo Grotesk Medium 56px/56px with -2.24px tracking.
- Use #94faf0 only for filled conversion controls, selected markers, and small live-route accents.
- Use 16px radius for visual cards and large aqua or translucent buttons.
- Use 12px radius with 8px 16px padding for compact #27272a and #bff660 header or utility buttons.
- Build small interface rhythm from 4px, 8px, 16px, 24px, and 32px gaps.

### Don't
- Do not use #94faf0 as a page background or broad section fill.
- Do not round cards beyond the 16px card radius or turn every control into a 1000px pill.
- Do not use #bff660 for sales conversion controls; keep it on documentation and developer routes.
- Do not set display headlines in Inter; reserve Neo Grotesk Medium for the 32px, 56px, and 80px display scale.
- Do not loosen display tracking to normal; keep Neo Grotesk headings between -0.96px and -3.2px tracking.
- Do not replace fine #d4d4d8 construction lines with heavy borders.
- Do not add saturated color to body copy, navigation, or broad card surfaces.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper Canvas | `#ffffff` | Default page field, header, hero, and light content regions. |
| 1 | Cloud Surface | `#f4f4f5` | Subdued cards and alternate technical surfaces. |
| 2 | Graphite Panel | `#27272a` | Code blocks, dark cards, and contained product detail. |
| 3 | Ink Band | `#18181b` | Full-width dark transitions and inverse editorial sections. |

## Elevation

- **Cloud Product Card:** `0 0 0 1px rgba(0, 0, 0, 0.08), 0 0.602187px 2.28831px -1.25px rgba(0, 0, 0, 0.18), 0 2.28853px 8.69643px -2.5px rgba(0, 0, 0, 0.16), 0 10px 38px -3.75px rgba(0, 0, 0, 0.06)`
- **Graphite Product Card:** `0 0.602187px 2.52919px -1.25px rgba(0, 0, 0, 0.18), 0 2.28853px 9.61184px -2.5px rgba(0, 0, 0, 0.16), 0 10px 42px -3.75px rgba(0, 0, 0, 0.06)`
- **White Technical Card:** `0 2.76726px 2.21381px rgba(0, 0, 0, 0.02), 0 6.6501px 5.32008px rgba(0, 0, 0, 0.03)`

## Imagery

Visuals are contained product illustrations rather than photography: white or pale-gray technical sheets overlap at slight angles, carry faint construction-line borders, and cast restrained soft shadows. A dark central payment tile, miniature code windows, thin route lines, and tiny multicolor partner marks explain the product without becoming full-bleed artwork. Icons are compact, mostly monochrome dark glyphs with occasional aqua tiles; imagery occupies one side of split feature compositions while text remains the dominant mass.

## Layout

A narrow lime announcement strip sits above a white public navigation bar with the logo at left, compact link groups through the center, and paired utility/conversion controls at right. The opening uses an asymmetric two-column composition: a large left-aligned display headline, support copy, inline capability row, and paired actions face a contained layered payment-diagram visual on the right. A full-width graphite divider transitions into centered, left-aligned editorial sections; use-case intros combine a large title with split explanatory copy and a horizontal category row, followed by alternating text-led feature blocks and overlapping code or product-diagram cards. The page is text-dominant outside its contained technical visuals, with substantial white fields around each section and dense 8px-level internal UI spacing.

## Agent Prompt Guide

Quick Color Reference:
- Paper: #ffffff — Page backgrounds, light cards, navigation surfaces, and white text on graphite panels
- Ink: #18181b — Display headings, primary text, logo marks, dark page bands, and high-contrast icons
- Graphite: #27272a — Dark cards, code panels, dark utility buttons, and contained product demonstrations
- Cloud: #f4f4f5 — Muted section surfaces and pale technical-card backgrounds
- Steel: #d4d4d8 — Hairline separators, diagram outlines, and subdued borders
- Slate: #71717a — Navigation labels, long-form supporting copy, inactive tabs, and secondary icons
- Charcoal: #3f3f46 — Emphasized body copy and dense explanatory labels
- Aqua Relay: #94faf0 — Filled conversion buttons, selected use-case markers, and small product-diagram highlights — the cool signal that makes a workflow feel live
- Lime Notice: #d4f796 — Full-width announcement strips and occasional lightweight promotional controls — a broad highlighter wash above the restrained header
- Volt Lime: #bff660 — Developer-oriented filled buttons and compact product highlights
- Signal Sweep: linear-gradient(90deg, #07cddf 52%, #9eed15 100%) — Rare horizontal technical accent for connector lines and illustrated signal paths

Create a white two-column payment-platform hero: left content uses #18181b Neo Grotesk Medium 80px/64px weight 400 with -3.2px tracking, 14px Inter supporting copy in #71717a, and an #94faf0 conversion button at 16px radius; right side is a layered #ffffff and #f4f4f5 payment diagram with #d4d4d8 outlines.
Create a #18181b implementation section with a 56px/56px Neo Grotesk Medium weight 500 white heading, a #27272a 16px code card, and 14px/21px Chivo Mono code labels.
Create a use-case introduction on #ffffff with a 56px/56px Neo Grotesk Medium weight 400 #18181b heading, split #3f3f46 and #71717a explanatory paragraphs, then a 14px Inter category row whose selected icon tile is #94faf0.
Create a dark testimonial panel on #18181b with a white 56px Neo Grotesk Medium section heading and a 32px/41.6px Inter 500 quote in rgba(255, 255, 255, 0.5).
Create a compact public header beneath a #d4f796 announcement strip: use #71717a 14px Inter navigation labels, a #27272a 12px-radius button with white text, and #ffffff as the navigation surface.

## Similar Brands

- **Stripe** — Payment-infrastructure diagrams, contained code surfaces, and bright accent controls on a white technical canvas.
- **Modern Treasury** — Dense financial-systems messaging paired with restrained technical illustration and graphite implementation panels.
- **Vercel** — Monochrome interface foundation, near-black feature bands, tightly spaced navigation, and code-forward presentation.
- **PostHog** — Graphic product diagrams and vivid functional accent colors used sparingly against predominantly neutral surfaces.

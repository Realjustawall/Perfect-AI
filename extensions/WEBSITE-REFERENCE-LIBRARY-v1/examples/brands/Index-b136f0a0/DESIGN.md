# Index — Style Reference
> twilight summit command center — a violet-tinted dark dashboard crowned by a single mountain horizon at dusk, where the only warm light is the coral CTA

**Theme:** dark

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Index operates as a twilight alpine command center: a near-black canvas tinted with deep indigo and violet, overlaid with high-density product UI and crowned by a single dramatic peak-against-dusk landscape. The system stays nocturnal — backgrounds are violet-shifted blacks (#0c0a2b, #13151f), borders are muted violet hairlines (#292a4d), and text is bone-white (#ffffff) with a graphite secondary (#9b9ba4). The lone warm signal is a coral-to-red gradient (#ff8a76 → #ff3a63) reserved exclusively for the primary CTA — it reads as sunrise breaking the ridge, demanding attention against the cold palette. Inside product surfaces, color is functional punctuation: small saturated dots (electric blue #0067ff, violet #665eff, vivid red #ff3a63, chartreuse #ffff00) mark status, priority, and category. Cards float on the dark canvas with 1px violet borders, no shadows — the surface system relies on luminance steps and border weight, not elevation. Typography is compact, geometric, and slightly tracked-out at small sizes, with a custom 'Index' display face (sizes up to 72px) and Inter for the dense table/UI layer.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Abyss Black | `#02030b` | `--color-abyss-black` | Deepest canvas — modal overlays, deepest surface beneath elevated cards |
| Midnight Indigo | `#04061c` | `--color-midnight-indigo` | Primary page canvas — hero sits on this, full-bleed sections |
| Slate Indigo | `#0c0a2b` | `--color-slate-indigo` | Elevated surface — card backgrounds, panel containers, dropdowns |
| Carbon Iris | `#13151f` | `--color-carbon-iris` | Secondary surface — table rows, list items, inset wells |
| Twilight Plum | `#2c2b52` | `--color-twilight-plum` | Hover surface and subtle fills — input backgrounds, selected row highlights |
| Iris Border | `#292a4d` | `--color-iris-border` | Primary border — card outlines, dividers, table cell borders |
| Graphite | `#202333` | `--color-graphite` | Secondary border — subtle separators, nav container edge |
| Steel | `#353545` | `--color-steel` | Tertiary border — checkbox frames, input outlines, ghost button border |
| Smoke | `#9b9ba4` | `--color-smoke` | Secondary text — captions, helper text, metadata, muted labels |
| Ash | `#b4b4bb` | `--color-ash` | Tertiary text — placeholders, disabled labels, nav secondary |
| Bone | `#ffffff` | `--color-bone` | Primary text, icon stroke, and surface highlights — the dominant high-contrast value across all text and icon contexts |
| Ember Coral | `linear-gradient(135deg, oklch(0.81 0.15 47.92) 0%, oklch(0.69 0.26 16.93) 100%)` | `--color-ember-coral` | Red wash for highlight backgrounds, decorative bands, and soft emphasis behind content |
| Electric Blue | `#0067ff` | `--color-electric-blue` | Blue wash for highlight backgrounds, decorative bands, and soft emphasis behind content |
| Arc Violet | `#665eff` | `--color-arc-violet` | Violet wash for highlight backgrounds, decorative bands, and soft emphasis behind content |
| Alpine Gradient | `linear-gradient(135deg, rgb(2, 229, 239) 0%, rgb(72, 89, 235) 71.5%, rgb(138, 56, 244) 100%)` | `--color-alpine-gradient` | Hero landscape — dramatic cyan-to-indigo-to-violet mountain horizon behind the headline; never used on UI components |
| Chartreuse | `#ffff00` | `--color-chartreuse` | Rare decorative accent — zero-friction indicators, callout highlights on screenshots only |

## Tokens — Typography

### Index — Custom display and heading face. Used for all headlines (32–72px), subheadings (22–24px), and select body emphasis (17–18px). The signature choice: letter-spacing scales inversely with size (0.0030em at 72px → 0.0150em at 14px), keeping absolute optical tracking nearly constant at ~0.2px regardless of size — prevents both headlines from feeling airy and body from feeling cramped. Geometric, slightly compact forms with tall x-height give the product UI its dense, confident feel. · `--font-index`
- **Substitute:** Inter Tight, Geist, or Söhne
- **Weights:** 400, 500, 600
- **Sizes:** 12, 13, 14, 15, 16, 17, 18, 20, 22, 23, 32, 42, 56, 72
- **Line height:** 1.20–1.60
- **Letter spacing:** 0.0030em at 72px, 0.0040em at 56px, 0.0050em at 42px, 0.0060em at 32px, 0.0090em at 24px, 0.0110em at 22px, 0.0130em at 18px, 0.0140em at 16px, 0.0150em at 14px
- **OpenType features:** `"tnum" on`
- **Role:** Custom display and heading face. Used for all headlines (32–72px), subheadings (22–24px), and select body emphasis (17–18px). The signature choice: letter-spacing scales inversely with size (0.0030em at 72px → 0.0150em at 14px), keeping absolute optical tracking nearly constant at ~0.2px regardless of size — prevents both headlines from feeling airy and body from feeling cramped. Geometric, slightly compact forms with tall x-height give the product UI its dense, confident feel.

### Inter — Primary UI and body face. Used for table cells, button labels, nav items, form inputs, captions, and all dense data contexts. The workhorse — 90% of visible text. Tabular figures ('tnum') are enabled to keep numbers aligned in tables and dashboards. Normal letter-spacing; tracking is left to the custom face for display. · `--font-inter`
- **Substitute:** system-ui, -apple-system, sans-serif
- **Weights:** 400, 500, 600
- **Sizes:** 11, 13, 14, 15, 16, 17, 18, 24
- **Line height:** 1.50–1.60
- **OpenType features:** `"tnum" on`
- **Role:** Primary UI and body face. Used for table cells, button labels, nav items, form inputs, captions, and all dense data contexts. The workhorse — 90% of visible text. Tabular figures ('tnum') are enabled to keep numbers aligned in tables and dashboards. Normal letter-spacing; tracking is left to the custom face for display.

### -apple-system — System fallback for icon-adjacent labels and Apple-native rendering. Rare, used where OS-native rhythm is preferred. · `--font-apple-system`
- **Substitute:** system-ui, BlinkMacSystemFont
- **Weights:** 500, 600
- **Sizes:** 13, 15
- **Line height:** 1.60
- **Role:** System fallback for icon-adjacent labels and Apple-native rendering. Rare, used where OS-native rhythm is preferred.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | — | — | 11px | 1.5 | 0.165px | `--text-caption` |
| body | — | — | 15px | 1.6 | 0.225px | `--text-body` |
| subheading | — | — | 18px | 1.5 | 0.234px | `--text-subheading` |
| heading-sm | — | — | 24px | 1.3 | 0.216px | `--text-heading-sm` |
| heading | — | — | 32px | 1.2 | 0.192px | `--text-heading` |
| heading-lg | — | — | 42px | 1.2 | 0.21px | `--text-heading-lg` |
| display | — | — | 72px | 1.2 | 0.216px | `--text-display` |

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
| 48 | 48px | `--spacing-48` |
| 60 | 60px | `--spacing-60` |
| 72 | 72px | `--spacing-72` |
| 200 | 200px | `--spacing-200` |

### Border Radius

| Element | Value |
|---------|-------|
| nav | 30px |
| cards | 12px |
| pills | 30px |
| buttons | 30px |
| largeCards | 20px |
| featurePanels | 24px |
| smallElements | 6px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| sm | `oklch(0.2 0 0 / 0.4) 1px 2px 6px 0px` | `--shadow-sm` |
| md | `oklch(0 0 0 / 0.1) 1px 1px 10px 0px` | `--shadow-md` |
| sm-2 | `oklch(0.89 0 0 / 0.18) 0px 1px 8px 0px` | `--shadow-sm-2` |
| xl | `oklch(0.76 0.15 225.13 / 0.6) 0px 0px 70px 0px, oklch(0.5...` | `--shadow-xl` |
| subtle | `rgb(225, 225, 225) 615px 66px 0px 0px, rgb(225, 225, 225)...` | `--shadow-subtle` |
| subtle-2 | `rgb(225, 225, 225) 435px 352px 0px 0px, rgb(225, 225, 225...` | `--shadow-subtle-2` |
| subtle-3 | `rgb(225, 225, 225) 219px 422px 0px 0px, rgb(225, 225, 225...` | `--shadow-subtle-3` |
| xl-2 | `rgba(0, 0, 0, 0.4) 0px 4px 40px 8px, rgba(0, 0, 0, 0.8) 0...` | `--shadow-xl-2` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 64px
- **Card padding:** 12px
- **Element gap:** 8px

## Components

### Frosted Nav Bar
**Role:** Top navigation

Semi-transparent dark surface with 30px radius, floating above hero. Background rgba(12,10,43,0.6) with backdrop blur. 1px Iris Border (#292a4d) edge. Logo left, nav links center (Inter 15px weight 500, #b4b4bb), Sign in + coral CTA pill right. Height ~48px, horizontal padding 8px.

### Coral CTA Button
**Role:** Primary action

Pill-shaped (30px radius), coral-to-red gradient fill (oklch 0.81 0.15 47.92 → oklch 0.69 0.26 16.93), white text in Index 15px weight 500, padding 8px 20px. No border. Sits as the only warm element on the page — visual gravity points here. Used for 'Start for free' in both nav and hero.

### Ghost Nav Link
**Role:** Secondary navigation

Text-only, Inter 15px weight 500, color #b4b4bb. No background, no border. Hover transitions to #ffffff. Padding 8px 12px.

### Feature Card
**Role:** Product feature showcase

Dark panel on Slate Indigo (#0c0a2b) background, 1px Iris Border (#292a4d), 20px radius. Internal padding 20px. Title in Index 22px weight 600 white, body in Inter 15px weight 400 #9b9ba4. Often contains a product screenshot or diagram as visual evidence. Arranged in 3-column grid with 16px gap.

### Product Table Row
**Role:** Data display in product UI

Carbon Iris (#13151f) background, 1px bottom border in #202333. Cells padded 8px 12px. Text Inter 13px weight 500 white. Status indicated by 8px colored dot (Electric Blue, Arc Violet, Ember Coral) preceding a 12px label. Compact row height ~36px — the system is information-dense, not spacious.

### Status Tag Pill
**Role:** Inline status / category indicator

Pill shape (30px radius), dark fill (Twilight Plum #2c2b52 at 40% or #0c0a2b), 1px border in matching saturated color. Colored 6px dot left, text in Inter 12px weight 500. Padding 4px 10px. Colors map to priority/status: Electric Blue = in progress, Arc Violet = planned, Ember Coral = blocked, Chartreuse = done.

### Hierarchy Tree Node
**Role:** Feature card visual element

Rounded rectangle (12px radius), dark fill (#0c0a2b), 1px border matching its category color. Inter 13px weight 500 white label, right-aligned count badge in #9b9ba4. Connected by thin #292a4d lines. Used in 'Flexible hierarchy' and 'Roll up plans' features.

### Announcement Badge
**Role:** Hero eyebrow text

Small pill (30px radius) above hero headline. Dark translucent fill (#0c0a2b at 50%), 1px Iris Border. Inter 13px weight 500 #b4b4bb text, centered. Padding 4px 12px.

### Logo Strip
**Role:** Social proof / customer logos

Single row of customer wordmarks at ~40px height, evenly spaced with 48px gap, Bone white (#ffffff) with 60% opacity. No dividers, no background. Centered, max-width matches content area.

### Product Window Frame
**Role:** Product screenshot container

macOS-style window chrome — 3 traffic-light dots (red/yellow/green) top-left, dark title bar (#0c0a2b), 12px radius. Body is the actual product UI. Shadow: oklch(0 0 0 / 0.1) 1px 1px 10px. Sits on the dark canvas as the primary visual proof point.

### Video Thumbnail Card
**Role:** Inline video preview

Horizontal card with thumbnail left (rounded 12px, ~120px wide), text right. Play button overlay on thumbnail: 40px circle, white fill at 20% opacity, centered triangle icon. Title Index 17px weight 600 white, description Inter 14px weight 400 #9b9ba4.

### Gradient CTA Glow Ring
**Role:** Decorative focus ring

Multi-layer radial glow: 70px cyan (#c1ecf4) blur, 26px indigo (#8b7ee0) ring, 52px violet (#9d6ddd) ring, 80px magenta (#c676e7) ring. Used behind the Linear sync logo illustration to create a celestial/atmospheric focal point.

## Do's and Don'ts

### Do
- Use the coral-to-red gradient (oklch 0.81 0.15 47.92 → oklch 0.69 0.26 16.93) exclusively for the primary CTA — it is the only warm element and must remain scarce.
- Set all borders to 1px in Iris Border (#292a4d) or Graphite (#202333) — never use 2px borders; the system relies on hairline precision, not weight.
- Apply 30px radius to all interactive elements (buttons, nav, tags, inputs) — the pill shape is the signature geometry, not rounded-rect.
- Use 12–20px radius for cards and panels — never 4px or 8px; the system has a soft, ambient feel, not a sharp/technical one.
- Enable tabular figures ('tnum') in all contexts containing numbers — the dense table UI depends on digit alignment.
- Map saturated colors to function: Electric Blue = in-progress, Arc Violet = planned, Ember Coral = blocked/high-priority, Chartreuse = done. Never use them decoratively.
- Keep card padding at 12px and element gap at 8px — the system is information-dense, not spacious; white space is achieved through section gaps (64px), not internal padding.

### Don't
- Do not introduce new background colors — the system is a luminance stack: Abyss → Midnight → Slate → Carbon. Adding a new surface level breaks the depth system.
- Do not use shadows for elevation — the design relies on border luminance and background contrast, not drop shadows. Cards float by being lighter than canvas, not by casting shadows.
- Do not place the coral CTA more than once per viewport — its rarity is what makes it function as a signal.
- Do not use #ffffff at 100% opacity for body text below 16px — use #b4b4bb or #9b9ba4 for secondary/muted content to preserve hierarchy.
- Do not use blue/violet/red as fill backgrounds for buttons — those colors are functional dots/tags only; the only filled button is the coral gradient.
- Do not apply letter-spacing > 0.0150em or < 0.0030em — the optical tracking is precisely tuned; arbitrary spacing breaks the geometric rhythm.
- Do not use light mode variants — the system is nocturnal by design; the mountain landscape and dark UI are inseparable.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Abyss | `#02030b` | Deepest base — behind modals, behind the hero landscape |
| 1 | Midnight | `#04061c` | Page canvas — hero background, full-bleed sections |
| 2 | Slate Indigo | `#0c0a2b` | Elevated panels — feature cards, dropdowns, product window frames |
| 3 | Carbon Iris | `#13151f` | Inset surfaces — table rows, list items, input wells |
| 4 | Twilight Plum | `#2c2b52` | Hover/active surface — selected rows, interactive feedback |

## Elevation

- **Product Window Frame:** `oklch(0 0 0 / 0.1) 1px 1px 10px 0px`
- **Frosted Nav Bar:** `oklch(0.89 0 0 / 0.18) 0px 1px 8px 0px`
- **Subtle UI elements:** `oklch(0.2 0 0 / 0.4) 1px 2px 6px 0px`

## Imagery

Imagery is dominated by product screenshots presented as macOS-style window frames with traffic-light dots, sitting directly on the dark canvas. The hero breaks this pattern with a single dramatic photograph: a mountain range at dusk rendered in deep violet, magenta, and indigo tones, with a glowing horizon line. The landscape is not decorative stock — it's the brand's signature visual identity, evoking summit/scale/clarity. Supporting graphics include flat geometric diagrams (hierarchy trees, flow nodes) rendered with colored category dots and thin connector lines. Customer logos appear as a single-row wordmark strip at 60% opacity. No lifestyle photography, no illustrations of people, no 3D renders — the product UI and the mountain landscape are the only two visual languages.

## Layout

Page model is max-width 1200px centered, with full-bleed sections alternating between the dark canvas and the mountain landscape. The hero is a full-viewport mountain image with centered headline (72px Index) over a semi-transparent dark overlay. Below the hero, content stacks in a single column with 64px section gaps. The feature section uses a 3-column card grid (20px gap) with product screenshots embedded inside cards. The product demo section is a single full-width product window frame spanning the content width. Footer is minimal — logo strip + minimal links on the dark canvas. Navigation is a single floating pill-shaped bar with backdrop blur, positioned absolute over the hero. The layout is information-dense and vertically rhythmic, not spacious or airy.

## Agent Prompt Guide

**Quick Color Reference**
- text: #ffffff (primary), #9b9ba4 (secondary), #b4b4bb (tertiary)
- background: #04061c (canvas), #0c0a2b (cards), #13151f (inset)
- border: #292a4d (primary), #202333 (secondary)
- accent: #0067ff (blue), #665eff (violet), #ff3a63 (coral)
- primary action: #04061c (filled action)

**3-5 Example Component Prompts**

1. Create a Primary Action Button: #04061c background, #ffffff text, 9999px radius, compact pill padding. Use this filled treatment for the main CTA.

2. Create a feature card: #0c0a2b background, 1px #292a4d border, 20px radius, 20px internal padding. Title at 22px Index weight 600 #ffffff, body at 15px Inter weight 400 #9b9ba4. Embed a product screenshot inside, framed as a macOS window with 3 traffic-light dots and 12px radius.

3. Create a product table row: #13151f background, 1px bottom border #202333, height 36px, cells padded 8px 12px. Inter 13px weight 500 #ffffff text. Prefix with 8px colored dot (Electric Blue #0067ff, Arc Violet #665eff, or Ember Coral #ff3a63) and a 12px label in Inter 12px weight 500 #b4b4bb.

4. Create a status tag pill: 30px radius, #0c0a2b fill, 1px border in category color (Electric Blue, Arc Violet, Ember Coral, or Chartreuse #ffff00), 4px 10px padding. 6px colored dot left of Inter 12px weight 500 #ffffff text.


## Color Strategy — Signal vs. Noise

The palette operates on a strict 95/5 rule: 95% of the interface is violet-tinted dark neutrals (Abyss through Graphite) with bone-white text. The remaining 5% is saturated color, deployed with surgical intent:

- **Coral gradient** = the only filled button fill on the entire site. It is the sunrise — the one warm element breaking the cold horizon. Never use it for tags, dots, or decorative fills.
- **Electric Blue / Arc Violet / Ember Coral / Chartreuse** = functional status dots and tag pills only. Each maps to a specific meaning (in-progress, planned, blocked, done). Never use them as backgrounds or large fills.
- **The mountain landscape gradient** = brand identity at the hero only. It is the visual signature, not a UI token. Do not reuse it for buttons, cards, or backgrounds elsewhere.

This means: when in doubt, stay in the neutrals. Color is earned, not applied.

## Similar Brands

- **Linear** — Same dark-mode product aesthetic, same compact dense table UI, same 1px hairline borders, same pill-shaped CTAs with single warm accent (Linear uses purple, Index uses coral)
- **Vercel** — Same near-black canvas with subtle cool tint, same information-dense product screenshots in window frames, same restrained color usage with one accent signal
- **Notion** — Same approach to product UI photography — showing the actual product in context rather than abstract illustrations; similar compact data table presentation
- **Stripe** — Same gradient-as-brand-identity approach (Stripe uses its signature gradient for key visual moments), same dark-mode premium product positioning, same geometric sans-serif typography
- **Attio** — Same dark-themed product UI for a productivity tool, same colored status dot system, same emphasis on data table density and visual precision

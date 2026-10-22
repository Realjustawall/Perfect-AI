# Reflect Notes — Style Reference
> starlit violet cosmos — a dark observatory where notes float like constellations against a near-black indigo void.

**Theme:** dark

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Reflect Notes is a starlit thinking environment: near-black canvas tinted with violet (#030014), illuminated text in a soft lavender-white, and a single vivid lavender accent (#9382ff) that functions as a point of focus against the dark. The interface stays monochromatic and quiet — surfaces are separated by inset rim-light glows rather than borders or elevation shadows, giving components the feel of dark glass panels catching ambient light. Display headlines use AeonikPro at weight 500 (deliberately medium, not bold), creating a calm editorial voice rather than marketing bombast. A pastel pink-to-violet-to-blue gradient is reserved exclusively for accent text and decorative strokes — never for large fills. Components are compact and tight: 5px button radii, 16px card radii, 4px base spacing. The whole system reads as a constellation map, not a dashboard.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Void Canvas | `#030014` | `--color-void-canvas` | Page background, hero canvas, deepest surface layer — the near-black with violet undertone that defines the entire system's mood |
| Midnight Surface | `#060317` | `--color-midnight-surface` | Elevated surface, card backgrounds, slightly raised panels above the void canvas |
| Deep Indigo | `#10093a` | `--color-deep-indigo` | Most elevated surface, hover states, prominent UI panels — a step brighter than midnight surface; Filled button surface, deep brand surface for primary controls sitting on the void canvas |
| Lilac White | `#f4f0ff` | `--color-lilac-white` | Primary text, headings, icons, high-contrast UI elements — white with a lavender cast that harmonizes with the violet canvas |
| Pearl | `#ffffff` | `--color-pearl` | Pure white used sparingly for text on violet-filled elements and maximum-contrast headlines |
| Ash | `#a8a6b7` | `--color-ash` | Secondary body text, card labels — cool neutral with violet undertone |
| Fog | `#918ea0` | `--color-fog` | Tertiary text, metadata, helper text, inactive controls, border lines at full opacity |
| Steel | `#54525f` | `--color-steel` | Deepest muted text, disabled labels, dark-mode border contrast — the lowest readable neutral |
| Mercury | `#cdccd0` | `--color-mercury` | Bright neutral used in dividers, subtle borders, and light-on-dark surface tints |
| Dusk | `#72707b` | `--color-dusk` | Mid-neutral for secondary borders, inactive icon strokes, and subtle background tints |
| Lavender Accent | `#9382ff` | `--color-lavender-accent` | Brand accent — links, active icons, focus rings, gradient endpoints, highlight punctuation. The single chromatic signal in a monochrome system |
| Iris | `#5046e4` | `--color-iris` | Violet supporting accent for decorative details and low-frequency emphasis. Do not promote it to the primary CTA color |
| Cosmic Gradient | `linear-gradient(90.01deg, #e59cff 0.01%, #ba9cff 50.01%, #9cb2ff 100%)` | `--color-cosmic-gradient` | Decorative gradient running from pink #e59cff through #ba9cff to blue #9cb2ff — used only on accent text and thin highlight strokes, never as a fill |
| Aurora | `linear-gradient(180deg, rgba(183,164,251,0) 0%, #b7a4fb 50%, #8562ff 100%, rgba(133,98,255,0) 100%)` | `--color-aurora` | Vertical violet glow gradient used for divider lines and edge highlights — transparent at both ends, peaks at violet center |

## Tokens — Typography

### AeonikPro — Display and heading typeface used exclusively for headings at 24px+ — weight 500 (medium) instead of the conventional 600–800 creates an editorial, restrained voice. The medium weight at 56–72px is the signature choice: other brands shout, Reflect whispers · `--font-aeonikpro`
- **Substitute:** Aeonik, Inter, or DM Sans
- **Weights:** 500
- **Sizes:** 24px, 32px, 48px, 56px, 72px
- **Line height:** 1.11–1.33
- **Letter spacing:** normal
- **Role:** Display and heading typeface used exclusively for headings at 24px+ — weight 500 (medium) instead of the conventional 600–800 creates an editorial, restrained voice. The medium weight at 56–72px is the signature choice: other brands shout, Reflect whispers

### Inter V — Body and UI typeface for all text below headings, navigation, buttons, inputs, badges, and interface labels. Weight 400 for body, 500 for emphasized UI text and button labels · `--font-inter-v`
- **Substitute:** Inter, Geist, or system-ui
- **Weights:** 400, 500
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 18px
- **Line height:** 1.20–1.85
- **OpenType features:** `"calt" 0, "cv10", "liga" 0, "ss01"`
- **Role:** Body and UI typeface for all text below headings, navigation, buttons, inputs, badges, and interface labels. Weight 400 for body, 500 for emphasized UI text and button labels

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | — | — | 12px | 1.33 | — | `--text-caption` |
| body-sm | — | — | 14px | 1.43 | — | `--text-body-sm` |
| body | — | — | 16px | 1.5 | — | `--text-body` |
| body-lg | — | — | 18px | 1.56 | — | `--text-body-lg` |
| subheading | — | — | 24px | 1.33 | — | `--text-subheading` |
| heading-sm | — | — | 32px | 1.25 | -0.2px | `--text-heading-sm` |
| heading | — | — | 48px | 1.17 | -0.3px | `--text-heading` |
| heading-lg | — | — | 56px | 1.14 | -0.4px | `--text-heading-lg` |
| display | — | — | 72px | 1.11 | -0.5px | `--text-display` |

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
| 36 | 36px | `--spacing-36` |
| 48 | 48px | `--spacing-48` |
| 52 | 52px | `--spacing-52` |
| 56 | 56px | `--spacing-56` |
| 64 | 64px | `--spacing-64` |
| 72 | 72px | `--spacing-72` |
| 108 | 108px | `--spacing-108` |
| 232 | 232px | `--spacing-232` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 16px |
| badges | 32px |
| inputs | 5px |
| buttons | 5px |
| navPill | 999px |
| featureBlocks | 24px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| lg | `rgba(255, 255, 255, 0.04) 0px 0px 24px 0px inset` | `--shadow-lg` |
| lg-2 | `rgba(255, 255, 255, 0.06) 0px 0px 24px 0px inset` | `--shadow-lg-2` |
| md | `rgba(164, 143, 255, 0.12) 0px -7px 11px 0px inset` | `--shadow-md` |
| subtle | `rgb(255, 255, 255) 919px 12930px 0px 0px, rgb(255, 255, 2...` | `--shadow-subtle` |
| subtle-2 | `rgb(255, 255, 255) 1288px 6298px 0px 0px, rgb(255, 255, 2...` | `--shadow-subtle-2` |
| subtle-3 | `rgb(255, 255, 255) 1273px 17446px 0px 0px, rgb(255, 255, ...` | `--shadow-subtle-3` |
| subtle-4 | `rgba(255, 255, 255, 0.03) 0px 0px 0px 8px inset` | `--shadow-subtle-4` |

### Layout

- **Page max-width:** 1200px
- **Section gap:** 96-120px
- **Card padding:** 24-32px
- **Element gap:** 8-16px

## Components

### Navigation Pill
**Role:** Top navigation bar

Floating pill-shaped container centered on the page, border-radius ~999px, background #060317 with subtle inset white glow shadow (rgba(255,255,255,0.04) inset). Contains logo on the left, nav links (Product, Pricing, Company, Blog, Changelog) in Inter V 15px weight 400 in Lilac White, Login as text link in #918ea0, and a filled CTA button on the right. 40px height, 8px vertical padding, tight horizontal padding.

### Primary CTA Button
**Role:** Main call-to-action button

Filled button with #5046e4 background, 5px border-radius, Inter V 15px weight 500, #ffffff text, 10px 16px padding. Used for "Start free trial" in nav and hero. Hover transitions to deeper #10093a or lighter violet wash.

### Ghost Text Button
**Role:** Secondary action or login link

No background, Inter V 15px weight 400, #918ea0 text color, 5px radius, subtle hover to #f4f0ff. Used for "Login" in nav and less prominent actions.

### AI Badge Pill
**Role:** Highlight badge above hero headline

Pill-shaped badge with 32px border-radius, #060317 background with #5046e4 border, Inter V 13px weight 500 text in Lilac White. Contains sparkle icon + short text. Has inset violet glow: rgba(164,143,255,0.12) 0px -7px 11px 0px inset.

### Hero Product Screenshot
**Role:** Product showcase image in hero

Full-width app screenshot embedded in hero, showing the notes editor with sidebar, daily notes panel, and calendar widget. 16px border-radius, subtle border in #918ea0 at low opacity, inset white glow to suggest light catching the edge.

### Feature Card
**Role:** Individual feature in 4-column grid

Minimal card with 16px padding, no visible background or border. Contains: outlined icon (stroke-only, 1.5px, #f4f0ff) at top-left, then AeonikPro 500 at 18–20px title in Lilac White, then Inter V 15px weight 400 description in #918ea0. No card surface — features float directly on canvas.

### Feature Icon
**Role:** Icon component for feature cards

1.5px stroke weight, outlined style, ~24px size, #f4f0ff color, no fill. Geometric and minimal — clock, globe, phone, lock, calendar, cursor, square, search shapes. Stroke-based, not filled.

### Testimonial Card
**Role:** User testimonial in 3-column grid

16px border-radius, #060317 background, 24px padding. Contains: 40px circular avatar at top, name in Inter V 15px weight 500 #f4f0ff, handle in Inter V 14px weight 400 #918ea0 below, then quote text in Inter V 15px weight 400 #f4f0ff with #9382ff colored @mentions inline. Subtle inset white glow shadow for rim-light effect.

### Section Header
**Role:** Title block for each page section

Centered, AeonikPro 500 at 48–56px, Lilac White #f4f0ff. Subtitle in Inter V 18px weight 400 #918ea0 below. Sometimes preceded by a small pill badge (e.g. "Wall of love", "Reflect AI") in the AI Badge style.

### Text Link with Chevron
**Role:** Inline navigation or CTA link

Inter V 15px weight 500 in #9382ff (lavender accent), with a right-arrow chevron icon. 8px radius. Used for "Learn more" and feature deep-links. On hover transitions to #f4f0ff.

### Star Field Background
**Role:** Decorative cosmic backdrop

Subtle dot/star pattern scattered across the hero section — tiny white dots (1–2px) at low opacity, creating a constellation effect on the #030014 canvas. Purely decorative, not interactive.

### Aurora Divider
**Role:** Section separator with violet glow

Thin horizontal or vertical line using the Aurora gradient — transparent at endpoints, violet in center. Used to separate sections or decorate feature grids. ~1px height, full width or column-width.

## Do's and Don'ts

### Do
- Set body text in Inter V weight 400 at 16px/1.50, color #a8a6b7 or #f4f0ff — never use pure #ffffff for body copy, the lavender cast in #f4f0ff is intentional
- Use AeonikPro weight 500 at 48–72px for all headings — do not bold up to 600/700, the medium weight IS the brand
- Use 5px border-radius for all buttons, inputs, and interactive elements; 16px for all cards and containers; 32px for pill badges; 999px only for the nav container
- Apply inset white glow (rgba(255,255,255,0.04–0.06) 0px 0px 24px 0px inset) to elevated surfaces instead of drop shadows — this creates the rim-light glass effect
- Use #9382ff exclusively for links, active states, focus rings, and small accent icons — keep the violet accent sparse, it's punctuation not paint
- Use the cosmic gradient (#e59cff → #ba9cff → #9cb2ff) only on text and thin decorative strokes, never as a large fill or button background
- Set the page background to #030014 — the violet undertone is essential, do not use pure black #000000

### Don't
- Do not use bold (600+) or extra-bold (700+) weights for any text — the entire system is calibrated to medium and regular only
- Do not use drop shadows on cards or panels — all elevation is achieved through inset rim-light glows, not external shadows
- Do not add the brand accent color to large fills, backgrounds, or hero sections — it dilutes the monochromatic quiet
- Do not use border-radius values other than the defined set (5/16/32/999px) — do not default to 8px or 12px for buttons or 24px for cards
- Do not use pure white #ffffff for body text — always use the lavender-tinted #f4f0ff to maintain color harmony with the violet canvas
- Do not introduce semantic colors (red/green/yellow) for status — the system is intentionally achromatic, if states are needed use opacity changes and the lavender accent
- Do not use multiple accent hues — the single lavender #9382ff is the only chromatic voice; introducing a second accent breaks the constellation metaphor

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Void Canvas | `#030014` | Page background, hero section, deepest base layer |
| 1 | Midnight Surface | `#060317` | Cards, nav pill, slightly elevated panels |
| 2 | Deep Indigo | `#10093a` | Highest surface elevation, prominent UI blocks, button fills on dark canvas |
| 3 | Testimonial Card | `#060317` | Content cards with same surface as nav, differentiated by padding and border-radius rather than color shift |

## Elevation

- **Cards and elevated surfaces:** `inset 0 0 24px rgba(255,255,255,0.04) or inset 0 0 24px rgba(255,255,255,0.06)`
- **Pill badges and AI labels:** `inset 0 -7px 11px rgba(164,143,255,0.12)`

## Imagery

The primary visual element is a full product screenshot embedded in the hero showing the Reflect app interface — a dark-themed notes editor with sidebar navigation (Daily notes, All notes, Tasks, Map) and a monthly calendar widget. The screenshot sits on a subtle star-field background of tiny white dots scattered across the violet-black canvas. Below the hero, the visual content shifts to UI cards and feature blocks — no photography or illustration. Feature icons are stroke-based, 1.5px weight, outlined, and white. Avatars in testimonials are small circular photos. The gradient text on "Think better" (pink to blue) is the only chromatic illustration element. Overall: product-screenshot-forward, icons-only for features, no lifestyle photography or 3D renders.

## Layout

Centered max-width ~1200px container with 24–48px horizontal page padding. Navigation is a floating pill centered at the top (not full-width). Hero is full-bleed with centered headline, subtitle, and a wide product screenshot below. Section rhythm: consistent 96–120px vertical gaps between sections, no alternating background colors (the entire page is the same void canvas). Feature sections use a 4-column grid (8 features in 2 rows of 4). Testimonial section uses a 3-column grid (6 testimonials in 2 rows of 3). All sections are center-aligned with the same max-width. No sidebar, no sticky elements beyond the floating nav pill. The page reads as one continuous dark scroll with rhythmic pauses between sections.

## Agent Prompt Guide

**Quick Color Reference**
- text: #f4f0ff (Lilac White)
- text secondary: #a8a6b7 (Ash)
- background: #030014 (Void Canvas)
- card surface: #060317 (Midnight Surface)
- accent: #9382ff (Lavender Accent)
- primary action: no distinct CTA color

**Example Component Prompts**
1. *Create a centered hero section on #030014 canvas. A 32px-radius pill badge ("AI-powered") with #060317 background, #5046e4 border, Inter V 13px weight 500 in #f4f0ff, and an inset violet glow shadow. Below it, a headline "Think better with [Brand]" in AeonikPro 500 at 72px, #f4f0ff. Subtitle in Inter V 18px weight 400, #a8a6b7. A product screenshot below at 16px border-radius with subtle inset white glow.*
2. *Create a 4-column feature grid on #030014 canvas. Each cell: outlined icon (1.5px stroke, #f4f0ff, 24px) top-left, then AeonikPro 500 20px title in #f4f0ff, then Inter V 15px weight 400 description in #918ea0. 16px gap between cards, no card backgrounds.*
3. *Create a testimonial card: #060317 background, 16px border-radius, 24px padding, inset rgba(255,255,255,0.04) glow shadow. Top: 40px circular avatar. Name in Inter V 15px weight 500 #f4f0ff, handle in Inter V 14px weight 400 #918ea0. Quote in Inter V 15px weight 400 #f4f0ff with @mentions in #9382ff.*
No distinct primary action color was observed; use the extracted neutral button treatments instead of inventing a filled CTA color.

**Spacing & Type Rules for All Prompts**
- Base unit: 4px. Element gap: 8–16px. Section gap: 96–120px. Card padding: 24–32px.
- Headlines: AeonikPro 500 only — never bold. Body: Inter V 400/500. Font features: "calt" 0, "cv10", "liga" 0, "ss01".
- Radii: buttons 5px, cards 16px, badges 32px, nav 999px. Never use 8/10/12px for buttons or 20/24px for cards.

## Similar Brands

- **Notion** — Dark canvas with single accent color, tight card radii, and medium-weight sans-serif headings — though Reflect is more monochromatic and cosmic
- **Linear** — Dark mode UI with tight spacing, floating pill nav, and medium-weight display type — but Reflect trades Linear's electric accent for a softer lavender
- **Vercel** — Centered max-width layout, dark canvas, minimal component surfaces relying on subtle borders and glows rather than fills
- **Obsidian** — Knowledge-tool dark theme with violet-tinted canvas and constellation-like dot patterns, matching the "thinking space" metaphor

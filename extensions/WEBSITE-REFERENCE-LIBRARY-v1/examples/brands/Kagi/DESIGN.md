# Kagi — Style Reference
> Private reading room. Build open white space around decisive graphite text, with small violet cues and warm pastel product surfaces interrupting the calm.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Kagi — private reading room. The interface uses an expansive white canvas, near-black type, and centered editorial compositions that make search feel like a quiet utility rather than an advertising surface. Lufga’s rounded geometric forms carry large, weight-600 headlines and compact navigation, while purple links and pastel product panels introduce color only at ecosystem touchpoints. Dark graphite bands invert the system for FAQs and the footer, with restrained shadows reserved for the search field and framed product screens.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Graphite 1000 | `#18181a` | `--color-graphite-1000` | Primary text, navigation, dark FAQ and footer surfaces, filled capsule buttons |
| White | `#ffffff` | `--color-white` | Page canvas, search field, white utility cards, text on Graphite 1000 |
| Graphite 800 | `#454549` | `--color-graphite-800` | Secondary body copy, dark-section dividers, subdued card copy |
| Graphite 900 | `#2f2f31` | `--color-graphite-900` | Inset dark surfaces, dark-field background, dark accordion separators |
| Graphite 100 | `#e6e6e8` | `--color-graphite-100` | Hairline borders, pale outlined-card edges, quiet surface separators |
| Graphite 200 | `#cfcfd1` | `--color-graphite-200` | Footer copy and subdued inverted text |
| Graphite 300 | `#b7b7bb` | `--color-graphite-300` | Muted footer labels, disabled-looking icon strokes, low-emphasis details |
| Graphite 600 | `#707077` | `--color-graphite-600` | Placeholder text, secondary icon strokes, muted control text |
| Chrome Lavender | `#efecff` | `--color-chrome-lavender` | Pale selected-chip and minor highlighted-link surface |
| Mist | `#d6e3e8` | `--color-mist` | Cool-tinted product-card and supporting showcase surface |
| Kagi Violet | `#6c5edc` | `--color-kagi-violet` | Inline links, ecosystem eyebrows, and textual product signposts — the single vivid signal within the graphite-and-white interface |
| Lavender Panel | `#c9c1ff` | `--color-lavender-panel` | Assistant and product-demo card backgrounds |
| Sunlit Gold | `#ffb319` | `--color-sunlit-gold` | Search product-demo card background |
| Soft Apricot | `#ffe1a4` | `--color-soft-apricot` | Supporting promotional card background |

## Tokens — Typography

### Lufga — Brand face for navigation, ecosystem labels, headings, and prominent editorial copy. The 600-weight 60px and 46px headings are broad and rounded rather than condensed; this gives privacy messaging a personable, non-corporate voice. · `--font-lufga`
- **Substitute:** DM Sans, system-ui, sans-serif
- **Weights:** 400, 500, 600
- **Sizes:** 16px, 18px, 24px, 46px, 60px
- **Line height:** 1.13, 1.25, 1.33, 1.50, 1.60
- **Letter spacing:** normal
- **Role:** Brand face for navigation, ecosystem labels, headings, and prominent editorial copy. The 600-weight 60px and 46px headings are broad and rounded rather than condensed; this gives privacy messaging a personable, non-corporate voice.

### system-ui — Utility face for body copy, links, inputs, compact button labels, and product-interface content; its neutral platform texture separates functional UI from Lufga’s branded editorial voice. · `--font-system-ui`
- **Substitute:** -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif
- **Weights:** 400
- **Sizes:** 12px, 14px, 16px, 20px
- **Line height:** 1.33, 1.40, 1.50, 1.60
- **Letter spacing:** normal
- **Role:** Utility face for body copy, links, inputs, compact button labels, and product-interface content; its neutral platform texture separates functional UI from Lufga’s branded editorial voice.

### Arial — Footer navigation and small utility lists, creating a deliberately plain information layer beneath the branded page content. · `--font-arial`
- **Substitute:** Arial, Helvetica, sans-serif
- **Weights:** 400
- **Sizes:** 14px
- **Line height:** 1.43
- **Letter spacing:** normal
- **Role:** Footer navigation and small utility lists, creating a deliberately plain information layer beneath the branded page content.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| button-label | system-ui | 400 | 14px | 1.6 | 0px | `--text-button-label` |
| footer-label | Arial | 400 | 14px | 1.43 | 0px | `--text-footer-label` |
| nav | Lufga | 400 | 16px | 1.5 | 0px | `--text-nav` |
| body | system-ui | 400 | 16px | 1.5 | 0px | `--text-body` |
| body-relaxed | system-ui | 400 | 16px | 1.6 | 0px | `--text-body-relaxed` |
| ecosystem-eyebrow | Lufga | 400 | 18px | 1.6 | 0px | `--text-ecosystem-eyebrow` |
| card-heading | Lufga | 600 | 24px | 1.33 | 0px | `--text-card-heading` |
| inverted-section-heading | Lufga | 500 | 24px | 1.33 | 0px | `--text-inverted-section-heading` |
| section-heading | Lufga | 600 | 46px | 1.13 | 0px | `--text-section-heading` |
| display | Lufga | 600 | 60px | 1.13 | 0px | `--text-display` |

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
| 32 | 32px | `--spacing-32` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 128 | 128px | `--spacing-128` |
| 164 | 164px | `--spacing-164` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 24px |
| links | 5px |
| pills | 48px |
| images | 12px |
| inputs | 32px |
| buttons | 48px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| xl | `rgba(0, 0, 0, 0.09) 1px 8px 30px 0px` | `--shadow-xl` |
| lg | `rgba(0, 0, 0, 0.22) 0px 0px 24px 0px` | `--shadow-lg` |

### Layout

- **Page max-width:** 1176px
- **Section gap:** 64px
- **Card padding:** 24px
- **Element gap:** 24px

## Components

### Public Header
**Role:** Top-level brand navigation

Use a 64px-tall white header with the Kagi wordmark at left and right-aligned Lufga navigation at 16px/400/24px in Graphite 1000 (#18181a). Keep 32px gaps between navigation groups; dropdown triggers remain text-first with a small chevron rather than bordered controls.

### Filled Capsule Button
**Role:** Conversion and product-entry control

Set a Graphite 1000 (#18181a) fill and white text, with 48px radius and 7px 24px padding. Use system-ui 14px/400/22.4px; its low 36px visual height makes the control a compact punctuation mark below product copy.

### Search Field
**Role:** Hero search entry

Use a white field with Graphite 1000 (#18181a) text and 1px Graphite 1000 border, 32px radius, and 11px 21px padding. Set placeholder text in Graphite 600 (#707077); on focus retain a Graphite 1000 (#18181a) outline, and apply rgba(0, 0, 0, 0.09) 1px 8px 30px 0px shadow.

### Inverted Search Field
**Role:** Dark-surface search or utility input

Use Graphite 900 (#2f2f31) background, White (#ffffff) text, and a 1px White (#ffffff) border with 32px radius and 11px 21px padding. Use Graphite 300 (#b7b7bb) for placeholder text and a White (#ffffff) focus outline.

### White Utility Tile
**Role:** Linked ecosystem-tool card

Use a white surface, 1px Graphite 100 (#e6e6e8) border, 24px radius, and 24px padding. Keep text in Graphite 1000 (#18181a), with 24px internal gaps; this treatment supports compact tool entries without turning the page into a dense dashboard.

### Sunlit Search Showcase Card
**Role:** Search product demonstration

Use Sunlit Gold (#ffb319) as the 24px-radius outer card with 24px padding. Place the product screenshot in a white 12px-radius inset with rgba(0, 0, 0, 0.22) 0px 0px 24px 0px shadow; pair it with a Lufga 24px/600/31.92px Graphite 1000 title and a Filled Capsule Button.

### Lavender Assistant Showcase Card
**Role:** Assistant product demonstration

Use Lavender Panel (#c9c1ff) as the 24px-radius outer card with 24px padding. Keep the screenshot as a white framed inset with 12px radius and rgba(0, 0, 0, 0.22) 0px 0px 24px 0px shadow; use the same Graphite 1000 Lufga 24px/600 title treatment as the search showcase.

### Editorial Product Split
**Role:** Browser or platform feature section

Arrange Graphite 1000 (#18181a) Lufga 24px/600/31.92px copy and Graphite 800 (#454549) body text beside a contained device/product image. Use a Filled Capsule Button below the copy and preserve a 24px element gap; do not enclose the text side in a card.

### Violet Inline Link
**Role:** Textual cross-link and ecosystem marker

Render system-ui 16px/400/25.6px in Kagi Violet (#6c5edc). Use Chrome Lavender (#efecff) only for a selected or highlighted inline-link surface, with 5px radius; never use violet as a filled public-navigation button.

### FAQ Accordion Row
**Role:** Question-and-answer disclosure

Place rows on Graphite 1000 (#18181a) with 1px Graphite 900 (#2f2f31) bottom borders. Use white Lufga 24px/500/32px questions, a right-aligned thin white chevron, and Graphite 200 (#cfcfd1) answer copy; expanded answers sit 24px below the question without a separate panel.

### Footer Link Group
**Role:** Dense lower-page information navigation

Use Graphite 1000 (#18181a) background with Arial 14px/400/20px labels in Graphite 300 (#b7b7bb) and links in Graphite 200 (#cfcfd1). Keep the footer as text columns with 12px row gaps rather than carded navigation.

## Do's and Don'ts

### Do
- Use White (#ffffff) as the primary canvas and Graphite 1000 (#18181a) for all major headlines and public navigation.
- Set display headlines in Lufga 60px/600/67.98px and section headings in Lufga 46px/600/51.98px.
- Use a 1176px page maximum, 64px section gaps, 24px card padding, and 24px internal element gaps.
- Use 48px radius with 7px 24px padding for filled Graphite 1000 (#18181a) capsule buttons.
- Reserve Kagi Violet (#6c5edc) for links and ecosystem labels; pair selected-link fills with Chrome Lavender (#efecff).
- Use Sunlit Gold (#ffb319), Lavender Panel (#c9c1ff), Soft Apricot (#ffe1a4), and Mist (#d6e3e8) as isolated 24px-radius product showcase surfaces.
- Invert FAQ and footer sections with Graphite 1000 (#18181a), White (#ffffff) questions, and Graphite 900 (#2f2f31) dividers.

### Don't
- Do not use Kagi Violet (#6c5edc) as a filled public conversion button.
- Do not use radii below 24px for promotional cards or product showcase panels.
- Do not replace the 48px capsule button radius with a rectangular 5px or 8px control.
- Do not put every content section inside bordered cards; leave editorial copy directly on the White (#ffffff) canvas.
- Do not add gradients; use flat Sunlit Gold (#ffb319), Lavender Panel (#c9c1ff), Soft Apricot (#ffe1a4), or Mist (#d6e3e8) surfaces.
- Do not use heavy elevation beyond rgba(0, 0, 0, 0.09) 1px 8px 30px 0px for hero controls and rgba(0, 0, 0, 0.22) 0px 0px 24px 0px for framed screenshots.
- Do not set footer or FAQ body copy in pure White (#ffffff); use Graphite 200 (#cfcfd1) for supporting text.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | White Canvas | `#ffffff` | Primary page background, header, fields, and utility tiles |
| 1 | Chrome Lavender | `#efecff` | Small selected and highlighted-link surface |
| 2 | Pastel Product Panels | `#c9c1ff` | Lavender showcase-card surface; alternate with Sunlit Gold, Soft Apricot, and Mist for product families |
| 3 | Graphite Inversion | `#18181a` | FAQ, footer, filled buttons, and high-contrast dark sections |

## Elevation

- **Search Field:** `rgba(0, 0, 0, 0.09) 1px 8px 30px 0px`
- **Product Screenshot Inset:** `rgba(0, 0, 0, 0.22) 0px 0px 24px 0px`

## Imagery

Imagery is product-focused rather than lifestyle-based: browser windows, search results, assistant interfaces, and multi-device mockups demonstrate the tools directly. Product screens sit contained inside white, softly rounded frames over flat pastel panels, often with a shallow floating shadow; they are isolated from copy rather than overlapping it. The page is text-dominant at the hero and FAQ, while product imagery occupies the visual center of feature sections. Icons are sparse, small, and monochrome graphite or white line marks; vivid color belongs to panel backgrounds rather than illustration.

## Layout

A 64px white top bar frames a centered, max-width 1176px editorial page. The opening screen is a centered stack: a large display headline, short centered supporting copy, then a wide pill-shaped search field with generous surrounding white space. Product content moves into a two-column grid of equal showcase cards, then alternates an unboxed text-left/product-visual-right split for broader platform features. Later content remains spacious and centered before switching to a full-width Graphite 1000 FAQ band with a narrow centered accordion column; the page resolves into a deep graphite, multi-column information footer. Sections flow without decorative dividers on the white canvas, while the dark FAQ uses horizontal row rules to create its rhythm.

## Agent Prompt Guide

Quick Color Reference:
- Graphite 1000: #18181a — Primary text, navigation, dark FAQ and footer surfaces, filled capsule buttons
- White: #ffffff — Page canvas, search field, white utility cards, text on Graphite 1000
- Graphite 800: #454549 — Secondary body copy, dark-section dividers, subdued card copy
- Graphite 900: #2f2f31 — Inset dark surfaces, dark-field background, dark accordion separators
- Graphite 100: #e6e6e8 — Hairline borders, pale outlined-card edges, quiet surface separators
- Graphite 200: #cfcfd1 — Footer copy and subdued inverted text
- Graphite 300: #b7b7bb — Muted footer labels, disabled-looking icon strokes, low-emphasis details
- Graphite 600: #707077 — Placeholder text, secondary icon strokes, muted control text
- Chrome Lavender: #efecff — Pale selected-chip and minor highlighted-link surface
- Mist: #d6e3e8 — Cool-tinted product-card and supporting showcase surface
- Kagi Violet: #6c5edc — Inline links, ecosystem eyebrows, and textual product signposts — the single vivid signal within the graphite-and-white interface
- Lavender Panel: #c9c1ff — Assistant and product-demo card backgrounds
- Sunlit Gold: #ffb319 — Search product-demo card background
- Soft Apricot: #ffe1a4 — Supporting promotional card background

Create a centered white-canvas search hero with a Lufga 60px/600/67.98px Graphite 1000 headline, Lufga 16px/400/24px supporting copy, and a white 32px-radius search field with Graphite 600 placeholder text and the specified soft shadow.
Create a two-column product showcase grid using a Sunlit Gold card and a Lavender Panel card, each with 24px radius, 24px padding, a white 12px-radius product-screen inset, Lufga 24px/600/31.92px Graphite 1000 title, Graphite 800 copy, and a Graphite 1000 capsule button.
Create a Graphite 1000 FAQ section with a centered Lufga 24px/500/32px White heading and stacked accordion rows divided by 1px Graphite 900 rules; set answer text in Graphite 200.
Create a Graphite 1000 footer with compact Arial 14px/400/20px Graphite 300 group labels, Graphite 200 links, and 12px row gaps.

## Similar Brands

- **Arc** — Uses contained browser-product visuals and rounded showcase surfaces that make the browser interface itself the illustration.
- **Proton** — Shares privacy-centered white space, graphite typography, and restrained purple as a functional link and product cue.
- **DuckDuckGo** — Shares a search-first landing-page model with a prominent search control and plain-language privacy positioning, but Kagi uses softer pastel product panels.
- **Linear** — Shares the dark graphite inversion pattern, sparse dividers, compact pill controls, and product UI presented as the primary visual evidence.

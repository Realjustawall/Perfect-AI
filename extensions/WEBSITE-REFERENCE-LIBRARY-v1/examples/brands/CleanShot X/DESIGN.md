# CleanShot X — Style Reference
> Blue-lit desktop studio. Build quiet white space around compact black type, then let saturated blue controls and layered Mac-product imagery create the focal points.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

CleanShot X — blue-lit Mac utility. The interface is a white, spacious product canvas where near-black Google Sans Flex carries almost all information and Electric Capture Blue appears as concentrated purchase and exploration punctuation. Product media supplies the visual drama: layered macOS windows, dark interface panels, and blue atmospheric fields sit inside soft 20px containers, while testimonial cards remain nearly weightless against the canvas. Headlines use a compact, tightly tracked 600 weight; the page earns its Mac-native character through rounded controls, blurred floating surfaces, and shadows that read like subtle hardware lift rather than deep elevation.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Paper White | `#ffffff` | `--color-paper-white` | Page backgrounds, card surfaces, white secondary controls, and light text on dark badges |
| Absolute Ink | `#000000` | `--color-absolute-ink` | Display headlines, high-emphasis body copy, and the dominant text treatment on white |
| Graphite | `#161618` | `--color-graphite` | Navigation text, secondary headings, dark outlines, icon strokes, and card-copy emphasis |
| Soft Charcoal | `#6a6a6b` | `--color-soft-charcoal` | Long-form supporting copy, feature descriptions, and restrained metadata |
| Studio Black | `#0f0f12` | `--color-studio-black` | Announcement badges and dark media or footer-like surfaces |
| Electric Capture Blue | `#0d44e8` | `--color-electric-capture-blue` | Filled purchase and exploration buttons, blue product accents, and selected emphasis — a sharply saturated blue breaks the otherwise monochrome Mac-workspace palette |
| Electric Blue Sweep | `linear-gradient(90deg, #161618 0%, #161618 60%, #174ef2 100%)` | `--color-electric-blue-sweep` | Dark-section and wordmark-style accent gradient, extending Studio Black into a brighter blue edge |

## Tokens — Typography

### Google Sans Flex — The sole interface and editorial family: 600 at 60px/66px for the hero, 40px/48px for section headings, and 20px/28px for feature titles; 450 supports 18px/30px descriptive copy, while 550 handles compact labels and controls. The family’s flexible intermediary weights make text feel calibrated like a native macOS utility rather than split between a display face and a UI face. · `--font-google-sans-flex`
- **Substitute:** Inter
- **Weights:** 400, 450, 550, 600
- **Sizes:** 13px, 14px, 15px, 16px, 18px, 20px, 40px, 60px
- **Line height:** 1.10, 1.15, 1.20, 1.23, 1.40, 1.43, 1.60, 1.67
- **Letter spacing:** -1.2px at 60px and -0.8px at 40px for headings; +0.18px in 18px body and 14px badge samples; otherwise normal
- **Role:** The sole interface and editorial family: 600 at 60px/66px for the hero, 40px/48px for section headings, and 20px/28px for feature titles; 450 supports 18px/30px descriptive copy, while 550 handles compact labels and controls. The family’s flexible intermediary weights make text feel calibrated like a native macOS utility rather than split between a display face and a UI face.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| micro-label | Google Sans Flex | 550 | 13px | 1.23 | 0px | `--text-micro-label` |
| caption | Google Sans Flex | 450 | 13px | 1.23 | 0px | `--text-caption` |
| metadata | Google Sans Flex | 550 | 14px | 1.43 | 0px | `--text-metadata` |
| body-small | Google Sans Flex | 450 | 14px | 1.43 | 0px | `--text-body-small` |
| nav | Google Sans Flex | 550 | 15px | 1.6 | 0px | `--text-nav` |
| body | Google Sans Flex | 450 | 18px | 1.67 | 0px | `--text-body` |
| feature-heading | Google Sans Flex | 600 | 20px | 1.4 | 0px | `--text-feature-heading` |
| section-heading | Google Sans Flex | 600 | 40px | 1.2 | 0px | `--text-section-heading` |
| display | Google Sans Flex | 600 | 60px | 1.1 | 0px | `--text-display` |

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
| 36 | 36px | `--spacing-36` |
| 40 | 40px | `--spacing-40` |
| 48 | 48px | `--spacing-48` |
| 64 | 64px | `--spacing-64` |
| 80 | 80px | `--spacing-80` |
| 120 | 120px | `--spacing-120` |
| 200 | 200px | `--spacing-200` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 20px |
| icons | 9999px |
| media | 20px |
| badges | 14px |
| inputs | 14px |
| buttons | 14px |
| iconControls | 40px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| lg | `rgba(22, 22, 24, 0.02) 0px 7px 20px -8px, rgba(22, 22, 24...` | `--shadow-lg` |
| sm | `rgba(4, 24, 85, 0.28) 0px 2px 6px -1px, rgba(66, 174, 247...` | `--shadow-sm` |
| sm-2 | `rgba(22, 22, 24, 0.2) 0px 2px 6px -1px, rgba(22, 22, 24, ...` | `--shadow-sm-2` |
| sm-3 | `rgba(22, 22, 24, 0.5) 0px 0px 6px -2px, rgba(22, 22, 24, ...` | `--shadow-sm-3` |

### Layout

- **Section gap:** 40px
- **Card padding:** 16px
- **Element gap:** 12px

## Components

### Public Navigation Bar
**Role:** Top-level product navigation with wordmark, menu controls, account access, and purchase entry point.

Use Graphite #161618 labels with 15px/550 Google Sans Flex, 8px icon-to-label gaps, and a 16px control inset. Keep the purchase control as a separate 14px-radius Electric Capture Blue #0d44e8 button.

### Electric Purchase Button
**Role:** Filled conversion button for product acquisition and feature exploration.

Fill with Electric Capture Blue #0d44e8 and white text; use a 14px radius, 16px horizontal padding, a 1px white border, and the blue button shadow: rgba(4, 24, 85, 0.28) 0px 2px 6px -1px, rgba(66, 174, 247, 0.48) 0px 6px 14px 0px inset.

### White Outline Demonstration Button
**Role:** Secondary button for explanatory flows such as product demonstrations.

Use a Paper White #ffffff fill, Graphite #161618 text and 1px border, 14px radius, and 20px horizontal padding. Pair a small outlined play icon with an 8px gap when the control opens media.

### Transparent Outline Navigation Button
**Role:** Compact outlined navigation or utility action.

Keep the background transparent with a 1px Graphite #161618 border and Graphite text; use a 14px radius, 16px left padding, and 13px right padding.

### Circular Icon Control
**Role:** Media playback, carousel navigation, and compact directional control.

Use a 40px circular control with rgba(22, 22, 24, 0.05) fill and Graphite #161618 iconography. Reserve 9999px radius for smaller icon-only chips and 48px for larger circular controls.

### Studio Announcement Badge
**Role:** Compact dark label introducing a new capability or media mode.

Fill with Studio Black #0f0f12, set text to Paper White #ffffff at 14px/550 with +0.14px tracking, and use a 14px radius with 8px top/bottom, 8px left, and 13px right padding.

### Light Utility Badge
**Role:** White contextual chip placed on darker or image-led media.

Use a Paper White #ffffff fill with Graphite #161618 text, 14px radius, and 8px top/bottom, 8px left, and 13px right padding. Apply rgba(22, 22, 24, 0.2) 0px 2px 6px -1px, rgba(22, 22, 24, 0.16) 0px 0px 0px 1px.

### Elevated Testimonial Card
**Role:** Social-proof card for avatar, author metadata, and quoted product experience.

Use a Paper White #ffffff surface and 20px radius with the card shadow: rgba(22, 22, 24, 0.02) 0px 7px 20px -8px, rgba(22, 22, 24, 0.02) 0px 29px 33px -4px, rgba(22, 22, 24, 0.05) 0px 22px 30px -8px, rgba(22, 22, 24, 0.06) 0px 0px 0px 1px. Use 16px internal content spacing, Graphite metadata, and Absolute Ink quote text.

### Product Demo Media Card
**Role:** Contained product showcase for recordings, screenshots, and layered app windows.

Clip media at a 20px radius; place dark macOS-window layers over blue-tinted imagery rather than adding generic decorative illustrations. Use a rgba(0, 0, 0, 0.4) overlay card with the same 20px radius when legibility is needed.

### Dark Surface Input
**Role:** Email or utility input embedded in Studio Black sections.

Use a transparent background, Paper White #ffffff text, 1px rgba(255, 255, 255, 0.24) border, 16px radius, and 18px horizontal padding. Keep the surrounding surface Studio Black #0f0f12.

### Monochrome Trust Logo Strip
**Role:** Muted social-proof row between major product sections.

Set the supporting label and partner marks in muted gray treatment rather than brand colors; use 8px or 15px gaps between mark elements and preserve the Paper White #ffffff section background.

## Do's and Don'ts

### Do
- Use Paper White #ffffff as the default canvas and card surface, with Absolute Ink #000000 for display headings.
- Set hero headlines in Google Sans Flex 60px/600 with 66px line-height and -1.2px tracking.
- Set section headlines in Google Sans Flex 40px/600 with 48px line-height and -0.8px tracking.
- Use Electric Capture Blue #0d44e8 only for filled purchase or exploration controls and focused product accents.
- Give cards and media containers a 20px radius; give rectangular buttons, badges, and inputs a 14px radius.
- Use 12px as the default local gap, 16px as the standard compact inset, and 40px as the section-gap token.
- Apply the recorded multi-layer graphite card shadow to Paper White #ffffff testimonial and content cards.

### Don't
- Do not use #0d44e8 as a page background, broad section fill, or default text color.
- Do not replace 14px button corners with pill shapes; reserve 9999px radius for icon-only controls.
- Do not use heavy opaque black shadows on cards; use the low-opacity Graphite shadow stack instead.
- Do not set supporting paragraphs in Absolute Ink #000000; use Soft Charcoal #6a6a6b at 18px/450 with 30px line-height.
- Do not introduce colorful semantic badge palettes; use Studio Black #0f0f12 or Paper White #ffffff chips unless a product state requires otherwise.
- Do not place unframed product screenshots directly on the canvas; crop them into 20px-radius media cards with layered macOS-window depth.
- Do not use bold 700–800 display type; keep headlines at Google Sans Flex 600.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Paper Canvas | `#ffffff` | Primary page field, navigation field, and the base behind spacious feature sections. |
| 1 | Lifted White | `#ffffff` | Testimonial cards, white utility badges, and secondary button surfaces distinguished through outline and shadow. |
| 2 | Studio Surface | `#0f0f12` | Announcement badges, dark media overlays, and full-width dark product bands. |

## Elevation

- **Elevated Testimonial Card:** `rgba(22, 22, 24, 0.02) 0px 7px 20px -8px, rgba(22, 22, 24, 0.02) 0px 29px 33px -4px, rgba(22, 22, 24, 0.05) 0px 22px 30px -8px, rgba(22, 22, 24, 0.06) 0px 0px 0px 1px`
- **Electric Purchase Button:** `rgba(4, 24, 85, 0.28) 0px 2px 6px -1px, rgba(66, 174, 247, 0.48) 0px 6px 14px 0px inset`
- **Light Utility Badge:** `rgba(22, 22, 24, 0.2) 0px 2px 6px -1px, rgba(22, 22, 24, 0.16) 0px 0px 0px 1px`

## Imagery

Imagery is product-led rather than lifestyle-led: contained screenshot and recording scenes show layered macOS windows, message panes, dashboards, and small photographic content tiles. Large media is cropped into 20px rounded rectangles and often combines a pale blue glow or gradient field with a floating dark application window, giving the product visual a desktop-depth effect. The page is text-dominant between media moments; visuals act as explanatory product showcase rather than decoration. Icons are compact, mostly Graphite outline glyphs, while trust logos are rendered as low-contrast monochrome marks.

## Layout

The page is a white, centered marketing composition with a compact top navigation bar, an above-the-fold centered hero, and a media/testimonial pair immediately below the initial conversion controls. The hero stacks a dark announcement badge, two-line headline, descriptive copy, side-by-side filled and white-outline buttons, then a guarantee line; pale blue atmospheric glow is contained behind the hero rather than becoming a section background. A muted horizontal trust-logo strip bridges into spacious alternating feature rows, where black text occupies one side and a large rounded product composition occupies the other. Testimonial content forms a three-card horizontal carousel on white with small circular arrow controls, followed by a full-width Studio Black band that introduces a darker product-focused mode.

## Agent Prompt Guide

Quick Color Reference:
- Paper White: #ffffff — Page backgrounds, card surfaces, white secondary controls, and light text on dark badges
- Absolute Ink: #000000 — Display headlines, high-emphasis body copy, and the dominant text treatment on white
- Graphite: #161618 — Navigation text, secondary headings, dark outlines, icon strokes, and card-copy emphasis
- Soft Charcoal: #6a6a6b — Long-form supporting copy, feature descriptions, and restrained metadata
- Studio Black: #0f0f12 — Announcement badges and dark media or footer-like surfaces
- Electric Capture Blue: #0d44e8 — Filled purchase and exploration buttons, blue product accents, and selected emphasis — a sharply saturated blue breaks the otherwise monochrome Mac-workspace palette
- Electric Blue Sweep: linear-gradient(90deg, #161618 0%, #161618 60%, #174ef2 100%) — Dark-section and wordmark-style accent gradient, extending Studio Black into a brighter blue edge

Create a centered Paper White #ffffff hero with a Studio Black #0f0f12 announcement badge above a Google Sans Flex 60px/600, 66px-line-height headline in Absolute Ink #000000; apply -1.2px tracking and set only the key final word in Electric Blue Sweep.
Create a two-button conversion group with a 14px-radius Electric Capture Blue #0d44e8 purchase button using white text and its blue inset shadow beside a 14px-radius Paper White #ffffff demonstration button with a 1px Graphite #161618 outline and play icon.
Create a split feature section: left-aligned Absolute Ink #000000 title in Google Sans Flex 40px/600, 48px line-height and -0.8px tracking; beneath it use Soft Charcoal #6a6a6b copy in 18px/450 with 30px line-height; place a 20px-radius layered macOS product scene on the opposite side.
Create a horizontal testimonial carousel of Paper White #ffffff 20px-radius cards using the recorded graphite card shadow, with author labels in Google Sans Flex 14px/550 and quote copy in Graphite #161618.
Create a Studio Black #0f0f12 product band with a left-to-right Studio Black to Electric Blue Sweep accent, a transparent dark-surface input with 16px radius and rgba(255, 255, 255, 0.24) border, and Paper White #ffffff text.

## Similar Brands

- **Arc** — Shares the Mac-native product framing: soft rounded application windows, dark browser-like panels, and luminous blue interface accents.
- **Loom** — Uses contained screen-recording product media and play-oriented controls as explanatory content rather than lifestyle photography.
- **Linear** — Shares compact high-contrast sans typography, restrained monochrome surfaces, and product screenshots that carry the visual weight.
- **Raycast** — Uses dark utility surfaces and tightly rounded macOS-inspired controls against an otherwise sparse product-marketing composition.

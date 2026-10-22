# bunny.net — Style Reference
> Orbital rabbit relay. Build pages as a pale-blue edge-network landscape punctuated by rounded navy launch bays, energetic orange signals, and friendly technical illustrations.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

bunny.net - Orbital Rabbit Relay. The interface pairs a pale blue content canvas with deep navy campaign panels, making the illustrated bunny-and-rocket world feel embedded in the product rather than ornamental. Rubik at 700 carries oversized, compactly wrapped headings; white cards and restrained shadows keep dense product messaging buoyant around character illustrations. Orange-to-gold gradients are reserved for trial conversion moments and lively illustration details, while #183d6d anchors nearly all light-surface text.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Cloud Canvas | `#e1f2ff` | `--color-cloud-canvas` | Page backgrounds, pale section bands, hairline borders |
| Ice Surface | `#eff8ff` | `--color-ice-surface` | Subtle raised page areas and light surface transitions |
| White Surface | `#ffffff` | `--color-white-surface` | Feature cards, navigation text, dark-panel headings, outlined navigation controls |
| Mist Divider | `#d3e2f1` | `--color-mist-divider` | Low-contrast dividers and pale supporting surfaces |
| Graphite | `#666666` | `--color-graphite` | Muted footer and secondary supporting text |
| Edge Navy | `#183d6d` | `--color-edge-navy` | Primary text on light surfaces, section headings, product-card titles, metric values, and dark blue graphic elements |
| Launch Bay | `#051e38` | `--color-launch-bay` | Hero backgrounds, dark promotional panels, and high-contrast campaign surfaces |
| Network Deep | `#022e57` | `--color-network-deep` | Inset dark card surfaces and deep illustration backdrops |
| Signal Blue | `#8bb3da` | `--color-signal-blue` | Supporting copy on dark campaign panels and subdued technical annotations |
| Signal Orange | `#fd8d32` | `--color-signal-orange` | Metric highlights, orange emphasis text, and outlined conversion-action borders — an energetic signal against navy |
| Coral Launch | `linear-gradient(180deg, #ff7a53, #ffa84a)` | `--color-coral-launch` | Trial-conversion fills and illustrated propulsion accents — the warm gradient makes conversion controls read as a launch trigger |
| Comet Spectrum | `linear-gradient(85.19deg, #ff2a64 -133.27%, #ffaf48 105.93%)` | `--color-comet-spectrum` | Decorative gradient accents and high-energy illustrated details |

## Tokens — Typography

### Rubik — The sole UI and editorial face: weight 700 drives 45px and 54px wrapped headings, 20px product-card titles, and 28px ratings; 400 carries navigation and body copy; 500 is reserved for conversion labels and compact reassurance text. The geometric, rounded Rubik shapes make technical infrastructure copy feel character-led rather than enterprise-formal. · `--font-rubik`
- **Substitute:** Arial Rounded MT Bold for headings; Arial for body if Rubik is unavailable
- **Weights:** 200, 400, 500, 600, 700
- **Sizes:** 12px, 13px, 14px, 15px, 16px, 17px, 18px, 20px, 22px, 24px, 25px, 28px, 29px, 30px, 35px, 45px, 50px, 54px, 78px
- **Line height:** 0.80, 1.00, 1.04, 1.17, 1.19, 1.20, 1.22, 1.25, 1.27, 1.30, 1.40, 1.50, 1.57, 1.58, 1.61, 1.72, 1.75, 1.85, 2.00, 2.07
- **Letter spacing:** Measured feature headings, navigation, and conversion labels use normal tracking; selected utility text uses 0.007em (~0.11px at 16px) or 0.020em (~0.28px at 14px).
- **OpenType features:** `"kern"`
- **Role:** The sole UI and editorial face: weight 700 drives 45px and 54px wrapped headings, 20px product-card titles, and 28px ratings; 400 carries navigation and body copy; 500 is reserved for conversion labels and compact reassurance text. The geometric, rounded Rubik shapes make technical infrastructure copy feel character-led rather than enterprise-formal.

### Font Awesome 6 Pro — Solid utility icons for navigation affordances and compact interface controls. · `--font-font-awesome-6-pro`
- **Substitute:** Font Awesome Free Solid
- **Weights:** 900
- **Sizes:** 16px, 18px, 19px
- **Line height:** 1.00
- **OpenType features:** `"kern"`
- **Role:** Solid utility icons for navigation affordances and compact interface controls.

### Font Awesome 6 Brands — Brand marks and social-platform icons. · `--font-font-awesome-6-brands`
- **Substitute:** Simple Icons
- **Weights:** 400
- **Sizes:** 24px
- **Line height:** 1.00
- **OpenType features:** `"kern"`
- **Role:** Brand marks and social-platform icons.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| caption | Rubik | 400 | 14px | 2.07 | 0px | `--text-caption` |
| body | Rubik | 400 | 18px | 1.2 | 0px | `--text-body` |
| card-title | Rubik | 700 | 20px | 1.3 | 0px | `--text-card-title` |
| rating | Rubik | 700 | 28px | 1 | 0px | `--text-rating` |
| section-heading | Rubik | 700 | 45px | 1.2 | 0px | `--text-section-heading` |
| promo-heading | Rubik | 700 | 45px | 1.3 | 0px | `--text-promo-heading` |
| hero-display | Rubik | 700 | 54px | 1.2 | 0px | `--text-hero-display` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 4 | 4px | `--spacing-4` |
| 5 | 5px | `--spacing-5` |
| 6 | 6px | `--spacing-6` |
| 10 | 10px | `--spacing-10` |
| 15 | 15px | `--spacing-15` |
| 18 | 18px | `--spacing-18` |
| 20 | 20px | `--spacing-20` |
| 21 | 21px | `--spacing-21` |
| 24 | 24px | `--spacing-24` |
| 28 | 28px | `--spacing-28` |
| 30 | 30px | `--spacing-30` |
| 32 | 32px | `--spacing-32` |
| 38 | 38px | `--spacing-38` |
| 80 | 80px | `--spacing-80` |
| 90 | 90px | `--spacing-90` |
| 143 | 143px | `--spacing-143` |

### Border Radius

| Element | Value |
|---------|-------|
| hero | 20px |
| cards | 10px |
| pills | 9999px |
| images | 20px |
| buttons | 6px |
| navigation | 20px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| xl | `rgba(0, 0, 0, 0.04) 0px 6px 40px 0px` | `--shadow-xl` |
| md | `rgb(212, 211, 221) 0px 4px 11px 0px` | `--shadow-md` |

### Layout

- **Page max-width:** 1140px
- **Section gap:** 32px
- **Card padding:** 30px
- **Element gap:** 15px

## Components

### Floating Dark Navigation Bar
**Role:** Public-site navigation shell

Place a 20px-radius dark translucent-looking navy bar over the hero, with white 16px/19px Rubik navigation links, 15px horizontal item spacing, and compact 5px to 10px internal control padding.

### Outlined Login Control
**Role:** Secondary public-navigation control

Use transparent fill, a 1px #ffffff border, white 16px/19px Rubik 400 text, 6px radius, and 10px padding on all sides.

### Gradient Get-Started Control
**Role:** Public conversion control

Use the Coral Launch gradient (#ff7a53 to #ffa84a), white Rubik 500 text, 6px radius, and compact navigation-scale padding; keep this treatment within public conversion paths.

### Hero Launch Panel
**Role:** Primary campaign container

Set a #051e38 base with a 20px radius and a deep blue illustrated backdrop; position white 54px/64.8px Rubik 700 copy on the left and a large contained mascot-and-rocket illustration on the right.

### Trial Conversion Button
**Role:** Hero and promotional-panel conversion action

Use the Coral Launch gradient (#ff7a53 to #ffa84a), white Rubik 500 at 20px/24px, 6px radius, and a directional arrow icon; pair it with a white or Signal Blue 14px/22px reassurance line.

### Product Capability Card
**Role:** Feature-grid content unit

Use a #ffffff surface, 10px radius, 18px 20px 18px 32px padding, and box-shadow 0px 6px 40px rgba(0, 0, 0, 0.04). Arrange a compact colorful product illustration beside an Edge Navy 20px/26px Rubik 700 title and Edge Navy body copy.

### Central Mascot Feature Grid
**Role:** Capability-section composition

Place an oversized character illustration in the center of a Cloud Canvas section, flanked by two vertical columns of white 10px-radius Product Capability Cards; preserve generous empty blue space around the mascot.

### Network Metric Strip
**Role:** Performance proof row

Lay out four evenly spaced metric cells on Cloud Canvas, using Edge Navy Rubik 700 values and Edge Navy 18px/21.6px labels; separate cells with faint Mist Divider vertical rules.

### Dark Rocket Promotion Banner
**Role:** Mid-page conversion banner

Use a #022e57 surface with a 10px radius and 30px 32px padding; put a white 45px/58.5px Rubik 700 heading and Coral Launch trial button on the left, with a large right-aligned rocket illustration crossing the panel.

### Partner Logo Rail
**Role:** Social-proof strip

Set partner marks in muted dark gray or Edge Navy across a full-width pale background; apply grayscale treatment to logos and maintain a low visual hierarchy beneath the hero.

### Hiring Corner Widget
**Role:** Persistent recruiting notice

Anchor a small white card at the lower-left viewport edge with a 10px radius, compact padding, an illustrated bunny character, Edge Navy 18px Rubik text, and a small Edge Navy close control.

### Footer Navigation Field
**Role:** Site-wide footer

Continue the Cloud Canvas base into multi-column footer navigation, using Edge Navy for branded links, Graphite for secondary text, and thin #e1f2ff separators rather than heavy panel boundaries.

## Do's and Don'ts

### Do
- Use Cloud Canvas #e1f2ff as the default long-form page background and White Surface #ffffff for feature cards.
- Set primary light-surface headings and body copy in Edge Navy #183d6d.
- Use Rubik 700 at 54px/64.8px for dark-hero headlines and 45px/54px for pale-section headlines.
- Keep Product Capability Cards at 10px radius with 18px 20px 18px 32px padding and 0px 6px 40px rgba(0, 0, 0, 0.04) shadow.
- Use Launch Bay #051e38 or Network Deep #022e57 for large illustrated promotional panels with white typography.
- Reserve the Coral Launch gradient (#ff7a53 to #ffa84a) for public trial and get-started conversion controls.
- Keep standard content gaps at 15px and use the 32px section-gap token between grouped page modules.

### Don't
- Do not replace the #e1f2ff canvas with pure white across an entire page.
- Do not use Coral Launch or Signal Orange #fd8d32 as a universal status-color system.
- Do not render light-surface headings in black; use Edge Navy #183d6d.
- Do not make feature cards square or pill-shaped; use the 10px card radius.
- Do not apply heavy shadows beyond 0px 6px 40px rgba(0, 0, 0, 0.04) to standard white cards.
- Do not use filled blue conversion buttons in place of the Coral Launch gradient treatment.
- Do not set public navigation links above 16px/19px or heavier than Rubik 400.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Cloud Canvas | `#e1f2ff` | Primary page background and broad content sections |
| 1 | Ice Surface | `#eff8ff` | Subtle pale surface transitions |
| 2 | White Surface | `#ffffff` | Feature cards, small overlays, and elevated content blocks |
| 3 | Launch Bay | `#051e38` | Hero and high-emphasis campaign panels |
| 4 | Network Deep | `#022e57` | Inset promotional banners and deeper illustrated panel layers |

## Elevation

- **Product Capability Card:** `0px 6px 40px rgba(0, 0, 0, 0.04)`
- **Compact Elevated Card:** `0px 4px 11px rgb(212, 211, 221)`

## Imagery

Illustration is the dominant visual language: large, dimensional cartoon bunny characters wear futuristic gear, ride rockets, and inhabit globe-and-network scenes. Illustrations are contained inside dark rounded panels or centered in pale-blue feature sections, with overlapping rockets, orbit lines, map pins, stars, and orange propulsion trails extending through the composition. Product-card visuals are small, saturated explanatory mini-illustrations rather than screenshots; they sit beside text inside white cards. Icons are compact solid utility glyphs, while partner logos form a subdued grayscale social-proof rail. The page is text-led in its light sections but gives major visual territory to mascot artwork in each conversion moment.

## Layout

The page is a centered, max-width-1140px marketing composition on Cloud Canvas #e1f2ff. It opens with a large rounded dark hero: floating navigation sits inside the upper edge, left-aligned copy and conversion controls occupy the text column, and a dominant bunny astronaut illustration fills the right side; a muted partner-logo rail follows directly below. Light sections stack a centered 45px heading and supporting sentence above a symmetrical two-column capability-card arrangement around a central mascot, followed by an evenly divided four-metric proof strip. A contained dark #022e57 promotion banner returns mid-page as a left-copy/right-rocket split; spacing is comfortable, section transitions are seamless pale-blue bands rather than alternating hard panels, and the navigation remains a top public-site bar rather than a sidebar.

## Agent Prompt Guide

Quick Color Reference:
- Cloud Canvas: #e1f2ff — Page backgrounds, pale section bands, hairline borders
- Ice Surface: #eff8ff — Subtle raised page areas and light surface transitions
- White Surface: #ffffff — Feature cards, navigation text, dark-panel headings, outlined navigation controls
- Mist Divider: #d3e2f1 — Low-contrast dividers and pale supporting surfaces
- Graphite: #666666 — Muted footer and secondary supporting text
- Edge Navy: #183d6d — Primary text on light surfaces, section headings, product-card titles, metric values, and dark blue graphic elements
- Launch Bay: #051e38 — Hero backgrounds, dark promotional panels, and high-contrast campaign surfaces
- Network Deep: #022e57 — Inset dark card surfaces and deep illustration backdrops
- Signal Blue: #8bb3da — Supporting copy on dark campaign panels and subdued technical annotations
- Signal Orange: #fd8d32 — Metric highlights, orange emphasis text, and outlined conversion-action borders — an energetic signal against navy
- Coral Launch: linear-gradient(180deg, #ff7a53, #ffa84a) — Trial-conversion fills and illustrated propulsion accents — the warm gradient makes conversion controls read as a launch trigger
- Comet Spectrum: linear-gradient(85.19deg, #ff2a64 -133.27%, #ffaf48 105.93%) — Decorative gradient accents and high-energy illustrated details

Create a 20px-radius Launch Bay hero with a left column of white Rubik 700 54px/64.8px headline text, white Rubik 400 body copy, and a Coral Launch gradient trial control in Rubik 500 20px/24px; fill the right side with a contained bunny astronaut and rocket illustration.
Create a Cloud Canvas capability section with a centered Edge Navy Rubik 700 45px/54px heading, Edge Navy Rubik 400 24px/38px supporting line, and two columns of White Surface feature cards around a central rabbit technician illustration.
Create a White Surface Product Capability Card with 10px radius, 18px 20px 18px 32px padding, 0px 6px 40px rgba(0, 0, 0, 0.04) shadow, a compact colorful product icon, and Edge Navy Rubik 700 20px/26px title text.
Create a Network Deep 10px-radius promotion banner with 30px 32px padding, a white Rubik 700 45px/58.5px left-aligned heading, Coral Launch conversion button, Signal Blue supporting note, and a right-aligned rocket illustration.

## Similar Brands

- **Cloudflare** — Shares edge-network subject matter, a dark blue infrastructure backdrop, and orange as a high-energy network signal.
- **DigitalOcean** — Shares developer-infrastructure messaging arranged in spacious, blue-led promotional sections with concise proof metrics.
- **Duolingo** — Shares the character-first mascot strategy: a playful animal leads conversion-oriented product storytelling.
- **Hostinger** — Shares rounded campaign panels, prominent trial conversion controls, and illustrated hosting-platform marketing layouts.

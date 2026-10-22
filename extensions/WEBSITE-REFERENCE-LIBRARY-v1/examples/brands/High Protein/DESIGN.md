# High Protein — Style Reference
> Magic Spoon — neon cereal arcade. Build expansive pastel aisles where vivid violet typography and playful packaged-product collisions feel like a snack shelf lit by an arcade glow.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Magic Spoon builds a candy-colored grocery shelf around saturated violet, lavender, aqua, and high-key product photography. Oversized Poppins headlines use blunt 700-weight forms and tight line-height, while white outlined controls, scalloped nutrition seals, and chunky pill buttons turn functional shopping into collectible packaging language. Pages flow through broad pastel color fields, contained product cutouts, and white merchandise cards; vivid purple is reserved for the strongest type, borders, and conversion controls.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Electric Grape | `linear-gradient(45deg, #e30ba6, #5b00ed)` | `--color-electric-grape` | Hero and promotional-field backgrounds, decorative graphic fills, and gradient endpoints — the saturated violet makes product packaging and white headline copy appear switched on; Use for high-energy promotional banners and featured product graphics |
| Deep Concord | `#3f0791` | `--color-deep-concord` | Primary headings, navigation accents, 2px outlines, filled conversion buttons, product-link text, and icon linework — this dark violet anchors the otherwise sugary pastel palette |
| Bubblegum Flash | `#e30ba6` | `--color-bubblegum-flash` | Magenta endpoint for promotional violet gradients and occasional decorative graphic energy |
| Sky Scoop | `linear-gradient(0deg, #d4beff 50%, #bfedfe)` | `--color-sky-scoop` | Pale blue promotional bands, cool-text accents, and gradient washes behind product content; Use for broad section transitions behind subscription and shopping content |
| Lilac Aisle | `#dad9ff` | `--color-lilac-aisle` | Dominant page canvas, product-navigation strip, and quiet lavender section backgrounds |
| Soft Grape | `#cac4f4` | `--color-soft-grape` | Muted lavender category-control fills and secondary surface transitions |
| Marshmallow | `#ffffff` | `--color-marshmallow` | Card surfaces, hero controls, reversed text, borders, and product-image grounds |
| Midnight Cereal | `#000000` | `--color-midnight-cereal` | Footer ground, dark utility surfaces, and monochrome icon fills |

## Tokens — Typography

### Poppins — The core family for all commerce UI, navigation, body copy, product tiles, and display headings. Use 700 at 60px/63px for white hero headlines and 64px/64px for dark violet section headlines; this heavy, tightly stacked geometry deliberately resembles the compact type printed on cereal cartons. · `--font-poppins`
- **Substitute:** Montserrat
- **Weights:** 400, 500, 600, 700, 900
- **Sizes:** 10px, 12px, 13px, 14px, 16px, 18px, 20px, 22px, 24px, 26px, 28px, 32px, 48px, 60px, 64px, 80px
- **Line height:** 1.00, 1.05, 1.08, 1.11, 1.20, 1.23, 1.25, 1.30, 1.40, 1.42, 1.50, 1.60, 2.95
- **Letter spacing:** 0.037em, 0.040em, and 0.070em appear in supporting text; display and navigation samples use normal tracking.
- **Role:** The core family for all commerce UI, navigation, body copy, product tiles, and display headings. Use 700 at 60px/63px for white hero headlines and 64px/64px for dark violet section headlines; this heavy, tightly stacked geometry deliberately resembles the compact type printed on cereal cartons.

### Mabry Pro — Use the custom face for emphatic review counts and compact promotional proof points, particularly 900 at 16px in uppercase. Its denser, less geometric mass makes review proof feel stamped onto the bright retail surface rather than set as ordinary UI text. · `--font-mabry-pro`
- **Substitute:** Arial Black
- **Weights:** 700, 900
- **Sizes:** 16px, 30px
- **Line height:** 1.20, 1.80
- **Letter spacing:** normal
- **Role:** Use the custom face for emphatic review counts and compact promotional proof points, particularly 900 at 16px in uppercase. Its denser, less geometric mass makes review proof feel stamped onto the bright retail surface rather than set as ordinary UI text.

### Arial — Reserve for embedded third-party widget controls and utility fragments only; do not introduce it into branded editorial or shopping UI. · `--font-arial`
- **Substitute:** Arial
- **Weights:** 400
- **Sizes:** 13px
- **Line height:** 1.20
- **Letter spacing:** normal
- **Role:** Reserve for embedded third-party widget controls and utility fragments only; do not introduce it into branded editorial or shopping UI.

### Font Awesome 5 Pro — Font Awesome 5 Pro — detected in extracted data but not described by AI · `--font-font-awesome-5-pro`
- **Weights:** 300
- **Sizes:** 12px
- **Line height:** 1
- **Role:** Font Awesome 5 Pro — detected in extracted data but not described by AI

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| body | Poppins | 400 | 16px | 1 | 0px | `--text-body` |
| nav | Poppins | 700 | 16px | 1 | 0px | `--text-nav` |
| review-proof | Mabry Pro | 900 | 16px | 1.2 | 0px | `--text-review-proof` |
| price-label | Poppins | 700 | 24px | 1.25 | 0px | `--text-price-label` |
| subscription-callout | Poppins | 700 | 26px | 1 | 0px | `--text-subscription-callout` |
| product-card-heading | Poppins | 700 | 32px | 1.25 | 0px | `--text-product-card-heading` |
| hero-heading | Poppins | 700 | 60px | 1.05 | 0px | `--text-hero-heading` |
| section-heading | Poppins | 700 | 64px | 1 | 0px | `--text-section-heading` |
| display | Poppins | 700 | 80px | 1 | 0px | `--text-display` |

## Tokens — Spacing & Shapes

**Density:** comfortable

### Spacing Scale

| Name | Value | Token |
|------|-------|-------|
| 5 | 5px | `--spacing-5` |
| 8 | 8px | `--spacing-8` |
| 9 | 9px | `--spacing-9` |
| 10 | 10px | `--spacing-10` |
| 15 | 15px | `--spacing-15` |
| 16 | 16px | `--spacing-16` |
| 18 | 18px | `--spacing-18` |
| 20 | 20px | `--spacing-20` |
| 22 | 22px | `--spacing-22` |
| 24 | 24px | `--spacing-24` |
| 25 | 25px | `--spacing-25` |
| 30 | 30px | `--spacing-30` |
| 32 | 32px | `--spacing-32` |
| 40 | 40px | `--spacing-40` |
| 50 | 50px | `--spacing-50` |
| 137 | 137px | `--spacing-137` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 25px |
| links | 28px |
| pills | 9999px |
| badges | 0px |
| inputs | 28px |
| buttons | 52px |

### Shadows

| Name | Value | Token |
|------|-------|-------|
| subtle | `rgb(255, 255, 255) 0px 0px 0px 2px inset` | `--shadow-subtle` |
| xl | `rgba(0, 0, 0, 0.08) 0px 15px 50px 0px` | `--shadow-xl` |
| xl-2 | `rgba(0, 0, 0, 0.1) 0px 20px 60px 0px` | `--shadow-xl-2` |

### Layout

- **Section gap:** 25px
- **Card padding:** 20px
- **Element gap:** 10px

## Components

### Hero Category Selector
**Role:** Two-column choice control for configuring a bundle.

Use a Marshmallow #ffffff fill with a 2px Deep Concord #3f0791 outline, 52px radius, and 10px 24px padding. Set category labels in Poppins 600 at 18px/27px in Deep Concord; pair choices in a compact two-column grid with 10px gaps.

### Deep Concord Conversion Button
**Role:** Filled public shopping and bundle conversion button.

Fill with Deep Concord #3f0791, set white Poppins 700 text, use a 20px radius, and pad 10px 15px. The large bundle treatment uses Poppins 700 at 22px/22px; compact shop treatments use 18px/20px uppercase text.

### White Outline Navigation Button
**Role:** Conversion control placed over saturated purple backgrounds.

Use a Marshmallow #ffffff fill with a 2px Deep Concord #3f0791 outline, 52px radius, 10px 24px padding, and Poppins 600 at 18px/27px in #3f0791. Add a 2px inset #ffffff ring where the control must separate from busy artwork.

### Transparent Utility Link
**Role:** Low-emphasis header or utility action over dark color fields.

Keep the background transparent and radius at 0px; use white text and border treatment with 10px top/bottom padding, 10px right padding, and no left padding. Do not convert this variant into a filled pill.

### Product Category Tab
**Role:** Pastel product-navigation control for category browsing.

Fill with Soft Grape #cac4f4 and use Deep Concord #3f0791 text. Keep the treatment compact with a 15px radius and 10px 15px padding; product thumbnails sit above the label in the lavender navigation rail.

### Merchandise Tile
**Role:** White product card for collections and bundle offerings.

Use a Marshmallow #ffffff surface with a 25px radius and no internal shadow in the basic tile. Stack a contained product packshot, Deep Concord price line, Poppins 700 uppercase product heading at 32px/40px, review proof, and a 20px-radius Deep Concord shop button.

### Elevated Subscription Card
**Role:** Contained commerce or subscription information panel.

Use a Marshmallow #ffffff surface, 25px radius, 50px internal padding, and box-shadow rgba(0, 0, 0, 0.1) 0px 20px 60px 0px. Use this only when a panel must float above a pastel field.

### Soft Overlay Card
**Role:** Lightweight text container over a colorful image or field.

Use rgba(255, 255, 255, 0.25), a 25px 25px 25px 0px asymmetric radius, no shadow, and 20px padding. The square lower-left corner should remain visible instead of rounding every corner.

### Product Image Frame
**Role:** Rounded crop for subscription imagery and editorial product photography.

Clip imagery with a 25px 25px 25px 0px radius. Use saturated tabletop product photos rather than generic lifestyle images; retain the square lower-left corner.

### Nutritional Seal
**Role:** Small claim badge beneath hero bundle choices.

Use a transparent background and Deep Concord #3f0791 linework/text with a 0px CSS radius; the visible silhouette is a scalloped illustrated seal rather than a standard rounded badge. Keep the copy short and centered in stacked lines.

### Review Proof Stamp
**Role:** Compact social-proof label above a headline or product tile.

Set uppercase review text in Mabry Pro 900 at 16px with normal tracking. Use Marshmallow #ffffff over Electric Grape #5b00ed hero fields and Deep Concord #3f0791 over light merchandise surfaces; precede it with a small row of solid stars.

### Footer Signup Input
**Role:** Dark-footer email capture field.

Use a transparent fill, Marshmallow #ffffff text and border, 30px radius, and 0px 20px horizontal padding. Add a 2px inset #ffffff ring rather than a drop shadow.

## Do's and Don'ts

### Do
- Set the default page canvas to Lilac Aisle #dad9ff and switch sections to Sky Scoop #bfefff or Marshmallow #ffffff in broad horizontal bands.
- Use Deep Concord #3f0791 for branded headings, outlines, product-link text, and filled conversion buttons.
- Set editorial headlines in Poppins 700 at 60px/63px or 64px/64px with normal tracking.
- Use Poppins 700 at 16px/16px in uppercase for public navigation labels.
- Build white selection controls with a 52px radius, 2px Deep Concord #3f0791 border, and 10px 24px padding.
- Use 25px card corners and reserve the 25px 25px 25px 0px cut-corner treatment for image-led or translucent panels.
- Apply only rgba(0, 0, 0, 0.08) 0px 15px 50px 0px or rgba(0, 0, 0, 0.1) 0px 20px 60px 0px to elevated white cards.

### Don't
- Do not replace Deep Concord #3f0791 with black for headings or primary conversion controls.
- Do not use generic 4px, 8px, or 12px button radii; use 52px for outlined selectors and 20px for filled conversion buttons.
- Do not set branded display headlines below Poppins 700 weight.
- Do not use pastel fills as the default text color; keep long-form and product text in Deep Concord #3f0791.
- Do not place heavy shadows under every product tile; basic merchandise cards remain flat on Marshmallow #ffffff.
- Do not use photographs with neutral office or lifestyle styling; show vivid package-forward product scenes, food texture, and surreal colored sets.
- Do not flatten the palette into a single purple background; alternate Lilac Aisle #dad9ff, Sky Scoop #bfefff, Marshmallow #ffffff, and Electric Grape #5b00ed fields.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | Lilac Aisle | `#dad9ff` | Default pastel canvas and category-navigation field. |
| 1 | Sky Scoop | `#bfefff` | Cool promotional section background and gradient wash. |
| 2 | Marshmallow | `#ffffff` | Product tiles, selectors, inputs, and high-contrast content surfaces. |
| 3 | Electric Grape | `#5b00ed` | Hero and high-energy promotional field. |
| 4 | Midnight Cereal | `#000000` | Footer and dark utility surface. |

## Elevation

- **Elevated Subscription Card:** `0px 20px 60px 0px rgba(0, 0, 0, 0.1)`
- **Merchandise Tile:** `0px 15px 50px 0px rgba(0, 0, 0, 0.08)`

## Imagery

Photography is package-forward and deliberately surreal: oversized cereal boxes, pouches, bowls, and ingredient snacks are arranged as a dense retail still life against electric blue-violet horizons, colored tabletops, or reflective sets. Product packshots are also isolated on white card grounds in the shopping grid, while subscription photography uses a close, contained crop with an asymmetric rounded frame. The site is image-rich in its sales sections, but product packaging is the visual hero rather than lifestyle people; a single hand or food gesture may enter the frame as a playful scale cue. Decorative graphics include solid purple icons, star rows, scalloped claim seals, and bright flat illustrated packaging art rather than thin generic line icons.

## Layout

The page is a full-bleed, vertically stacked commerce landing page with a saturated violet hero, a compact top navigation bar, and a horizontal product-category rail directly beneath. The hero uses an asymmetric split: a dense product-and-food tableau occupies the left, while review proof, a large white headline, bundle selectors, and nutrition seals stack on the right. Subsequent sections alternate pale aqua-to-lavender backgrounds and white product surfaces: a large text-left/photo-right subscription panel gives way to a centered all-caps shopping heading and a four-column merchandise grid. Spacing is comfortable but visually dense inside sections, with product imagery, labels, buttons, and decorative badges tightly clustered; the footer resolves to black.

## Agent Prompt Guide

Quick Color Reference:
- Electric Grape: linear-gradient(45deg, #e30ba6, #5b00ed) — Hero and promotional-field backgrounds, decorative graphic fills, and gradient endpoints — the saturated violet makes product packaging and white headline copy appear switched on; Use for high-energy promotional banners and featured product graphics
- Deep Concord: #3f0791 — Primary headings, navigation accents, 2px outlines, filled conversion buttons, product-link text, and icon linework — this dark violet anchors the otherwise sugary pastel palette
- Bubblegum Flash: #e30ba6 — Magenta endpoint for promotional violet gradients and occasional decorative graphic energy
- Sky Scoop: linear-gradient(0deg, #d4beff 50%, #bfedfe) — Pale blue promotional bands, cool-text accents, and gradient washes behind product content; Use for broad section transitions behind subscription and shopping content
- Lilac Aisle: #dad9ff — Dominant page canvas, product-navigation strip, and quiet lavender section backgrounds
- Soft Grape: #cac4f4 — Muted lavender category-control fills and secondary surface transitions
- Marshmallow: #ffffff — Card surfaces, hero controls, reversed text, borders, and product-image grounds
- Midnight Cereal: #000000 — Footer ground, dark utility surfaces, and monochrome icon fills

Create a split bundle hero on an Electric Grape #5b00ed field: place a dense, left-side cereal-package still life against a blue-violet set; on the right set a Marshmallow #ffffff Poppins 700 headline at 60px/63px, then a 2-by-2 grid of Marshmallow white selector pills with Deep Concord #3f0791 2px outlines, 52px radius, and Poppins 600 18px/27px labels.
Create a subscription feature band using the Pastel Shelf gradient, with a left-aligned Deep Concord #3f0791 Poppins 700 headline at 64px/64px and a right-side close product photo clipped to 25px 25px 25px 0px; add short benefit rows with small purple icons and a Deep Concord 20px-radius button.
Create a four-column merchandise grid on Lilac Aisle #dad9ff beneath a centered Deep Concord #3f0791 Poppins 700 uppercase heading; each Marshmallow #ffffff 25px-radius tile stacks a white-ground product cutout, price, a Poppins 700 32px/40px uppercase name, Mabry Pro 900 16px review proof, and a Deep Concord #3f0791 shop button.
Create a compact public navigation bar over Electric Grape #5b00ed using Marshmallow #ffffff Poppins 700 16px/16px uppercase navigation labels, then place a Marshmallow white outlined 52px-radius bundle button at the right; do not reuse product-demo controls as navigation actions.

## Similar Brands

- **Oatly** — Uses oversized, packaging-led typography and product-as-hero merchandising rather than lifestyle photography.
- **Poppi** — Shares saturated purple-pink promotional fields, playful food packaging, and high-key product cutouts.
- **Olipop** — Pairs nostalgic grocery products with bright illustrated packaging and bold display type.
- **Feastables** — Uses loud confectionery color fields, collectible product imagery, and compact high-contrast commerce cards.

# Hopper — Style Reference
> Santorini window at dusk. A softened destination photograph acts as the atmospheric top layer, with compact white navigation and booking controls suspended over it.

**Theme:** light

Source measurements are normalized; roles and recommendations are interpreted. Font summary lists are independent, not paired by position. HTML examples are reconstructions, not source components.

Hopper frames travel booking as a panoramic destination window: a full-bleed, rounded travel photograph carries the navigation and search controls, while the rest of the page returns to expansive white and pale-gray utility sections. The interface is text-dominant outside of imagery, using tightly structured Proxima Nova headings, blue links as navigational punctuation, and restrained 1px gray dividers. Pill-shaped controls float over photography, while destination and app-promotion content sits in flat, border-led surfaces with virtually no shadow.

## Tokens — Colors

| Name | Value | Token | Role |
|------|-------|-------|------|
| Hopper Blue | `#1878ec` | `--color-hopper-blue` | Search button fill, destination links, inline navigation links, and selected product accents — saturated blue punctuates an otherwise achromatic travel interface |
| White | `#ffffff` | `--color-white` | Primary page and card surfaces; white text and outlines over the photographic hero |
| Cloud | `#f6f6f6` | `--color-cloud` | Muted card and footer-region surfaces |
| Mist | `#ededed` | `--color-mist` | Secondary page bands and subdued background areas |
| Divider Gray | `#d9d9d9` | `--color-divider-gray` | 1px card borders, search-field separators, and quiet structural rules |
| Ink | `#111111` | `--color-ink` | Headings, search-entry text, and highest-emphasis content |
| Graphite | `#606060` | `--color-graphite` | Muted informational text, footer links, and secondary iconography |
| Placeholder Gray | `#b3b3b3` | `--color-placeholder-gray` | Placeholder text and inactive control icons |

## Tokens — Typography

### Proxima Nova — Single-family system for all navigation, controls, destination links, body copy, and headings. The 700-800 heading weights give short labels a compact, punchy travel-retail voice rather than using oversized display type. · `--font-proxima-nova`
- **Substitute:** Nunito Sans
- **Weights:** 400, 600, 700, 800
- **Sizes:** 14px, 16px, 18px, 20px, 24px, 32px
- **Line height:** 1.25, 1.33, 1.40, 1.43, 1.44, 1.50
- **Letter spacing:** -0.16px at 16px on tightened UI text; otherwise normal tracking in measured headings, links, and navigation.
- **Role:** Single-family system for all navigation, controls, destination links, body copy, and headings. The 700-800 heading weights give short labels a compact, punchy travel-retail voice rather than using oversized display type.

### Type Scale

| Role | Family | Weight | Size | Line Height | Letter Spacing | Token |
|------|--------|--------|------|-------------|----------------|-------|
| destination-link | Proxima Nova | 400 | 14px | 1.43 | 0px | `--text-destination-link` |
| body | Proxima Nova | 400 | 16px | 1.5 | 0px | `--text-body` |
| nav | Proxima Nova | 600 | 16px | 1.5 | 0px | `--text-nav` |
| section-heading | Proxima Nova | 700 | 20px | 1.4 | 0px | `--text-section-heading` |
| card-heading | Proxima Nova | 700 | 24px | 1.33 | 0px | `--text-card-heading` |
| app-heading | Proxima Nova | 800 | 32px | 1.25 | 0px | `--text-app-heading` |

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
| 48 | 48px | `--spacing-48` |
| 56 | 56px | `--spacing-56` |

### Border Radius

| Element | Value |
|---------|-------|
| cards | 16px |
| links | 4px |
| pills | 9999px |
| images | 32px |
| inputs | 0px |
| buttons | 1000px |
| compactControls | 12px |

### Layout

- **Section gap:** 48px
- **Card padding:** 12px
- **Element gap:** 8px

## Components

### Hero Destination Frame
**Role:** Top-level travel discovery surface

Use a destination photograph as a contained wide frame with 32px corners. Overlay white navigation and utility controls directly on the image; keep the image label in white and align it toward the lower edge.

### Transparent Product Navigation
**Role:** Hero service switching

Use 16px/24px Proxima Nova at 600 in #ffffff, paired with small white line icons. Each item has 8px vertical and 12px horizontal padding, transparent fill, and a 1000px radius; the selected item receives a 1px #ffffff border.

### Hero Sign-In Button
**Role:** Outlined account entry

Use transparent fill, 1px solid #ffffff border, #ffffff 16px/24px semibold text, 8px 24px padding, and a 12px radius. Keep this treatment exclusive to controls placed over dark or photographic imagery.

### Circular Utility Icon Button
**Role:** Hero search or locale utility control

Use transparent fill, a 1px #ffffff outline, #ffffff iconography, 8px padding, and a 50% radius. The control is visually smaller than text-bearing hero buttons.

### Destination Search Bar
**Role:** Multi-field booking search

Build a white pill-shaped horizontal surface with a 9999px radius. Separate fields with 1px #d9d9d9 vertical rules; use #111111 for entered values, #b3b3b3 for placeholder values, 24px left padding, 25px top padding, 7px bottom padding, and 4px right padding.

### Blue Search Submit Button
**Role:** Booking-search submission

Use a #1878ec circular fill with white search iconography and a 9999px radius. Seat it inside the right end of the white search bar rather than expanding it into a page-wide button.

### Destination Deal Card
**Role:** Browseable destination promotion

Use a #f6f6f6 surface, 16px radius, no box shadow, and no internal card padding. Preserve image-first composition and use a 1px #d9d9d9 border only where cards need separation from a white background.

### Blue Promotional Tile
**Role:** Branded feature or offer surface

Use #1878ec as a flat full-bleed card background with a 32px radius and no shadow. Set internal copy and icons in #ffffff.

### App Download Showcase
**Role:** Mobile-app acquisition block

Place a 32px/40px, weight-800 #111111 heading above 16px/24px supporting copy. Pair the text column with a raw QR code, blue #1878ec download link treatment, store-rating marks, and overlapping upright phone screenshots.

### Destination Link Directory
**Role:** Footer exploration navigation

Use a #f6f6f6 or #ededed section band with a 20px/28px, weight-700 #111111 section heading. Set destination links in #1878ec at 14px/20px weight 400, arranged in evenly spaced columns with 8px vertical rhythm.

### Text Link
**Role:** Inline and directory navigation

Use #1878ec at 14px/20px for compact destination links or 16px/24px for utility links, both at weight 400. Retain the 4px link radius for focus and hover containment.

## Do's and Don'ts

### Do
- Use #ffffff as the default content surface and reserve #f6f6f6 or #ededed for large muted section bands.
- Use #111111 for headings; set section headings at 20px/28px weight 700, card headings at 24px/32px weight 700, and app-promotion headings at 32px/40px weight 800.
- Use #1878ec for search submission, destination links, and compact promotional surfaces.
- Use 1000px or 9999px radii for horizontal hero controls and search surfaces.
- Use 32px radii for large photographic hero frames and blue promotional tiles.
- Use 1px solid #d9d9d9 dividers between search fields and on bordered card edges.
- Keep common control padding at 8px vertical with 12px horizontal padding; use 8px gaps between tightly related controls.

### Don't
- Do not apply drop shadows to #f6f6f6 cards or #1878ec promotional tiles.
- Do not use #1878ec as a page background; confine it to links, search submission, and contained promotional areas.
- Do not replace hero navigation’s transparent white treatment with dark text or filled dark buttons.
- Do not use sharp corners on hero imagery; retain the 32px image radius.
- Do not use more than a 1px #d9d9d9 border for structural separation.
- Do not set navigation, sign-in, or trip links below 16px/24px weight 600.
- Do not turn the search fields into individually rounded inputs; retain the shared white pill surface and 0px field radii.

## Surfaces

| Level | Name | Value | Purpose |
|-------|------|-------|---------|
| 0 | White Canvas | `#ffffff` | Primary page background and booking-search surface. |
| 1 | Cloud Surface | `#f6f6f6` | Muted destination cards and low-emphasis section surfaces. |
| 2 | Mist Band | `#ededed` | Large footer and exploration background bands. |
| 3 | Hopper Blue Surface | `#1878ec` | Contained promotional cards and booking search submission. |

## Elevation

Surfaces are separated by photo framing, pale tonal shifts, 1px #d9d9d9 borders, and large-radius silhouettes rather than box shadows. The booking bar achieves prominence through its white fill against photography, not raised elevation.

## Imagery

Photography is the primary atmospheric visual: a wide destination landscape fills the hero, with the place itself functioning as the product invitation. The crop is immersive rather than editorial, contained in a 32px rounded frame and overlaid with white navigation and booking controls. Product imagery appears in the app block as overlapping, upright mobile-screen screenshots with raw device edges; it explains the mobile experience rather than serving as abstract decoration. Icons are compact white or dark line symbols used beside navigation labels and controls, while QR code and store-rating graphics provide functional acquisition proof.

## Layout

The page begins with a large, contained destination-photo hero whose rounded image frame holds the logo, horizontally centered product navigation, right-aligned utility controls, and a centered horizontal booking search bar. Below, white content space gives deal content broad breathing room, followed by a two-column app-download composition: left-aligned text, QR code, download link, and ratings sit beside overlapping phone product screenshots. The page closes with a pale-gray exploration band containing a compact heading and a four-column directory of blue destination links. Navigation is a single top bar embedded in the hero rather than a separate opaque header; the page rhythm alternates photographic hero, white content, then muted utility/footer surface.

## Agent Prompt Guide

Quick Color Reference:
- Hopper Blue: #1878ec — Search button fill, destination links, inline navigation links, and selected product accents — saturated blue punctuates an otherwise achromatic travel interface
- White: #ffffff — Primary page and card surfaces; white text and outlines over the photographic hero
- Cloud: #f6f6f6 — Muted card and footer-region surfaces
- Mist: #ededed — Secondary page bands and subdued background areas
- Divider Gray: #d9d9d9 — 1px card borders, search-field separators, and quiet structural rules
- Ink: #111111 — Headings, search-entry text, and highest-emphasis content
- Graphite: #606060 — Muted informational text, footer links, and secondary iconography
- Placeholder Gray: #b3b3b3 — Placeholder text and inactive control icons

Create a rounded destination-photo hero with a 32px image radius; overlay a transparent navigation row in #ffffff using 16px/24px Proxima Nova weight 600 and white line icons.
Create a shared white booking-search pill with 9999px corners, #d9d9d9 field dividers, #111111 values, #b3b3b3 placeholders, and a circular #1878ec search submit control.
Create an app-download section on #ffffff with a #111111 Proxima Nova 32px/40px weight-800 heading, 16px/24px support text, a QR code, a #1878ec text link, and overlapping phone screenshots.
Create a destination directory on a #ededed band using a #111111 20px/28px weight-700 heading and four columns of #1878ec 14px/20px links.
Create a flat #f6f6f6 destination card with 16px corners, a 1px #d9d9d9 edge where needed, and no shadow.

## Similar Brands

- **Airbnb** — Shares a destination-led booking hero with a centralized multi-field search control and restrained white overlay navigation.
- **Skyscanner** — Shares travel-product navigation with compact transport icons and blue as the booking and link accent.
- **KAYAK** — Shares an image-backed travel-discovery entry point and a modular search interface for multiple trip parameters.
- **Vrbo** — Shares broad destination photography, contained rounded image framing, and accommodation-search emphasis.

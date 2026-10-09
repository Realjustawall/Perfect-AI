# Color intelligence: engineering-grade palette selection for Codex

## 1. Design input and brand constraints

Collect product class, personality (editorial, industrial, playful, financial, developer), content density, target audience, platform (dashboard vs story), accessibility threshold, cultural and language context, brand requirements and whether grayscale is strict. Never override explicitly requested black/white with a random trendy purple. Record why any accent is chosen, its function and percentage of visual coverage.

## 2. Color models: what each contributes

- **sRGB** is the final display encoding: channel data is gamma encoded, so do not average packed #RRGGBB values for physically accurate light mixing or WCAG luminance.
- **HSL/HSV** is convenient for editing, but equal HSL lightness changes do NOT imply equal perceived lightness. Its naive hue variation often produces inconsistent UI ramps.
- **CIELAB/LCH** attempts perceptual uniformity but conversion and gamut issues remain.
- **OKLab/OKLCH** provides a practical perceptual space for ramp design: `L` approximates lightness, `C` chroma, `h` hue angle. The color pipeline must clamp or gamut-map to target sRGB/P3. A numeric CSS `oklch()` declaration should have a thoughtful sRGB fallback if old browsers matter.

For OKLCH specify semantic intent first (foreground, border, surface, action) rather than random values. Decrease chroma as extreme lightness values approach sRGB gamut edges, and re-check the converted actual color.

## 3. WCAG 2.2 contrast math (for text and components)

For a CSS sRGB channel `c` in [0,1]: linearize as `c/12.92` if `c <= 0.04045` else `((c + 0.055)/1.055)^2.4`. Relative luminance is `Y = 0.2126 Rlin + 0.7152 Glin + 0.0722 Blin`. Contrast ratio = `(Ylighter + 0.05)/(Ydarker + 0.05)`.

Use **4.5:1** normal text, **3:1** large/bold text in AA, **3:1** relevant UI boundaries/graphics; the minimum test has exceptions and must be consulted. Pixel alpha over background needs compositing before this calculation. A design can have a nominal #FFF text token but actually render at opacity .4 over dynamic imagery: measure the composited pixels. Do not interpret decorative lines as always requiring a 3:1 ratio, distinguish informational meaning.

APCA is a modern research/alternate contrast model used in some design workflows; its thresholds are not interchangeable with WCAG 2.2 AA numeric ratios. If both are reported, label their methods separately.

## 4. Palette design decision procedure

1. Respect mandatory user request (strict monochrome, brand-specific hue, etc). For strict monochrome, fix C≈0 for all neutral tokens; warn if imported libraries inject saturated error/success colors.
2. Choose canvas brightness from content purpose: deep dark backgrounds for media showcases, lighter backgrounds for long reading or spreadsheets when requested; avoid absolute black-on-pure-white flicker in long-form if a near-neutral palette gives better comfort.
3. Build neutral ramp with enough adjacent distinguishable values for backgrounds, surfaces, raised surfaces, separators, muted text and disabled states. The disabled state still needs clear affordances; opacity alone can look like absent content.
4. Build semantic roles: background, surface, surface-elevated, primary text, secondary text, subtle text, accent, on-accent, border, focus, destructive, positive, caution, links, selection and shadow/glow.
5. Choose 0 or 1 dominant accent (strict mono has zero chromatic accents) with additional semantic status hues only when important. Never encode meaning only in color; icons/text/patterns required.
6. Generate light and dark variants independently; do not invert every token mechanically. Very bright saturated components on black often bloom; use tone and thickness instead.
7. Convert to sRGB; map out-of-gamut colors by reducing C or projecting to boundary without distorting hue excessively. Evaluate on calibrated or representative devices when available.
8. Check body text, muted text, links, buttons, alerts, focus rings and interactive component states against real backgrounds. Screen captures and CSS tokens must agree.
9. Test visually with common color-vision-deficiency simulations but never depend on simulations as proof of accessibility; inspect noncolor indicators and direct usability.
10. Reserve negative space to establish hierarchy; more accents do not necessarily create a better interface. Record a rationale for color placement by component.

## 5. Color proportions and practical meaning

A frequently cited 60/30/10 heuristic is only a starting rule of thumb, not a color-science law. Dense dashboards may use 90% neutral + 8% subtle chart + 2% alert; an artistic hero may use one luminous accent against broad negative space. For Perfect_AI: grayscale 100%, accents optional only if user explicitly revises the monochrome constraint. Gestalt grouping, typographic hierarchy and luminance contrast dominate perceived order; avoid claiming red always means excitement across cultures.

## 6. Role-aware CSS token starter

```css
:root { color-scheme: dark;
 --zt-bg: #090909;
 --zt-surface: #181818;
 --zt-raised: #242424;
 --zt-text: #f5f5f5;
 --zt-text-muted: #c6c6c6;
 --zt-border: #686868;
 --zt-action: #ededed;
 --zt-on-action: #101010;
 --zt-focus: #ffffff;
 --zt-space-1: clamp(.5rem, .4rem + .3vw, .75rem);
}
.zT-app { color: var(--zt-text); background: var(--zt-bg); }
.zT-button { background: var(--zt-action);color: var(--zt-on-action); }
.zT-button:focus-visible { outline: 3px solid var(--zt-focus);outline-offset: 3px; }
```

Do not assume every example token passes contrast for every possible composition. Run `node tools/palette-decision.mjs --monochrome --out palette-output` and audit actual rendered surfaces.

## 7. Component system states

Create design tokens for idle, hover, focus-visible, pressed, loading, disabled, selected, validation error, success and progress; separate user-visible semantic state from animation progress. Charts require pattern/dash/label alternatives and accessible data tables. Avoid red/green-only status, color-only focus and non-text metadata hidden at small sizes.

## 8. Text, typography and perception

Thinner fonts lose apparent luminance against dark backgrounds; body text requires more contrast than decorative 56px display titles. Persian glyph density, dots and ascenders demand line-height and font selection; do not use letter-spacing on Persian body text to imitate Latin editorial design. Test variable font weights at real device pixel ratios. Contrast failures can come from glow, blur and transparency rather than token selection alone.

## 9. Objective acceptance rules

- Semantic roles are defined and reused. No invented brand accent.
- 4.5:1 for normal text, 3:1 for large text, 3:1 non-text meaningful boundaries when required.
- Correct compositing and gamut handling; separately annotate static vs actual background.
- Works in light/dark if requested, Windows High Contrast forced-colors, low gamut displays and grayscale print as appropriate.
- Readable Persian and English at 320px and 400% zoom, mobile contrast in sunlight checked when practical.
- Palette tool outputs machine-readable CSS and a contrast report; no unmeasured claim of compliance.

## Authoritative background

- https://www.w3.org/TR/WCAG22/
- https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
- https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
- https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch
- https://www.w3.org/TR/css-color-4/
- https://web.dev/articles/color-and-contrast-accessibility

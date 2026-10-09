# Color theory, perception, palettes, science & Perfect_AI monochrome tokens

## 1. Color is an information system, not a decoration list

Use color to represent hierarchy, interaction states, identity, surface depth, semantic meaning, and reading comfort. Before choosing swatches, determine audience, mood (studio/technical/editorial), visual density, accessibility, device gamut, theme requirements, type scale and local cultural connotations. Never make severity/success understandable only through hue.

## 2. Color models and conversions

- RGB is additive light composition; sRGB values are gamma-encoded and should be linearized for contrast and physical light calculations.
- HSL/HSV intuitive for hue selection but not perceptually uniform; equal changes in HSL lightness are not equal perceived brightness.
- Lab and Oklab approximate perceptual space; OKLCH = Lightness L, Chroma C and Hue h, convenient for scalable ramps and color interpolation; C=0 creates true neutral regardless of hue.
- Luminance Y differs from perceived OKLCH lightness; WCAG 2.x contrast uses *linearized sRGB relative luminance*.
- The same CSS hex differs in perceived brightness against varied neighboring colors (simultaneous contrast). Evaluate actual UI in context.

sRGB channel linearization: `c = C/12.92` if `C<=0.04045`, otherwise `((C+0.055)/1.055)^2.4`, where C in [0,1]. Relative luminance = 0.2126 R + 0.7152 G + 0.0722 B. Contrast = `(L_lighter + 0.05)/(L_darker + 0.05)`.

WCAG 2.2 AA: text >= 4.5:1 normal and >= 3:1 large; UI component boundaries/graphical objects generally >=3:1 when meaningfully needed. AA contrast isn't a complete accessibility guarantee; test readability, font thinness, overlaid canvas, blur, zoom and color blindness.

## 3. Harmonic systems and limits

- Monochromatic: single hue or C≈0 lightness ladder, best for Perfect_AI technical elegance.
- Complementary: high tension; use 1 dominant + 1 purpose-specific contrast, not equal competing neon areas.
- Analogous: soft gradients; controls can disappear if lightness is not distinct.
- Triadic/split complementary: suitable for editorial data viz if semantic mapping is deliberate.
- Warm/cool balance: perceived depth, not a substitute for luminance hierarchy.
- Material color vs emitted light: 3D silver reflects lights; bloom added on top without luminance management can wash out entire canvas.

## 4. Perfect_AI canonical monochrome palette (custom design proposal)

```
--zt-ink-0: #000000;     /* true black for small accents */
--zt-ink-1: #050505;     /* page background */
--zt-ink-2: #0c0c0c;     /* section boundary */
--zt-surface-1: #121212;
--zt-surface-2: #1c1c1c;
--zt-border-soft: #333333;
--zt-border-strong: #666666;
--zt-muted: #b1b1b1;     /* readable muted text */
--zt-text: #f1f1f1;
--zt-highlight: #ffffff;
--zt-inverse-text: #080808;
--zt-focus: #ffffff;
```

**Usage:** Background occupies 65–80% visual area, structured surfaces 15–30%, bright whites reserved for text/edges/essential highlights. These are layout recommendations not mathematical color rules. Use borders/spacing before glow. For light theme invert *roles* not hex values mechanically. For subtle ambient lights stay neutral (`rgba(255,255,255,.03)` etc) so greyscale remains intentional.

## 5. Semantic tokens

`background`, `foreground`, `surface`, `surface-raised`, `overlay`, `muted-foreground`, `border`, `border-strong`, `accent`, `accent-foreground`, `focus-ring`, `selection`, `info`, `success`, `warning`, `error`, `disabled`, `skeleton`, `chart-1...n`, `shadow-rgb`.

If product is strict grayscale, severity can be conveyed using distinct icons, patterns, labels, shapes; for payment/validation contexts may allow semantic hues if user explicitly permits, but never compromise error recognizability to enforce aesthetic purity.

## 6. Layer depth and optical weights

- Near-black page with lifted cards creates layers without gratuitous transparency; modal can use dim backdrop with solid overlay.
- White lines appear thicker optically against black; keep 1px lines subtle and reserve thick strokes for focused content.
- Fine typography in Persian benefits from brighter foreground and generous line-height, not ultra-thin gray hairline.
- Bloom and vignette should frame focal object, not obscure adjacent headings. Check composition at mid-scroll.
- Ghost buttons: stroke + text; on hover fill white and foreground black, on focus ring with visible 2px separation.
- Avoid huge gray low-contrast body text blocks on #050505; any muted token must meet actual text contrast target.

## 7. Light / dark and color mixing

Color CSS docs: `oklch()`, `color-mix(in oklab, ...)`. Interpolate surface ramps in Oklab for smoothness; RGB/HSV lerps may produce muddy or uneven brightness. Avoid hue spins in a grayscale identity.

Example relative theme specification:

```css
:root { color-scheme: dark; --background:#050505; --foreground:#f1f1f1; --surface:#151515; --border:#4a4a4a; }
[data-theme="light"] { color-scheme:light; --background:#f8f8f8; --foreground:#111; --surface:#fff; --border:#777; }
html { background: var(--background); color: var(--foreground); }
.surface { background: var(--surface); border: 1px solid var(--border); }
```

## 8. Formal color audit

1. Inventory unique hex/rgba/oklch values; flag unapproved values in components.
2. Classify purpose: primary text, muted, border, chart, focus, decoration.
3. Measure contrast on *actual background* including overlays and card gradients; compute alpha compositing before testing.
4. Review normal, hover, active, disabled, selected, error, focus-visible, visited, busy.
5. Simulate protanopia/deuteranopia, grayscale and high-contrast forced-colors.
6. Check gamut clipping and antialiasing; don't trust screenshot export alone for color.
7. Verify bright 3D emitters stay within screenshot HDR/SDR output expectations.

References:
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/oklch
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix
- https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum

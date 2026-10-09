# Persian / English Typography Engine

## Mandatory: choose actual language font
A previous issue was that switching UI language changed translated text but did not change its font. The fix is a locale-dependent design token and a **verified** loaded font asset. `font-family` CSS pointing to a nonexistent font does not count as successful. Require computed style and `document.fonts.check` or visual inspection. Use `<html lang="fa" dir="rtl">` and `<html lang="en" dir="ltr">`; mixed text runs should use `bdi` or `unicode-bidi:isolate`. Never reverse the actual string manually.

## Curated defaults
- Persian application body: Vazirmatn (strong neutral default).
- Persian brand/product display: Estedad (consider for expressive modern identity; verify distribution license and letter coverage).
- Persian education/editorial body: Sahel, Noto Naskh Arabic depending on long-reading goals.
- Persian enterprise: IBM Plex Sans Arabic / Vazirmatn.
- Persian playful headline: Lalezar, only large display roles.
- English application body: Inter, Source Sans 3 or IBM Plex Sans.
- English modern display: Manrope, Space Grotesk, Sora, Outfit.
- English editorial: Fraunces/Playfair Display for headings, pair with sans body.

## Pair by brand and hierarchy, not by vague trend
The `FONT-ATLAS.json` records examples, source links, and license confidence. Prefer approved brand fonts over any recommendation. Build fonts via Fontsource packages or licensed local WOFF2 assets, subset appropriately, preload critical font and use `font-display`. No font binaries are bundled in this ZIP.

## Implementation
```css
:root { --font-fa:'Vazirmatn Variable',sans-serif; --font-en:'Inter Variable',sans-serif; }
:lang(fa){font-family:var(--font-fa)}
:lang(en){font-family:var(--font-en)}
:lang(fa) h1 {line-height:1.36;letter-spacing:normal}
:lang(en) h1 {line-height:1.1;letter-spacing:-.025em}
```
Use `Intl.NumberFormat('fa-IR')` for user-facing localized digits, never replace digits in IDs/SKUs. When locale changes: swap lang/dir, wait `document.fonts.ready`, invalidate splitText segmentation, refresh scroll positions and Three text-safe layout.

## QA
- Persian glyph shaping tested for ی، ک، ء، لا، diacritics, ZWNJ and mixed `CODEX 2026`.
- Two locale screenshots per viewport and computed fontFamily assertion.
- Verify requested font asset loaded (fallback only when intended), no missing glyph boxes.
- Long text wrapping at 320px and 400% zoom; no clipped ascenders/descenders.
- Confirm rights before distributing font files.

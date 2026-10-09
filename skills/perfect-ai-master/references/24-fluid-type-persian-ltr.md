# Fluid type, optical scale, Persian shaping, multi-language layouts

Choose font via audience and language; host local WOFF2 subset where redistribution rights allow. Persian examples: Vazirmatn (if correctly bundled), fallback `Tahoma, sans-serif`. Never redistribute proprietary font files without license. Preserve joining/shaping and numerals; test متن فارسی, English, ترکیبی، اعداد ۱۲۳ / 123, URL and code segments.

## Scale strategy
Body minimum 1rem (16px equivalent at default settings); descriptive line length ~45–75 Latin characters, measured Persian readability visually; heading line heights 1.05–1.25, body 1.5–1.9 depending on font. Avoid tight letter spacing for Persian. Use variable weights when available and sufficient contrast.

```css
:root {
  font-size:100%;
  --font-body:clamp(1rem,.96rem + .19vw,1.125rem);
  --font-h1:clamp(2.15rem,1.3rem + 4vw,5.4rem);
  --measure:68ch;
  --space:clamp(1rem,.65rem + 1.3vw,2rem);
}
html { text-size-adjust:100%; }
body { font-size:var(--font-body); line-height:1.75; }
h1 { font-size:var(--font-h1); line-height:1.12; text-wrap:balance; }
p { max-inline-size:var(--measure); text-wrap:pretty; }
[dir="rtl"] { font-family:Vazirmatn,Tahoma,sans-serif; }
.code, code, pre { direction:ltr; unicode-bidi:isolate; }
```

## Tests
320px narrow, 200%/400% zoom, text-only resize, huge dynamic content, long button label, undefined glyph, alternate numeral sets, copy/paste bidi, mixed names `Claude 3D / Perfect_AI`, Arabic hamza marks, and fonts not downloaded. Text must never be rasterized in WebGL canvas when semantic text is required.

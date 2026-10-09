---
name: ztc-kinetic-typography
description: "Animate headlines with readable wave, stretch, stroke, shader masks and staged reveals without corrupting Arabic/Persian glyph shaping."
---
# Kinetic Typography Studio

## Mission
Animate headlines with readable wave, stretch, stroke, shader masks and staged reveals without corrupting Arabic/Persian glyph shaping.

## Integration order (MUST follow)
1. Inspect `package.json`, framework/router, existing Motion/GSAP/Anime/Three versions, asset ownership, installed plugins and media-query breakpoints; never install libraries speculatively.
2. Record baseline screenshot and layout measurements at 390px and 1440px, reduced-motion off/on, with a reversible change plan. Preserve every existing feature.
3. Read the accompanying module `../../src/kinetic-type.mjs` and relevant `../../examples/showcase` fixture. The module is importable ESM and contains pure primitives; integrate rather than replacing existing app architecture.
4. Select a single source of truth for time/scroll/transform. Map ownership in a table (property, owner, initialization, cleanup), avoiding GSAP/Motion/CSS double transforms.
5. Implement the smallest supported path first, then optional advanced renderer/library adapter only if project dependencies and measured benefits justify it.
6. Execute `node --test tests/*.test.mjs` in this extension and run a browser test in the destination app. Do not equate unit tests with WebGL, physical-device or accessibility certification.
7. Capture evidence before/after, browser console, load error handling, cleanup after repeated navigation, keyboard, resize, and bidirectional scroll.

## Engineering disciplines
1. **Arabic Script Preservation** — Never split Persian letters into individual DOM spans without shaping support. Animate whole word/run or use correctly shaped text textures; preserve RTL order and mixed LTR spans.
2. **Grapheme Stagger** — Use Intl.Segmenter graphemes for Latin/emoji; keep Unicode grapheme clusters intact. Clip/translate decorative duplicates while preserving one accessible original.
3. **Shader Text** — Render text into a Canvas/texture with correct font and bidi shaping; use shader displacement on texture rather than broken per-glyph Persian geometry.
4. **Variable Font Motion** — Animate font-variation-settings within supported axes and valid values; pre-load weights and check layout shift at keyframes.
5. **Scroll And Pointer Type** — Drive progress from unified absolute timeline, interpolate height and transforms, never mutate layout on every scroll event.
6. **Accessibility Typography** — Respect prefers-reduced-motion, maintain headings semantic order, visual contrast and text selection; do not duplicate screen-reader announcements.

## Subskills (load only needed ones)
- `ztc-kinetic-typography-arabic-script-preservation` — Never split Persian letters into individual DOM spans without shaping support. Animate whole word/run or use correctly shaped text textures; preserve RTL order and mixed LTR spans.
- `ztc-kinetic-typography-grapheme-stagger` — Use Intl.Segmenter graphemes for Latin/emoji; keep Unicode grapheme clusters intact. Clip/translate decorative duplicates while preserving one accessible original.
- `ztc-kinetic-typography-shader-text` — Render text into a Canvas/texture with correct font and bidi shaping; use shader displacement on texture rather than broken per-glyph Persian geometry.
- `ztc-kinetic-typography-variable-font-motion` — Animate font-variation-settings within supported axes and valid values; pre-load weights and check layout shift at keyframes.
- `ztc-kinetic-typography-scroll-and-pointer-type` — Drive progress from unified absolute timeline, interpolate height and transforms, never mutate layout on every scroll event.
- `ztc-kinetic-typography-accessibility-typography` — Respect prefers-reduced-motion, maintain headings semantic order, visual contrast and text selection; do not duplicate screen-reader announcements.

## Concrete acceptance gate
Persian/English headlines render correctly at 320px and 1440px, remain selectable and screen-reader friendly, and pass reversed time seek.

## Runtime / dependencies
Intl.Segmenter; optional Canvas text shaping, CSS variable fonts, GSAP/Anime.js. No MCP and no network/CDN at runtime. All new assets must have license/provenance. Preserve existing files by default.

## Failure modes & honesty
Per-character DOM animation can disconnect Persian joining: whole text-run is the default for complex scripts.
- Handle reduced motion by providing a stable meaningful static presentation, not by hiding essential content.
- For CPU/GPU scenes, validate resources after repeated unmount/mount; dispose only owned materials, textures and listeners.
- Record PASS / FAIL / NOT RUN for each test with machine/browser/device and reproduction steps. Never mark untested targets as passing.

## Authoritative references
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
- https://animejs.com/documentation/svg

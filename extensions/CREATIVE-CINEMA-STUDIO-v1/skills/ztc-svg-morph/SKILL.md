---
name: ztc-svg-morph
description: "Transform logos, shapes, buttons and menu icons with point normalization, morph interpolation, outline quality, and accessible SVG fallback."
---
# SVG Morphing Laboratory

## Mission
Transform logos, shapes, buttons and menu icons with point normalization, morph interpolation, outline quality, and accessible SVG fallback.

## Integration order (MUST follow)
1. Inspect `package.json`, framework/router, existing Motion/GSAP/Anime/Three versions, asset ownership, installed plugins and media-query breakpoints; never install libraries speculatively.
2. Record baseline screenshot and layout measurements at 390px and 1440px, reduced-motion off/on, with a reversible change plan. Preserve every existing feature.
3. Read the accompanying module `../../src/svg-morph.mjs` and relevant `../../examples/showcase` fixture. The module is importable ESM and contains pure primitives; integrate rather than replacing existing app architecture.
4. Select a single source of truth for time/scroll/transform. Map ownership in a table (property, owner, initialization, cleanup), avoiding GSAP/Motion/CSS double transforms.
5. Implement the smallest supported path first, then optional advanced renderer/library adapter only if project dependencies and measured benefits justify it.
6. Execute `node --test tests/*.test.mjs` in this extension and run a browser test in the destination app. Do not equate unit tests with WebGL, physical-device or accessibility certification.
7. Capture evidence before/after, browser console, load error handling, cleanup after repeated navigation, keyboard, resize, and bidirectional scroll.

## Engineering disciplines
1. **Equal Topology Morph** — Use point-array morphPoints for corresponding topology; normalize segment counts before interpolation.
2. **Arbitrary Svg Paths** — For arbitrary path strings use Anime.js svg.morphTo or flubber installed separately; do not pretend that point resampling handles holes and path self-intersections.
3. **Stroke Line Animation** — Animate stroke-dasharray/dashoffset with correctly computed path length and consistent stroke cap.
4. **Icon To Menu State** — Use semantic button, aria-expanded, keyboard and reduced-motion while morphing icon into close state.
5. **Path Quality Validation** — Compare contour topology at progress 0, .25, .5, .75, 1; inspect winding, crossings, unwanted holes and outline distortion.
6. **Svg Security** — Sanitize user-provided SVG (script, external links, foreignObject) before embedding; do not interpolate untrusted markup as HTML.

## Subskills (load only needed ones)
- `ztc-svg-morph-equal-topology-morph` — Use point-array morphPoints for corresponding topology; normalize segment counts before interpolation.
- `ztc-svg-morph-arbitrary-svg-paths` — For arbitrary path strings use Anime.js svg.morphTo or flubber installed separately; do not pretend that point resampling handles holes and path self-intersections.
- `ztc-svg-morph-stroke-line-animation` — Animate stroke-dasharray/dashoffset with correctly computed path length and consistent stroke cap.
- `ztc-svg-morph-icon-to-menu-state` — Use semantic button, aria-expanded, keyboard and reduced-motion while morphing icon into close state.
- `ztc-svg-morph-path-quality-validation` — Compare contour topology at progress 0, .25, .5, .75, 1; inspect winding, crossings, unwanted holes and outline distortion.
- `ztc-svg-morph-svg-security` — Sanitize user-provided SVG (script, external links, foreignObject) before embedding; do not interpolate untrusted markup as HTML.

## Concrete acceptance gate
Two shapes morph forward/back smoothly without invalid path, button stays keyboard operable; unsupported shapes use static transition.

## Runtime / dependencies
Native SVG; optional Anime.js 4 svg.morphTo, flubber. No MCP and no network/CDN at runtime. All new assets must have license/provenance. Preserve existing files by default.

## Failure modes & honesty
The bundled polyline interpolator does not solve arbitrary SVG path morphing, holes or multiple subpaths.
- Handle reduced motion by providing a stable meaningful static presentation, not by hiding essential content.
- For CPU/GPU scenes, validate resources after repeated unmount/mount; dispose only owned materials, textures and listeners.
- Record PASS / FAIL / NOT RUN for each test with machine/browser/device and reproduction steps. Never mark untested targets as passing.

## Authoritative references
- https://animejs.com/documentation/svg/morphto
- https://github.com/veltman/flubber

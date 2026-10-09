---
name: ztc-editorial-composition
description: "Build distinctive asymmetric, magazine-like layouts with consistent typographic hierarchy, whitespace rhythm and scroll choreography."
---
# Editorial Composition Engine

## Mission
Build distinctive asymmetric, magazine-like layouts with consistent typographic hierarchy, whitespace rhythm and scroll choreography.

## Integration order (MUST follow)
1. Inspect `package.json`, framework/router, existing Motion/GSAP/Anime/Three versions, asset ownership, installed plugins and media-query breakpoints; never install libraries speculatively.
2. Record baseline screenshot and layout measurements at 390px and 1440px, reduced-motion off/on, with a reversible change plan. Preserve every existing feature.
3. Read the accompanying module `../../src/editorial.mjs` and relevant `../../examples/showcase` fixture. The module is importable ESM and contains pure primitives; integrate rather than replacing existing app architecture.
4. Select a single source of truth for time/scroll/transform. Map ownership in a table (property, owner, initialization, cleanup), avoiding GSAP/Motion/CSS double transforms.
5. Implement the smallest supported path first, then optional advanced renderer/library adapter only if project dependencies and measured benefits justify it.
6. Execute `node --test tests/*.test.mjs` in this extension and run a browser test in the destination app. Do not equate unit tests with WebGL, physical-device or accessibility certification.
7. Capture evidence before/after, browser console, load error handling, cleanup after repeated navigation, keyboard, resize, and bidirectional scroll.

## Engineering disciplines
1. **Asymmetrical Grid** — Create deterministic asymmetric column spans with strict safe gutters and fallback stacked reading flow on mobile.
2. **Typographic Scale** — Create modular fluid type and editorial rhythm; allow Persian/English fonts to maintain line height and correct RTL alignment.
3. **Photo Art Direction** — Control crop focal point, responsive srcset, caption, credits and alt text; avoid distorting faces.
4. **Negative Space Scoring** — Compare content rectangles and desired empty spaces as measurable layout constraints; keep meaningful whitespace.
5. **Responsive Composition** — Recompose at breakpoint without changing semantic reading order or creating offscreen headings.
6. **Editorial Motion** — Add subtle scale, mask and scroll reveals only where they support narrative; keep printed/static mode usable.

## Subskills (load only needed ones)
- `ztc-editorial-composition-asymmetrical-grid` — Create deterministic asymmetric column spans with strict safe gutters and fallback stacked reading flow on mobile.
- `ztc-editorial-composition-typographic-scale` — Create modular fluid type and editorial rhythm; allow Persian/English fonts to maintain line height and correct RTL alignment.
- `ztc-editorial-composition-photo-art-direction` — Control crop focal point, responsive srcset, caption, credits and alt text; avoid distorting faces.
- `ztc-editorial-composition-negative-space-scoring` — Compare content rectangles and desired empty spaces as measurable layout constraints; keep meaningful whitespace.
- `ztc-editorial-composition-responsive-composition` — Recompose at breakpoint without changing semantic reading order or creating offscreen headings.
- `ztc-editorial-composition-editorial-motion` — Add subtle scale, mask and scroll reveals only where they support narrative; keep printed/static mode usable.

## Concrete acceptance gate
Magazine composition remains readable at 320/768/1440px and with Persian text expansion, no overlap or missing image attribution.

## Runtime / dependencies
Native CSS Grid, CSS clamp and JS layout hints. No MCP and no network/CDN at runtime. All new assets must have license/provenance. Preserve existing files by default.

## Failure modes & honesty
Seeded grid algorithm gives repeatable candidate layouts, not automatic human-grade art direction.
- Handle reduced motion by providing a stable meaningful static presentation, not by hiding essential content.
- For CPU/GPU scenes, validate resources after repeated unmount/mount; dispose only owned materials, textures and listeners.
- Record PASS / FAIL / NOT RUN for each test with machine/browser/device and reproduction steps. Never mark untested targets as passing.

## Authoritative references
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
- https://developer.mozilla.org/en-US/docs/Web/CSS/clamp

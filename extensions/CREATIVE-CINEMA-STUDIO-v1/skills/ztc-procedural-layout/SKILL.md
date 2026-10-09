---
name: ztc-procedural-layout
description: "Create elastic image grids, staggered columns, depth shifts and scroll-driven editorial reflows while keeping DOM reading order stable."
---
# Procedural Layout Animation

## Mission
Create elastic image grids, staggered columns, depth shifts and scroll-driven editorial reflows while keeping DOM reading order stable.

## Integration order (MUST follow)
1. Inspect `package.json`, framework/router, existing Motion/GSAP/Anime/Three versions, asset ownership, installed plugins and media-query breakpoints; never install libraries speculatively.
2. Record baseline screenshot and layout measurements at 390px and 1440px, reduced-motion off/on, with a reversible change plan. Preserve every existing feature.
3. Read the accompanying module `../../src/layout-motion.mjs` and relevant `../../examples/showcase` fixture. The module is importable ESM and contains pure primitives; integrate rather than replacing existing app architecture.
4. Select a single source of truth for time/scroll/transform. Map ownership in a table (property, owner, initialization, cleanup), avoiding GSAP/Motion/CSS double transforms.
5. Implement the smallest supported path first, then optional advanced renderer/library adapter only if project dependencies and measured benefits justify it.
6. Execute `node --test tests/*.test.mjs` in this extension and run a browser test in the destination app. Do not equate unit tests with WebGL, physical-device or accessibility certification.
7. Capture evidence before/after, browser console, load error handling, cleanup after repeated navigation, keyboard, resize, and bidirectional scroll.

## Engineering disciplines
1. **Grid Deformation** — Compute deterministic transforms from scroll progress and index; do not mutate box dimensions in a frame loop.
2. **Reflow Flip** — Capture first/last DOMRect and apply invert/play FLIP transform; recapture on font/image load and breakpoint change.
3. **Scroll Coupled Depth** — Map progress to depth, scale and parallax with hard bounds, reduced-motion and touch fallback.
4. **Virtualize Large Grids** — Use IntersectionObserver/lazy image loading and virtualized lists on large datasets; avoid creating 1000 active CSS transforms.
5. **Responsive Grid Constraints** — Ensure column mapping for small/medium/large viewports and touch target order. Never change screen-reader DOM order merely for visuals.

## Subskills (load only needed ones)
- `ztc-procedural-layout-grid-deformation` — Compute deterministic transforms from scroll progress and index; do not mutate box dimensions in a frame loop.
- `ztc-procedural-layout-reflow-flip` — Capture first/last DOMRect and apply invert/play FLIP transform; recapture on font/image load and breakpoint change.
- `ztc-procedural-layout-scroll-coupled-depth` — Map progress to depth, scale and parallax with hard bounds, reduced-motion and touch fallback.
- `ztc-procedural-layout-virtualize-large-grids` — Use IntersectionObserver/lazy image loading and virtualized lists on large datasets; avoid creating 1000 active CSS transforms.
- `ztc-procedural-layout-responsive-grid-constraints` — Ensure column mapping for small/medium/large viewports and touch target order. Never change screen-reader DOM order merely for visuals.

## Concrete acceptance gate
Animated grid works for 1, 8 and 100 cards, resize changes columns predictably, and keyboard navigation follows expected content order.

## Runtime / dependencies
Native CSS Grid, CSS transforms; optional Motion LayoutGroup, GSAP Flip. No MCP and no network/CDN at runtime. All new assets must have license/provenance. Preserve existing files by default.

## Failure modes & honesty
Transform-deformed layout remains in original hit-testing/layout flow; avoid interactive overlaps.
- Handle reduced motion by providing a stable meaningful static presentation, not by hiding essential content.
- For CPU/GPU scenes, validate resources after repeated unmount/mount; dispose only owned materials, textures and listeners.
- Record PASS / FAIL / NOT RUN for each test with machine/browser/device and reproduction steps. Never mark untested targets as passing.

## Authoritative references
- https://motion.dev/docs/react-layout-group
- https://gsap.com/docs/v3/Plugins/Flip/

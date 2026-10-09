---
name: ztc-cinematic-transitions
description: "Maintain spatial continuity when route changes: shared DOM elements, typography, hero imagery, and a persistent WebGL scene/camera."
---
# Cinematic Page Transition Engine

## Mission
Maintain spatial continuity when route changes: shared DOM elements, typography, hero imagery, and a persistent WebGL scene/camera.

## Integration order (MUST follow)
1. Inspect `package.json`, framework/router, existing Motion/GSAP/Anime/Three versions, asset ownership, installed plugins and media-query breakpoints; never install libraries speculatively.
2. Record baseline screenshot and layout measurements at 390px and 1440px, reduced-motion off/on, with a reversible change plan. Preserve every existing feature.
3. Read the accompanying module `../../src/transitions.mjs` and relevant `../../examples/showcase` fixture. The module is importable ESM and contains pure primitives; integrate rather than replacing existing app architecture.
4. Select a single source of truth for time/scroll/transform. Map ownership in a table (property, owner, initialization, cleanup), avoiding GSAP/Motion/CSS double transforms.
5. Implement the smallest supported path first, then optional advanced renderer/library adapter only if project dependencies and measured benefits justify it.
6. Execute `node --test tests/*.test.mjs` in this extension and run a browser test in the destination app. Do not equate unit tests with WebGL, physical-device or accessibility certification.
7. Capture evidence before/after, browser console, load error handling, cleanup after repeated navigation, keyboard, resize, and bidirectional scroll.

## Engineering disciplines
1. **Shared Element Identity** — Assign stable data-shared-key values to semantic elements across routes. Ensure keys are unique in a given DOM state. Capture DOMRect before/after update and avoid layout jank.
2. **Spa Native View Transitions** — Prefer document.startViewTransition for same-document changes when supported. Update DOM inside callback. Await finished. Always provide a no-motion fallback.
3. **Persistent 3D Camera** — Keep renderer/canvas owned above route outlet. Interpolate camera position/target/FOV from named scene states and render during transition; never recreate GL context on every navigation.
4. **Cross Document Mpa** — Configure @view-transition {navigation:auto} only where supported; the old and new documents must both opt in and be same-origin. Fall back to links, never block navigation.
5. **Focus And Abort** — Cancel stale transitions; restore pointer behavior and scroll, focus new page heading and announce route. Handle deep-links, refresh, back/forward.
6. **Shared Element Fallback** — Fallback to Web Animations API FLIP when native view transitions unavailable; never rely solely on CSS animation.

## Subskills (load only needed ones)
- `ztc-cinematic-transitions-shared-element-identity` — Assign stable data-shared-key values to semantic elements across routes. Ensure keys are unique in a given DOM state. Capture DOMRect before/after update and avoid layout jank.
- `ztc-cinematic-transitions-spa-native-view-transitions` — Prefer document.startViewTransition for same-document changes when supported. Update DOM inside callback. Await finished. Always provide a no-motion fallback.
- `ztc-cinematic-transitions-persistent-3d-camera` — Keep renderer/canvas owned above route outlet. Interpolate camera position/target/FOV from named scene states and render during transition; never recreate GL context on every navigation.
- `ztc-cinematic-transitions-cross-document-mpa` — Configure @view-transition {navigation:auto} only where supported; the old and new documents must both opt in and be same-origin. Fall back to links, never block navigation.
- `ztc-cinematic-transitions-focus-and-abort` — Cancel stale transitions; restore pointer behavior and scroll, focus new page heading and announce route. Handle deep-links, refresh, back/forward.
- `ztc-cinematic-transitions-shared-element-fallback` — Fallback to Web Animations API FLIP when native view transitions unavailable; never rely solely on CSS animation.

## Concrete acceptance gate
Navigate forward/back across two routes at 390 and 1440px; shared keys match, focus moves to new heading, browser back works; test missing keys and reduced motion.

## Runtime / dependencies
Web View Transitions API; optionally GSAP Flip, Motion layoutId; optional persistent Three.js scene. No MCP and no network/CDN at runtime. All new assets must have license/provenance. Preserve existing files by default.

## Failure modes & honesty
Web View Transitions do not automatically transform live WebGL objects. Persistent scene interpolation requires app integration.
- Handle reduced motion by providing a stable meaningful static presentation, not by hiding essential content.
- For CPU/GPU scenes, validate resources after repeated unmount/mount; dispose only owned materials, textures and listeners.
- Record PASS / FAIL / NOT RUN for each test with machine/browser/device and reproduction steps. Never mark untested targets as passing.

## Authoritative references
- https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API
- https://gsap.com/docs/v3/Plugins/Flip/
- https://motion.dev/docs/react-layout-animations

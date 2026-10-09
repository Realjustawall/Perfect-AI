---
name: ztc-immersive-navigation
description: "Create spatial navigation, 3D menus and camera-path route changes without losing URL semantics or accessibility."
---
# Immersive Navigation Engine

## Mission
Create spatial navigation, 3D menus and camera-path route changes without losing URL semantics or accessibility.

## Integration order (MUST follow)
1. Inspect `package.json`, framework/router, existing Motion/GSAP/Anime/Three versions, asset ownership, installed plugins and media-query breakpoints; never install libraries speculatively.
2. Record baseline screenshot and layout measurements at 390px and 1440px, reduced-motion off/on, with a reversible change plan. Preserve every existing feature.
3. Read the accompanying module `../../src/immersive-nav.mjs` and relevant `../../examples/showcase` fixture. The module is importable ESM and contains pure primitives; integrate rather than replacing existing app architecture.
4. Select a single source of truth for time/scroll/transform. Map ownership in a table (property, owner, initialization, cleanup), avoiding GSAP/Motion/CSS double transforms.
5. Implement the smallest supported path first, then optional advanced renderer/library adapter only if project dependencies and measured benefits justify it.
6. Execute `node --test tests/*.test.mjs` in this extension and run a browser test in the destination app. Do not equate unit tests with WebGL, physical-device or accessibility certification.
7. Capture evidence before/after, browser console, load error handling, cleanup after repeated navigation, keyboard, resize, and bidirectional scroll.

## Engineering disciplines
1. **Spatial Selection** — Map focusable navigation nodes to x/y positions and choose directionally adjacent target; retain keyboard key mapping.
2. **Route State Machine** — Use idle/transiting/error and in-flight locks; preserve deep-link URL/refresh, browser history and native link fallback.
3. **Camera Path Nav** — Define named camera positions per route, obstacles, and interpolation with no horizon flips; call shared persistent renderer.
4. **Semantic 3D Menu** — Keep DOM <nav> and real anchors always reachable; WebGL menu is progressive enhancement, not the only nav.
5. **Device Fallback** — For touch and reduced motion show a conventional menu with same destinations; do not hide content behind gestures.

## Subskills (load only needed ones)
- `ztc-immersive-navigation-spatial-selection` — Map focusable navigation nodes to x/y positions and choose directionally adjacent target; retain keyboard key mapping.
- `ztc-immersive-navigation-route-state-machine` — Use idle/transiting/error and in-flight locks; preserve deep-link URL/refresh, browser history and native link fallback.
- `ztc-immersive-navigation-camera-path-nav` — Define named camera positions per route, obstacles, and interpolation with no horizon flips; call shared persistent renderer.
- `ztc-immersive-navigation-semantic-3d-menu` — Keep DOM <nav> and real anchors always reachable; WebGL menu is progressive enhancement, not the only nav.
- `ztc-immersive-navigation-device-fallback` — For touch and reduced motion show a conventional menu with same destinations; do not hide content behind gestures.

## Concrete acceptance gate
Arrow, Tab, Escape, deep-link, back and touch navigation remain usable when WebGL fails or JS is disabled.

## Runtime / dependencies
Native History, focus management, Three.js optional. No MCP and no network/CDN at runtime. All new assets must have license/provenance. Preserve existing files by default.

## Failure modes & honesty
Current navigator planner does not own browser history; integration must wire pushState and popstate and test those.
- Handle reduced motion by providing a stable meaningful static presentation, not by hiding essential content.
- For CPU/GPU scenes, validate resources after repeated unmount/mount; dispose only owned materials, textures and listeners.
- Record PASS / FAIL / NOT RUN for each test with machine/browser/device and reproduction steps. Never mark untested targets as passing.

## Authoritative references
- https://developer.mozilla.org/en-US/docs/Web/API/History_API
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/navigation_role

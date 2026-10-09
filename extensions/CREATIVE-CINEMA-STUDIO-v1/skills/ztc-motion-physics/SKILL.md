---
name: ztc-motion-physics
description: "Unify spring, inertia, drag and collision behaviors with predictable physical constants and deterministic state updates."
---
# Motion Physics Language

## Mission
Unify spring, inertia, drag and collision behaviors with predictable physical constants and deterministic state updates.

## Integration order (MUST follow)
1. Inspect `package.json`, framework/router, existing Motion/GSAP/Anime/Three versions, asset ownership, installed plugins and media-query breakpoints; never install libraries speculatively.
2. Record baseline screenshot and layout measurements at 390px and 1440px, reduced-motion off/on, with a reversible change plan. Preserve every existing feature.
3. Read the accompanying module `../../src/motion-physics.mjs` and relevant `../../examples/showcase` fixture. The module is importable ESM and contains pure primitives; integrate rather than replacing existing app architecture.
4. Select a single source of truth for time/scroll/transform. Map ownership in a table (property, owner, initialization, cleanup), avoiding GSAP/Motion/CSS double transforms.
5. Implement the smallest supported path first, then optional advanced renderer/library adapter only if project dependencies and measured benefits justify it.
6. Execute `node --test tests/*.test.mjs` in this extension and run a browser test in the destination app. Do not equate unit tests with WebGL, physical-device or accessibility certification.
7. Capture evidence before/after, browser console, load error handling, cleanup after repeated navigation, keyboard, resize, and bidirectional scroll.

## Engineering disciplines
1. **Spring Integration** — Use mass/stiffness/damping and substep time integration. Keep frame delta bounded and match between pointer/scroll/navigation.
2. **Inertia And Gestures** — Compute physical velocity from timestamped pointer samples; clamp flick speed, do not capture pointer unnecessarily.
3. **Collision Constraints** — Resolve rectangles against obstacles conservatively; prevent hidden buttons and panel overlaps.
4. **Timelines Vs Physics** — Distinguish absolute seek-based cinematics from time-integrated physics; serialize seed/state when snapshots are required.
5. **Reduced Motion Physics** — Snap to final/rest state under reduced motion and offer deterministic input behavior without inertial delay.

## Subskills (load only needed ones)
- `ztc-motion-physics-spring-integration` — Use mass/stiffness/damping and substep time integration. Keep frame delta bounded and match between pointer/scroll/navigation.
- `ztc-motion-physics-inertia-and-gestures` — Compute physical velocity from timestamped pointer samples; clamp flick speed, do not capture pointer unnecessarily.
- `ztc-motion-physics-collision-constraints` — Resolve rectangles against obstacles conservatively; prevent hidden buttons and panel overlaps.
- `ztc-motion-physics-timelines-vs-physics` — Distinguish absolute seek-based cinematics from time-integrated physics; serialize seed/state when snapshots are required.
- `ztc-motion-physics-reduced-motion-physics` — Snap to final/rest state under reduced motion and offer deterministic input behavior without inertial delay.

## Concrete acceptance gate
Identical initial state and timestep sequence produces identical output, springs converge, collisions displace objects outside obstacles.

## Runtime / dependencies
Pure JavaScript, Pointer Events. No MCP and no network/CDN at runtime. All new assets must have license/provenance. Preserve existing files by default.

## Failure modes & honesty
Variable-step simulations cannot guarantee exact offline seek. Use stored snapshots or fixed-step replay.
- Handle reduced motion by providing a stable meaningful static presentation, not by hiding essential content.
- For CPU/GPU scenes, validate resources after repeated unmount/mount; dispose only owned materials, textures and listeners.
- Record PASS / FAIL / NOT RUN for each test with machine/browser/device and reproduction steps. Never mark untested targets as passing.

## Authoritative references
- https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion

---
name: ztc-creative-preloader
description: "Build meaningful cinematic intros gated on actual content readiness, respecting fast connections and reduced motion."
---
# Creative Preloader & Intro Engine

## Mission
Build meaningful cinematic intros gated on actual content readiness, respecting fast connections and reduced motion.

## Integration order (MUST follow)
1. Inspect `package.json`, framework/router, existing Motion/GSAP/Anime/Three versions, asset ownership, installed plugins and media-query breakpoints; never install libraries speculatively.
2. Record baseline screenshot and layout measurements at 390px and 1440px, reduced-motion off/on, with a reversible change plan. Preserve every existing feature.
3. Read the accompanying module `../../src/preloader.mjs` and relevant `../../examples/showcase` fixture. The module is importable ESM and contains pure primitives; integrate rather than replacing existing app architecture.
4. Select a single source of truth for time/scroll/transform. Map ownership in a table (property, owner, initialization, cleanup), avoiding GSAP/Motion/CSS double transforms.
5. Implement the smallest supported path first, then optional advanced renderer/library adapter only if project dependencies and measured benefits justify it.
6. Execute `node --test tests/*.test.mjs` in this extension and run a browser test in the destination app. Do not equate unit tests with WebGL, physical-device or accessibility certification.
7. Capture evidence before/after, browser console, load error handling, cleanup after repeated navigation, keyboard, resize, and bidirectional scroll.

## Engineering disciplines
1. **Real Readiness Gate** — Use promises for fonts, hero asset and scene renderer readiness, and report actual task completions not fake percent.
2. **Intro Choreography** — Coordinate logo, type and scene handoff using a single controllable sequence; intro should not replay on every back nav.
3. **Fast Path Bypass** — Skip unnecessary intro when the hero is already cached; never force a fixed long delay.
4. **Error Timeout Handling** — Treat optional resource failures separately; show retry for required resources and allow content access on timeout where safe.
5. **Reduced Motion And Focus** — Skip animation under reduced motion; avoid trapping focus, announce loading status only when actually useful.

## Subskills (load only needed ones)
- `ztc-creative-preloader-real-readiness-gate` — Use promises for fonts, hero asset and scene renderer readiness, and report actual task completions not fake percent.
- `ztc-creative-preloader-intro-choreography` — Coordinate logo, type and scene handoff using a single controllable sequence; intro should not replay on every back nav.
- `ztc-creative-preloader-fast-path-bypass` — Skip unnecessary intro when the hero is already cached; never force a fixed long delay.
- `ztc-creative-preloader-error-timeout-handling` — Treat optional resource failures separately; show retry for required resources and allow content access on timeout where safe.
- `ztc-creative-preloader-reduced-motion-and-focus` — Skip animation under reduced motion; avoid trapping focus, announce loading status only when actually useful.

## Concrete acceptance gate
All-ready, required-failure, optional-failure, abort and reduced-motion paths are tested; no bogus percentage and no inaccessible overlay.

## Runtime / dependencies
Promise/AbortSignal, CSS animation or GSAP optional. No MCP and no network/CDN at runtime. All new assets must have license/provenance. Preserve existing files by default.

## Failure modes & honesty
Readiness weight reports task completion only; it is NOT a byte-accurate network loading meter.
- Handle reduced motion by providing a stable meaningful static presentation, not by hiding essential content.
- For CPU/GPU scenes, validate resources after repeated unmount/mount; dispose only owned materials, textures and listeners.
- Record PASS / FAIL / NOT RUN for each test with machine/browser/device and reproduction steps. Never mark untested targets as passing.

## Authoritative references
- https://developer.mozilla.org/en-US/docs/Web/API/Document/fonts
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion

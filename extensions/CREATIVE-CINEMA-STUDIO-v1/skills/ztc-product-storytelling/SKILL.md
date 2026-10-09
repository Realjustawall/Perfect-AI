---
name: ztc-product-storytelling
description: "Tie a cinematic product reveal to scroll progress using decoded frame sequences, responsive crops, prefetch, chapter beats and 3D alternatives."
---
# Apple-Style Product Storytelling

## Mission
Tie a cinematic product reveal to scroll progress using decoded frame sequences, responsive crops, prefetch, chapter beats and 3D alternatives.

## Integration order (MUST follow)
1. Inspect `package.json`, framework/router, existing Motion/GSAP/Anime/Three versions, asset ownership, installed plugins and media-query breakpoints; never install libraries speculatively.
2. Record baseline screenshot and layout measurements at 390px and 1440px, reduced-motion off/on, with a reversible change plan. Preserve every existing feature.
3. Read the accompanying module `../../src/product-story.mjs` and relevant `../../examples/showcase` fixture. The module is importable ESM and contains pure primitives; integrate rather than replacing existing app architecture.
4. Select a single source of truth for time/scroll/transform. Map ownership in a table (property, owner, initialization, cleanup), avoiding GSAP/Motion/CSS double transforms.
5. Implement the smallest supported path first, then optional advanced renderer/library adapter only if project dependencies and measured benefits justify it.
6. Execute `node --test tests/*.test.mjs` in this extension and run a browser test in the destination app. Do not equate unit tests with WebGL, physical-device or accessibility certification.
7. Capture evidence before/after, browser console, load error handling, cleanup after repeated navigation, keyboard, resize, and bidirectional scroll.

## Engineering disciplines
1. **Scroll Frame Mapping** — Map scroll region to clamped 0..1 progress and to exact frame indexes, including reverse scroll.
2. **Priority Frame Loading** — Load first frame and near-future frames first, progressive precache ahead/behind scroll direction, track promise in-flight, bound cache.
3. **Image Sequence Vs Video** — Choose AVIF/WebP frames, video seek or GLB camera animation based on file budget, responsiveness, alpha support and decoded memory.
4. **Product Chapters** — Set narrative chapter starts, labels and subtitles; ensure no content is available only via motion.
5. **Pinned Story** — Use CSS sticky or ScrollTrigger pin with measured scene height and stable safe areas; avoid unbounded blocking during scroll.
6. **Asset Failure Recovery** — On missing frames show nearest decoded frame or static poster; reject error loops, disclose reduced-motion version.

## Subskills (load only needed ones)
- `ztc-product-storytelling-scroll-frame-mapping` — Map scroll region to clamped 0..1 progress and to exact frame indexes, including reverse scroll.
- `ztc-product-storytelling-priority-frame-loading` — Load first frame and near-future frames first, progressive precache ahead/behind scroll direction, track promise in-flight, bound cache.
- `ztc-product-storytelling-image-sequence-vs-video` — Choose AVIF/WebP frames, video seek or GLB camera animation based on file budget, responsiveness, alpha support and decoded memory.
- `ztc-product-storytelling-product-chapters` — Set narrative chapter starts, labels and subtitles; ensure no content is available only via motion.
- `ztc-product-storytelling-pinned-story` — Use CSS sticky or ScrollTrigger pin with measured scene height and stable safe areas; avoid unbounded blocking during scroll.
- `ztc-product-storytelling-asset-failure-recovery` — On missing frames show nearest decoded frame or static poster; reject error loops, disclose reduced-motion version.

## Concrete acceptance gate
120-frame storyboard maps exact first/mid/last frames, supports reverse scroll, bounds cache, renders a static poster on 404.

## Runtime / dependencies
Native Canvas/Image, IntersectionObserver, optional GSAP ScrollTrigger or video/Three.js. No MCP and no network/CDN at runtime. All new assets must have license/provenance. Preserve existing files by default.

## Failure modes & honesty
The package contains a procedural frame demo, not licensed Apple product assets or a finished 120-frame photo sequence.
- Handle reduced motion by providing a stable meaningful static presentation, not by hiding essential content.
- For CPU/GPU scenes, validate resources after repeated unmount/mount; dispose only owned materials, textures and listeners.
- Record PASS / FAIL / NOT RUN for each test with machine/browser/device and reproduction steps. Never mark untested targets as passing.

## Authoritative references
- https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode

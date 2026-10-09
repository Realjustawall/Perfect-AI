---
name: ztc-image-animation
description: "Build performant image transitions with displacement, liquid distortion, multilayer parallax, 3D flips, soft masks, and touch fallbacks."
---
# Advanced Image Animation Engine

## Mission
Build performant image transitions with displacement, liquid distortion, multilayer parallax, 3D flips, soft masks, and touch fallbacks.

## Integration order (MUST follow)
1. Inspect `package.json`, framework/router, existing Motion/GSAP/Anime/Three versions, asset ownership, installed plugins and media-query breakpoints; never install libraries speculatively.
2. Record baseline screenshot and layout measurements at 390px and 1440px, reduced-motion off/on, with a reversible change plan. Preserve every existing feature.
3. Read the accompanying module `../../src/image-effects.mjs` and relevant `../../examples/showcase` fixture. The module is importable ESM and contains pure primitives; integrate rather than replacing existing app architecture.
4. Select a single source of truth for time/scroll/transform. Map ownership in a table (property, owner, initialization, cleanup), avoiding GSAP/Motion/CSS double transforms.
5. Implement the smallest supported path first, then optional advanced renderer/library adapter only if project dependencies and measured benefits justify it.
6. Execute `node --test tests/*.test.mjs` in this extension and run a browser test in the destination app. Do not equate unit tests with WebGL, physical-device or accessibility certification.
7. Capture evidence before/after, browser console, load error handling, cleanup after repeated navigation, keyboard, resize, and bidirectional scroll.

## Engineering disciplines
1. **Displacement Map** — Use a bounded normalized displacement map and a fragment shader for real-time rendering; CPU image displacement in this pack is a deterministic low-resolution reference only.
2. **Liquid Distortion** — Use pointer-smoothed uniforms and stable time; constrain UV displacement to prevent sampling outside the valid texture; consider texture.wrapS/T.
3. **Multi Layer Parallax** — Assign a per-layer depth and clamp tilt; disable large parallax when reduced-motion; use transform and GPU compositing carefully.
4. **Mask Reveal** — Use CSS clip-path / mask-image for lightweight reveals; provide unmasked static images where unsupported; clip not the alt text or controls.
5. **Three D Flip** — Render both faces with backface-visibility:hidden; keep image ratio, readable captions and avoid flipping content that contains important text.
6. **Texture Lifecycle** — Decode/preload only necessary images, set image dimensions, release ImageBitmap/texture references, handle context loss and CORS. Use AVIF/WebP where available.

## Subskills (load only needed ones)
- `ztc-image-animation-displacement-map` — Use a bounded normalized displacement map and a fragment shader for real-time rendering; CPU image displacement in this pack is a deterministic low-resolution reference only.
- `ztc-image-animation-liquid-distortion` — Use pointer-smoothed uniforms and stable time; constrain UV displacement to prevent sampling outside the valid texture; consider texture.wrapS/T.
- `ztc-image-animation-multi-layer-parallax` — Assign a per-layer depth and clamp tilt; disable large parallax when reduced-motion; use transform and GPU compositing carefully.
- `ztc-image-animation-mask-reveal` — Use CSS clip-path / mask-image for lightweight reveals; provide unmasked static images where unsupported; clip not the alt text or controls.
- `ztc-image-animation-three-d-flip` — Render both faces with backface-visibility:hidden; keep image ratio, readable captions and avoid flipping content that contains important text.
- `ztc-image-animation-texture-lifecycle` — Decode/preload only necessary images, set image dimensions, release ImageBitmap/texture references, handle context loss and CORS. Use AVIF/WebP where available.

## Concrete acceptance gate
At least 2 image effects have a functioning before/after screenshot, no long main-thread task, reduced-motion static fallback, correct alt text and mobile behavior.

## Runtime / dependencies
Native Canvas, CSS; optional Three.js ShaderMaterial/renderer, GSAP. No MCP and no network/CDN at runtime. All new assets must have license/provenance. Preserve existing files by default.

## Failure modes & honesty
Reference CPU displacement is not a 60fps WebGL shader implementation; document the shader uniforms and separately validate integration.
- Handle reduced motion by providing a stable meaningful static presentation, not by hiding essential content.
- For CPU/GPU scenes, validate resources after repeated unmount/mount; dispose only owned materials, textures and listeners.
- Record PASS / FAIL / NOT RUN for each test with machine/browser/device and reproduction steps. Never mark untested targets as passing.

## Authoritative references
- https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
- https://threejs.org/docs/pages/ShaderMaterial.html

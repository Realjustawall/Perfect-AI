---
name: ztc-material-studio
description: "Produce glass/chrome/liquid/fabric/paper/holographic PBR material presets, sensible lighting and pointer-responsive highlights."
---
# Interactive Material Studio

## Mission
Produce glass/chrome/liquid/fabric/paper/holographic PBR material presets, sensible lighting and pointer-responsive highlights.

## Integration order (MUST follow)
1. Inspect `package.json`, framework/router, existing Motion/GSAP/Anime/Three versions, asset ownership, installed plugins and media-query breakpoints; never install libraries speculatively.
2. Record baseline screenshot and layout measurements at 390px and 1440px, reduced-motion off/on, with a reversible change plan. Preserve every existing feature.
3. Read the accompanying module `../../src/material-studio.mjs` and relevant `../../examples/showcase` fixture. The module is importable ESM and contains pure primitives; integrate rather than replacing existing app architecture.
4. Select a single source of truth for time/scroll/transform. Map ownership in a table (property, owner, initialization, cleanup), avoiding GSAP/Motion/CSS double transforms.
5. Implement the smallest supported path first, then optional advanced renderer/library adapter only if project dependencies and measured benefits justify it.
6. Execute `node --test tests/*.test.mjs` in this extension and run a browser test in the destination app. Do not equate unit tests with WebGL, physical-device or accessibility certification.
7. Capture evidence before/after, browser console, load error handling, cleanup after repeated navigation, keyboard, resize, and bidirectional scroll.

## Engineering disciplines
1. **Physically Based Presets** — Use MeshPhysicalMaterial as baseline; define metalness/roughness/ior/transmission/clearcoat/iridescence/sheen correctly.
2. **Lighting And Environment** — Use proper HDR environment lighting where authorized, adjust exposure, maintain consistent color pipeline and tone mapping.
3. **Real Time Material Switching** — Reuse geometries, replace materials without leaking textures or shader programs; dispose only owned resources.
4. **Shader And Hologram** — Use custom shaders for hologram scan/noise effects but retain an unlit/lightweight fallback.
5. **Pointer Light Rig** — Smooth pointer into a light rig without updating full material values each frame; clamp range.
6. **Material Validation** — Compare presets in consistent photographic lighting; ensure glass has meaningful background and performant mobile options.

## Subskills (load only needed ones)
- `ztc-material-studio-physically-based-presets` — Use MeshPhysicalMaterial as baseline; define metalness/roughness/ior/transmission/clearcoat/iridescence/sheen correctly.
- `ztc-material-studio-lighting-and-environment` — Use proper HDR environment lighting where authorized, adjust exposure, maintain consistent color pipeline and tone mapping.
- `ztc-material-studio-real-time-material-switching` — Reuse geometries, replace materials without leaking textures or shader programs; dispose only owned resources.
- `ztc-material-studio-shader-and-hologram` — Use custom shaders for hologram scan/noise effects but retain an unlit/lightweight fallback.
- `ztc-material-studio-pointer-light-rig` — Smooth pointer into a light rig without updating full material values each frame; clamp range.
- `ztc-material-studio-material-validation` — Compare presets in consistent photographic lighting; ensure glass has meaningful background and performant mobile options.

## Concrete acceptance gate
At least six material presets render in Three.js with correct input validation, no missing maps, and stable repeated swaps.

## Runtime / dependencies
Three.js MeshPhysicalMaterial, environment textures; optional custom shaders. No MCP and no network/CDN at runtime. All new assets must have license/provenance. Preserve existing files by default.

## Failure modes & honesty
Bundled presets are parameter data and optional Three.js constructors, not photorealistic renders until environment/light assets are integrated.
- Handle reduced motion by providing a stable meaningful static presentation, not by hiding essential content.
- For CPU/GPU scenes, validate resources after repeated unmount/mount; dispose only owned materials, textures and listeners.
- Record PASS / FAIL / NOT RUN for each test with machine/browser/device and reproduction steps. Never mark untested targets as passing.

## Authoritative references
- https://threejs.org/docs/pages/MeshPhysicalMaterial.html
- https://threejs.org/docs/pages/GLTFLoader.html

---
name: ztc-product-configurator
description: "Expose color, material, component and camera variants through a validated state machine and an efficient 3D preview."
---
# Interactive Product Configurator

## Mission
Expose color, material, component and camera variants through a validated state machine and an efficient 3D preview.

## Integration order (MUST follow)
1. Inspect `package.json`, framework/router, existing Motion/GSAP/Anime/Three versions, asset ownership, installed plugins and media-query breakpoints; never install libraries speculatively.
2. Record baseline screenshot and layout measurements at 390px and 1440px, reduced-motion off/on, with a reversible change plan. Preserve every existing feature.
3. Read the accompanying module `../../src/configurator.mjs` and relevant `../../examples/showcase` fixture. The module is importable ESM and contains pure primitives; integrate rather than replacing existing app architecture.
4. Select a single source of truth for time/scroll/transform. Map ownership in a table (property, owner, initialization, cleanup), avoiding GSAP/Motion/CSS double transforms.
5. Implement the smallest supported path first, then optional advanced renderer/library adapter only if project dependencies and measured benefits justify it.
6. Execute `node --test tests/*.test.mjs` in this extension and run a browser test in the destination app. Do not equate unit tests with WebGL, physical-device or accessibility certification.
7. Capture evidence before/after, browser console, load error handling, cleanup after repeated navigation, keyboard, resize, and bidirectional scroll.

## Engineering disciplines
1. **Option Schema Validation** — Declare finite option sets, defaults and requires constraints; reject invalid URL values and mismatched combinations.
2. **Variant 3D Binding** — Bind state to named meshes/materials and camera position. Avoid cloning entire GLB on every option change.
3. **History And Share Url** — Serialize only allowed options, support undo/redo and URL restore. Never put sensitive identifiers in share query.
4. **Pricing And Inventory** — Use server validated price/inventory: preview selections are not a trusted checkout total.
5. **Preview Performance** — Warm reusable textures where appropriate, cancel stale loads and release replaced GPU assets.
6. **Accessible Controls** — Use fieldset, label, keyboard, selected/disabled states and clear textual confirmation of resulting config.

## Subskills (load only needed ones)
- `ztc-product-configurator-option-schema-validation` — Declare finite option sets, defaults and requires constraints; reject invalid URL values and mismatched combinations.
- `ztc-product-configurator-variant-3d-binding` — Bind state to named meshes/materials and camera position. Avoid cloning entire GLB on every option change.
- `ztc-product-configurator-history-and-share-url` — Serialize only allowed options, support undo/redo and URL restore. Never put sensitive identifiers in share query.
- `ztc-product-configurator-pricing-and-inventory` — Use server validated price/inventory: preview selections are not a trusted checkout total.
- `ztc-product-configurator-preview-performance` — Warm reusable textures where appropriate, cancel stale loads and release replaced GPU assets.
- `ztc-product-configurator-accessible-controls` — Use fieldset, label, keyboard, selected/disabled states and clear textual confirmation of resulting config.

## Concrete acceptance gate
Reject invalid option combinations; valid update/undo/URL restore work; preview remains correct after rapid selection and mobile orientation change.

## Runtime / dependencies
Pure JavaScript schema + optional Three.js loaded GLB, optional app server. No MCP and no network/CDN at runtime. All new assets must have license/provenance. Preserve existing files by default.

## Failure modes & honesty
No payment, price truth or stock verification is implemented by this local preview module.
- Handle reduced motion by providing a stable meaningful static presentation, not by hiding essential content.
- For CPU/GPU scenes, validate resources after repeated unmount/mount; dispose only owned materials, textures and listeners.
- Record PASS / FAIL / NOT RUN for each test with machine/browser/device and reproduction steps. Never mark untested targets as passing.

## Authoritative references
- https://threejs.org/docs/pages/GLTFLoader.html

---
name: ztp3d-gaussian-splatting
description: "Gaussian Splatting Engine — production-minded architecture, real JS adapters and verification for Codex. No MCP."
---
# Gaussian Splatting Engine — Primary Skill

## Mission
Stream locally hosted Gaussian splat captures into a pre-existing Three.js WebGL scene with stable camera ownership, depth handling, bounded memory and graceful fallback.

## Verified upstream integration
- Source: https://github.com/pmndrs/drei-vanilla
- Local implementation: `../../src/adapters/splat-vanilla.mjs`
- Example: `../../examples/web-studio/`
- Installation: `npm install` from the example directory, then `npm run dev`. Use a local asset path.
- API outline from upstream documentation:
```js
new SplatLoader(renderer); const data = await loader.loadAsync(url); const splat = new Splat(data, camera, {alphaTest:0.1}); scene.add(splat);
```

## Detailed workflow
1. Inventory renderer backend, canvas owner, existing scene graph, assets, viewport, camera and current render loop. Record whether the app uses Three.js, React Three Fiber or Threepipe.
2. Read each of the specialist skills below relevant to the task. Avoid loading unrelated graphics systems or repeating another agent's work.
3. Document success criteria as a rendered screenshot, generated file or serialized output and a failure-state screenshot.
4. Implement using local JavaScript adapters under `src/` and versioned dependencies from `examples/web-studio/package.json`.
5. Use stable IDs, abort stale operations, enforce file limits, and avoid remote content by default.
6. Run `node --test tests/*.test.mjs`, inspect the demo in Chromium and target browsers after dependency installation. Capture evidence with fixed camera, viewport, DPR and clock.
7. Do not mark production verified until GPU/browser/device tests run in the actual destination.

## Specialist skills
- [Splat Asset Ingestion](../ztp3d-gaussian-splatting-asset-ingestion-and-policy/SKILL.md) — Splat Asset Ingestion.
- [Progressive Loading and Failure UX](../ztp3d-gaussian-splatting-streaming-and-load-state/SKILL.md) — Progressive Loading and Failure UX.
- [Multi-Splat Alpha and Depth Ordering](../ztp3d-gaussian-splatting-alpha-compositing-and-sort/SKILL.md) — Multi-Splat Alpha and Depth Ordering.
- [Splat + GLB Hybrid Composition](../ztp3d-gaussian-splatting-hybrid-splat-and-glb/SKILL.md) — Splat + GLB Hybrid Composition.
- [Splat Mobile Quality and RAM](../ztp3d-gaussian-splatting-mobile-memory-profile/SKILL.md) — Splat Mobile Quality and RAM.
- [Splat Camera and Hotspots](../ztp3d-gaussian-splatting-camera-and-occlusion/SKILL.md) — Splat Camera and Hotspots.
- [Splat Asset Ownership and Cleanup](../ztp3d-gaussian-splatting-ownership-and-disposal/SKILL.md) — Splat Asset Ownership and Cleanup.
- [Splat Privacy and Licensing](../ztp3d-gaussian-splatting-privacy-and-provenance/SKILL.md) — Splat Privacy and Licensing.
- [Splat Visual Verification](../ztp3d-gaussian-splatting-real-image-verification/SKILL.md) — Splat Visual Verification.

## General integration protocol
1. Read the existing Perfect_AI code and choose this system only when the project really needs it. Preserve old code, all old skills and feature parity.
2. Pick one renderer owner per canvas and one clock owner per animated property. Do not mix native Three.js, Threepipe and composer loops on the same output.
3. Record installed package versions and verify exact API signatures against project lockfile. Use npm-local imports, not runtime CDN or MCP.
4. Implement the smallest independent slice; include errors, missing asset, unsupported GPU/codec, mobile, RTL and reduced-motion states.
5. Test source structure, build, actual browser, real hardware as separate evidence tiers. Never claim unexecuted checks passed.
6. Report file changes, license/provenance, before/after screenshots or logs, remaining defects and rollback instructions.

## Acceptance gate
- [ ] Core module passes isolated tests; malformed input rejected.
- [ ] Target project's production build succeeds with pinned versions.
- [ ] Screenshot evidence desktop/mobile; resource errors and disposals checked.
- [ ] Actual capability works in the target framework and GPU backend.
- [ ] Original Perfect_AI pack remains untouched.

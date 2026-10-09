---
name: ztp3d-cinematic-postfx
description: "Cinematic Post-Processing Studio — production-minded architecture, real JS adapters and verification for Codex. No MCP."
---
# Cinematic Post-Processing Studio — Primary Skill

## Mission
Build a composable Three.js WebGL post-processing pipeline with controlled color space, quality presets, measurable budgets and safe resize/dispose.

## Verified upstream integration
- Source: https://github.com/pmndrs/postprocessing
- Local implementation: `../../src/adapters/postprocessing.mjs`
- Example: `../../examples/web-studio/`
- Installation: `npm install` from the example directory, then `npm run dev`. Use a local asset path.
- API outline from upstream documentation:
```js
const composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene,camera)); composer.addPass(new EffectPass(camera,new BloomEffect())); composer.render(deltaTime);
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
- [EffectComposer Lifecycle](../ztp3d-cinematic-postfx-composer-lifecycle/SKILL.md) — EffectComposer Lifecycle.
- [Linear Light and Color Grading](../ztp3d-cinematic-postfx-linear-color-pipeline/SKILL.md) — Linear Light and Color Grading.
- [Bloom and Highlight Control](../ztp3d-cinematic-postfx-bloom-thresholds/SKILL.md) — Bloom and Highlight Control.
- [Depth of Field, Lens and Grain](../ztp3d-cinematic-postfx-camera-lens-suite/SKILL.md) — Depth of Field, Lens and Grain.
- [Cinematic Presets and Reproducibility](../ztp3d-cinematic-postfx-grading-presets/SKILL.md) — Cinematic Presets and Reproducibility.
- [Resolution and Frame Budgets](../ztp3d-cinematic-postfx-gpu-budget-and-scaling/SKILL.md) — Resolution and Frame Budgets.
- [Depth-Dependent Effects](../ztp3d-cinematic-postfx-depth-effects/SKILL.md) — Depth-Dependent Effects.
- [Effect Fallback and Context Loss](../ztp3d-cinematic-postfx-quality-fallback/SKILL.md) — Effect Fallback and Context Loss.
- [Cinematic Visual Regression](../ztp3d-cinematic-postfx-postfx-regression/SKILL.md) — Cinematic Visual Regression.

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

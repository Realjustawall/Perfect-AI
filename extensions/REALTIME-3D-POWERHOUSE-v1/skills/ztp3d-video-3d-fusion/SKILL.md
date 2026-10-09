---
name: ztp3d-video-3d-fusion
description: "Video × 3D Fusion Engine — production-minded architecture, real JS adapters and verification for Codex. No MCP."
---
# Video × 3D Fusion Engine — Primary Skill

## Mission
Use deterministic decoded media samples as Three.js video textures sharing one timeline with camera, lighting and 3D objects while correctly cleaning decoded resources.

## Verified upstream integration
- Source: https://github.com/Vanilagy/mediabunny
- Local implementation: `../../src/adapters/video-texture.mjs`
- Example: `../../examples/web-studio/`
- Installation: `npm install` from the example directory, then `npm run dev`. Use a local asset path.
- API outline from upstream documentation:
```js
const input=new Input({source:new BlobSource(file),formats:ALL_FORMATS}); const track=await input.getPrimaryVideoTrack(); const sink=new VideoSampleSink(track); const sample=await sink.getSample(tSeconds); sample.draw(ctx,0,0,w,h); sample.close();
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
- [Media File Ingestion](../ztp3d-video-3d-fusion-media-container-intake/SKILL.md) — Media File Ingestion.
- [Timestamped Video Frames](../ztp3d-video-3d-fusion-precision-sample-seeking/SKILL.md) — Timestamped Video Frames.
- [CanvasTexture Fusion](../ztp3d-video-3d-fusion-canvas-texture-upload/SKILL.md) — CanvasTexture Fusion.
- [Synchronized Camera and Effects](../ztp3d-video-3d-fusion-single-clock-camera/SKILL.md) — Synchronized Camera and Effects.
- [A/V Synchronization and Drift](../ztp3d-video-3d-fusion-audio-video-sync/SKILL.md) — A/V Synchronization and Drift.
- [Non-Linear Editing and Export](../ztp3d-video-3d-fusion-timeline-edit-and-export/SKILL.md) — Non-Linear Editing and Export.
- [Video Masking and Spatial Occlusion](../ztp3d-video-3d-fusion-texture-alpha-and-depth/SKILL.md) — Video Masking and Spatial Occlusion.
- [Codec and Browser Capability Matrix](../ztp3d-video-3d-fusion-browser-codec-matrix/SKILL.md) — Codec and Browser Capability Matrix.
- [Subtitles, Controls and Semantics](../ztp3d-video-3d-fusion-subtitles-and-accessibility/SKILL.md) — Subtitles, Controls and Semantics.
- [Video Decoder and Texture Budget](../ztp3d-video-3d-fusion-memory-and-decoder-budget/SKILL.md) — Video Decoder and Texture Budget.

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

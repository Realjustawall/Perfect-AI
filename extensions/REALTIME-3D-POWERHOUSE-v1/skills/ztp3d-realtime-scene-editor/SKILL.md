---
name: ztp3d-realtime-scene-editor
description: "Real-Time 3D Scene Editor — production-minded architecture, real JS adapters and verification for Codex. No MCP."
---
# Real-Time 3D Scene Editor — Primary Skill

## Mission
Edit spatial scene graphs interactively with selection, transforms, scene JSON, GLB import/export, undo/redo and stable renderer ownership, optionally leveraging Threepipe.

## Verified upstream integration
- Source: https://github.com/repalash/threepipe
- Local implementation: `../../src/adapters/three-editor.mjs`
- Example: `../../examples/web-studio/`
- Installation: `npm install` from the example directory, then `npm run dev`. Use a local asset path.
- API outline from upstream documentation:
```js
const viewer=new ThreeViewer({canvas}); viewer.addPluginSync(new TransformControlsPlugin()); await viewer.load("/assets/model.glb"); const output=await viewer.exportScene(); viewer.dispose();
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
- [Serializable Scene Document](../ztp3d-realtime-scene-editor-editor-document-contract/SKILL.md) — Serializable Scene Document.
- [Raycast Selection and Hierarchy](../ztp3d-realtime-scene-editor-raycast-selection/SKILL.md) — Raycast Selection and Hierarchy.
- [Transform Gizmos and Snapping](../ztp3d-realtime-scene-editor-transform-gizmos/SKILL.md) — Transform Gizmos and Snapping.
- [PBR Material Editor](../ztp3d-realtime-scene-editor-material-inspector/SKILL.md) — PBR Material Editor.
- [Camera and Lighting Tools](../ztp3d-realtime-scene-editor-camera-light-editor/SKILL.md) — Camera and Lighting Tools.
- [GLB/GLTF Import and Export](../ztp3d-realtime-scene-editor-asset-import-and-export/SKILL.md) — GLB/GLTF Import and Export.
- [Undo, Redo and Command Journal](../ztp3d-realtime-scene-editor-scene-history/SKILL.md) — Undo, Redo and Command Journal.
- [Threepipe Viewer Integration](../ztp3d-realtime-scene-editor-threepipe-plugin-bridge/SKILL.md) — Threepipe Viewer Integration.
- [Scene Persistence and Collaboration](../ztp3d-realtime-scene-editor-collaboration-and-state/SKILL.md) — Scene Persistence and Collaboration.
- [Professional Editing UX](../ztp3d-realtime-scene-editor-editor-usability/SKILL.md) — Professional Editing UX.
- [Scene Visual and GPU Verification](../ztp3d-realtime-scene-editor-scene-render-verification/SKILL.md) — Scene Visual and GPU Verification.

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

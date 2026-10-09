---
name: ztp3d-shader-graph
description: "Visual Shader Graph Studio — production-minded architecture, real JS adapters and verification for Codex. No MCP."
---
# Visual Shader Graph Studio — Primary Skill

## Mission
Build editable typed node graphs, reject unsafe/cyclic input and export deterministic Three.js TSL material code; preview on the installed GPU backend and fall back when unsupported.

## Verified upstream integration
- Source: https://github.com/takahirox/tsl-node-editor
- Local implementation: `../../src/core/graph.mjs`
- Example: `../../examples/web-studio/`
- Installation: `npm install` from the example directory, then `npm run dev`. Use a local asset path.
- API outline from upstream documentation:
```js
const graph = createStarterGraph(); const tsl = compileTSL(graph); /* review generated module then bind colorNode to a NodeMaterial in installed Three.js */
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
- [Typed Node Schema](../ztp3d-shader-graph-typed-graph-contract/SKILL.md) — Typed Node Schema.
- [Dependency and Type Analysis](../ztp3d-shader-graph-cycle-and-type-inference/SKILL.md) — Dependency and Type Analysis.
- [TSL Source Generation](../ztp3d-shader-graph-tsl-code-generation/SKILL.md) — TSL Source Generation.
- [Interactive Graph Workspace](../ztp3d-shader-graph-graph-visual-editor/SKILL.md) — Interactive Graph Workspace.
- [GPU Live Material Preview](../ztp3d-shader-graph-material-preview/SKILL.md) — GPU Live Material Preview.
- [Reusable Material Subgraphs](../ztp3d-shader-graph-subgraphs-and-custom-functions/SKILL.md) — Reusable Material Subgraphs.
- [Shader Node Error Localization](../ztp3d-shader-graph-source-maps-and-debugging/SKILL.md) — Shader Node Error Localization.
- [TSL Version Compatibility](../ztp3d-shader-graph-library-and-version-pinning/SKILL.md) — TSL Version Compatibility.
- [Shader Editor Accessibility](../ztp3d-shader-graph-graph-ui-a11y/SKILL.md) — Shader Editor Accessibility.
- [Shader Safety and Resource Limits](../ztp3d-shader-graph-shader-asset-security/SKILL.md) — Shader Safety and Resource Limits.

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

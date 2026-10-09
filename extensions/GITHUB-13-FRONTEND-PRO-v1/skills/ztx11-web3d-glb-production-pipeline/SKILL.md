---
name: ztx11-web3d-glb-production-pipeline
description: "Perfect_AI local offline-first Codex integration: Web 3D Asset Pipeline — GLB/LOD/KTX2. Use for 3D asset cleanup, Blender GLB export, meshopt, draco, textures and collision proxies."
---

# Web 3D Asset Pipeline — GLB/LOD/KTX2

**Source:** https://github.com/openai/plugins/blob/main/plugins/game-studio/skills/web-3d-asset-pipeline/SKILL.md
**Upstream license / handling:** not verified in repository; independent adaptation
**Distribution:** This is a newly authored Perfect_AI adaptation; no upstream SKILL.md text, binaries, fonts or models are redistributed.

## Activation, authority and safeguards
- Use only when the current project task matches the trigger. Other Perfect_AI skills remain installed and authoritative where relevant.
- Respect user-specified brand, locale, design and privacy constraints. Never overwrite existing source or run remote scripts silently.
- Read existing DESIGN.md, AGENTS.md and package-lock before changes; identify the project stack and its versions.
- Prefer built-in/local workflows; do not use or install MCP. For unavailable tools report *not run*, never fabricate browser screenshots, test results or exact page measurements.
- Use exact user-provided facts; mark missing brand choices as provisional; do not assert brand identity without evidence.

## Step-by-step implementation
1. Preserve original source asset and record license, unit scale, pivot and animation clips.
2. Export glTF 2.0/GLB, inspect mesh materials, skins, morph targets and texture count.
3. Set geometry and texture budgets by device tier and scene importance.
4. Compare Meshopt versus Draco size, decode time and rendered quality before adopting.
5. Use KTX2 compression selectively; confirm decoder/transcoder files in deployed build.
6. Create LOD levels and collision proxies when justified by scene and interaction.
7. Test repeated asset mount/unmount and track GPU resources; do not assume transfer bytes equal GPU memory.

## Concrete scenarios and integration cues
- **Scenario:** Animated skinned GLB with KTX2.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** High-poly static product with LOD.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Nested base path breaks decoder binary links.  Deliver concrete implementation, before/after evidence, and a reversible patch.

## Reference implementation / command
```bash
npx @gltf-transform/cli inspect assets/scene.glb
# After visually checking the original, compare candidate optimized exports
npx @gltf-transform/cli optimize assets/scene.glb assets/scene.optimized.glb
```

## Acceptance checks (verify, do not assume)
- [ ] GLB reopens and all animations/skins survive optimization.
- [ ] Bundle includes needed decoder files and URLs work on nested deployment paths.
- [ ] Original model and licensing notes are retained.
- [ ] Test 360px, 390px, 768px and 1440px viewports; one RTL and one LTR path when applicable.
- [ ] Test pointer, keyboard, reverse scroll and reduced motion where applicable.
- [ ] Record test command, runtime/browser, screenshot artifact location and actual failures.

## Common failure modes and corrective strategy
- **Avoid:** Compression may worsen runtime decode on some devices.
- **Avoid:** Do not throw away morphs, normals or skinning silently.
- When a test fails, isolate the smallest owner component. Fix one cause, rerun its reproducer, then a wider regression sweep.
- When a dependency or browser is unavailable, document the blocked test; do not claim the feature passed.

## Contracts and outputs
- `decision.json`: selected approach, why, considered alternatives, dependencies.
- `evidence.json`: test commands, screenshots/logs, viewport, status = passed | failed | not_run.
- `findings.json`: object with id, severity, selector/file, evidence, remediation and confidence.
- `patch-plan.md`: minimal edit list and rollback actions; never auto-apply in review-only sessions.

## Related Perfect_AI skills and stack
- Consult `perfect-ai-master`, `ztx3-nexus-master`, `ztx4-deep-implementation-master`, `ztx5-motion-brand-master`, and `ztx9-frame-space-device-master` only when present and relevant.
- Source the matching reference chapter in `extensions/GITHUB-13-FRONTEND-PRO-v1/references/` after selecting this skill.
- This adaptation cites the upstream project for research; consult the upstream repository for official implementation and updates.

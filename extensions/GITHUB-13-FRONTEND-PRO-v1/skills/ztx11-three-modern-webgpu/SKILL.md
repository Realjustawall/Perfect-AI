---
name: ztx11-three-modern-webgpu
description: "Perfect_AI local offline-first Codex integration: Three.js Modern — WebGPU, TSL and Fallback. Use for Three.js WebGPU, TSL, shader material, version migration and feature support."
---

# Three.js Modern — WebGPU, TSL and Fallback

**Source:** https://github.com/Picaresco/threejs-skill
**Upstream license / handling:** MIT
**Distribution:** This is a newly authored Perfect_AI adaptation; no upstream SKILL.md text, binaries, fonts or models are redistributed.

## Activation, authority and safeguards
- Use only when the current project task matches the trigger. Other Perfect_AI skills remain installed and authoritative where relevant.
- Respect user-specified brand, locale, design and privacy constraints. Never overwrite existing source or run remote scripts silently.
- Read existing DESIGN.md, AGENTS.md and package-lock before changes; identify the project stack and its versions.
- Prefer built-in/local workflows; do not use or install MCP. For unavailable tools report *not run*, never fabricate browser screenshots, test results or exact page measurements.
- Use exact user-provided facts; mark missing brand choices as provisional; do not assert brand identity without evidence.

## Step-by-step implementation
1. Detect installed Three.js version and rendering backend before choosing WebGPU APIs.
2. Define a WebGL2 fallback and static accessible representation; do not require experimental backend on every device.
3. Use correct color space, tone mapping, pixel ratio, material and lights for renderer.
4. Keep camera and subject placement dependent on container bounds and text exclusion zones.
5. Measure render timing separately from loading/compilation.
6. Dispose resources and stop animation when page hidden, unmounted or context lost.

## Concrete scenarios and integration cues
- **Scenario:** WebGPU capable Chrome vs WebGL-only Firefox.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** WebGL context loss during hero animation.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** GPU memory climbs on repeated model swap.  Deliver concrete implementation, before/after evidence, and a reversible patch.

## Reference implementation / command
```js
// Prefer backend detection over unconditional WebGPU initialization.
const supportsWebGPU = typeof navigator !== "undefined" && "gpu" in navigator;
const preferredBackend = supportsWebGPU ? "webgpu-candidate" : "webgl2";
```

## Acceptance checks (verify, do not assume)
- [ ] Scene renders at 390/768/1440 on supported browser or fallback is shown.
- [ ] Changing DPR/resize does not crop the hero model or obscure text.
- [ ] Engine version and backend are recorded in evidence.
- [ ] Test 360px, 390px, 768px and 1440px viewports; one RTL and one LTR path when applicable.
- [ ] Test pointer, keyboard, reverse scroll and reduced motion where applicable.
- [ ] Record test command, runtime/browser, screenshot artifact location and actual failures.

## Common failure modes and corrective strategy
- **Avoid:** Do not claim WebGPU uniformly supported.
- **Avoid:** Do not combine different animation engines against same material transform.
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

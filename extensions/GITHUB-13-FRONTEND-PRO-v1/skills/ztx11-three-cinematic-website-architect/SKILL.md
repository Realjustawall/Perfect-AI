---
name: ztx11-three-cinematic-website-architect
description: "Perfect_AI local offline-first Codex integration: 3D Website Architect — Cinematic Site. Use for premium 3D landing page, R3F hero, GSAP/Anime.js motion, scene composition."
---

# 3D Website Architect — Cinematic Site

**Source:** https://github.com/deveshpunjabi/3d-website-skill/blob/main/skills/3d-website-architect/SKILL.md
**Upstream license / handling:** MIT
**Distribution:** This is a newly authored Perfect_AI adaptation; no upstream SKILL.md text, binaries, fonts or models are redistributed.

## Activation, authority and safeguards
- Use only when the current project task matches the trigger. Other Perfect_AI skills remain installed and authoritative where relevant.
- Respect user-specified brand, locale, design and privacy constraints. Never overwrite existing source or run remote scripts silently.
- Read existing DESIGN.md, AGENTS.md and package-lock before changes; identify the project stack and its versions.
- Prefer built-in/local workflows; do not use or install MCP. For unavailable tools report *not run*, never fabricate browser screenshots, test results or exact page measurements.
- Use exact user-provided facts; mark missing brand choices as provisional; do not assert brand identity without evidence.

## Step-by-step implementation
1. Write a visual narrative and storyboard with scene boundaries and text priorities.
2. Choose minimal 3D primitives or GLB assets before introducing extra dependencies.
3. Create responsive 3D composition based on orthographic/frustum projection and element rectangles.
4. Map scroll progress to one orchestrator; fix ownership of transform/opacity/camera properties.
5. Use loading/fallback/error states for GLB and renderer context loss.
6. Profile GPU at realistic device budgets; disable decoration before compromising readable content.

## Concrete scenarios and integration cues
- **Scenario:** Scrollable scene with pinned 3D object and changing text.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Keyboard-focusable product configurator.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** CSS static fallback when graphics unavailable.  Deliver concrete implementation, before/after evidence, and a reversible patch.

## Reference implementation / command
```js
// Camera placement guidance
// Use Box3.setFromObject(model), bounding sphere radius, and camera fov/aspect.
// Move subject in projected pixels away from measured copy rectangles.
```

## Acceptance checks (verify, do not assume)
- [ ] 3D never occludes hero copy on mobile and at 200% zoom.
- [ ] Bidirectional scroll restores deterministic scene state.
- [ ] A non-WebGL fallback preserves primary message and actions.
- [ ] Test 360px, 390px, 768px and 1440px viewports; one RTL and one LTR path when applicable.
- [ ] Test pointer, keyboard, reverse scroll and reduced motion where applicable.
- [ ] Record test command, runtime/browser, screenshot artifact location and actual failures.

## Common failure modes and corrective strategy
- **Avoid:** Do not use random particle clouds as generic filler.
- **Avoid:** Do not force custom scroll hijacking.
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

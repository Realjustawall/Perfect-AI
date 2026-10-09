---
name: ztc-cinematic-transitions-persistent-3d-camera
description: "Focused implementation and verification of persistent 3d camera in Cinematic Page Transition Engine."
---
# Persistent 3D Camera

Parent: `ztc-cinematic-transitions` — read its acceptance gate and `../../src/transitions.mjs` before editing.

## Required implementation
Keep renderer/canvas owned above route outlet. Interpolate camera position/target/FOV from named scene states and render during transition; never recreate GL context on every navigation.

### Exact workflow
1. Inspect current code ownership and versions; write down the affected components, selectors, assets and timeline owners.
2. Reproduce baseline at 320px/390px/768px/1440px, with pointer/touch, navigation, RTL if applicable, and reduced-motion.
3. Integrate the smallest change confined to this responsibility. Use typed/validated props and explicit lifecycle cleanup. Ensure failed assets, missing browser APIs and aborted interactions degrade gracefully.
4. Instrument observable state (progress, time, active selection, DOMRect, material parameters or frame index). Avoid non-deterministic quality claims.
5. Verify start, mid, end and reverse progress; resize after loading fonts/images; test one failure path and repeated navigation; inspect browser console and screenshots.
6. Compare user-facing behavior and performance to baseline. If a regression is observed, roll back just this change and record the cause.

## Contract
- **Input:** authenticated/validated application state, viewport, user preference, and dependencies explicitly available in target project.
- **Output:** meaningful accessible DOM and stable optional visual enhancement; no hidden input-only navigation.
- **Acceptance:** Navigate forward/back across two routes at 390 and 1440px; shared keys match, focus moves to new heading, browser back works; test missing keys and reduced motion.
- **Limitations:** Web View Transitions do not automatically transform live WebGL objects. Persistent scene interpolation requires app integration.
- **Evidence:** file paths, screenshot artifact paths, browser/driver, commands, actual test results, and unresolved TODOs.

## References
- https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API
- https://gsap.com/docs/v3/Plugins/Flip/
- https://motion.dev/docs/react-layout-animations

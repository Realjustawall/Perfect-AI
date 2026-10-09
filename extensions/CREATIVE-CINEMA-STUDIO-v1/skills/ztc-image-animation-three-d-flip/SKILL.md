---
name: ztc-image-animation-three-d-flip
description: "Focused implementation and verification of three d flip in Advanced Image Animation Engine."
---
# Three D Flip

Parent: `ztc-image-animation` — read its acceptance gate and `../../src/image-effects.mjs` before editing.

## Required implementation
Render both faces with backface-visibility:hidden; keep image ratio, readable captions and avoid flipping content that contains important text.

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
- **Acceptance:** At least 2 image effects have a functioning before/after screenshot, no long main-thread task, reduced-motion static fallback, correct alt text and mobile behavior.
- **Limitations:** Reference CPU displacement is not a 60fps WebGL shader implementation; document the shader uniforms and separately validate integration.
- **Evidence:** file paths, screenshot artifact paths, browser/driver, commands, actual test results, and unresolved TODOs.

## References
- https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
- https://threejs.org/docs/pages/ShaderMaterial.html

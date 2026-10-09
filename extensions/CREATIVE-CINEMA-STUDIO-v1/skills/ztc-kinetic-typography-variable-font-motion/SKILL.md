---
name: ztc-kinetic-typography-variable-font-motion
description: "Focused implementation and verification of variable font motion in Kinetic Typography Studio."
---
# Variable Font Motion

Parent: `ztc-kinetic-typography` — read its acceptance gate and `../../src/kinetic-type.mjs` before editing.

## Required implementation
Animate font-variation-settings within supported axes and valid values; pre-load weights and check layout shift at keyframes.

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
- **Acceptance:** Persian/English headlines render correctly at 320px and 1440px, remain selectable and screen-reader friendly, and pass reversed time seek.
- **Limitations:** Per-character DOM animation can disconnect Persian joining: whole text-run is the default for complex scripts.
- **Evidence:** file paths, screenshot artifact paths, browser/driver, commands, actual test results, and unresolved TODOs.

## References
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
- https://animejs.com/documentation/svg

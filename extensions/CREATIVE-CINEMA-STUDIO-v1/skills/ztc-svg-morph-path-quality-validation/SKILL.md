---
name: ztc-svg-morph-path-quality-validation
description: "Focused implementation and verification of path quality validation in SVG Morphing Laboratory."
---
# Path Quality Validation

Parent: `ztc-svg-morph` — read its acceptance gate and `../../src/svg-morph.mjs` before editing.

## Required implementation
Compare contour topology at progress 0, .25, .5, .75, 1; inspect winding, crossings, unwanted holes and outline distortion.

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
- **Acceptance:** Two shapes morph forward/back smoothly without invalid path, button stays keyboard operable; unsupported shapes use static transition.
- **Limitations:** The bundled polyline interpolator does not solve arbitrary SVG path morphing, holes or multiple subpaths.
- **Evidence:** file paths, screenshot artifact paths, browser/driver, commands, actual test results, and unresolved TODOs.

## References
- https://animejs.com/documentation/svg/morphto
- https://github.com/veltman/flubber

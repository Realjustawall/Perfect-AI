---
name: ztc-editorial-composition-photo-art-direction
description: "Focused implementation and verification of photo art direction in Editorial Composition Engine."
---
# Photo Art Direction

Parent: `ztc-editorial-composition` — read its acceptance gate and `../../src/editorial.mjs` before editing.

## Required implementation
Control crop focal point, responsive srcset, caption, credits and alt text; avoid distorting faces.

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
- **Acceptance:** Magazine composition remains readable at 320/768/1440px and with Persian text expansion, no overlap or missing image attribution.
- **Limitations:** Seeded grid algorithm gives repeatable candidate layouts, not automatic human-grade art direction.
- **Evidence:** file paths, screenshot artifact paths, browser/driver, commands, actual test results, and unresolved TODOs.

## References
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
- https://developer.mozilla.org/en-US/docs/Web/CSS/clamp

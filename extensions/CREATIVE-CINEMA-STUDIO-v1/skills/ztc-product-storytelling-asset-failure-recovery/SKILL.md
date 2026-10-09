---
name: ztc-product-storytelling-asset-failure-recovery
description: "Focused implementation and verification of asset failure recovery in Apple-Style Product Storytelling."
---
# Asset Failure Recovery

Parent: `ztc-product-storytelling` — read its acceptance gate and `../../src/product-story.mjs` before editing.

## Required implementation
On missing frames show nearest decoded frame or static poster; reject error loops, disclose reduced-motion version.

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
- **Acceptance:** 120-frame storyboard maps exact first/mid/last frames, supports reverse scroll, bounds cache, renders a static poster on 404.
- **Limitations:** The package contains a procedural frame demo, not licensed Apple product assets or a finished 120-frame photo sequence.
- **Evidence:** file paths, screenshot artifact paths, browser/driver, commands, actual test results, and unresolved TODOs.

## References
- https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode

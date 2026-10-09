---
name: ztc-procedural-layout-responsive-grid-constraints
description: "Focused implementation and verification of responsive grid constraints in Procedural Layout Animation."
---
# Responsive Grid Constraints

Parent: `ztc-procedural-layout` — read its acceptance gate and `../../src/layout-motion.mjs` before editing.

## Required implementation
Ensure column mapping for small/medium/large viewports and touch target order. Never change screen-reader DOM order merely for visuals.

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
- **Acceptance:** Animated grid works for 1, 8 and 100 cards, resize changes columns predictably, and keyboard navigation follows expected content order.
- **Limitations:** Transform-deformed layout remains in original hit-testing/layout flow; avoid interactive overlaps.
- **Evidence:** file paths, screenshot artifact paths, browser/driver, commands, actual test results, and unresolved TODOs.

## References
- https://motion.dev/docs/react-layout-group
- https://gsap.com/docs/v3/Plugins/Flip/

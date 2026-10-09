---
name: ztc-motion-physics-spring-integration
description: "Focused implementation and verification of spring integration in Motion Physics Language."
---
# Spring Integration

Parent: `ztc-motion-physics` — read its acceptance gate and `../../src/motion-physics.mjs` before editing.

## Required implementation
Use mass/stiffness/damping and substep time integration. Keep frame delta bounded and match between pointer/scroll/navigation.

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
- **Acceptance:** Identical initial state and timestep sequence produces identical output, springs converge, collisions displace objects outside obstacles.
- **Limitations:** Variable-step simulations cannot guarantee exact offline seek. Use stored snapshots or fixed-step replay.
- **Evidence:** file paths, screenshot artifact paths, browser/driver, commands, actual test results, and unresolved TODOs.

## References
- https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion

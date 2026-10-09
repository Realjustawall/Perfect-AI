---
name: ztx4-interaction-system
description: "Deep implementation master for Advanced Interaction System with 19 targeted Codex skills, code, tests and no MCP. Additive to all existing Perfect_AI versions."
---

# Advanced Interaction System

Make rich gestures learnable, keyboard-equivalent, robust and conflict-free with animation.

## Mandatory sequence
1. Define interaction states and transition diagram; each fancy effect must preserve the primary user action.
2. Use pointer events with capture and appropriate touch-action; avoid global hijacking.
3. Specify keyboard alternatives, focus indication and latency budgets.
4. Animate from input state through one renderer owner; clamp inertial or spring motion.
5. Test cancel, Esc, drag outside, multitouch, touch without hover and reduced motion.

## Skill routing
Choose only technique files needed for this project from `DEEP-IMPLEMENTATION-v2/references/interaction-system.md`. Never indiscriminately load all 300+ skills into context.

## Runbook
Inputs: pointer/keyboard gestures and interaction/state specification, touch-action, inertial limits.

Implementation: pointer capture + cancellation, spring integration with bounded dt, accessible semantic buttons and keyboard equivalent; one animation owner.

Tests: pointercancel/Escape/blur, drag beyond bounds, touch no-hover, keyboard, reduced-motion and multi-pointer conflict.

## Acceptance gates
1. Keyboard users complete the same interaction.
2. Pointercancel/Escape/blur reset state without stuck drag.
3. Effects do not move or hide semantic hit target.

## Runnable assets
`extensions/DEEP-IMPLEMENTATION-v2/examples` and `tools` (installed main package). See `RUNBOOK-FA.md`.

## Sources
- [rive](https://rive.app/docs/runtimes/react/react)
- [wcag](https://www.w3.org/TR/WCAG22/)
- [animejs](https://animejs.com/documentation/)

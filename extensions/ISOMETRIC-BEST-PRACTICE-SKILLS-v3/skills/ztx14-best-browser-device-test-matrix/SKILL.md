---
name: ztx14-best-browser-device-test-matrix
description: Build a focused test matrix for fine/coarse pointers, keyboard, reduced motion, orientation, and small viewports.
---

# Test interactions across input and viewport capability classes

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Any new responsive animation, drag mechanic, pointer-follow effect, isometric world control, or component release.

## Procedure
1. Start with the target browser matrix from the real project audience rather than attempting every possible device combination.
2. Cover at minimum: desktop fine pointer, touch/coarse pointer, keyboard-only navigation, reduced-motion preference, small viewport, and landscape/short-height layout where relevant.
3. Test semantic behavior separately from animation appearance: selection, focus, drag outcome, close/reset, and state persistence.
4. Use Playwright device/viewport/context emulation for repeatability, then spot-check physical mobile behavior for gesture arbitration or GPU-specific problems.
5. Include RTL if the product supports right-to-left locales, checking coordinate direction and spatial labels.
6. Record exactly which combinations ran and distinguish automated emulation from physical-device verification.

## Avoid
- Do not equate a touch-emulated browser test with real-device verification.
- Do not test only the default viewport and mouse path.
- Do not report untested browsers as supported because the code compiles.

## Acceptance checks
- [ ] Each risk-relevant input class is covered.
- [ ] Automated versus physical tests are clearly labelled.
- [ ] Known gaps have an explicit follow-up or documented reason.

## Primary references
- https://playwright.dev/docs/emulation
- https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events/Using_Pointer_Events
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.

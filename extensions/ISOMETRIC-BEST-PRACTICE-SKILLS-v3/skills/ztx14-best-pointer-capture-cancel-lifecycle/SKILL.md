---
name: ztx14-best-pointer-capture-cancel-lifecycle
description: Make drag and press interactions robust to pointer leaving the target, browser cancellation, and interrupted device input.
---

# Handle pointer capture, cancellation, and lost input

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Dragging isometric objects, sliders, world panning, custom handles, and any interaction that spans beyond the initial hit target.

## Procedure
1. Use Pointer Events when the gesture should work consistently with mouse, touch, and pen.
2. On a valid pointerdown, record the pointerId and acquire pointer capture when needed so subsequent events keep reaching the gesture owner.
3. Handle `pointerup`, `pointercancel`, and `lostpointercapture` as distinct terminal paths; all must release temporary state and restore cursor/selection policies.
4. Ignore unrelated pointerIds or define explicitly whether multi-pointer input is supported.
5. Use `touch-action` narrowly; do not disable browser gestures at the whole-page level to make a component work.
6. Write end-to-end tests for leaving the element mid-drag, cancellation, route unmount, and a second pointer.

## Avoid
- Do not rely only on `pointerleave` to finalize a drag.
- Do not assume `pointerup` always occurs.
- Do not leave the UI in a pressed/dragging visual state after cancellation.

## Acceptance checks
- [ ] All terminal events reset state.
- [ ] A second gesture can start after cancel.
- [ ] Touch scrolling outside the intended drag area still behaves normally.

## Primary references
- https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events/Using_Pointer_Events
- https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture
- https://developer.mozilla.org/en-US/docs/Web/API/Element/pointercancel_event

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.

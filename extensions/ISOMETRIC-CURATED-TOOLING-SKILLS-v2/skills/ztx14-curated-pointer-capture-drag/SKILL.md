---
name: ztx14-curated-pointer-capture-drag
description: Implement drag and gesture interactions that survive leaving the target, handle cancellation, and share behavior across mouse, pen and touch.
---

# Robust drag interactions with Pointer Capture

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Standard state model
`idle → pressed → dragging → committed | cancelled → idle`.
Keep the active `pointerId` and drag origin explicitly; reject stray pointers unless multi-pointer behavior is intentionally supported.

## Implementation rules
1. On `pointerdown`, validate the button/target, record origin and active pointer id, then use `setPointerCapture(pointerId)` when the interaction needs continued events outside the hit target.
2. Process `pointermove` from the captured pointer only; normalize coordinates against the correct root and clamp where the world has bounds.
3. On `pointerup`, commit only if the drop/threshold rules pass. On `pointercancel` or lost capture, restore or cancel predictably.
4. Release capture when appropriate, and reset state when the component unmounts or route changes.
5. Treat `touch-action` as a deliberate product choice: do not disable page scrolling over large areas without a clear reason.
6. Provide keyboard and tap alternatives for essential drag actions.

## Tests
Simulate movement outside bounds, cancellation, touch interruption, wrong pointer id, rapid down/up, resize during drag, and dropped targets that unmount.

## Primary references
- [pointer-events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
- [mdn-pointer-capture](https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture)
- [wcag22](https://www.w3.org/TR/WCAG22/)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.

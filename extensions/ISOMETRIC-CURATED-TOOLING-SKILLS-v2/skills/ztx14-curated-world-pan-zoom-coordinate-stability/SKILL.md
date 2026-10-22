---
name: ztx14-curated-world-pan-zoom-coordinate-stability
description: Implement or review world pan/zoom without coordinate drift, accidental page gestures, or broken selection after scaling.
---

# Keep pan and zoom anchored and input-safe in the Isometric World

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Inspect first
Use the installed `world` component and its public API; avoid writing a parallel camera controller before understanding its existing state and coordinate transform.

## Interaction model
- Track world transform, viewport transform and pointer origin separately.
- Zoom around the cursor/gesture anchor when intended: the world point under the pointer should stay under it after scaling.
- Clamp zoom and pan to documented scene bounds; support keyboard-accessible zoom controls and a reset action.
- During drag, preserve the mapping across resize/orientation change by cancelling or rebasing the gesture.
- Resolve pointer capture and `pointercancel`; don't allow a drag to leave the scene in a stuck state.
- Distinguish a click/select from a pan using a deliberate movement threshold and reset it after cancellation.
- Make mobile gestures compatible with page scrolling; test `touch-action` in context rather than applying `none` globally.

## Primary references
- [isometric](https://isometric.buildlab.in/llms.txt)
- [pointer-events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
- [mdn-pointer-capture](https://developer.mozilla.org/en-US/docs/Web/API/Element/setPointerCapture)
- [resize-observer](https://developer.mozilla.org/en-US/docs/Web/API/Resize_Observer_API)
- [wcag22](https://www.w3.org/TR/WCAG22/)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.

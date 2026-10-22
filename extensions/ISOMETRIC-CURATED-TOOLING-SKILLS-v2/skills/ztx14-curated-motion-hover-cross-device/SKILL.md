---
name: ztx14-curated-motion-hover-cross-device
description: Implement hover affordances with Motion’s gesture recognition or CSS capability queries so touch interactions do not remain in a fake hover state.
---

# Cross-device hover without sticky touch states

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Use for
Buttons, cards, labels, and non-essential decorative hover. It is not a replacement for click/tap or keyboard semantics.

## Rules
1. Prefer Motion’s `whileHover`/`hover()` when the interaction should only count as an actual hover gesture. Its hover API is designed to filter emulated touch hover states.
2. For CSS-only effects, scope hover with `@media (hover: hover) and (pointer: fine)`. Provide active, focus-visible, and selected states separately.
3. Do not hide important text, actions, or state exclusively behind hover. A tap target must work without hover.
4. Reset transient visual state on pointer cancel, blur, route transition, and component unmount.
5. Verify keyboard focus, touch tap, pen input, mouse enter/leave, and leaving the browser viewport.

## Acceptance matrix
- Mouse: enter and leave settle without flicker.
- Touch: tap activates the actual action; a stale hover does not persist.
- Keyboard: focus visibly communicates the same actionable affordance.
- Reduced motion: state change remains apparent with minimal movement.

## Primary references
- [motion-hover](https://motion.dev/docs/react-hover-animation)
- [pointer-events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
- [tailwind-responsive](https://tailwindcss.com/docs/responsive-design)
- [reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.

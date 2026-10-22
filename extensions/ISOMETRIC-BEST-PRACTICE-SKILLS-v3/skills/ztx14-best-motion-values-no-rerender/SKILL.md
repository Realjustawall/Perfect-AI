---
name: ztx14-best-motion-values-no-rerender
description: Implement cursor-follow and continuous gestures without setting React state on every pointer movement.
---

# Drive high-frequency motion with Motion Values

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Pointer-follow, tilt, magnetic effects, live velocity, scroll-linked values, and any high-frequency visual value.

## Procedure
1. Keep React state for semantic state such as selected object, open panel, or committed value; do not use it as a 60–120 Hz animation transport.
2. Use Motion values for raw X/Y or progress, then compose with `useTransform` and optionally `useSpring`.
3. Write to the Motion value from the event and let Motion update the animated DOM/SVG properties.
4. Normalize coordinates to the element bounds, clamp the range, and reset or settle to a neutral value when the interaction ends.
5. For SVG, animate documented numeric attributes or transforms, and confirm that the target component is not already being controlled by Isometric’s engine.
6. Profile before adding throttles; Motion values are already designed to batch updates without a React render for every value change.

## Avoid
- Do not call `setState` for every pointermove solely to update a transform.
- Do not read layout repeatedly inside a frame loop.
- Do not share one Motion value across unrelated components unless synchronized motion is intentional.

## Acceptance checks
- [ ] High-frequency changes avoid unnecessary React renders.
- [ ] Pointer values are normalized and bounded.
- [ ] A reset/exit state is defined and tested.

## Primary references
- https://motion.dev/docs/react-motion-value
- https://motion.dev/docs/react-use-spring
- https://motion.dev/docs/react-use-transform

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.

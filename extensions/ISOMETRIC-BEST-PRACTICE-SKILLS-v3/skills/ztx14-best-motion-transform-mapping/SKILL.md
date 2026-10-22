---
name: ztx14-best-motion-transform-mapping
description: Map local pointer coordinates and velocity to limited rotation, depth, highlight, or parallax with stable reset behavior.
---

# Map pointer coordinates to bounded visual responses

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Isometric-adjacent DOM cards, overlays, labels, or decorative layers; not as a replacement for figure hit-testing.

## Procedure
1. Use `getBoundingClientRect()` at interaction start or resize, then compute normalized coordinates in [-1, 1].
2. Map the normalized input through a clamped transform to conservative outputs such as a few degrees of tilt, small translation, or bounded highlight offsets.
3. Use separate mapping ranges for X and Y; invert an axis only when it matches the visual coordinate convention.
4. Use spring smoothing for noisy inputs and tune stiffness/damping against the object size and motion amplitude.
5. Reset to neutral on pointer leave, cancel, hidden tab, reduced-motion change, or target removal.
6. Check perspective and transform-origin against nested transforms so the interaction does not drift when the component is scaled.

## Avoid
- Do not directly equate viewport coordinates with local coordinates.
- Do not allow unbounded rotation or deep parallax on small elements.
- Do not use large spatial transforms as the only indication of focus or selection.

## Acceptance checks
- [ ] Output is clamped, normalized, and reversible.
- [ ] Coordinates stay correct after scroll/resize.
- [ ] Reduced-motion and touch behavior are defined.

## Primary references
- https://motion.dev/docs/react-use-transform
- https://motion.dev/docs/react-use-spring
- https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events/Using_Pointer_Events

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.

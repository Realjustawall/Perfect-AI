# Premium Pointer Motion

Pointer-coordinates are ALWAYS element-local unless an intentional full-viewport cursor trail is being built. `getBoundingClientRect` is the coordinate space after scrolling; pointer x = ((clientX - rect.left) / rect.width)*2 -1. If transforms are applied to the target that itself defines pointer local space, use a nontransformed outer hit region and animate inner content. This prevents moving-target oscillation.

## Physically credible motion
Drive one rAF, with filtered pointer target; clamp maximum displacement and acceleration. Start responsive interactions only when `(hover: hover) and (pointer:fine) and (prefers-reduced-motion: no-preference)` holds. Run cleanup on route unmount and reduced motion changes. Magnetic buttons generally should be displacement <= 10-12px; 3D tilt <= 7deg. This is a suggested safe default, not a universal UX law.

## Event contract
- Pointer entered: start target tracking.
- Pointer move: update desired target scalar; no direct layout mutations.
- Each frame: damp/lerp state and write compositor-friendly transforms only.
- Pointer leave/cancel: target to zero and settle.
- Touch: replace hover-only behavior with press and long-press where relevant.
- Keyboard: `:focus-visible` provides parallel feedback.
- Multiple 3D components: only one active raycast selected node if mutually exclusive; no duplicate global loops.

## Integrating scroll + hover without transform fights
DOM: outer element owns scroll transform; nested inner child owns pointer tilt. Three: `animationPivot` owns scroll rotation; `localPointerPivot` owns pointer; `alignmentPivot` owns original asset centering.

## Test
Move mouse across edges during fast scroll. Resize while moving. Apply zoom 200% with input. Turn reduced motion on while loop active. Ensure there is no click-hitbox drift, sticky hover on touch, GPU leaks, massive DOM cursor fragments or unexpected z-index overlay.

Sources: https://github.com/iart-ai/web-animation-skills , https://motion.dev/docs/react-use-spring

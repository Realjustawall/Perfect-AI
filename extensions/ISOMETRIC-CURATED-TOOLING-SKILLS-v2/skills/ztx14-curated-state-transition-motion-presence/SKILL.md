---
name: ztx14-curated-state-transition-motion-presence
description: Coordinate enter/exit and presence transitions so components remain correct when state changes rapidly or routes unmount.
---

# Animate state transitions without making state animation-dependent

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Model states first
List stable states (`closed`, `opening`, `open`, `closing`, `disabled`, `error`) and allowed transitions before writing animation code. The state machine owns the truth; the animation only renders a transition between states.

## Rules
1. Use Motion presence facilities only when exit animation is desired and the component lifecycle supports it; otherwise keep a simpler CSS transition.
2. Ensure a second action interrupts or retargets the current animation deterministically.
3. Do not delay essential state updates until an animation completes. Respect cancellation and reduced-motion paths.
4. Keep keyboard focus valid when closing overlays/panels; restore it to the trigger if needed.
5. Avoid duplicate IDs and stale listeners while an exiting child remains mounted.
6. Test rapid open-close-open, route navigation during motion, reduced motion, and unmount during exit.

## Primary references
- [motion-hover](https://motion.dev/docs/react-hover-animation)
- [motion-scroll](https://motion.dev/docs/react-use-scroll)
- [react-effect](https://react.dev/reference/react/useEffect)
- [reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion)
- [wcag22](https://www.w3.org/TR/WCAG22/)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.

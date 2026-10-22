---
name: ztx14-curated-motion-react-pointer-spring
description: Build lightweight pointer-follow, magnetic, tilt, and cursor-responsive DOM motion with Motion for React without rerendering on every pointer move.
---

# React pointer-follow with Motion values and springs

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Preferred fit
Use for DOM overlays, cards, labels, tooltips, and UI chrome. Do not replace Isometric’s own pointer/geometry engine for its figures.

## Implementation pattern
```tsx
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

function PointerCard() {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 260, damping: 28, mass: 0.35 });
  const y = useSpring(rawY, { stiffness: 260, damping: 28, mass: 0.35 });
  const rotateY = useTransform(x, [-1, 1], [-5, 5]);
  const rotateX = useTransform(y, [-1, 1], [4, -4]);

  function move(e: React.PointerEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    rawX.set(((e.clientX - r.left) / r.width) * 2 - 1);
    rawY.set(((e.clientY - r.top) / r.height) * 2 - 1);
  }
  function reset() { rawX.set(0); rawY.set(0); }
  return <motion.div onPointerMove={move} onPointerLeave={reset}
    style={{ rotateX, rotateY, transformPerspective: 800 }} />;
}
```

## Adapt before use
- The component needs a real rendered child and styles; this fragment illustrates the signal path, not a drop-in full component.
- Check `pointerType`, coarse pointer, and reduced motion before enabling continuous tilt.
- Use local normalized coordinates; clamp output and avoid read/write layout work inside the frame loop.
- If this card belongs to an existing gesture or Isometric figure, integrate with the current owner instead of double-subscribing pointer streams.

## Tune
Use spring values as design tokens. Reduce rotation for small cards, high-density layouts, or motion-sensitive paths. Start with low amplitude and validate on real hardware.

## Primary references
- [motion-spring](https://motion.dev/docs/react-use-spring)
- [motion-transform](https://motion.dev/docs/react-use-transform)
- [pointer-events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
- [reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.

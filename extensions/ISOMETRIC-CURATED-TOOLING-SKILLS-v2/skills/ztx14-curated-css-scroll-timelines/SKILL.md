---
name: ztx14-curated-css-scroll-timelines
description: Prefer native CSS scroll-driven animation for simple progress-linked effects, with a safe fallback for unsupported or reduced-motion environments.
---

# Progressive enhancement with native CSS scroll timelines

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Good fit
A reveal, progress indicator, or opacity/transform tied linearly to document or element visibility without complex sequencing or event-driven interaction.

## Procedure
1. Check current target browser support and the project's CSS pipeline; do not assume all devices support scroll timelines.
2. Provide a correct static/default state first, then layer the scroll timeline enhancement inside feature detection such as `@supports (animation-timeline: view())`.
3. Animate compositor-friendly properties, primarily `transform` and `opacity`, and avoid layout-changing keyframes.
4. Avoid making essential content invisible until a timeline starts. A disabled/unsupported timeline must not strand content in a hidden state.
5. Respect `prefers-reduced-motion` and test nested scroll containers and content-height changes.

## Selection rule
Use CSS timelines for simple declarative mapping; Motion `useScroll` for React motion values/composition; GSAP for multi-step sequences, pinning, labels, or complex orchestration.

## Primary references
- [css-scroll](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations)
- [web-animation-performance](https://web.dev/articles/animations-guide)
- [reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion)
- [motion-scroll](https://motion.dev/docs/react-use-scroll)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.

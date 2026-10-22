---
name: ztx14-curated-reduced-motion-system
description: Apply the user motion preference consistently across CSS, Motion, GSAP, Isometric and embedded animation players.
---

# Systemic reduced-motion behavior across every engine

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Required policy
`prefers-reduced-motion: reduce` is a behavior mode, not just a shorter duration. Decide which effects disappear, which become instant, and which informational transitions remain static but understandable.

## Audit
1. Inventory every motion owner: CSS keyframes, Motion values/gestures, GSAP timelines/ScrollTrigger, Isometric engine loops, Rive/Lottie, and custom `requestAnimationFrame`.
2. Ensure the preference is respected in each owner; a CSS media query alone will not stop a JavaScript physics loop.
3. Replace large translation, panning, zooming, parallax, pulsing and continuous rotation with instant or restrained state changes as appropriate.
4. Keep state discoverable without motion: text, icon, selected state, progress values, focus outlines and accessible names.
5. Handle preference changes while the page is open and avoid leaving a component mid-animation.
6. Provide a test path that forces the media feature in automated tests.

## Acceptance
No essential state depends on seeing animation; disabling movement does not break controls, layout, or completion feedback.

## Primary references
- [reduced-motion](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion)
- [motion-spring](https://motion.dev/docs/react-use-spring)
- [gsap-matchmedia](https://gsap.com/docs/v3/GSAP/gsap.matchMedia/)
- [wcag22](https://www.w3.org/TR/WCAG22/)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.

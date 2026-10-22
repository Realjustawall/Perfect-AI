---
name: ztx14-best-animation-engine-selection
description: Select the smallest animation tool that fits the interaction and assign one owner to each animated property.
---

# Choose CSS, Motion, GSAP, or the existing Isometric engine

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Before introducing an animation library or implementing a new effect on an Isometric component.

## Procedure
1. Use the Isometric engine for its built-in figure geometry, SVG interaction, and object-specific response unless the verified component contract says otherwise.
2. Use CSS transitions/keyframes for isolated, simple hover/color/opacity changes with no gesture state or complex orchestration.
3. Use Motion for React for React-state transitions, gestures, springs, layout/presence, and pointer-linked DOM/SVG values.
4. Use GSAP/ScrollTrigger for choreographed timelines, precise scroll scrubbing, and complex multi-section sequences that justify an imperative timeline.
5. Use native CSS scroll-driven animation when the requirement is simple progress-to-style mapping and the supported-browser/fallback policy is acceptable.
6. Write a short decision note when selecting a new engine: need, alternative rejected, ownership boundary, cleanup, reduced-motion behavior, and test plan.

## Avoid
- Do not animate the same transform/opacity/attribute from two engines.
- Do not add Three.js, Lenis, Rive, or Lottie for a small DOM/SVG effect.
- Do not replace built-in Isometric picking or animation because an external library looks easier.

## Acceptance checks
- [ ] One source of truth owns every animated property.
- [ ] The chosen engine satisfies the interaction with the least complexity.
- [ ] Fallback and cleanup behavior are specified.

## Primary references
- https://motion.dev/docs/react
- https://gsap.com/docs/v3/GSAP/gsap.matchMedia/
- https://web.dev/articles/animations-guide
- https://isometric.buildlab.in/llms.txt

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.

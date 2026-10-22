---
name: ztx14-best-gsap-react-context-cleanup
description: Scope imperative GSAP timelines to the component lifecycle and reliably revert animations when dependencies or breakpoints change.
---

# Use GSAP in React with context and revert cleanup

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Complex scroll stories and orchestrated timelines where GSAP is clearly more appropriate than declarative Motion.

## Procedure
1. Confirm GSAP and relevant plugins are already available or propose their addition explicitly.
2. Use the project’s supported React integration pattern (for example, the official `useGSAP` helper when installed) or `gsap.context()` with a scoped root.
3. Create timelines inside the component lifecycle; store refs for elements and avoid broad global selectors.
4. Revert scoped work on cleanup and when breakpoint-specific setup stops matching.
5. Use `gsap.matchMedia()` for responsive variants; keep media conditions local to the animation owner.
6. Test React Strict Mode mounting, route navigation, resize across breakpoints, and re-entry to the section.

## Avoid
- Do not leave ScrollTriggers or timelines alive after unmount.
- Do not use global selectors that can animate a second copy of the component.
- Do not run GSAP on properties already controlled by Motion or Isometric.

## Acceptance checks
- [ ] All timelines/ScrollTriggers are scoped and reverted.
- [ ] Repeated mount/unmount creates no duplicate effects.
- [ ] Breakpoint changes leave only the matching configuration active.

## Primary references
- https://gsap.com/docs/v3/Installation/
- https://gsap.com/docs/v3/GSAP/gsap.matchMedia/
- https://react.dev/reference/react/useEffect

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.

---
name: ztx14-best-motion-bundle-budget-lazymotion
description: Use Motion’s lightweight feature-loading options where appropriate and avoid shipping unused animation features.
---

# Keep Motion bundle cost proportional to the features used

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Production bundles, landing pages, interactive Isometric demos, and apps where only a small subset of Motion is required.

## Procedure
1. Measure the current production bundle and identify which Motion features are actually used before optimizing.
2. Prefer ordinary CSS for simple isolated transitions if adding Motion solely for that effect is not justified.
3. If Motion is already required, evaluate its documented `LazyMotion`/feature-loading pathway for the project version and component needs.
4. Check whether components need drag, layout, exit, SVG, or only animate/whileHover; load no more than the features needed.
5. Validate SSR/hydration and first interaction after any lazy-loading change.
6. Compare production bundle output and interaction behavior before/after; do not infer savings solely from source imports.

## Avoid
- Do not add a custom dynamic-import framework where the library already provides a supported path.
- Do not remove features from a shared chunk without measuring impact on other routes.
- Do not sacrifice initial interactivity or error handling for a theoretical bundle reduction.

## Acceptance checks
- [ ] A before/after bundle measure is recorded.
- [ ] The shipped feature set matches actual usage.
- [ ] Production build and interaction tests pass.

## Primary references
- https://motion.dev/docs/react-lazy-motion
- https://motion.dev/docs/react

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.

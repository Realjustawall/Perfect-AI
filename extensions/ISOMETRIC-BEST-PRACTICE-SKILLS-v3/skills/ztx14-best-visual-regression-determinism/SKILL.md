---
name: ztx14-best-visual-regression-determinism
description: Stabilize screenshots for animation-heavy UI with controlled timing, fonts, assets, viewport, and reduced-motion conditions.
---

# Make animation visual regression tests deterministic

> Best-practice implementation skill. Inspect the real project, installed package versions, current component contract, and existing animation ownership before changing code. This skill adds guidance only; it does not install dependencies by itself.

## When to use
Playwright screenshot baselines, Storybook visual tests, CI screenshot diffs, or flaky animation assertions.

## Procedure
1. Fix viewport, browser version, device scale factor, fonts, locale, color scheme, and test data for the baseline.
2. Wait for the specific application-ready condition rather than an arbitrary sleep. Stop or settle nonessential animation before capturing a snapshot.
3. Use the test runner’s supported reduced-motion emulation or an explicit deterministic test mode when appropriate.
4. Ensure images and web fonts have loaded; disable caret blinking and other nonsemantic time-varying effects in the test harness.
5. Keep interaction screenshots after the same explicit action sequence. Use tolerances only for known rendering differences and document them.
6. Review the actual diff and do not automatically update baselines when a change is unexpected.

## Avoid
- Do not use broad long timeouts as the main stabilization strategy.
- Do not mask the entire animated component to silence visual diffs.
- Do not treat a pixel baseline as proof of accessibility or interaction correctness.

## Acceptance checks
- [ ] The same scenario yields repeatable snapshots in the target CI environment.
- [ ] Baseline updates are reviewed.
- [ ] Interaction and accessibility tests supplement visual diffs.

## Primary references
- https://playwright.dev/docs/test-snapshots
- https://playwright.dev/docs/emulation
- https://storybook.js.org/docs/writing-tests

## Reporting requirement
State which files were inspected, what changed, and which checks actually ran. Do not claim a browser/device was verified unless it was tested.

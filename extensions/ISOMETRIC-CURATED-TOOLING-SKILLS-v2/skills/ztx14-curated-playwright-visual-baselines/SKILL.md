---
name: ztx14-curated-playwright-visual-baselines
description: Use Playwright screenshot snapshots to catch layout and motion regressions while controlling time, hover state, fonts, viewport and browser variance.
---

# Make animation screenshots deterministic before visual comparison

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Baseline procedure
1. Run visual tests in a pinned browser/OS/container, with stable fonts and the same viewport and device scale factor as the baseline.
2. Navigate to a deterministic state. Wait for application readiness and fonts; seed random values when justified. Avoid arbitrary sleeps when a real signal exists.
3. Move the pointer to a neutral area for the resting-state screenshot, or deliberately set the intended hover and document it.
4. For animated components, take snapshots at named states (rest, hover, pressed, selected) rather than at a random point in a perpetual animation.
5. Mask only truly volatile regions; broad masks can hide regressions.
6. Review diffs visually before updating snapshots. Do not automatically approve changed goldens in CI.

## Example
```ts
await page.goto('/');
await page.evaluate(() => document.fonts.ready);
await page.mouse.move(-1, -1);
await expect(page.getByTestId('isometric-demo')).toHaveScreenshot('isometric-rest.png');
```
Use the real app's stable test id. Keep baselines generated and compared in the same rendering environment.

## Primary references
- [playwright-snapshots](https://playwright.dev/docs/test-snapshots)
- [playwright-page](https://playwright.dev/docs/api/class-page)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.

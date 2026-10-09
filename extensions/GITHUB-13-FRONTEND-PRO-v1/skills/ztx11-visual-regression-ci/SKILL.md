---
name: ztx11-visual-regression-ci
description: "Perfect_AI local offline-first Codex integration: Navigator — Visual Regression and CI. Use for visual snapshots, CI screenshot baselines, Storybook, Percy/Chromatic/Backstop."
---

# Navigator — Visual Regression and CI

**Source:** https://github.com/alekspetrov/navigator/blob/main/skills/visual-regression/SKILL.md
**Upstream license / handling:** MIT
**Distribution:** This is a newly authored Perfect_AI adaptation; no upstream SKILL.md text, binaries, fonts or models are redistributed.

## Activation, authority and safeguards
- Use only when the current project task matches the trigger. Other Perfect_AI skills remain installed and authoritative where relevant.
- Respect user-specified brand, locale, design and privacy constraints. Never overwrite existing source or run remote scripts silently.
- Read existing DESIGN.md, AGENTS.md and package-lock before changes; identify the project stack and its versions.
- Prefer built-in/local workflows; do not use or install MCP. For unavailable tools report *not run*, never fabricate browser screenshots, test results or exact page measurements.
- Use exact user-provided facts; mark missing brand choices as provisional; do not assert brand identity without evidence.

## Step-by-step implementation
1. Pick the smallest stable units: story, route, component state.
2. Fix font readiness, animation time, network data, locale, DPR and browser version.
3. Capture baselines and document approval ownership.
4. Compare images with threshold; save failure diff heatmaps and DOM snapshots.
5. Integrate into CI as opt-in check with artifacts; avoid expensive full-site permutation explosion.
6. Require human sign-off for intentional large visual changes.

## Concrete scenarios and integration cues
- **Scenario:** Fixed article fixture with controlled locale/time.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Storybook cards in error/loading states.  Deliver concrete implementation, before/after evidence, and a reversible patch.
- **Scenario:** Chrome/Safari visual tolerance cannot be zero.  Deliver concrete implementation, before/after evidence, and a reversible patch.

## Reference implementation / command
```js
import { test, expect } from "@playwright/test";
test("hero visual", async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.locator("main")).toHaveScreenshot("main.png", { animations: "disabled" });
});
```

## Acceptance checks (verify, do not assume)
- [ ] Baseline and changed screenshots are reproducible under same browser/version.
- [ ] Diff image and failing selector/context are attached to CI report.
- [ ] Motion-specific tests are separated from static snapshot tests.
- [ ] Test 360px, 390px, 768px and 1440px viewports; one RTL and one LTR path when applicable.
- [ ] Test pointer, keyboard, reverse scroll and reduced motion where applicable.
- [ ] Record test command, runtime/browser, screenshot artifact location and actual failures.

## Common failure modes and corrective strategy
- **Avoid:** Do not use zero-pixel diff on unrelated GPU drivers.
- **Avoid:** Do not automatically approve new baselines after code changes.
- When a test fails, isolate the smallest owner component. Fix one cause, rerun its reproducer, then a wider regression sweep.
- When a dependency or browser is unavailable, document the blocked test; do not claim the feature passed.

## Contracts and outputs
- `decision.json`: selected approach, why, considered alternatives, dependencies.
- `evidence.json`: test commands, screenshots/logs, viewport, status = passed | failed | not_run.
- `findings.json`: object with id, severity, selector/file, evidence, remediation and confidence.
- `patch-plan.md`: minimal edit list and rollback actions; never auto-apply in review-only sessions.

## Related Perfect_AI skills and stack
- Consult `perfect-ai-master`, `ztx3-nexus-master`, `ztx4-deep-implementation-master`, `ztx5-motion-brand-master`, and `ztx9-frame-space-device-master` only when present and relevant.
- Source the matching reference chapter in `extensions/GITHUB-13-FRONTEND-PRO-v1/references/` after selecting this skill.
- This adaptation cites the upstream project for research; consult the upstream repository for official implementation and updates.

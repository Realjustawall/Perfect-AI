# Visual QA & Self-Correction — deep implementation playbook

**Purpose:** Close the loop between rendered UI evidence, detected defects and verified fixes.

This file is an original engineering manual and does not reprint proprietary site code. Use it in addition to, never instead of, the complete pre-existing TITAN PLUS/NEXUS material.

## Architecture and execution order
1. Establish test fixtures, seeded content, font readiness, stable animation clock and expected baselines.
2. Run a viewport × theme × direction × motion × interaction matrix, including 320px and 400% zoom.
3. Detect overflow, clipped content, failing actions, console errors, accessibility violations and animation state drift.
4. Generate annotated diff reports and rank issues by user impact, not only pixel count.
5. Fix then rerun targeted + regression tests; record what was actually executed.

## Inputs / design constraints
Inputs: page URL/fixtures, responsive matrix, snapshots, deterministic font/time and expected functional assertions.

## Preferred implementation approach
Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

## Representative source template
```ts
import { test, expect } from '@playwright/test';
test('mobile layout no horizontal overflow', async ({page}) => {
 await page.setViewportSize({width:320,height:720});
 await page.goto('http://127.0.0.1:4173');
 await expect.poll(()=>page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth+1)).toBe(true);
 await expect(page.locator('h1')).toBeVisible();
});
```

## Cross-cutting quality gates
1. Both regression failures and successful controls are recorded with screenshots.
2. Test matrix includes 320/390/768/1440 and RTL/reduced motion.
3. Never describe skipped tests as passed.

## Deep technique reference — all 18 features

### 01. `playwright-viewport-matrix`

**Output / operation:** Automate 320/360/390/430/768/1024/1440/1920 viewport coverage.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/playwright-viewport-matrix.md) · Skill `$ztx4-visual-qa-playwright-viewport-matrix`
### 02. `deterministic-animation-clock`

**Output / operation:** Freeze/canonicalize time and animations for reproducible screenshot captures.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/deterministic-animation-clock.md) · Skill `$ztx4-visual-qa-deterministic-animation-clock`
### 03. `visual-snapshot-baselines`

**Output / operation:** Use toHaveScreenshot with versioned baseline per platform and intentional updates.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/visual-snapshot-baselines.md) · Skill `$ztx4-visual-qa-visual-snapshot-baselines`
### 04. `dom-overflow-check`

**Output / operation:** Locate wide elements with bounding boxes and report selector offenders.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/dom-overflow-check.md) · Skill `$ztx4-visual-qa-dom-overflow-check`
### 05. `container-overflow-check`

**Output / operation:** Detect child scrollWidth violations in nested card, dialog, sidebar.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/container-overflow-check.md) · Skill `$ztx4-visual-qa-container-overflow-check`
### 06. `keyboard-journey-tests`

**Output / operation:** Exercise Tab, Shift+Tab, Esc, Enter and arrow keys on composite controls.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/keyboard-journey-tests.md) · Skill `$ztx4-visual-qa-keyboard-journey-tests`
### 07. `axe-accessibility-audit`

**Output / operation:** Run automated a11y scans then manually verify semantics and contrast nuances.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/axe-accessibility-audit.md) · Skill `$ztx4-visual-qa-axe-accessibility-audit`
### 08. `rtl-ltr-parity`

**Output / operation:** Compare functionality and logical alignment in fa/rtl and en/ltr.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/rtl-ltr-parity.md) · Skill `$ztx4-visual-qa-rtl-ltr-parity`
### 09. `zoom-reflow-test`

**Output / operation:** Test browser zoom emulation with narrow effective CSS viewport and reflow.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/zoom-reflow-test.md) · Skill `$ztx4-visual-qa-zoom-reflow-test`
### 10. `focus-indicator-test`

**Output / operation:** Verify focus visibility in light, dark, scroll and sticky overlays.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/focus-indicator-test.md) · Skill `$ztx4-visual-qa-focus-indicator-test`
### 11. `3d-render-fallback-test`

**Output / operation:** Disable WebGL and ensure alt controls and CTA remain functional.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/3d-render-fallback-test.md) · Skill `$ztx4-visual-qa-3d-render-fallback-test`
### 12. `scroll-animation-reverse`

**Output / operation:** Assert same scene state when progress is approached from up and down.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/scroll-animation-reverse.md) · Skill `$ztx4-visual-qa-scroll-animation-reverse`
### 13. `visual-regression-triage`

**Output / operation:** Use differential screenshots with allowed masks only for true nondeterminism.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/visual-regression-triage.md) · Skill `$ztx4-visual-qa-visual-regression-triage`
### 14. `console-network-audit`

**Output / operation:** Capture unhandled promise, JS errors, resource 404 and CSP warnings.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/console-network-audit.md) · Skill `$ztx4-visual-qa-console-network-audit`
### 15. `broken-interaction-test`

**Output / operation:** Click every meaningful CTA and validate expected state navigation.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/broken-interaction-test.md) · Skill `$ztx4-visual-qa-broken-interaction-test`
### 16. `color-contrast-batch`

**Output / operation:** Evaluate background/foreground pairings in every semantic state.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/color-contrast-batch.md) · Skill `$ztx4-visual-qa-color-contrast-batch`
### 17. `qa-prioritized-fix-loop`

**Output / operation:** Group issues by root cause, fix highest severity and rerun matrix.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/qa-prioritized-fix-loop.md) · Skill `$ztx4-visual-qa-qa-prioritized-fix-loop`
### 18. `evidence-honesty-report`

**Output / operation:** Separate passed, failed, skipped and unexecuted checks.

**Implementation:** Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

**Proof:** Tests: one failing regression intentionally detected, 8 viewports, reduced motion, RTL/LTR, JS errors, focus and no horizontal overflow.

[Dedicated recipe](./visual-qa/recipes/evidence-honesty-report.md) · Skill `$ztx4-visual-qa-evidence-honesty-report`


## Honesty about execution
- The source templates in this pack illustrate the mechanisms. A validated install/build of an optional third-party package is required before claiming its integration works.
- Re-check current API versions in the lockfile and official references.
- Do not claim real GPU frame time, pixel-perfect reconstruction, or site ownership without data.

## Official / maintained references
- [playwright](https://playwright.dev/docs/test-snapshots)
- [wcag](https://www.w3.org/TR/WCAG22/)

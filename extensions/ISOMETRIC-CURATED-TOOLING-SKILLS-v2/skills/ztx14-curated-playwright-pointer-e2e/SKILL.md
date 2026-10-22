---
name: ztx14-curated-playwright-pointer-e2e
description: Create browser-level regression tests for pointer hover, dragging, touch-like input, focus, responsive behavior, and cancellation.
---

# Automate realistic pointer and drag journeys with Playwright

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Test design
- Use stable semantic locators and accessible roles before CSS path selectors.
- Capture baseline state first; then move/click the pointer and assert the state or accessible output, not merely that an event handler ran.
- For dragging, test inside→outside movement, pointer up, cancellation, and target removal while dragging.
- Cover mouse and keyboard separately; use supported touch/device emulation where appropriate and retain a real-device smoke check for touch-specific production risks.
- Run a small set of viewport sizes and both motion preference modes.
- Use deterministic data and freeze/seed random sources when the UI has random motion or procedural layout.

## Example
```ts
import { test, expect } from '@playwright/test';
test('isometric control is usable by keyboard', async ({ page }) => {
  await page.goto('/');
  const control = page.getByRole('button', { name: /open inventory/i });
  await control.focus();
  await expect(control).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('region', { name: /inventory/i })).toBeVisible();
});
```
Replace example locators with names that exist in the target app. Do not fabricate selectors or assert the sample UI exists unchanged.

## Primary references
- [playwright-page](https://playwright.dev/docs/api/class-page)
- [pointer-events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events)
- [wcag22](https://www.w3.org/TR/WCAG22/)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.

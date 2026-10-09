# color-contrast-batch — independent recipe

**Domain:** Visual QA & Self-Correction  
**Why it exists:** Evaluate background/foreground pairings in every semantic state.

## Configuration and boundaries
Inputs: page URL/fixtures, responsive matrix, snapshots, deterministic font/time and expected functional assertions.

## Step-by-step execution
1. State observable success behavior in one sentence: Evaluate background/foreground pairings in every semantic state.
2. Inspect user-owned source and choose target platform and installed versions. Do not guess API compatibility.
3. Implement the exact behavior in an isolated named module, keeping a testable input/output contract.
4. Build a fallback without external renderers or pointer-only interaction.
5. Connect semantic state changes to engine state, not vice versa. One owner per property.
6. Add acceptance tests for error, resize, rollback and RTL/reduced-motion.
7. Compare baseline and modified screenshot/trace where visual; attach actual evidence when run.

## Execution pattern
Implementation: Playwright screenshots and DOM checks, keyboard flows, console/network errors, pixel-diff triage and fix verification loop.

## Required acceptance
1. Both regression failures and successful controls are recorded with screenshots.
2. Test matrix includes 320/390/768/1440 and RTL/reduced motion.
3. Never describe skipped tests as passed.

## Example baseline (adapt to this topic)
```ts
import { test, expect } from '@playwright/test';
test('mobile layout no horizontal overflow', async ({page}) => {
 await page.setViewportSize({width:320,height:720});
 await page.goto('http://127.0.0.1:4173');
 await expect.poll(()=>page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth+1)).toBe(true);
 await expect(page.locator('h1')).toBeVisible();
});
```

## Risk checklist
- No invented asset licenses, untested library version, unexplained loss of keyboard behavior.
- No extra network services or MCP requirement.
- Never silently treat an example snippet as a fully built standalone product.
- Log execution status as PASS / FAIL / NOT RUN separately.

## Source references
- [playwright](https://playwright.dev/docs/test-snapshots)
- [wcag](https://www.w3.org/TR/WCAG22/)

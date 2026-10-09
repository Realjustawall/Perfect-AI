# Browser evidence requirements (run in target app)

For each locale (fa,en), viewport (320×740, 390×844, 768×1024, 1440×900), motion preference (reduce,no-preference), capture screenshot at scroll positions 0,.25,.5,.75,1 and after reverse scrolling. Verify computed font-family matches the selected locale and font loads. Test pointer motion on fine pointers and disabled on coarse. Project Three.js object bounds into screen and check intended safe area.

Use Playwright with target app URL. Implement tests in repo with selectors for actual app (do not rely on hard-coded #hero if absent). Example:
```js
import { test, expect } from '@playwright/test';
for (const [lang,dir] of [['fa','rtl'],['en','ltr']]) {
 test(`locale ${lang}`, async({page})=>{
  await page.goto('/');
  await page.evaluate(([lang,dir])=>{document.documentElement.lang=lang;document.documentElement.dir=dir},[lang,dir]);
  await page.evaluate(()=>document.fonts.ready);
  await expect(page.locator('html')).toHaveAttribute('dir',dir);
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth-innerWidth);
  expect(overflow).toBeLessThanOrEqual(1);
  const font=await page.locator('h1').evaluate(el=>getComputedStyle(el).fontFamily);
  expect(font.length).toBeGreaterThan(0);
 });
}
```
Visual screenshots need approved baselines with stable fonts and deterministic animation timing; first render differences may be expected if timing isn't frozen. Include manual checks for `prefers-reduced-motion` and device touch behavior.

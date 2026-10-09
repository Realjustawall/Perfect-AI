const { test, expect } = require('@playwright/test');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const target = process.env.Perfect_AI_TEST_URL || pathToFileURL(path.resolve(__dirname,'../demo/index.html')).href;
for (const reducedMotion of ['no-preference','reduce']) {
 test(`responsive/RTL/scroll on ${reducedMotion}`, async ({ page }) => {
   await page.emulateMedia({ reducedMotion });
   await page.goto(target);
   await expect(page.locator('h1')).toBeVisible();
   await expect(page.getByRole('button', {name:'Switch language'})).toBeVisible();
   for (const scroll of [0,.25,.5,.75,1,.5,0]) {
     await page.evaluate(p => window.scrollTo({top:(document.documentElement.scrollHeight-innerHeight)*p,behavior:'instant'}),scroll);
     await expect.poll(async()=>page.evaluate(()=>document.documentElement.scrollWidth <= innerWidth+1)).toBe(true);
     await page.locator('body').screenshot({path:test.info().outputPath(`scroll-${String(scroll).replace('.','_')}.png`)});
   }
   await page.getByRole('button', {name:'Switch language'}).click();
   await expect(page.locator('html')).toHaveAttribute('dir','rtl');
   await expect(page.locator('html')).toHaveAttribute('lang','fa');
 });
}

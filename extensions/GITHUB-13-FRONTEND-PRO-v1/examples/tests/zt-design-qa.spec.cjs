const { test, expect } = require('@playwright/test');
const target = process.env.ZT_SITE_URL || 'http://127.0.0.1:5173';
for(const width of [360,390,768,1440]) {
  test(`responsive hero width=${width}`, async ({page}) => {
    await page.setViewportSize({ width, height: 850 });
    await page.goto(target);
    await page.evaluate(() => document.fonts.ready);
    await expect(page.locator('body')).toBeVisible();
    const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    expect(horizontalOverflow).toBe(false);
    await page.screenshot({path:`test-results/zt-${width}.png`,fullPage:true});
  });
}
test('reduced motion does not break layout', async ({page}) => {
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.goto(target);
 await expect(page.locator('main')).toBeVisible();
});

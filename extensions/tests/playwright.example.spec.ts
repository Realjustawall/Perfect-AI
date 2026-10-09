// Copy to a Playwright-enabled project after checking the website routes/selectors.
import { test, expect } from '@playwright/test';
for(const width of [320,360,390,430,768,1024,1440]){
  test(`no page overflow at ${width}`, async ({page})=>{
    await page.setViewportSize({width,height:800});
    await page.goto('http://localhost:5173/');
    await page.evaluate(()=>document.fonts.ready);
    const overflow=await page.evaluate(()=>({s:document.documentElement.scrollWidth,c:document.documentElement.clientWidth}));
    expect(overflow.s,JSON.stringify(overflow)).toBeLessThanOrEqual(overflow.c+1);
    await expect(page.locator('main')).toBeVisible();
  });
}
test('reduced motion still exposes primary action',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.goto('http://localhost:5173/');
 await expect(page.getByRole('main')).toBeVisible();
 await expect(page.getByRole('link').first()).toBeVisible();
});
test('baseline screenshot at deterministic state',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.setViewportSize({width:1440,height:900});
 await page.goto('http://localhost:5173/');
 await page.evaluate(()=>document.fonts.ready);
 await expect(page).toHaveScreenshot('home-desktop.png',{animations:'disabled',maxDiffPixelRatio:.02});
});

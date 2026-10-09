import {test,expect} from '@playwright/test';
test('page is accessible without overflow and respects motion preference',async({page})=>{
 const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
 await page.goto('/');await page.locator('body').waitFor();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+2)).toBe(true);
 expect(errors).toEqual([]);
 await page.keyboard.press('Tab');expect(await page.evaluate(()=>document.activeElement!==document.body)).toBe(true);
});
test('scroll reversible and no horizontal clipping',async({page})=>{
 await page.goto('/');await page.evaluate(()=>scrollTo(0,document.body.scrollHeight));
 await page.waitForTimeout(80);await page.evaluate(()=>scrollTo(0,0));
 expect(await page.evaluate(()=>Math.abs(scrollY)<2 && document.documentElement.scrollWidth<=innerWidth+2)).toBe(true)
});

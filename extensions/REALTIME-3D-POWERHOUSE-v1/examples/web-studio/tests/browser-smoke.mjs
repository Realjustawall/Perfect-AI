/** Requires `npm run dev` running and `npx playwright install` beforehand. */
import {chromium,firefox,webkit} from '@playwright/test';
import {mkdir} from 'node:fs/promises';
const browsers={chromium,firefox,webkit};
const base=process.env.ZT_URL??'http://127.0.0.1:5173';
const failures=[];
await mkdir('browser-evidence',{recursive:true});
for(const [browserName,type] of Object.entries(browsers)){
 let b;try{b=await type.launch({headless:true});}catch(e){console.warn(`NOT RUN ${browserName}: ${e.message.split('\n')[0]}`);continue;}
 for(const width of [360,390,768,1440]){
  const page=await b.newPage({viewport:{width,height:780},reducedMotion:'reduce'});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  try{await page.goto(base,{waitUntil:'domcontentloaded',timeout:15000});
    await page.locator('[data-tab="graph"]').click();await page.getByRole('button',{name:'Export TSL'}).waitFor();
    await page.screenshot({path:`browser-evidence/${browserName}-${width}.png`});
    if(errors.length)throw Error(errors.join('; '));
    if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))throw Error('horizontal overflow');
    console.log(`PASS ${browserName} ${width}`);
  }catch(e){failures.push(`${browserName}/${width}: ${e.message}`);}
  finally{await page.close();}
 }
 await b.close();
}
if(failures.length){console.error(failures.join('\n'));process.exitCode=1;}

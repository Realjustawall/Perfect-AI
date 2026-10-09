import {chromium} from '@playwright/test';import fs from 'node:fs/promises';import path from 'node:path';
const site = process.env.ZT_BENCHMARK_URL || 'http://127.0.0.1:4173';
const output=path.resolve(process.env.ZT_BENCHMARK_OUT||'./benchmark-output');
const variants=(process.env.ZT_VARIANTS||'A,B,C').split(',').map(v=>v.trim()).filter(Boolean);
await fs.mkdir(output,{recursive:true});
const browser=await chromium.launch({headless:true});let report=[];
try{
 for(const variant of variants) for(const viewport of [{width:390,height:844},{width:1440,height:900}]){
  const context=await browser.newContext({viewport,deviceScaleFactor:1,reducedMotion:'reduce',locale:'fa-IR'});
  const page=await context.newPage();let errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto(`${site}/?variant=${encodeURIComponent(variant)}`,{waitUntil:'networkidle'});
  await page.evaluate(()=>document.fonts.ready);
  const dimensions=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+2,heading:document.querySelector('h1')?.getBoundingClientRect()?.toJSON()||null}));
  const basename=`${variant}-${viewport.width}`;await page.screenshot({path:path.join(output,`${basename}.png`),fullPage:true,animations:'disabled'});
  report.push({variant,viewport,dimensions,errors,valid:!dimensions.overflow&&!errors.length,screenshot:`${basename}.png`,subjectiveReview:'required'});
  await context.close();
 }
}finally{await browser.close()}
await fs.writeFile(path.join(output,'benchmark.json'),JSON.stringify({site,report},null,2));
if(report.some(r=>!r.valid))process.exitCode=1;

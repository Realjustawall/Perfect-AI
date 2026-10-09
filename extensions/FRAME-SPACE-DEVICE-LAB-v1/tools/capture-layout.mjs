/** Collect DOM evidence for regression root cause, not an exact source map. */
import {chromium} from 'playwright';import fs from 'node:fs/promises';import path from 'node:path';
const args=process.argv.slice(2),get=(key,def)=>{const i=args.indexOf('--'+key);return i<0?def:args[i+1]};
const url=get('url'),out=get('out','reports/layout.json');if(!url)throw Error('Usage --url http://localhost:5173 --out reports/layout.json');
const browser=await chromium.launch({headless:true});const page=await browser.newPage({viewport:{width:Number(get('width','390')),height:Number(get('height','844'))}});
try{
 await page.goto(url,{waitUntil:'domcontentloaded'});await page.evaluate(()=>document.fonts?.ready);
 const report=await page.evaluate(()=>{
  const pathFor=el=>{if(el.dataset.testid)return `[data-testid="${CSS.escape(el.dataset.testid)}"]`;if(el.id)return '#'+CSS.escape(el.id);const arr=[];while(el&&el.nodeType===1&&arr.length<12){const idx=Array.from(el.parentElement?.children||[]).indexOf(el)+1;arr.unshift(`${el.localName}:nth-child(${idx})`);el=el.parentElement}return arr.join(' > ')};
  const nodes=[];const take=Array.from(document.querySelectorAll('body *')).slice(0,2400);
  for(const el of take){const s=getComputedStyle(el),r=el.getBoundingClientRect();if(!r.width||!r.height)continue;
   nodes.push({selector:pathFor(el),tag:el.tagName.toLowerCase(),source:el.dataset.ztSource||null,text:el.innerText?.slice(0,60)||'',rect:{x:r.x,y:r.y,width:r.width,height:r.height},style:Object.fromEntries(['position','display','fontFamily','fontSize','fontWeight','lineHeight','letterSpacing','color','opacity','transform','overflow','gap','gridTemplateColumns','direction','writingMode'].map(k=>[k,s[k]]))});
  }
  return {url:location.href,viewport:{width:innerWidth,height:innerHeight,dpr:devicePixelRatio},scroll:{x:scrollX,y:scrollY},nodes};
 });
 await fs.mkdir(path.dirname(out),{recursive:true});await fs.writeFile(out,JSON.stringify(report,null,2));console.log(`Wrote ${report.nodes.length} DOM nodes to ${out}`);
}finally{await browser.close()}

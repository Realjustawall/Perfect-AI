/** Frame evidence capture. Needs `npm install playwright`; target server must be running. */
import {chromium} from 'playwright';
import fs from 'node:fs/promises';import path from 'node:path';
const argv=process.argv.slice(2),arg=(key,fallback)=>{const i=argv.indexOf('--'+key);return i===-1?fallback:argv[i+1]};
const url=arg('url'),out=arg('out','reports/frames'),mode=arg('mode','scroll'),selector=arg('selector','body');
const points=(arg('points','0,0.25,0.5,0.75,1')).split(',').map(Number);
if(!url||!['scroll','debug','clock'].includes(mode)||points.some(n=>n<0||n>1||!Number.isFinite(n)))throw Error('Usage --url http://localhost:5173 --out reports/frames --mode scroll|debug|clock --points 0,.25,.5,.75,1');
await fs.mkdir(out,{recursive:true});const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:Number(arg('width','390')),height:Number(arg('height','844'))},deviceScaleFactor:Number(arg('dpr','1')),reducedMotion:arg('motion','no-preference')});
const problems=[];page.on('pageerror',e=>problems.push(e.message));
try{
 if(mode==='clock')await page.clock.install();
 await page.goto(url,{waitUntil:'domcontentloaded'});await page.evaluate(()=>document.fonts?.ready);
 const loc=page.locator(selector).first();await loc.waitFor({state:'visible'});
 const duration=Number(arg('duration','1200'));
 const report={url,mode,selector,viewport:page.viewportSize(),points:[],problems};let prevT=0;
 for(let i=0;i<points.length;i++){
   const p=points[i];
   if(mode==='scroll')await page.evaluate(progress=>{const max=Math.max(0,document.documentElement.scrollHeight-innerHeight);window.scrollTo(0,max*progress)},p);
   if(mode==='debug'){
    const ok=await page.evaluate(async progress=>{const api=window.__ZT_MOTION_DEBUG__;if(!api?.seek)return false;await api.seek(progress);await api.renderComplete?.();return true},p);
    if(!ok)throw Error('Debug mode requires window.__ZT_MOTION_DEBUG__.seek(progress)');
   }
   if(mode==='clock'){
    const target=p*duration;const delta=target-prevT;
    if(delta<0)throw Error('Clock mode requires increasing progress');
    if(delta>0)await page.clock.runFor(delta);prevT=target;
   }
   if(mode==='clock'){await page.clock.runFor(35);prevT+=35;}
   else await page.evaluate(()=>new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve))));
   const file=`${mode}-${String(i).padStart(2,'0')}-p${Math.round(p*100)}.png`;
   const state=await loc.evaluate(el=>{
    const r=el.getBoundingClientRect(),s=getComputedStyle(el);
    const animations=el.getAnimations().map(a=>({currentTime:a.currentTime,playState:a.playState}));
    return {bounds:{x:r.x,y:r.y,width:r.width,height:r.height},transform:s.transform,opacity:s.opacity,animations,scrollY:scrollY,documentHeight:document.documentElement.scrollHeight};
   });
   await page.screenshot({path:path.join(out,file),animations:'allow',fullPage:false});
   report.points.push({p,filename:file,state});
 }
 await fs.writeFile(path.join(out,'frames.json'),JSON.stringify(report,null,2));
 console.log(JSON.stringify({passed:!problems.length,frames:report.points.length,errors:problems,out},null,2));
 if(problems.length)process.exitCode=2;
}finally{await browser.close()}

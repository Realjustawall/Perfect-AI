/** Real Android Chrome via ADB port-forward + CDP. No emulator measurements claimed. */
import {chromium} from 'playwright';import fs from 'node:fs/promises';import {spawnSync} from 'node:child_process';
const args=process.argv.slice(2),get=(name,def)=>{let p=args.indexOf('--'+name);return p<0?def:args[p+1]};
const url=get('url'),out=get('out','reports/android-motion.json'),duration=Number(get('duration','8')),targetHz=Number(get('hz','60'));
if(!url||duration<=0||duration>90||targetHz<=0)throw Error('Usage --url https://your-site --duration 8 --hz 60|90|120 --out reports/device.json');
const adb=spawnSync(process.platform==='win32'?'adb.exe':'adb',['devices'],{encoding:'utf8'});
if(adb.error||adb.status!==0)throw Error('ADB missing/unavailable: install Android Platform Tools and authorize phone');
const devices=adb.stdout.split(/\r?\n/).filter(s=>/\sdevice\s*$/.test(s));
if(devices.length!==1)throw Error(`Need exactly 1 authorized physical Android device (found ${devices.length}); select safely rather than guessing.`);
const serial=devices[0].split(/\s/)[0];if(/emulator/i.test(serial))throw Error('Emulator detected; does not qualify as real-device measurement');
const forwarding=spawnSync(process.platform==='win32'?'adb.exe':'adb',['-s',serial,'forward','tcp:9222','localabstract:chrome_devtools_remote'],{encoding:'utf8'});
if(forwarding.status!==0)throw Error('ADB port forwarding failed; open Chrome on authorized Android device and check remote debugging');
const browser=await chromium.connectOverCDP('http://127.0.0.1:9222');
try{
 const pages=browser.contexts().flatMap(ctx=>ctx.pages());
 let page=pages.find(p=>p.url().startsWith(url));
 if(!page){page=pages.find(p=>p.url().startsWith('http'))||pages[0];if(!page)throw Error('No Android Chrome page connected');await page.goto(url,{waitUntil:'domcontentloaded'});}
 const result=await page.evaluate(async seconds=>{
  const loaf=[];
  let po=null;
  if(PerformanceObserver.supportedEntryTypes?.includes('long-animation-frame')){
   po=new PerformanceObserver(list=>{for(const x of list.getEntries())loaf.push({duration:x.duration,startTime:x.startTime})});po.observe({type:'long-animation-frame',buffered:true});
  }
  const deltas=[];let prev=0;
  const end=performance.now()+seconds*1000;
  await new Promise(resolve=>{function frame(now){if(prev)deltas.push(now-prev);prev=now;if(now<end)requestAnimationFrame(frame);else resolve()}requestAnimationFrame(frame)});
  po?.disconnect();deltas.sort((a,b)=>a-b);
  const percentile=p=>deltas.length?deltas[Math.min(deltas.length-1,Math.floor((deltas.length-1)*p))]:null;
  return {sampleCount:deltas.length,p50:percentile(.5),p95:percentile(.95),p99:percentile(.99),longAnimationFrames:loaf,devicePixelRatio:devicePixelRatio,viewport:{width:innerWidth,height:innerHeight},visibilityState:document.visibilityState,userAgent:navigator.userAgent};
 },duration);
 result.config={targetHz,frameBudgetMs:1000/targetHz,durationSec:duration,method:'rAF interval on actual USB-connected Android Chrome tab; not measured presentation/GPU FPS'};
 result.meetsHeuristic=result.p95!=null&&result.p95<=1000/targetHz*1.35;
 await fs.mkdir(out.split(/[\\/]/).slice(0,-1).join('/')||'.',{recursive:true});await fs.writeFile(out,JSON.stringify(result,null,2));
 console.log(JSON.stringify({attached:true,samples:result.sampleCount,p95:result.p95,meetsHeuristic:result.meetsHeuristic,out},null,2));
}finally{await browser.close()}

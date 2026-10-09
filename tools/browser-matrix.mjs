#!/usr/bin/env node
// Perfect_AI original browser matrix. Requires Node 22+ and Chromium/Chrome. No Playwright/npm dependency.
import {spawn} from 'node:child_process';
import {mkdtemp,readFile,readdir,mkdir,rm,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join,resolve,dirname,basename} from 'node:path';
import {createServer} from 'node:http';
import {pathToFileURL} from 'node:url';

const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const file=resolve(process.argv[2]||'examples/responsive-lab/index.html');
const out=resolve(process.argv.includes('--output')?process.argv[process.argv.indexOf('--output')+1]:'reports/browser-matrix');
const widths=[320,360,390,430,768,1024,1440,1920];
const chrome=process.env.CHROME_BIN||'chromium';
let proc,server,dir,ws,nextId=0;const pending=new Map();const events=new Map();
const types={'.html':'text/html;charset=utf-8','.js':'text/javascript;charset=utf-8','.css':'text/css;charset=utf-8','.svg':'image/svg+xml','.json':'application/json'};
const root=dirname(file);
function command(method,params={}){return new Promise((res,rej)=>{const id=++nextId;pending.set(id,{res,rej});ws.send(JSON.stringify({id,method,params}));setTimeout(()=>{if(pending.has(id)){pending.delete(id);rej(new Error(`timeout ${method}`))}},18000).unref?.()})}
const main=async()=>{
 dir=await mkdtemp(join(tmpdir(),'zt-cdp-'));
 server=createServer(async(req,res)=>{try{const p=decodeURIComponent((req.url||'/').split('?')[0]);const target=resolve(root,'.'+(p==='/'?'/'+basename(file):p));if(!target.startsWith(root+'/')&&target!==file)throw Error('disallowed');const raw=await readFile(target);res.writeHead(200,{'content-type':types[target.slice(target.lastIndexOf('.'))]||'application/octet-stream'});res.end(raw)}catch{res.writeHead(404);res.end('not found')}});
 await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
 proc=spawn(chrome,['--headless=new','--no-sandbox','--disable-dev-shm-usage','--disable-background-networking','--no-proxy-server','--proxy-bypass-list=<-loopback>','--allow-file-access-from-files','--no-first-run','--no-default-browser-check','--remote-debugging-port=0','--remote-allow-origins=*','--user-data-dir='+dir,'about:blank'],{stdio:'ignore'});
 let port;
 for(let i=0;i<80;i++){try{const t=(await readFile(join(dir,'DevToolsActivePort'),'utf8')).trim();port=Number(t.split('\n')[0]);break}catch{await sleep(110)}}
 if(!port)throw Error('Chrome debugging port unavailable; is Chrome installed?');
 const j=await(await fetch(`http://127.0.0.1:${port}/json`)).json();const target=j.find(x=>x.type==='page');if(!target)throw Error('CDP no page target');
 ws=new WebSocket(target.webSocketDebuggerUrl);
 ws.addEventListener('message',ev=>{const m=JSON.parse(ev.data);if(m.id){const p=pending.get(m.id);if(p){pending.delete(m.id);m.error?p.rej(new Error(m.error.message)):p.res(m.result)}}else if(m.method){for(const cb of events.get(m.method)||[])cb(m.params)}});
 await new Promise((resolve,reject)=>{ws.addEventListener('open',resolve,{once:true});ws.addEventListener('error',reject,{once:true})});
 await command('Page.enable');await command('Runtime.enable');
 const errors=[];events.set('Runtime.exceptionThrown',[v=>errors.push(v.exceptionDetails.exception?.description||v.exceptionDetails.text)]);
 // Local self-contained labs can be injected into about:blank, bypassing file/loopback navigation policies.
 const html=await readFile(file,'utf8');const css=await readFile(join(root,'style.css'),'utf8');const js=await readFile(join(root,'app.js'),'utf8');
 const documentHTML=html.replace(/<link\s+rel="stylesheet"[^>]*>/,'<style>'+css+'</style>').replace(/<script\s+type="module"\s+src="\.\/app\.js"><\/script>/,'').replace('</body>','<script>'+js+'</script></body>');
 const url='about:blank';
 await mkdir(out,{recursive:true});const report=[];
 for(const width of widths){
  await command('Emulation.setDeviceMetricsOverride',{width,height:width<=430?740:900,deviceScaleFactor:1,mobile:width<=430});
  for(const reduced of [false,true]){
   await command('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:reduced?'reduce':'no-preference'},{name:'prefers-color-scheme',value:'dark'}]});
   await command('Page.navigate',{url});await sleep(80);
   const tree=await command('Page.getFrameTree');
   await command('Page.setDocumentContent',{frameId:tree.frameTree.frame.id,html:documentHTML});
   await sleep(180);
   const ev=await command('Runtime.evaluate',{expression:`(() => { const h=document.documentElement; const body=document.body;const focusables=[...document.querySelectorAll('a,button,input')].filter(e=>getComputedStyle(e).visibility!=='hidden');const heading=document.querySelector('h1'); const r=heading?.getBoundingClientRect(); const errors=[...document.querySelectorAll('[aria-invalid="true"]')].length; return {innerWidth,scrollWidth:h.scrollWidth,bodyWidth:body.scrollWidth,overflow:h.scrollWidth>innerWidth+1,headingVisible:!!r&&r.width>0&&r.left>=-1&&r.right<=innerWidth+1,h1:heading?.textContent.trim(),focusables:focusables.length,navButton:!!document.querySelector('#menu[aria-expanded]'),correctPage:!!document.querySelector('main#main .hero'),reducedMotion:matchMedia('(prefers-reduced-motion: reduce)').matches,cssContainerSupported:CSS.supports('container-type','inline-size'),errors}; })()`,returnByValue:true});
   const row={width,reduced,...ev.result.value};row.pass=!row.overflow&&row.headingVisible&&row.focusables>=6&&row.navButton&&row.correctPage&&row.reducedMotion===reduced;report.push(row);
   if(!reduced){const capture=await command('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});await writeFile(join(out,`viewport-${width}.png`),Buffer.from(capture.data,'base64'));
     const exercise=await command('Runtime.evaluate',{expression:`(() => {const menu=document.querySelector('#menu'),nav=document.querySelector('#nav'),mode=document.querySelector('#mode'),filter=document.querySelector('#filter'),form=document.querySelector('#demo-form'),feedback=document.querySelector('#feedback');menu.click();const menuOk=nav.dataset.open==='true'&&menu.getAttribute('aria-expanded')==='true';mode.click();const themeOk=document.documentElement.dataset.light==='true'&&mode.getAttribute('aria-pressed')==='true';filter.value='Three.js';filter.dispatchEvent(new Event('input',{bubbles:true}));const searchOk=[...document.querySelectorAll('#tiles .tile:not([hidden])')].length===1;form.dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}));const formOk=feedback.textContent.includes('ایمیل معتبر');return {menuOk,themeOk,searchOk,formOk}; })()`,returnByValue:true});
     row.interactions=exercise.result.value;row.pass=row.pass&&Object.values(row.interactions).every(Boolean);
   }
  }
 }
 const result={browser:'Chromium CDP',timestamp:new Date().toISOString(),url,errors,report,pass:report.every(x=>x.pass)&&errors.length===0};
 await writeFile(join(out,'report.json'),JSON.stringify(result,null,2));
 for(const row of report)console.log(`${row.pass?'PASS':'FAIL'} ${row.width}px reduced=${row.reduced} overflow=${row.overflow} heading=${row.headingVisible} focusables=${row.focusables}`);
 console.log(`RESULT: ${result.pass?'PASS':'FAIL'} | ${report.length} checks | errors=${errors.length} | ${out}`);
 if(!result.pass)process.exitCode=1;
};
try{await main()}catch(err){console.error(err);process.exitCode=2}
finally{try{ws?.close()}catch{};try{server?.close()}catch{};try{proc?.kill('SIGTERM')}catch{};if(dir)await rm(dir,{recursive:true,force:true}).catch(()=>{})}

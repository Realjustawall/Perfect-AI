import {createStarterGraph,compileTSL,validateGraph,getSupportedOperations} from '../../src/core/graph.mjs';
import {resolvePreset,chooseFxQuality,PRESETS} from '../../src/core/postfx.mjs';
import {createTimeline} from '../../src/core/timeline.mjs';
import {createNativeSceneEditor} from '../../src/adapters/three-editor.mjs';
import {createPostProcessing} from '../../src/adapters/postprocessing.mjs';
import {attachSplat} from '../../src/adapters/splat-vanilla.mjs';
import {createVideoFusion} from '../../src/adapters/video-texture.mjs';
import {createRendererRegistry} from '../../src/core/interop.mjs';
const $=id=>document.getElementById(id),status=$('status'),controls=$('controls'),viewport=$('viewport');
const registry=createRendererRegistry();let cleanup=()=>{},active='';
const note=t=>{status.textContent=t;};
const make=(tag,props={},parent=controls)=>{const el=document.createElement(tag);for(const [k,v] of Object.entries(props)){if(k==='text')el.textContent=v;else if(k==='onClick')el.addEventListener('click',v);else el.setAttribute(k,v);}parent.append(el);return el;};
const label=(title,type='text',options={})=>{make('label',{text:title});return make('input',{type,...options});};
const btn=(text,fn)=>make('button',{type:'button',text,onClick:()=>Promise.resolve(fn()).catch(e=>note('ERROR: '+e.message))});
async function createThreeCanvas(){const THREE=await import('three');const canvas=make('canvas',{},viewport);canvas.style.width='100%';canvas.style.height='100%';const release=registry.acquire(canvas,'three');
 const renderer=new THREE.WebGLRenderer({canvas,antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
 const scene=new THREE.Scene();scene.background=new THREE.Color('#111927');scene.add(new THREE.AmbientLight(0xcbd7ff,1.5));
 const light=new THREE.PointLight(0x80b8ff,80,40);light.position.set(3,4,5);scene.add(light);
 const camera=new THREE.PerspectiveCamera(50,1,.1,250);camera.position.set(3,2,6);camera.lookAt(0,0,0);
 const resize=()=>{let w=viewport.clientWidth||640,h=viewport.clientHeight||480;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();};
 const observer=new ResizeObserver(resize);observer.observe(viewport);resize();
 return {THREE,canvas,renderer,scene,camera,dispose(){observer.disconnect();renderer.dispose();release();}};
}
async function showSplat(){make('p',{text:'Render locally hosted .splat assets using the @pmndrs/vanilla loader. No bundled sample capture: supply your own permitted capture.'});const url=label('Asset URL','text',{value:'/assets/your-scene.splat'});btn('Load splat',async()=>{
 if(window.__splatDispose)window.__splatDispose();viewport.querySelector('.empty')?.remove();const u=url.value.trim();
 const env=await createThreeCanvas();let running=true,id=0,splat;
 try{splat=await attachSplat({...env,url:u,settings:{width:viewport.clientWidth,height:viewport.clientHeight,dpr:devicePixelRatio}});}catch(e){env.dispose();env.canvas.remove();throw e;}
 let angle=0;const loop=()=>{if(!running)return;id=requestAnimationFrame(loop);if(!matchMedia('(prefers-reduced-motion: reduce)').matches){angle+=.003;env.camera.position.x=Math.sin(angle)*5;env.camera.position.z=Math.cos(angle)*5;env.camera.lookAt(0,0,0);}env.renderer.render(env.scene,env.camera);};loop();
 window.__splatDispose=()=>{running=false;cancelAnimationFrame(id);splat.dispose();env.dispose();env.canvas.remove();};note('Splat loaded. Renderer ownership is isolated.');
 });make('div',{class:'empty',text:'Load a local .splat file served by Vite (public/assets/your-scene.splat).'},viewport);
 cleanup=()=>{window.__splatDispose?.();window.__splatDispose=null;};
}
async function showGraph(){let graph=createStarterGraph();make('p',{text:'Build a safe TSL node graph, connect typed nodes, and export generated code without eval. Experimental Three.js GPU material wiring is intentionally separate.'});
 const type=make('select');for(const op of getSupportedOperations()){const o=make('option',{value:op,text:op},type);if(op==='float')o.selected=true;}
 const a=label('Input node ID (for add/mul/color)','text',{value:'base'});
 const output=make('textarea',{rows:'9',spellcheck:'false'});output.style.width='100%';output.style.background='#0c1320';output.style.color='#accbff';output.style.marginTop='15px';output.style.padding='12px';output.style.fontFamily='monospace';
 const stage=make('div',{class:'nodes'},viewport);const svg=make('svg',{class:'edges',viewBox:'0 0 960 540',preserveAspectRatio:'xMidYMid meet'},stage);svg.style.width='100%';svg.style.height='100%';
 function redraw(){stage.querySelectorAll('.node').forEach(x=>x.remove());svg.replaceChildren();
   for(const n of graph.nodes){const el=make('div',{class:'node'},stage);el.style.left=`${n.x??30}px`;el.style.top=`${n.y??35}px`;el.textContent=`${n.id} : ${n.op}`;
    const extra=make('em',{text:n.value!==undefined?JSON.stringify(n.value):JSON.stringify(n.inputs||{})},el);
    el.draggable=true;el.ondragend=e=>{const b=stage.getBoundingClientRect();n.x=Math.max(0,Math.min(840,e.clientX-b.x));n.y=Math.max(0,Math.min(450,e.clientY-b.y));redraw();};
    if(n.inputs)for(const d of Object.values(n.inputs)){let src=graph.nodes.find(x=>x.id===d);if(!src)continue;let line=document.createElementNS('http://www.w3.org/2000/svg','line');for(const [key,val] of Object.entries({x1:(src.x??30)+130,y1:(src.y??35)+22,x2:(n.x??30),y2:(n.y??35)+22,stroke:'#a1c8ff','stroke-width':2}))line.setAttribute(key,val);svg.append(line);}
   }
   const result=validateGraph(graph);try{output.value=compileTSL(graph);note('Valid shader graph • safe TSL export');}catch(e){output.value=result.errors.join('\n')+'\n'+e.message;note('Graph validation failed');}
 }
 btn('Add node',()=>{let op=type.value,id=`node${graph.nodes.length+1}`;let n={id,op,x:40+graph.nodes.length*35,y:80+(graph.nodes.length%4)*70};
  if(op==='float')n.value=.5;if(op==='vec3')n.value=[.8,.2,.6];if(op==='output')return note('The graph already has an output.');
  if(['add','subtract','multiply','divide','mix'].includes(op))n.inputs={a:a.value,b:'base',...(op==='mix'?{t:a.value}:{})};
  if(['sin','cos','clamp'].includes(op))n.inputs={input:a.value,...(op==='clamp'?{min:a.value,max:'base'}:{})};
  graph.nodes.splice(graph.nodes.length-1,0,n);redraw();});
 btn('Connect to output',()=>{const nodes=graph.nodes.filter(n=>n.op!=='output');graph.nodes.at(-1).inputs.color=nodes.at(-1).id;redraw();});
 btn('Export JSON',()=>download(JSON.stringify(graph,null,2),'perfect-ai-graph.json','application/json'));
 btn('Export TSL',()=>download(compileTSL(graph),'perfect-ai-shader.mjs','text/javascript'));
 redraw();
}
function download(content,name,type){const b=new Blob([content],{type}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1000);}
async function showFX(){make('p',{text:'Real THREE.WebGLRenderer and postprocessing pipeline. Compare high/low quality presets before shipping.'});
 const select=make('select');for(const p of Object.keys(PRESETS))make('option',{value:p,text:p},select);select.value='film';
 const env=await createThreeCanvas();const THREE=env.THREE;
 const mesh=new THREE.Mesh(new THREE.TorusKnotGeometry(1,.3,180,22),new THREE.MeshPhysicalMaterial({color:0x7ccaff,metalness:.7,roughness:.13,clearcoat:1}));env.scene.add(mesh);
 let fx,done=false,id=0,old=0;
 async function change(){fx?.dispose();let quality=chooseFxQuality({width:viewport.clientWidth,height:viewport.clientHeight,dpr:devicePixelRatio});
   fx=await createPostProcessing({...env,preset:select.value,quality});fx.setSize(viewport.clientWidth,viewport.clientHeight);note(`PostFX ${select.value} / ${quality}`);}
 select.addEventListener('change',()=>change().catch(e=>note(e.message)));await change();
 const obs=new ResizeObserver(()=>fx?.setSize(viewport.clientWidth,viewport.clientHeight));obs.observe(viewport);
 function frame(t){if(done)return;id=requestAnimationFrame(frame);let dt=Math.min(.05,(t-old)/1000||0);old=t;if(!matchMedia('(prefers-reduced-motion: reduce)').matches)mesh.rotation.y+=dt*.5;fx.render(dt);}
 id=requestAnimationFrame(frame);
 cleanup=()=>{done=true;cancelAnimationFrame(id);obs.disconnect();fx?.dispose();mesh.geometry.dispose();mesh.material.dispose();env.dispose();};
}
async function showVideo(){make('p',{text:'Upload a local MP4/WebM video. Mediabunny decodes timestamp-selected frames into a THREE.CanvasTexture on a 3D plane. The same clock moves the camera.'});
 const input=label('Local video file','file',{accept:'video/*'});const play=btn('Play',()=>current?.timeline.play());btn('Pause',()=>current?.timeline.pause());const seek=label('Seek','range',{min:'0',max:'100',value:'0'});
 let current=null,env=null;const release=()=>{current?.dispose();current=null;env?.dispose();env=null;};
 input.addEventListener('change',async()=>{try{release();const file=input.files[0];if(!file)return;if(file.size>300*1024*1024)throw Error('media over 300 MB');
  viewport.querySelector('.empty')?.remove();env=await createThreeCanvas();current=await createVideoFusion({...env,file});current.timeline.onChange(s=>{seek.value=String(Math.round(s.progress*100));});note('Video texture ready. Camera and media share one clock.');}
 catch(e){note('VIDEO ERROR '+e.message);}});
 seek.addEventListener('input',()=>{if(current){const d=current.timeline.read();current.timeline.seek(Number(seek.value)/100*current.media.duration);}});
 make('div',{class:'empty',text:'Select a local video file to initialize the synchronized 3D video surface.'},viewport);
 cleanup=release;
}
async function showEditor(){make('p',{text:'Pick objects, transform with real gizmos, undo/redo, import GLB, export scene JSON. Threepipe backend can be started separately without taking over the same canvas.'});
 let native=null;const canvas=make('canvas',{},viewport);canvas.style.width='100%';canvas.style.height='100%';
 const release=()=>{native?.dispose();native=null;};
 const object=label('Selected object ID','text',{value:'mesh1'});
 btn('Add box',()=>{if(!native)throw Error('start native editor');object.value=native.addBox();});
 btn('Translate',()=>native?.setMode('translate'));btn('Rotate',()=>native?.setMode('rotate'));btn('Scale',()=>native?.setMode('scale'));
 btn('Undo',()=>native?.store.undo());btn('Redo',()=>native?.store.redo());
 btn('Export scene JSON',()=>native&&download(native.store.exportJSON(),'perfect-ai-scene.json','application/json'));
 const file=label('Import local GLB (max 50MB)','file',{accept:'.glb'});file.addEventListener('change',async()=>{try{await native?.importGLB(file.files[0]);note('Model loaded. Imported GLB editing/export requires scene-object adapter.');}catch(e){note(e.message);}});
 btn('Reset native editor',async()=>{native?.dispose();native=await createNativeSceneEditor({canvas,onSelection:id=>{object.value=id||'';}});native.addBox();note('Native editor reset.');});
 btn('How to launch Threepipe separately',()=>note('From examples/threepipe: npm install && npm run dev (port 5174). Isolated to avoid custom Three.js peer conflict.'));
 native=await createNativeSceneEditor({canvas,onSelection:id=>object.value=id||''});native.addBox();note('Native scene ready.');
 cleanup=()=>{native?.dispose();};
}
const sections={splat:showSplat,graph:showGraph,fx:showFX,video:showVideo,editor:showEditor};
async function setTab(name){if(!sections[name]||active===name)return;try{cleanup();}catch(e){console.error('cleanup error',e);}cleanup=()=>{};active=name;controls.replaceChildren();viewport.replaceChildren();$('heading').textContent=({'splat':'Gaussian Splatting','graph':'TSL Shader Graph','fx':'Cinematic Post-Processing','video':'Video × 3D','editor':'Scene Editor'})[name];
 for(const button of document.querySelectorAll('nav button')){const on=button.dataset.tab===name;button.classList.toggle('active',on);button.setAttribute('aria-selected',String(on));}
 try{await sections[name]();}catch(e){note('ERROR: '+e.message);console.error(e);make('div',{class:'empty',text:'Could not start this system. Review status/log and dependencies.'},viewport);}}
for(const b of document.querySelectorAll('nav button'))b.addEventListener('click',()=>setTab(b.dataset.tab));
window.addEventListener('keydown',e=>{if(e.key==='Escape')note('Esc: editor selection reset available in native scene.');});
window.addEventListener('beforeunload',()=>cleanup());setTab('graph');

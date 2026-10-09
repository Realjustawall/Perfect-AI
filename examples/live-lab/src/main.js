/** Independent implementation using real Three.js geometry and Anime.js v4 timeline. */
import * as THREE from 'three';
import { animate, createTimeline, stagger } from 'animejs';
import './style.css';
const clamp=(x,a=0,b=1)=>Math.min(b,Math.max(a,x));
const smooth=(a,b,p)=>{ const t=clamp((p-a)/(b-a));return t*t*(3-2*t); };
const track=document.querySelector('.track');
const stage=document.querySelector('.scene');
const fallback=document.querySelector('.scene-fallback');
const scenes=[...document.querySelectorAll('.step')];
const m=document.querySelector('#meter');
const counter=document.querySelector('#phase-count');
const toggle=document.querySelector('#motion-button');
const reduced=matchMedia('(prefers-reduced-motion:reduce)').matches;
let motionPaused=reduced;
let p=0,activeScene=-1,frame=0,dirty=true,renderer,camera,scene,orb,group,particles,orbit,resizeObs;
let timeline=[];
function initTimeline(){
  if(reduced)return;
  // Each chapter has its own Anime.js timeline. Scroll is the source of truth via .seek().
  scenes.forEach((el,i)=>{
    const intro=el.querySelector('h1,h2'),body=el.querySelector('p'),label=el.querySelector('small');
    const tl=createTimeline({autoplay:false});
    tl.add(label,{opacity:[0,1],y:[18,0],duration:340,ease:'outCubic'},0)
      .add(intro,{opacity:[0,1],y:[46,0],duration:660,ease:'outExpo'},120)
      .add(body,{opacity:[0,1],y:[24,0],duration:650,ease:'outCubic'},260);
    timeline.push(tl);
  });
}
function init3D(){
 try{
   renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'high-performance'});
   renderer.outputColorSpace=THREE.SRGBColorSpace;
   renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.55));
   stage.appendChild(renderer.domElement);
   scene=new THREE.Scene();
   camera=new THREE.PerspectiveCamera(42,1,.1,80);camera.position.set(0,0,7);
   group=new THREE.Group();scene.add(group);
   // Real mesh: geometry+material+normals (not a static texture).
   const material=new THREE.MeshStandardMaterial({color:0xd2d2d2,roughness:.35,metalness:.75,wireframe:true,transparent:true,opacity:.72});
   const knot=new THREE.TorusKnotGeometry(1.55,.38,250,25,2,5);
   orb=new THREE.Mesh(knot,material);group.add(orb);
   const ringGeo=new THREE.TorusGeometry(2.35,.008,4,320);
   orbit=new THREE.Mesh(ringGeo,new THREE.MeshBasicMaterial({color:0x888888,transparent:true,opacity:.48,side:THREE.DoubleSide}));group.add(orbit);
   const count=innerWidth<760?1900:4700;
   const pos=new Float32Array(count*3);
   const golden=Math.PI*(3-Math.sqrt(5));
   for(let i=0;i<count;i++){
     let t=(i+.5)/count,y=1-2*t,r=Math.sqrt(1-y*y),ang=golden*i;
     const radius=2.3+.15*Math.sin(i*.39);
     pos[i*3]=Math.cos(ang)*r*radius;pos[i*3+1]=y*radius;pos[i*3+2]=Math.sin(ang)*r*radius;
   }
   const pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.BufferAttribute(pos,3));
   particles=new THREE.Points(pg,new THREE.PointsMaterial({color:0xeeeeee,size:innerWidth<760?.017:.012,transparent:true,opacity:.55,depthWrite:false}));group.add(particles);
   scene.add(new THREE.HemisphereLight(0xffffff,0x777777,1.5));
   const key=new THREE.DirectionalLight(0xffffff,3.2);key.position.set(-3,4,6);scene.add(key);
   const rim=new THREE.DirectionalLight(0xffffff,1.3);rim.position.set(3,-2,-5);scene.add(rim);
   resizeObs=new ResizeObserver(resize);resizeObs.observe(stage);resize();
   fallback.style.display='none';
 }catch(e){console.warn('WebGL unavailable; showing fallback',e);renderer?.dispose();renderer=null;stage.style.display='none';}
}
function resize(){if(!renderer)return;const rect=stage.getBoundingClientRect();const w=Math.max(rect.width,1),h=Math.max(rect.height,1);renderer.setSize(w,h,false);camera.aspect=w/h;camera.position.z=w<700?9:7;camera.updateProjectionMatrix();dirty=true;requestDraw();}
function progress(){const max=Math.max(track.offsetHeight-window.innerHeight,1);return clamp(-track.getBoundingClientRect().top/max);}
function renderState(){
 if(!dirty)return;dirty=false;
 if(renderer){
  const q=motionPaused?0:p;
  const two=Math.PI*2;
  group.rotation.set(.22+q*.62,.20+q*two*1.25,.13+Math.sin(q*two)*.19);
  const size=1.02-.25*smooth(.7,1,q);
  group.scale.setScalar(size);
  orb.rotation.set(.15+q*Math.PI,.2+q*Math.PI*1.4,q*Math.PI*.55);
  particles.rotation.set(q*.45, -q*two*.75,.0);
  orbit.rotation.set(Math.PI*.35+q*two*.35, q*1.2,0);
  renderer.render(scene,camera);
 }
 const count=Math.min(4,Math.floor(p*5));
 if(count!==activeScene){activeScene=count;scenes.forEach((s,i)=>{s.classList.toggle('active',i===count);s.style.visibility=i===count?'visible':'hidden';s.setAttribute('aria-hidden',i===count?'false':'true')}); counter.value=String(count+1).padStart(2,'0')+' / 05';}
 if(!reduced){
  // Each text track occupies one fifth of scroll progress. Seek always follows scroll both ways.
  scenes.forEach((el,i)=>{
   const t=i===0?Math.max(.99,clamp((p*5-i)*1.8)):clamp((p*5-i)*1.8);
   if(i===count)timeline[i]?.seek(t*880,true);
  });
 }
 m.style.transform=`scaleX(${p})`;
}
function requestDraw(){if(frame)return;frame=requestAnimationFrame(()=>{frame=0;renderState();});}
function onScroll(){p=progress();dirty=true;requestDraw();}
function onVisibility(){if(!document.hidden){dirty=true;requestDraw();}}
function onMotionToggle(){motionPaused=!motionPaused;toggle.setAttribute('aria-pressed',String(motionPaused));toggle.textContent=motionPaused?'فعال‌کردن حرکت':'توقف حرکت';dirty=true;requestDraw();}
init3D();initTimeline();
scenes.forEach((el,i)=>{el.setAttribute('aria-hidden',i?'true':'false');});
window.addEventListener('scroll',onScroll,{passive:true});window.addEventListener('resize',onScroll,{passive:true});document.addEventListener('visibilitychange',onVisibility);toggle.addEventListener('click',onMotionToggle);
if(reduced){toggle.textContent='حرکت کاهش‌یافته';toggle.setAttribute('aria-pressed','true');scenes.forEach(el=>{el.querySelectorAll('h1,h2,p,small').forEach(x=>x.style.opacity='1')})}
onScroll();
// This example is intentionally dependency-managed; run npm install + npm run dev in this folder.

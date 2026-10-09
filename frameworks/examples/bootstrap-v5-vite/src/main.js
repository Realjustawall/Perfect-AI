import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';
import * as THREE from 'three';
import { animate, onScroll } from 'animejs';
const app=document.querySelector('#app');
app.innerHTML=`<a href="#content" class="visually-hidden-focusable position-fixed top-0 start-0 p-3 bg-body">رفتن به محتوا</a>
<nav class="navbar navbar-expand-lg border-bottom bg-body sticky-top" aria-label="اصلی"><div class="container">
<a href="#content" class="navbar-brand fw-bold" lang="en" dir="ltr">Perfect_AI</a>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#links" aria-controls="links" aria-expanded="false" aria-label="نمایش منو"><span class="navbar-toggler-icon"></span></button>
<div id="links" class="collapse navbar-collapse"><div class="navbar-nav ms-auto"><a class="nav-link" href="#features">قابلیت‌ها</a><a class="nav-link" href="#contact">ارتباط</a></div><button id="theme" type="button" class="btn btn-outline-secondary ms-lg-3">تغییر تم</button></div>
</div></nav>
<main id="content" class="container"><section class="zt-stage border-bottom"><canvas id="zt-canvas" aria-hidden="true"></canvas><div class="zt-copy"><p lang="en" dir="ltr" class="text-uppercase small">Bootstrap × Anime × Three</p><h1 class="zt-title">با Perfect_AI<br>شاهکار خلق کنید</h1><p class="lead mt-4">ریسپانسیو واقعی و تم تک‌رنگ، انیمیشن اسکرولی و مدل سه‌بعدی با وضعیت جایگزین.</p><a href="#features" class="btn btn-outline-secondary btn-lg mt-2">امکانات</a></div></section>
<section id="features" class="py-5"><h2 class="mb-4">قابلیت‌ها</h2><div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">${['Bootstrap 5.3','Anime.js v4','Three.js Geometry','RTL & LTR','Reduced Motion','Responsive Grid'].map(label=>`<div class="col"><article data-reveal class="card h-100"><div class="card-body"><h3 class="h5" dir="ltr">${label}</h3><p>انطباق با موبایل، تبلت و دسکتاپ به‌همراه کنترل دسترس‌پذیری.</p></div></article></div>`).join('')}</div></section>
<section id="contact" class="card mb-5"><div class="card-body p-4"><h2 class="h4">فرم نمونه</h2><form id="demo-form"><label class="form-label" for="email">ایمیل</label><input class="form-control" type="email" id="email" autocomplete="email" dir="ltr" required><button class="btn btn-outline-secondary mt-3" type="submit">اعتبارسنجی</button><p id="status" role="status" class="mt-3"></p></form></div></section></main>`;
const theme=document.querySelector('#theme');theme.addEventListener('click',()=>{const html=document.documentElement;html.dataset.bsTheme=html.dataset.bsTheme==='dark'?'light':'dark'});
document.querySelector('#demo-form').addEventListener('submit',e=>{e.preventDefault();document.querySelector('#status').textContent='فرم معتبر است؛ این یک دموی محلی بدون ارسال اطلاعات است.'});
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){for(const el of document.querySelectorAll('[data-reveal]'))animate(el,{opacity:[0,1],y:[20,0],duration:680,ease:'outQuad',autoplay:onScroll({target:el,enter:'top bottom-=8%'})});}
const canvas=document.querySelector('#zt-canvas');let r,geo,mat,camera,mesh,scene,raf,ro;
try{
 r=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});r.setPixelRatio(Math.min(devicePixelRatio,1.5));
 scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(45,1,.1,100);camera.position.z=6;
 geo=new THREE.TorusKnotGeometry(1.05,.25,150,12);mat=new THREE.MeshBasicMaterial({color:0xcacaca,wireframe:true,transparent:true,opacity:.25});mesh=new THREE.Mesh(geo,mat);scene.add(mesh);
 ro=new ResizeObserver(()=>{const w=canvas.clientWidth,h=canvas.clientHeight;if(w>0&&h>0){r.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}});ro.observe(canvas);
 const tick=()=>{if(!matchMedia('(prefers-reduced-motion:reduce)').matches){mesh.rotation.x+=.001;mesh.rotation.y+=.002}r.render(scene,camera);raf=requestAnimationFrame(tick)};tick();
 addEventListener('pagehide',()=>{cancelAnimationFrame(raf);ro.disconnect();geo.dispose();mat.dispose();r.dispose()},{once:true});
}catch(error){canvas.hidden=true;console.warn('Fallback to text:',error)}

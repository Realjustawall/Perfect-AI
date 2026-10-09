import './style.css';
import { animate, onScroll } from 'animejs';
import * as THREE from 'three';
const app=document.querySelector('#app');
app.innerHTML=`<a href="#content" class="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:bg-white focus:p-3 focus:text-black">رفتن به محتوا</a>
<header class="sticky top-0 z-30 border-b border-zinc-500/50 bg-zinc-950/90 text-white backdrop-blur">
 <nav class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3" aria-label="اصلی">
  <a href="#content" class="font-black tracking-widest" lang="en" dir="ltr">Perfect_AI</a>
  <div class="flex flex-wrap items-center gap-2"><a href="#features" class="rounded-lg px-3 py-2 underline-offset-4 hover:underline">قابلیت‌ها</a><a href="#contact" class="rounded-lg px-3 py-2 underline-offset-4 hover:underline">ارتباط</a><button id="switch" type="button" class="rounded-lg border border-zinc-500 px-3 py-2" aria-label="تغییر تم">◐ تم</button></div>
 </nav>
</header>
<main id="content" class="mx-auto min-w-0 max-w-6xl px-4 pb-24 sm:px-6">
 <section class="@container relative isolate grid min-h-[min(780px,100svh)] items-center overflow-hidden border-b border-zinc-500/50 py-14" aria-labelledby="hero-title">
  <canvas id="zt-canvas" aria-hidden="true"></canvas>
  <div class="zt-copy mx-auto w-full max-w-4xl text-center"><p class="mb-4 text-xs font-semibold tracking-[.28em]" lang="en" dir="ltr">DESIGN × ANIMATION × 3D</p><h1 id="hero-title" class="text-4xl leading-tight font-black sm:text-6xl @3xl:text-7xl">با Perfect_AI<br/>شاهکار خلق کنید</h1><p class="mx-auto mt-6 max-w-prose text-base leading-8 sm:text-lg">طراحی سازگار با همهٔ صفحه‌ها؛ موتورهای انیمیشن واقعی، سه‌بعدی تعاملی و ساختار سیاه‌وسفید.</p><a href="#features" class="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl border border-current px-7 py-3 font-semibold">نمایش امکانات</a></div>
 </section>
 <section id="features" class="py-20" aria-labelledby="f-title"><h2 id="f-title" class="mb-6 text-3xl font-bold">ویژگی‌ها</h2><div class="@container"><div class="grid grid-cols-1 gap-4 @lg:grid-cols-2 @3xl:grid-cols-3">${['Anime.js v4','Three.js WebGL','Tailwind CSS v4','Container Queries','RTL / LTR','Reduced Motion'].map((s,i)=>`<article data-reveal class="zt-surface min-w-0 rounded-2xl border p-6"><span class="text-sm opacity-70">0${i+1}</span><h3 class="mt-4 text-xl font-semibold" dir="ltr">${s}</h3><p class="mt-3 leading-7">قابل تست در صفحهٔ کوچک، درشت‌نمایی و حالت دسترس‌پذیری.</p></article>`).join('')}</div></div></section>
 <section id="contact" class="zt-surface rounded-2xl border p-6 sm:p-10"><h2 class="text-2xl font-bold">ارسال پیام آزمایشی</h2><form id="demo-form" class="mt-5 grid max-w-xl gap-3"><label for="email">ایمیل</label><input class="zt-surface min-h-12 min-w-0 rounded-xl border p-3" type="email" id="email" autocomplete="email" required placeholder="you@example.com" dir="ltr"/><button type="submit" class="min-h-12 rounded-xl border border-current px-4">اعتبارسنجی فرم</button><p id="status" role="status" aria-live="polite"></p></form></section>
</main>`;
const switcher=document.querySelector('#switch');
const systemDark=matchMedia('(prefers-color-scheme:dark)').matches;
let stored;try{stored=localStorage.getItem('zt-theme')}catch{}
if(stored==='light'||stored==='dark')document.documentElement.dataset.theme=stored;
else document.documentElement.dataset.theme=systemDark?'dark':'light';
switcher.addEventListener('click',()=>{const v=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=v;try{localStorage.setItem('zt-theme',v)}catch{}});
document.querySelector('#demo-form').addEventListener('submit',e=>{e.preventDefault();document.querySelector('#status').textContent='فرم معتبر است؛ در این دموی محلی ایمیلی ارسال نمی‌شود.'});
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
if(!reduced.matches) {
 for(const card of document.querySelectorAll('[data-reveal]')) animate(card,{opacity:[0,1],y:[24,0],duration:750,ease:'outQuad',autoplay:onScroll({target:card,enter:'top bottom-=10%'})});
}
const canvas=document.querySelector('#zt-canvas');
let scene,camera,renderer,mesh,geo,mat,raf=0,ro,active=true;
try{
 renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));
 scene=new THREE.Scene();camera=new THREE.PerspectiveCamera(42,1,.1,100);camera.position.z=6;
 geo=new THREE.IcosahedronGeometry(1.7,5);
 mat=new THREE.MeshBasicMaterial({color:0xe4e4e7,wireframe:true,transparent:true,opacity:.21});
 mesh=new THREE.Mesh(geo,mat);scene.add(mesh);
 const resize=()=>{const w=canvas.clientWidth,h=canvas.clientHeight;if(w<1||h<1)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()};
 ro=new ResizeObserver(resize);ro.observe(canvas);resize();
 const vis=new IntersectionObserver(entries=>{active=entries[0]?.isIntersecting??true},{threshold:0});vis.observe(canvas);
 const render=()=>{if(active&&renderer){if(!reduced.matches){mesh.rotation.x+=.0017;mesh.rotation.y+=.0021;}renderer.render(scene,camera)}raf=requestAnimationFrame(render)};
 render();
 window.addEventListener('pagehide',()=>{cancelAnimationFrame(raf);ro.disconnect();vis.disconnect();geo.dispose();mat.dispose();renderer.dispose()},{once:true});
}catch(error){canvas.hidden=true;console.warn('3D fallback enabled:',error)}

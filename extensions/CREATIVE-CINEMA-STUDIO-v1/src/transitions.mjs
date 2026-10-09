import {clamp,lerp,prefersReducedMotion} from './utils.mjs';
/** Shared-element transition with a durable DOM fallback. No WebGL scene is automatically preserved:
 * caller must own a persistent canvas and supply a camera/scene adapter. */
export function interpolateCamera(start,end,t){const k=clamp(t),out={};for(const key of ['x','y','z','fov','targetX','targetY','targetZ']){if(Number.isFinite(start[key])&&Number.isFinite(end[key]))out[key]=lerp(start[key],end[key],k)}return out}
export function assignSharedNames(root=document){return [...root.querySelectorAll('[data-shared-key]')].map(el=>({key:el.dataset.sharedKey,el}));}
export function captureShared(root=document){return new Map(assignSharedNames(root).map(({key,el})=>[key,{rect:el.getBoundingClientRect().toJSON?.()??el.getBoundingClientRect(),el}]));}
export async function transitionView({update,root=document,oldScene=null,newScene=null,sceneAdapter=null, duration=500,reducedMotion=prefersReducedMotion(),signal=null}={}){
 if(typeof update!=='function')throw new TypeError('update function required');
 if(signal?.aborted)return {status:'aborted'};
 if(reducedMotion){await update();sceneAdapter?.setState?.(newScene);return {status:'reduced-motion'};}
 const before=captureShared(root);
 if(typeof document!=='undefined' && typeof document.startViewTransition==='function'){
   const vt=document.startViewTransition(async()=>{await update();});
   try{await vt.ready; const after=captureShared(root);const unique=new Set([...before.keys(),...after.keys()]);
      // Native browser snapshots require explicit names on both sides; preserve collision-free names.
      const details={shared:[...unique].filter(k=>before.has(k)&&after.has(k)),engine:'native'};
      if(sceneAdapter&&oldScene&&newScene)sceneAdapter.animate?.(oldScene,newScene,duration,signal);
      await vt.finished;return {status:'completed',...details};
   }catch(e){try{vt.skipTransition()}catch{};return {status:'error',message:String(e)}}
 }
 // Low-tech fallback: content update stays functional even if animation support is absent.
 await update(); const after=captureShared(root);
 const keys=[...before.keys()].filter(k=>after.has(k));
 const animations=[];
 for(const key of keys){const first=before.get(key).rect,last=after.get(key).rect,el=after.get(key).el;
   const dx=first.left-last.left,dy=first.top-last.top;
   const sx=last.width?first.width/last.width:1,sy=last.height?first.height/last.height:1;
   if(el.animate){animations.push(el.animate([{transform:`translate(${dx}px,${dy}px) scale(${sx},${sy})`,opacity:.85},{transform:'none',opacity:1}],{duration,easing:'cubic-bezier(.2,.8,.2,1)'}).finished.catch(()=>{}));}
 }
 if(sceneAdapter?.animate&&oldScene&&newScene)sceneAdapter.animate(oldScene,newScene,duration,signal);
 await Promise.all(animations);return {status:'completed',shared:keys,engine:'waapi'};
}
export function configureNativeShared(root=document){const keys=new Set();for(const {key,el} of assignSharedNames(root)){const safe=key.replace(/[^a-zA-Z0-9_-]/g,'-');if(keys.has(safe))throw new Error(`duplicate shared key: ${safe}`);keys.add(safe);el.style.viewTransitionName=`zt-${safe}`;}return [...keys]}

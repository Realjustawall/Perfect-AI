/** Scroll-driven animation fallback. Exposes CSS support + lifecycle and safe progress. */
export function detectScrollTimelineSupport(win=window){
  const css=win.CSS;
  return {
    scroll:Boolean(css?.supports?.('animation-timeline: scroll()')),
    view:Boolean(css?.supports?.('animation-timeline: view()')),
  };
}
export function startScrollProgress({container=window,element=document.documentElement,onProgress,reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches,forceFallback=false}){
  if(typeof onProgress!=='function')throw new TypeError('onProgress(progress) required');
  let raf=0,disconnected=false;
  const root=container===window;
  const win=element.ownerDocument.defaultView||window;
  const measure=()=>{
    if(disconnected)return;
    raf=0;
    const host=root?element:container;
    const max=Math.max(0,host.scrollHeight-host.clientHeight);
    const value=max ? Math.max(0,Math.min(1,host.scrollTop/max)) : 0;
    onProgress(reducedMotion?1:value,{maxScroll:max,mode:'js-fallback'});
  };
  const schedule=()=>{if(!raf&&!disconnected)raf=win.requestAnimationFrame(measure)};
  // Do not install JS fallback if native CSS actually owns this element/property.
  if(!forceFallback&&element.hasAttribute?.('data-zt-native-scroll-owner')){
    return {mode:'native',dispose(){},update(){}};
  }
  container.addEventListener('scroll',schedule,{passive:true});
  win.addEventListener('resize',schedule,{passive:true});
  schedule();
  return {mode:'js-fallback',update:schedule,dispose(){disconnected=true;container.removeEventListener('scroll',schedule);win.removeEventListener('resize',schedule);if(raf)win.cancelAnimationFrame(raf);}};
}

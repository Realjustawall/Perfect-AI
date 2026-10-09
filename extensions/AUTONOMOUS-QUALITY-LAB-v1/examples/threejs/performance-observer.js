/** Page visibility + Core Web Vitals diagnostic hook. NOT a substitute for field metrics. */
export function startPerformanceDiagnostics(onSample=console.log) {
  const state={lcp:null,cls:0,longTasks:0,inp:null,source:'lab browser only'};
  const observers=[];
  function watch(type,callback,options={}) {
    try {
      const obs=new PerformanceObserver(list=>{for(const e of list.getEntries())callback(e)});
      obs.observe({type,buffered:true,...options});observers.push(obs);
    }catch(err){ /* unsupported entry type */ }
  }
  watch('largest-contentful-paint',e=>{state.lcp=e.startTime});
  watch('layout-shift',e=>{if(!e.hadRecentInput)state.cls+=e.value});
  watch('longtask',()=>{state.longTasks++});
  watch('event',e=>{if(e.interactionId&&e.duration>0){state.inp=Math.max(state.inp||0,e.duration)}},{durationThreshold:40});
  const onVisibility=()=>{if(document.visibilityState==='hidden')onSample({...state,measuredAt:performance.now()})};
  document.addEventListener('visibilitychange',onVisibility);
  window.__ZT_PERF_REPORT__=()=>({...state,documentURL:location.pathname});
  return {get:()=>({...state}),dispose:()=>{for(const x of observers)x.disconnect();document.removeEventListener('visibilitychange',onVisibility);delete window.__ZT_PERF_REPORT__}};
}

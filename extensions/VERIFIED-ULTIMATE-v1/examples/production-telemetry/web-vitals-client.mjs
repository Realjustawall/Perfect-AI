/** Opt-in RUM only: do not call without consent and a same-origin configured endpoint. */
import {onCLS,onINP,onLCP} from 'web-vitals';
export function enableRUM({consent=false,endpoint='/api/telemetry',release='dev',route='generic',sampleRate=.1}={}) {
 if(!consent)return {enabled:false,reason:'user consent missing'};
 if(!endpoint.startsWith('/')||endpoint.startsWith('//'))throw Error('same-origin relative endpoint required');
 if(Math.random()>sampleRate)return {enabled:false,reason:'not sampled'};
 const clean=s=>String(s).replace(/[^\w-]/g,'').slice(0,48);
 function emit(metric){
  const payload=JSON.stringify({metric:metric.name,value:metric.value,release:clean(release),route:clean(route),tier:'unknown',timestamp:Date.now()});
  if(payload.length>2048)return;
  const blob=new Blob([payload],{type:'application/json'});
  navigator.sendBeacon?.(endpoint,blob);
 }
 onCLS(emit);onINP(emit);onLCP(emit);
 return {enabled:true};
}

import {normalizePath} from './utils.mjs';
/** Async-friendly navigation planner. Navigation must remain accessible via real <a href> elements. */
export function createNavigator({routes=['/'],initial='/',onTransition=async()=>{}}={}){
 const known=new Set(routes.map(normalizePath));let current=normalizePath(initial),busy=false;
 if(!known.has(current))throw new Error('initial route not registered');
 return {get current(){return current},get busy(){return busy},routes:[...known],async go(target,{signal}={}){
   const next=normalizePath(target);if(!known.has(next))return {status:'not-found',route:current};if(next===current)return {status:'same',route:current};if(busy)return {status:'busy',route:current};if(signal?.aborted)return {status:'aborted',route:current};busy=true;try{await onTransition({from:current,to:next,signal});if(signal?.aborted)return {status:'aborted',route:current};current=next;return {status:'navigated',route:current}}catch(error){return {status:'error',route:current,error:String(error)}}finally{busy=false}},syncUrl(path){const p=normalizePath(path);if(known.has(p))current=p;return current}};
}
export const spatialNavPath=(nodes,current,direction)=>{const c=nodes.find(n=>n.id===current);if(!c)return null;const dir={left:[-1,0],right:[1,0],up:[0,-1],down:[0,1]}[direction];if(!dir)return null;return nodes.filter(x=>x.id!==current).map(n=>{const vx=n.x-c.x,vy=n.y-c.y,dot=vx*dir[0]+vy*dir[1];return {id:n.id,score:dot>0?dot/Math.max(1,vx*vx+vy*vy):-Infinity}}).sort((a,b)=>b.score-a.score)[0]?.id??null;}
export function focusDestination(root){const preferred=root?.querySelector?.('[data-route-heading],h1,[autofocus]');if(preferred){if(!preferred.hasAttribute('tabindex'))preferred.setAttribute('tabindex','-1');preferred.focus({preventScroll:true})}return Boolean(preferred)}

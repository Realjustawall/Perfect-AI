export const clamp=(n,min=0,max=1)=>Math.min(max,Math.max(min,Number.isFinite(n)?n:min));
export const lerp=(a,b,t)=>a+(b-a)*clamp(t);
export const smoothstep=t=>{let x=clamp(t);return x*x*(3-2*x)};
export const mapRange=(x,a,b,c,d)=>a===b?c:lerp(c,d,(x-a)/(b-a));
export const rect=(r)=>({x:Number(r.x??r.left??0),y:Number(r.y??r.top??0),width:Math.max(0,Number(r.width??0)),height:Math.max(0,Number(r.height??0))});
export const intersection=(a,b)=>{const p=rect(a),q=rect(b);return Math.max(0,Math.min(p.x+p.width,q.x+q.width)-Math.max(p.x,q.x))*Math.max(0,Math.min(p.y+p.height,q.y+q.height)-Math.max(p.y,q.y))};
export function requireFinite(...values){if(values.some(x=>!Number.isFinite(x)))throw new TypeError('all numbers must be finite')}
export const normalizePath=p=>String(p||'/').replace(/\/+$/,'')||'/';
export const prefersReducedMotion=()=>typeof matchMedia!=='undefined'&&matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Pure, testable screen-space rectangle solver. Units = CSS px. */
export const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
export function intersection(a,b){
  const w=Math.max(0,Math.min(a.x+a.width,b.x+b.width)-Math.max(a.x,b.x));
  const h=Math.max(0,Math.min(a.y+a.height,b.y+b.height)-Math.max(a.y,b.y));
  return w*h;
}
export function padRect(r,p=0){return {x:r.x-p,y:r.y-p,width:r.width+2*p,height:r.height+2*p};}
export function screenBoundsFromPoints(points,viewport){
  if (!points.length) throw new Error('Need points');
  const xs=points.map(p=>viewport.x+(p.x+1)*.5*viewport.width);
  const ys=points.map(p=>viewport.y+(1-p.y)*.5*viewport.height);
  return {x:Math.min(...xs),y:Math.min(...ys),width:Math.max(...xs)-Math.min(...xs),height:Math.max(...ys)-Math.min(...ys)};
}
export function solvePlacement({viewport,model,obstacles=[],preferred={x:viewport.x+viewport.width*.65,y:viewport.y+viewport.height*.48},padding=12,grid=16}){
  if (![viewport.x,viewport.y,viewport.width,viewport.height,model.width,model.height].every(Number.isFinite)) throw new Error('Nonfinite geometry');
  if(viewport.width<=0||viewport.height<=0||model.width<=0||model.height<=0)throw new Error('Invalid geometry');
  const safe={x:viewport.x+padding,y:viewport.y+padding,width:viewport.width-2*padding,height:viewport.height-2*padding};
  const area=(r)=>Math.max(0,r.width)*Math.max(0,r.height);
  let best=null;
  const cols=Math.max(2,Math.min(60,grid));
  for(let row=0;row<=cols;row++)for(let col=0;col<=cols;col++){
    const center={x:safe.x+safe.width*col/cols,y:safe.y+safe.height*row/cols};
    const rect={x:center.x-model.width/2,y:center.y-model.height/2,width:model.width,height:model.height};
    const crop=area(rect)-intersection(rect,safe);
    const occlusion=obstacles.reduce((sum,o)=>sum+intersection(rect,padRect(o,padding)),0);
    const drift=Math.hypot(center.x-preferred.x,center.y-preferred.y);
    const score=100*occlusion + 30*crop + .15*drift;
    if(!best||score<best.score)best={...rect,score,occlusion,crop,drift,center};
  }
  return {...best,feasible:best.occlusion===0&&best.crop<.01};
}

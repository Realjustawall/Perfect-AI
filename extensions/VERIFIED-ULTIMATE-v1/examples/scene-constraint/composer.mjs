// Use DOMClientRect and projected Three.js Box3 corners, not world-space bounding sizes alone.
export const corners=(b)=>{
  const {min,max}=b, arr=[];
  for(const x of [min.x,max.x])for(const y of [min.y,max.y])for(const z of [min.z,max.z])arr.push({x,y,z});
  return arr;
};
export const overlap=(a,b)=>Math.max(0,Math.min(a.right,b.right)-Math.max(a.left,b.left))*Math.max(0,Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top));
export function projectBox(box,camera,THREE,viewport){
 const vertices=corners(box).map(p=>new THREE.Vector3(p.x,p.y,p.z).project(camera));
 // If some vertices are behind the camera, fail the candidate rather than incorrectly flattening it.
 if(vertices.some(p=>!Number.isFinite(p.x)||!Number.isFinite(p.y)||!Number.isFinite(p.z)||p.z< -1||p.z>1)) return null;
 const px=vertices.map(v=>({x:(v.x+1)*viewport.width/2,y:(1-v.y)*viewport.height/2}));
 return {left:Math.min(...px.map(p=>p.x)),right:Math.max(...px.map(p=>p.x)),top:Math.min(...px.map(p=>p.y)),bottom:Math.max(...px.map(p=>p.y))};
}
export function candidateScore(rect,textRects,viewport,{margin=24,focalX=.7,focalY=.5}={}){
 if(!rect) return {valid:false,score:Infinity,reason:'invalid-projection'};
 const overflow = Math.max(0,margin-rect.left)+Math.max(0,margin-rect.top)+Math.max(0,rect.right-(viewport.width-margin))+Math.max(0,rect.bottom-(viewport.height-margin));
 const textCollision=textRects.reduce((sum,r)=>sum+overlap(rect,r),0);
 const cx=(rect.left+rect.right)/2,cy=(rect.top+rect.bottom)/2;
 const centerDistance=Math.hypot(cx-focalX*viewport.width,cy-focalY*viewport.height);
 const valid=overflow===0&&textCollision===0;
 return {valid,score:overflow*200+textCollision*10+centerDistance*.05,overflow,textCollision,centerDistance};
}
export function chooseSceneCandidate(candidates,textRects,viewport,options={}){
 if(!Array.isArray(candidates)||!candidates.length)throw Error('candidates missing');
 const ranked=candidates.map((c,i)=>({id:c.id??i,rect:c.rect,...candidateScore(c.rect,textRects,viewport,options)})).sort((a,b)=>a.score-b.score);
 return {winner:ranked[0].valid?ranked[0]:null,ranked,requiresFallback:!ranked[0].valid};
}
// In Three.js: calculate world Box3 after scene.updateMatrixWorld(true), then project every corner.
// Re-run when fonts ready, model/animation bounds change, ResizeObserver or camera changes.

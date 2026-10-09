/** One scroll owner + one frame loop. Avoid raw wheel listeners and transform collisions. */
export function createScrollCameraController({element,camera,scenes,reduceMotion=false}) {
  if(!element||!camera||!Array.isArray(scenes)||scenes.length<2) throw Error('Need section/camera/keyframes');
  let progress=0, rendered=0,raf=0,destroyed=false;
  const clamp=(x,min,max)=>Math.max(min,Math.min(max,x));
  const update=()=>{
    const rect=element.getBoundingClientRect();
    const range=Math.max(1,rect.height-window.innerHeight);
    progress=clamp(-rect.top/range,0,1);
    if(!raf)raf=requestAnimationFrame(tick);
  };
  const tick=()=>{
    raf=0;if(destroyed)return;
    rendered+=reduceMotion?1:(progress-rendered)*.115;
    if(Math.abs(progress-rendered)<.0002)rendered=progress;
    const n=scenes.length-1,seg=Math.min(n-1,Math.floor(rendered*n)),t=(rendered*n-seg);
    const a=scenes[seg],b=scenes[seg+1];
    camera.position.set(a.position[0]+(b.position[0]-a.position[0])*t,
      a.position[1]+(b.position[1]-a.position[1])*t,a.position[2]+(b.position[2]-a.position[2])*t);
    camera.lookAt(a.target[0]+(b.target[0]-a.target[0])*t,
      a.target[1]+(b.target[1]-a.target[1])*t,a.target[2]+(b.target[2]-a.target[2])*t);
    if(Math.abs(progress-rendered)>.0002)raf=requestAnimationFrame(tick);
  };
  window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update,{passive:true});update();
  return {dispose(){destroyed=true;window.removeEventListener('scroll',update);window.removeEventListener('resize',update);cancelAnimationFrame(raf)},seek(p){progress=clamp(p,0,1);if(!raf)raf=requestAnimationFrame(tick)}};
}

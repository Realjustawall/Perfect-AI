/** Runtime performance feedback controller for existing Three.WebGLRenderer.
 * Keep primary motion alive by lowering optional effects and resolution first.
 * Call sample(deltaMs) once per frame, use .state to configure scene/postFX.
 */
export class AdaptiveQuality {
  constructor({device='auto', dprCap=2, cooldownMs=4000}={}) {
    this.device=device;this.dprCap=dprCap;this.cooldownMs=cooldownMs;
    this.samples=[];this.lastChange=0;this.level=2;
    this.state=this.getState();
  }
  getState() {
    const levels=[{dpr:.75,particles:100,lod:2,bloom:false,shadows:false},
                  {dpr:1.0,particles:500,lod:1,bloom:false,shadows:false},
                  {dpr:1.5,particles:1400,lod:0,bloom:true,shadows:true}];
    const quality={...levels[this.level]};quality.dpr=Math.min(quality.dpr,this.dprCap);
    return quality;
  }
  sample(deltaMs,now=performance.now()) {
    if(!(deltaMs>0&&deltaMs<300)) return this.state;
    this.samples.push(deltaMs);if(this.samples.length>90)this.samples.shift();
    if(this.samples.length<50||now-this.lastChange<this.cooldownMs) return this.state;
    const p95=[...this.samples].sort((a,b)=>a-b)[Math.floor(this.samples.length*.95)];
    const target=this.device==='desktop'?18.5:26;
    let next=this.level;
    if(p95>target*1.20)next=Math.max(0,next-1);
    else if(p95<target*.70)next=Math.min(2,next+1);
    if(next!==this.level){this.level=next;this.lastChange=now;this.state=this.getState();this.samples=[];}
    return this.state;
  }
  applyToRenderer(renderer,canvas={width:0,height:0}) {
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,this.state.dpr));
    if(canvas.width>0&&canvas.height>0)renderer.setSize(canvas.width,canvas.height,false);
  }
}
export function shouldPauseScene(element) {
  let paused=false;
  const obs=new IntersectionObserver(entries=>{paused=!entries[0].isIntersecting;},{threshold:.02});
  obs.observe(element);
  return {isPaused:()=>paused,dispose:()=>obs.disconnect()};
}

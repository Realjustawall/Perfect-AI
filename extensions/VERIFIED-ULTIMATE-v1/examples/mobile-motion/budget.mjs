export const PRESETS={high:{dpr:2,particles:1800,shadows:true,postFX:true},mid:{dpr:1.5,particles:800,shadows:true,postFX:false},low:{dpr:1,particles:250,shadows:false,postFX:false},static:{dpr:1,particles:0,shadows:false,postFX:false}};
// Decisions based on real frame durations; hysteresis avoids flickering between tiers.
export class AdaptiveMotionBudget{
 constructor({targetFPS=60,reduceMotion=false,cooldownMs=5000}={}){
  this.targetMs=1000/targetFPS;this.reduced=reduceMotion;this.tier=reduceMotion?'static':'high';this.samples=[];this.lastChange=-Infinity;this.cooldownMs=cooldownMs;this.goodStreak=0;
 }
 observeFrame(durationMs,timeMs){
  if(this.reduced)return {...PRESETS.static,tier:'static'};
  if(Number.isFinite(durationMs)&&durationMs>0&&durationMs<1000)this.samples.push(durationMs);
  if(this.samples.length>90)this.samples.shift();
  if(this.samples.length<30)return {...PRESETS[this.tier],tier:this.tier};
  const sorted=[...this.samples].sort((a,b)=>a-b);const p95=sorted[Math.ceil(.95*sorted.length)-1];
  if(timeMs-this.lastChange<this.cooldownMs)return {...PRESETS[this.tier],tier:this.tier};
  const tiers=['low','mid','high'];let i=tiers.indexOf(this.tier);
  if(p95>this.targetMs*1.45&&i>0){this.tier=tiers[i-1];this.lastChange=timeMs;this.goodStreak=0}
  else if(p95<this.targetMs*.75){this.goodStreak++;if(this.goodStreak>=15&&i<2){this.tier=tiers[i+1];this.lastChange=timeMs;this.goodStreak=0}}
  else this.goodStreak=0;
  return {...PRESETS[this.tier],tier:this.tier,p95};
 }
}

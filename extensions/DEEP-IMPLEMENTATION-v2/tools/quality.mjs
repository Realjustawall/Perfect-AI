// No hardware claims. Pure stable strategy for measured frame times.
export function p95(values){if(!values.length)return null;const s=[...values].sort((a,b)=>a-b);return s[Math.min(s.length-1,Math.ceil(s.length*.95)-1)];}
export class QualityGovernor{
 constructor(){this.tier='high';this.samples=[];this.lastChange=0;this.frozen=false}
 add(delta,now){if(!Number.isFinite(delta)||delta<2||delta>250)return this.tier;this.samples.push(delta);if(this.samples.length>120)this.samples.shift();if(this.samples.length<60||now-this.lastChange<3500||this.frozen)return this.tier;
 const ms=p95(this.samples), map=['low','medium','high'];let idx=map.indexOf(this.tier);
 if(ms>32&&idx>0)idx--;
 else if(ms<17&&idx<2)idx++;
 const next=map[idx];if(next!==this.tier){this.tier=next;this.lastChange=now;this.samples.length=0;}return this.tier;
 }
 get config(){return {low:{dpr:1,particles:300,raySteps:16,shadows:false},medium:{dpr:1.35,particles:1200,raySteps:32,shadows:false},high:{dpr:1.7,particles:3000,raySteps:64,shadows:true}}[this.tier]}
}

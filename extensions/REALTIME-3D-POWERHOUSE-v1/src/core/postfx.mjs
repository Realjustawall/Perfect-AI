export const PRESETS=Object.freeze({
  natural:{bloomIntensity:0.08,luminanceThreshold:0.9,vignette:0.12,grain:0.02,exposure:1},
  film:{bloomIntensity:0.35,luminanceThreshold:0.82,vignette:0.3,grain:0.07,exposure:0.94},
  neon:{bloomIntensity:1,luminanceThreshold:0.66,vignette:0.22,grain:0.035,exposure:0.98},
  mobile:{bloomIntensity:0.12,luminanceThreshold:0.91,vignette:0.1,grain:0,exposure:1}
});
export function resolvePreset(input='natural', quality='desktop'){
 const base=typeof input==='string'?PRESETS[input]:input;
 if(!base)throw Error('unknown preset');
 const out={...base};
 for(const k of ['bloomIntensity','luminanceThreshold','vignette','grain','exposure'])if(!Number.isFinite(out[k]))throw Error(`invalid ${k}`);
 if(quality==='low'){out.bloomIntensity=0;out.grain=0;}
 if(quality==='mobile'){out.bloomIntensity=Math.min(0.3,out.bloomIntensity);out.grain=0;}
 for(const k of ['bloomIntensity','vignette','grain'])out[k]=Math.max(0,Math.min(2,out[k]));
 return out;
}
export function chooseFxQuality({width,height,dpr=1,frameP95=16,saveData=false,reducedMotion=false}={}){
 if(saveData||reducedMotion||frameP95>32||width*height*dpr*dpr>5e6)return 'low';
 if(frameP95>20||width*height*dpr*dpr>2.5e6)return 'mobile';
 return 'desktop';
}

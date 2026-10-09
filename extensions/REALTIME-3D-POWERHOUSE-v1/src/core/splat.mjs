export function validateSplatAsset({url,bytes,format='splat',maxBytes=120*1024*1024}={}){
 const errors=[];
 if(typeof url!=='string'||!url.trim())errors.push('missing asset URL');
 if(url && !/^(?:\.?\.?\/|\/)?.+\.(splat|ksplat)(?:\?.*)?$/i.test(url))errors.push('expected .splat or .ksplat URL');
 if(url && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(url))errors.push('remote/object URL not allowed by default; host assets locally');
 if(bytes!==undefined&&(!Number.isInteger(bytes)||bytes<0||bytes>maxBytes))errors.push('asset over size limit');
 if(format!=='splat'&&format!=='ksplat')errors.push('unsupported file format');
 return {ok:!errors.length,errors,policy:{maxBytes,format}};
}
export function recommendSplatSettings({width=1280,height=720,dpr=1,memoryGB=8,reducedMotion=false}={}){
 const pixels=width*height*dpr*dpr;
 const mobile=memoryGB<=4||pixels>3e6;
 return {dprCap:mobile?1.25:Math.min(2,dpr),alphaTest:mobile?0.15:0.06,orbitEnabled:!reducedMotion,quality:mobile?'mobile':'desktop',preferFallback:memoryGB<2};
}

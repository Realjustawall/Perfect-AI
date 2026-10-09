#!/usr/bin/env node
// Perceptual OKLCH palette proposal + gamut mapping + WCAG contrast. Creative rankings are heuristics.
import fs from 'node:fs';
export const clamp=(x,a,b)=>Math.min(b,Math.max(a,x));
export function oklchToRgb(L,C,H){
  const a=C*Math.cos(H*Math.PI/180), b=C*Math.sin(H*Math.PI/180);
  const l=(L+0.3963377774*a+0.2158037573*b)**3;
  const m=(L-0.1055613458*a-0.0638541728*b)**3;
  const s=(L-0.0894841775*a-1.291485548*b)**3;
  return [4.0767416621*l-3.3077115913*m+0.2309699292*s,
  -1.2684380046*l+2.6097574011*m-0.3413193965*s,
  -0.0041960863*l-0.7034186147*m+1.707614701*s];
}
const encode=c=>c<=0.0031308?12.92*c:1.055*c**(1/2.4)-0.055;
const inGamut=rgb=>rgb.every(c=>Number.isFinite(c)&&c>=-1e-7&&c<=1+1e-7);
export function toHex(L,C,H){
 let lo=0,hi=Math.max(0,C),rgb=oklchToRgb(L,0,H);
 for(let i=0;i<32;i++){const m=(lo+hi)/2;const trial=oklchToRgb(L,m,H);if(inGamut(trial)){lo=m;rgb=trial}else hi=m;}
 return '#'+rgb.map(c=>Math.round(clamp(encode(clamp(c,0,1)),0,1)*255).toString(16).padStart(2,'0')).join('');
}
export function hexToLin(h){const a=h.replace('#','');if(!/^[0-9a-f]{6}$/i.test(a))throw Error(`Invalid hex ${h}`);return [0,2,4].map(i=>parseInt(a.slice(i,i+2),16)/255).map(c=>c<=.04045?c/12.92:((c+.055)/1.055)**2.4)}
export function contrast(fg,bg){const lum=h=>hexToLin(h).reduce((a,c,i)=>a+c*[.2126,.7152,.0722][i],0);const [a,b]=[lum(fg),lum(bg)].sort((x,y)=>y-x);return (a+.05)/(b+.05)}
export function palette({seedHue=225,monochrome=false,dark=false,brandHex='',industry='product'}={}){
 const hue=((seedHue%360)+360)%360;
 const sets=monochrome?[
  {name:'graphite',h:0,c:0},{name:'ink',h:0,c:0},{name:'pearl',h:0,c:0},{name:'carbon',h:0,c:0},{name:'platinum',h:0,c:0}
 ]:[
  {name:'understated',h:hue,c:.08},{name:'warm-complement',h:(hue+180)%360,c:.11},{name:'analogous',h:(hue+30)%360,c:.10},{name:'muted-triadic',h:(hue+120)%360,c:.095},{name:'cool-split',h:(hue+210)%360,c:.105}
 ];
 return sets.map((s,i)=>{
  const bgL = monochrome?(dark?[.09,.125,.155,.095,.115][i]:[.99,.96,.93,.98,.95][i]):(dark?.11:.985);
  const bg=toHex(bgL,monochrome?0:.008,s.h);
  const surface=toHex(monochrome? (dark?bgL+.07:bgL-.05) :(dark?.17:.955),monochrome?0:.012,s.h);
  const foreground=toHex(dark?.95:.17,monochrome?0:.012,s.h);
  const muted=toHex(dark?.79:.32,monochrome?0:.01,s.h);
  const hueOffset=monochrome?0:s.h;
  let accent=toHex(monochrome? (dark?[.85,.92,.80,.88,.83][i]:[.35,.30,.28,.40,.32][i]):(dark?.74:.49),monochrome?0:s.c,hueOffset);
  // Explicitly increase contrast by moving perceived lightness, never trust a descriptive label.
  for(let j=0;j<30&&contrast(accent,bg)<4.5;j++) accent=toHex(dark?Math.min(.98,.74+j*.007):Math.max(.16,.49-j*.01),monochrome?0:s.c,hueOffset);
  const tokens={canvas:bg,surface,ink:foreground,muted,accent,focus:accent};
  const checks={ink:contrast(foreground,bg),muted:contrast(muted,bg),accent:contrast(accent,bg),focus:contrast(accent,bg)};
  const passes=checks.ink>=4.5&&checks.accent>=4.5;
  const contrastScore=Math.min(1,checks.ink/10)*.35+Math.min(1,checks.accent/7)*.35;
  const score=Number((contrastScore + (monochrome?.23:.12) + (brandHex?.08:0) + (i===0?.03:0)).toFixed(4));
  return {name:s.name,hue:s.h,chroma:s.c,industry,dark,monochrome,tokens,checks,passes,score,notes:['Heuristic fit; not validated consumer research.','Contrast measured on flat backgrounds; translucent composites need rendered checks.']};
 }).sort((a,b)=>b.score-a.score);
}
export function toCss(p){const a=p.tokens;return `:root{\n${Object.entries(a).map(([k,v])=>`  --zt-${k}: ${v};`).join('\n')}\n}\n`}
if(import.meta.url===`file://${process.argv[1]}`){
 const opts=process.argv[2]?JSON.parse(fs.readFileSync(process.argv[2],'utf8')):{};
 const ps=palette(opts);console.log(JSON.stringify({choice:ps[0].name,options:ps},null,2));
 if(process.argv[3])fs.writeFileSync(process.argv[3],toCss(ps[0]));
}

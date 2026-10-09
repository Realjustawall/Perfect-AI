#!/usr/bin/env node
// Dependency-free perceptual OKLCH palette design and WCAG 2.2 checks.
import fs from 'node:fs';
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
const srgb=c=>c<=.0031308?12.92*c:1.055*Math.pow(c,1/2.4)-.055;
const linear=c=>c<=.04045?c/12.92:Math.pow((c+.055)/1.055,2.4);
export function convertRaw(L,C,h){const a=C*Math.cos(h*Math.PI/180),b=C*Math.sin(h*Math.PI/180);
 const l=Math.pow(L+.3963377774*a+.2158037573*b,3),m=Math.pow(L-.1055613458*a-.0638541728*b,3),s=Math.pow(L-.0894841775*a-1.291485548*b,3);
 return [4.0767416621*l-3.3077115913*m+.2309699292*s,-1.2684380046*l+2.6097574011*m-.3413193965*s,-.0041960863*l-.7034186147*m+1.707614701*s];}
export function toHex(rgb){return '#'+rgb.map(c=>Math.round(clamp(srgb(c))*255).toString(16).padStart(2,'0')).join('');}
export function oklchHex(L,C,h){let lo=0,hi=Math.max(0,C); for(let i=0;i<24;i++){const md=(lo+hi)/2,r=convertRaw(L,md,h);if(r.every(x=>x>=-0.0000005&&x<=1.0000005))lo=md;else hi=md;}return toHex(convertRaw(L,lo,h));}
export function hexRgb(h){const v=h.replace('#','');if(!/^[\da-f]{6}$/i.test(v))throw Error('invalid hex '+h);return [0,2,4].map(i=>parseInt(v.slice(i,i+2),16)/255);}
export function luminance(hex){const [r,g,b]=hexRgb(hex).map(linear);return .2126*r+.7152*g+.0722*b;}
export function contrast(a,b){const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);}
// Approximate CVD *preview* matrices only; never substitute for full assistive testing.
const matrices={protanopia:[[.567,.433,0],[.558,.442,0],[0,.242,.758]],deuteranopia:[[.625,.375,0],[.7,.3,0],[0,.3,.7]],tritanopia:[[.95,.05,0],[0,.433,.567],[0,.475,.525]]};
export function previewCvd(hex,mode){const m=matrices[mode];if(!m)throw Error('unsupported CVD preview');const v=hexRgb(hex);return '#'+m.map(row=>Math.round(clamp(row.reduce((s,x,i)=>s+x*v[i],0))*255).toString(16).padStart(2,'0')).join('');}
const contrastText=(bg)=>contrast(bg,'#111111')>contrast(bg,'#ffffff')?'#111111':'#ffffff';
function palette(h,mode,kind,index){const dark=mode==='dark', mono=kind==='monochrome';
 const bg=oklchHex(dark?.11:.985,mono?0:.008,h),surf=oklchHex(dark?.16:.945,mono?0:.011,h),surfHi=oklchHex(dark?.21:.91,mono?0:.012,h);
 const text=oklchHex(dark?.98:.12,mono?0:.006,h),muted=oklchHex(dark?.79:.31,mono?0:.007,h),border=oklchHex(dark?.53:.65,mono?0:.010,h);
 const ch=mono?0:[.125,.105,.155,.085,.13][index],h2=(h+[0,32,-32,160,90][index]+360)%360;
 const accent=oklchHex(dark?.79:.53,ch,h2),accentText=contrastText(accent);
 const focus=oklchHex(dark?.92:.3,mono?0:.1,h2);
 const tokens={background:bg,surface:surf,surfaceRaised:surfHi,text,muted,border,accent,accentText,focus,error:oklchHex(dark?.75:.51,mono?0:.13,25),success:oklchHex(dark?.72:.47,mono?0:.105,155)};
 const checks={body:contrast(text,bg),muted:contrast(muted,bg),button:contrast(accentText,accent),focusVsBackground:contrast(focus,bg)};
 const failures=Object.entries(checks).filter(([k,v])=>v<(['focusVsBackground'].includes(k)?3:4.5)).map(([k,v])=>`${k}:${v.toFixed(2)}`);
 const minText=Math.min(checks.body,checks.muted,checks.button);
 const score=Math.round(100*Math.min(1,minText/7)*.62+100*Math.min(1,checks.focusVsBackground/4.5)*.2+18*(mono?1:([1,.93,.95,.9,.92][index])));
 return {id:index+1,name:(mono?'Monochrome ':'Palette ')+(index+1),mode,tokens,checks,failures,score,accentHue:h2,notes:'Automated checks: WCAG 2.2 ratios + heuristic role balance; human review still required.'};}
export function createPalettes({mode='dark',hue=220,monochrome=false}={}){return Array.from({length:5},(_,i)=>palette((hue+13*i)%360,mode,monochrome?'monochrome':'color',i)).sort((a,b)=>b.score-a.score);}
export function toCss(p){return ':root{\n'+Object.entries(p.tokens).map(([k,v])=>'  --zt-'+k.replace(/[A-Z]/g,c=>'-'+c.toLowerCase())+': '+v+';').join('\n')+'\n}\n';}
if(process.argv[1]?.endsWith('color-intelligence.mjs')){
 const a=process.argv.slice(2),get=(k,df)=>a.includes(k)?a[a.indexOf(k)+1]:df;
 let options={mode:get('--mode','dark'),hue:Number(get('--hue',220)),monochrome:a.includes('--monochrome')},ps=createPalettes(options);
 const result={options,palettes:ps,recommended:ps.find(p=>!p.failures.length)?.id??null,disclaimer:'CVD is only approximate. Inspect all semantics with a human and real devices.'};
 const output=get('--output',null);
 if(output){fs.mkdirSync(output,{recursive:true});fs.writeFileSync(output+'/palettes.json',JSON.stringify(result,null,2));fs.writeFileSync(output+'/tokens.css',toCss(ps.find(p=>!p.failures.length)||ps[0]));}
 else console.log(JSON.stringify(result,null,2));
}

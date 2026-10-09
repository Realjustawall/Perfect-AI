/** Perfect_AI authored OKLCH + accessibility palette utility. No dependencies. */
const clamp=(n,lo=0,hi=1)=>Math.max(lo,Math.min(hi,n));
const cssRgb=rgb=>'#'+rgb.map(c=>Math.round(clamp(c/255)*255).toString(16).padStart(2,'0')).join('');
export function hexToRgb(hex){
  if(!/^#[a-f0-9]{6}$/i.test(hex))throw Error('Expected #rrggbb: '+hex);
  return [1,3,5].map(p=>parseInt(hex.slice(p,p+2),16));
}
export const toLinear=c=> (c/255)<=0.04045 ? (c/255)/12.92 : (((c/255)+.055)/1.055)**2.4;
export function luminance(hex){const [r,g,b]=hexToRgb(hex).map(toLinear);return .2126*r+.7152*g+.0722*b;}
export function contrastRatio(a,b){const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);}
export function compositeHex(foreground,background,alpha=1){
 const f=hexToRgb(foreground), b=hexToRgb(background),a=clamp(alpha);
 return cssRgb(f.map((n,i)=>a*n+(1-a)*b[i]));
}
function oklabLinearRgb(L,a,b){
 const l=(L+.3963377774*a+.2158037573*b)**3;
 const m=(L-.1055613458*a-.0638541728*b)**3;
 const s=(L-.0894841775*a-1.2914855480*b)**3;
 return [
  4.0767416621*l-3.3077115913*m+.2309699292*s,
 -1.2684380046*l+2.6097574011*m-.3413193965*s,
 -.0041960863*l-.7034186147*m+1.7076147010*s
 ];
}
const nonlinear=c=>c<=.0031308?12.92*c:1.055*Math.pow(c,1/2.4)-.055;
/** Gamut maps by searching decreasing chroma while maintaining L,h (not naive clipping). */
export function oklchToHex(L,C,h){
 if(![L,C,h].every(Number.isFinite) || L<0 || L>1 || C<0)throw Error('Invalid OKLCH');
 const rad=h*Math.PI/180;
 const rgbOf=c=>oklabLinearRgb(L, c*Math.cos(rad),c*Math.sin(rad));
 let low=0,high=C,lin=rgbOf(high);
 const inside=rgb=>rgb.every(x=>x>=-1e-8 && x<=1+1e-8);
 if(!inside(lin)){
   for(let i=0;i<32;i++){
     let mid=(low+high)/2,tryRgb=rgbOf(mid);
     if(inside(tryRgb)){low=mid;lin=tryRgb;} else high=mid;
   }
 } else low=C;
 if(!inside(lin))lin=rgbOf(low);
 return cssRgb(lin.map(c=>clamp(nonlinear(clamp(c)))*255));
}
const intents={developer:255,finance:253,health:188,education:235,creative:297,commerce:28,science:214,climate:149,media:29,gaming:315};
const makeNeutral=(isDark)=> isDark ? {
 bg:'#080808',surface:'#171717',surfaceRaised:'#242424',text:'#f5f5f5',muted:'#bdbdbd',border:'#777777',focus:'#ffffff',accent:'#ffffff',onAccent:'#080808',selection:'#494949'
}: {
 bg:'#fbfbfb',surface:'#f1f1f1',surfaceRaised:'#ffffff',text:'#111111',muted:'#464646',border:'#707070',focus:'#111111',accent:'#111111',onAccent:'#ffffff',selection:'#dadada'
};
function ensureContrast(fg,bg,min){
 if(contrastRatio(fg,bg)>=min)return fg;
 const [dark,light]=['#101010','#f9f9f9'];
 return contrastRatio(dark,bg)>contrastRatio(light,bg)?dark:light;
}
export function choosePalette(config={}){
 const mode=config.mode==='light'?'light':'dark',dark=mode==='dark';
 const strict=config.monochrome===true || config.monochrome==='strict' || config.brand==='Perfect_AI';
 const neutral=makeNeutral(dark);
 let accent=neutral.accent;
 if(!strict){
   const h=Number.isFinite(config.hue)?config.hue:(intents[config.product]??242);
   accent=oklchToHex(dark?.78:.48,config.chroma===undefined?.145:clamp(config.chroma,0,.35),h);
 }
 const palette={...neutral,accent};
 palette.onAccent=ensureContrast(dark?'#080808':'#ffffff',accent,4.5);
 palette.text=ensureContrast(palette.text,palette.bg,7);
 palette.muted=ensureContrast(palette.muted,palette.bg,4.5);
 palette.border=ensureContrast(palette.border,palette.surface,3);
 const pairs={body:contrastRatio(palette.text,palette.bg),muted:contrastRatio(palette.muted,palette.bg),border:contrastRatio(palette.border,palette.surface),button:contrastRatio(palette.onAccent,palette.accent)};
 const score=Object.values(pairs).reduce((sum,n)=>sum+(n>=3?1:0),0);
 return {palette,mode,strict,pairs,score,
   rationale: strict?'Explicit monochrome/Perfect_AI constraint outranks hue psychology. Neutral lightness hierarchy and contrast encode states.':`Product intent ${config.product||'generic'}, sRGB gamut-mapped OKLCH accent, balanced with accessible neutrals.`,
   warnings:Object.entries(pairs).filter(([k,v])=>v<(k==='muted'||k==='body'||k==='button'?4.5:3)).map(([k,v])=>`${k} contrast ${v.toFixed(2)} low`)
 };
}
export function cssTokens(palette){return ':root {\n'+Object.entries(palette).map(([k,v])=>`  --zt-${k.replace(/[A-Z]/g,x=>'-'+x.toLowerCase())}: ${v};`).join('\n')+'\n}\n';}

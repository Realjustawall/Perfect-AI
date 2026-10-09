import {clamp,lerp} from './utils.mjs';
/** Persian/Arabic graphemes MUST stay shaped in an unsplit text run unless specialized shaping is available. */
export function typographyPlan(text,locale='en'){const rtl=/^(fa|ar|ur|he)(-|$)/i.test(locale);const hasArabic=/[\u0600-\u06ff]/.test(text);const segments=rtl||hasArabic?[text]:[...new Intl.Segmenter(locale,{granularity:'grapheme'}).segment(text)].map(x=>x.segment);return {locale,dir:rtl?'rtl':'ltr',segments,mode:rtl||hasArabic?'whole-run':'graphemes',reason:rtl||hasArabic?'Preserve complex-script shaping; animate container/words, not individual disconnected glyphs':'Grapheme segmentation avoids breaking Unicode sequences'};}
export const waveOffset=(index,total,progress,{amplitude=20,cycles=1}={})=>Math.sin(2*Math.PI*(clamp(progress)*cycles+index/Math.max(total,1)))*amplitude;
export const characterStagger=(index,total,progress,{stagger=.025,duration=.3}={})=>clamp((progress-index*stagger)/Math.max(.001,duration));
export const stretchType=(progress,{min=.85,max=1.2}={})=>`scaleX(${lerp(min,max,progress)})`;
export function typographyCSS({progress=.5,amplitude=12,stagger=0}={}){return {'--zt-type-progress':String(clamp(progress)),'--zt-type-y':`${waveOffset(stagger,8,progress,{amplitude})}px`};}

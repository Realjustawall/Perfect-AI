import {clamp} from './utils.mjs';
export function frameForProgress(progress,frameCount){if(!Number.isInteger(frameCount)||frameCount<1)throw new Error('invalid frameCount');return Math.min(frameCount-1,Math.floor(clamp(progress)*(frameCount-1)+1e-8))}
export const scrollToProgress=(scrollY,start,end)=>end<=start?0:clamp((scrollY-start)/(end-start));
export function makeFramePath({base='/frames',prefix='frame-',ext='webp',pad=4,start=0}={}){if(!/^[a-z0-9]+$/i.test(ext))throw new Error('extension');return index=>`${base.replace(/\/$/,'')}/${prefix}${String(index+start).padStart(pad,'0')}.${ext}`;}
export class FrameCache{
 constructor({maxCount=32,load}={}){if(typeof load!=='function')throw new Error('load callback required');this.maxCount=maxCount;this.load=load;this.cache=new Map();this.pending=new Map()}
 async get(index){if(this.cache.has(index)){const value=this.cache.get(index);this.cache.delete(index);this.cache.set(index,value);return value}if(this.pending.has(index))return this.pending.get(index);const promise=Promise.resolve().then(()=>this.load(index)).then(value=>{this.pending.delete(index);this.cache.set(index,value);while(this.cache.size>this.maxCount){const oldest=this.cache.keys().next().value;this.cache.get(oldest)?.close?.();this.cache.delete(oldest)}return value},error=>{this.pending.delete(index);throw error});this.pending.set(index,promise);return promise}
 clear(){for(const val of this.cache.values())val?.close?.();this.cache.clear();this.pending.clear()}
}
export function storyBeat(progress,beats){const p=clamp(progress);let selected=beats[0]??null;for(const beat of beats)if(beat.start<=p)selected=beat;return selected}

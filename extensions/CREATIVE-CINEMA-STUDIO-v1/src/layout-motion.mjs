import {clamp,rect,lerp} from './utils.mjs';
/** Pure deformation planning; caller applies only composited transforms, not layout-changing left/top. */
export function gridMotion(items,progress,{bend=18,depth=45,stagger=.08}={}){const p=clamp(progress);return items.map((item,i)=>{const u=clamp((p-i*stagger)/Math.max(.001,1-i*stagger));return {id:item.id,translateX:Math.sin((i+1)*1.27+u*Math.PI)*bend*u,translateY:lerp(0,-depth*(item.depth??.5),u),rotateZ:Math.sin(u*Math.PI)*((i%2)?-1:1)*3,scale:lerp(1,1.05,u)}})}
export function sharedFlip(first,last){const a=rect(first),b=rect(last);return {dx:a.x-b.x,dy:a.y-b.y,sx:b.width?a.width/b.width:1,sy:b.height?a.height/b.height:1};}
export function tileTrack(total,index,viewportWidth){const cols=viewportWidth<640?1:viewportWidth<1024?2:3;return {col:index%cols,row:Math.floor(index/cols),columns:cols,rows:Math.ceil(total/cols)}}
export function applyMotion(el,state){if(!el||!el.style)return;el.style.transform=`translate3d(${state.translateX||0}px,${state.translateY||0}px,0) rotate(${state.rotateZ||0}deg) scale(${state.scale??1})`;}

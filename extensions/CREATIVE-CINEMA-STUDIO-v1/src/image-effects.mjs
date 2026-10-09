import {clamp,lerp} from './utils.mjs';
export const parallaxTransform=({pointerX=0,pointerY=0,scroll=0,depth=.5,intensity=24}={})=>({x:clamp(pointerX,-1,1)*intensity*depth,y:clamp(pointerY,-1,1)*intensity*depth-scroll*depth});
export function revealMask(progress,direction='left'){const t=clamp(progress)*100;return direction==='right'?`inset(0 ${t}% 0 0)`:direction==='top'?`inset(0 0 ${100-t}% 0)`:direction==='bottom'?`inset(${100-t}% 0 0 0)`:`inset(0 0 0 ${100-t}%)`}
export function layeredParallax(layers,interaction){return layers.map((layer,i)=>({...layer,offset:parallaxTransform({...interaction,depth:layer.depth??(i+1)/(layers.length+1)})}));}
/** CPU displacement sample: for tests/static previews, not a substitute for WebGL real-time image effects. */
export function displaceImageData({data,width,height},amplitude=8,progress=0){if(!Number.isInteger(width)||!Number.isInteger(height)||data.length!==width*height*4)throw new Error('invalid RGBA image');const out=new Uint8ClampedArray(data.length);for(let y=0;y<height;y++){const shift=Math.round(Math.sin(y*.06+progress*Math.PI*2)*amplitude*clamp(progress));for(let x=0;x<width;x++){const src=(y*width+Math.max(0,Math.min(width-1,x+shift)))*4;out.set(data.subarray(src,src+4),(y*width+x)*4)}}return {data:out,width,height}}
export const imageEffectUniforms=(progress,pointer={x:0,y:0},strength=.2)=>({uProgress:clamp(progress),uPointer:[clamp(pointer.x,-1,1),clamp(pointer.y,-1,1)],uStrength:Math.max(0,strength)});
export function flip3d(progress){return `perspective(1000px) rotateY(${lerp(-90,0,progress)}deg)`;}

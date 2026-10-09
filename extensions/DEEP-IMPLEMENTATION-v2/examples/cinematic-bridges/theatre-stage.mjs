// Package: @theatre/core. Requires an authored Theatre sequence state for real keyframes.
import { getProject } from '@theatre/core';
export function bindCamera(camera){
 const project=getProject('Perfect AI Showcase');const sheet=project.sheet('Hero');
 const object=sheet.object('Camera',{position:{x:0,y:0,z:7},fov:45});
 const off=object.onValuesChange(({position,fov})=>{camera.position.set(position.x,position.y,position.z);camera.fov=fov;camera.updateProjectionMatrix()});
 return {sheet,play:()=>sheet.sequence.play(),dispose:()=>{off();sheet.detachObject('Camera')}};
}

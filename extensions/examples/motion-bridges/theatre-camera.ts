import { getProject, types } from '@theatre/core';
import type * as THREE from 'three';
// Caller supplies a live perspective camera; viewport and renderer remain owned by Three.js.
export function bindCinematicCamera(camera: THREE.PerspectiveCamera, savedState?: unknown){
  const project=getProject('PerfectAISequence',savedState ? {state:savedState as any}:undefined);
  const sheet=project.sheet('Hero');
  const node=sheet.object('Camera',{x:types.number(camera.position.x),y:types.number(camera.position.y),z:types.number(camera.position.z)});
  const unsubscribe=node.onValuesChange(({x,y,z})=>{camera.position.set(x,y,z);camera.updateProjectionMatrix();});
  return {project,sheet,dispose:unsubscribe};
}

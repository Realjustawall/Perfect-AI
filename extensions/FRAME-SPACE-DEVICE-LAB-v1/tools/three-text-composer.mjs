/** THREE adapter; install `three` in target application. Never modifies camera unexpectedly. */
import * as THREE from 'three';
import {screenBoundsFromPoints,solvePlacement} from './compose-core.mjs';
const boxCorners=(b)=>{
 const p=[];for(const x of [b.min.x,b.max.x])for(const y of [b.min.y,b.max.y])for(const z of [b.min.z,b.max.z])p.push(new THREE.Vector3(x,y,z));return p;
};
export function projectModelBounds({object,camera,canvas}){
 object.updateWorldMatrix(true,true);camera.updateMatrixWorld(true);
 const box=new THREE.Box3().setFromObject(object);
 if(box.isEmpty())throw Error('Empty object bounds');
 const canvasRect=canvas.getBoundingClientRect();
 const pts=boxCorners(box).map(point=>point.project(camera));
 return {rect:screenBoundsFromPoints(pts,canvasRect),box,canvasRect};
}
function pixelToWorld({camera,worldCenter,dx,dy,rect}){
 // Perspective: compute intersection of two camera rays with camera-facing plane at model depth.
 const N=new THREE.Vector3(0,0,-1).applyQuaternion(camera.quaternion).normalize();
 const plane=new THREE.Plane().setFromNormalAndCoplanarPoint(N,worldCenter);
 const ndc=(sx,sy)=>new THREE.Vector2(2*(sx-rect.left)/rect.width-1,1-2*(sy-rect.top)/rect.height);
 const centerProjected=worldCenter.clone().project(camera);
 const sx=rect.left+(centerProjected.x+1)*.5*rect.width;
 const sy=rect.top+(1-centerProjected.y)*.5*rect.height;
 const rayPoint=(px,py)=>{
   const ray=new THREE.Raycaster();ray.setFromCamera(ndc(px,py),camera);
   const hit=new THREE.Vector3();return ray.ray.intersectPlane(plane,hit)?hit:null;
 };
 const a=rayPoint(sx,sy),b=rayPoint(sx+dx,sy+dy);
 if(!a||!b)return null;return b.sub(a);
}
export function positionModelAroundText({object,camera,canvas,obstacleElements=[],preferred={x:.72,y:.5},padding=20,grid=24}){
 const {rect,box,canvasRect}=projectModelBounds({object,camera,canvas});
 const obstacles=obstacleElements.filter(e=>e&&e.getBoundingClientRect).map(e=>e.getBoundingClientRect());
 const prefer={x:canvasRect.left+preferred.x*canvasRect.width,y:canvasRect.top+preferred.y*canvasRect.height};
 const solution=solvePlacement({viewport:{x:canvasRect.left,y:canvasRect.top,width:canvasRect.width,height:canvasRect.height},model:{width:rect.width,height:rect.height},obstacles,preferred:prefer,padding,grid});
 const currentCenter={x:rect.x+rect.width/2,y:rect.y+rect.height/2};
 const delta=pixelToWorld({camera,worldCenter:box.getCenter(new THREE.Vector3()),dx:solution.center.x-currentCenter.x,dy:solution.center.y-currentCenter.y,rect:canvasRect});
 if(delta)object.position.add(delta);
 return {...solution,applied:Boolean(delta),before:rect};
}

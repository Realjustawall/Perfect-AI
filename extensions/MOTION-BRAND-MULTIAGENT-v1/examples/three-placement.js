import * as THREE from 'three';

/** Reparent into alignment pivot, leave animationPivot independent of glTF source transforms. */
export function normalizeModel(root, desiredWorldHeight = 2.5) {
  root.updateWorldMatrix(true, true);
  const bounds = new THREE.Box3().setFromObject(root, true);
  if (bounds.isEmpty()) throw new Error('Cannot place empty model');
  const center = bounds.getCenter(new THREE.Vector3());
  const size = bounds.getSize(new THREE.Vector3());
  const scalar = desiredWorldHeight / Math.max(size.y, .000001);
  const anchor = new THREE.Group();
  const animationPivot = new THREE.Group();
  const alignmentPivot = new THREE.Group();
  anchor.add(animationPivot); animationPivot.add(alignmentPivot);
  alignmentPivot.add(root);
  // model world transform is assumed unconstrained/detached; use clone if shared.
  root.position.sub(center);
  alignmentPivot.scale.setScalar(scalar);
  return { anchor, animationPivot, alignmentPivot, scalar, sourceBounds: bounds };
}

/** Compute camera fit from BOTH horizontal and vertical FOVs; conservative sphere fit. */
export function fitPerspectiveCamera(camera, object, {padding=1.15, viewDirection=new THREE.Vector3(0,0,1)}={}) {
  object.updateWorldMatrix(true,true);
  const box = new THREE.Box3().setFromObject(object,true);
  if (box.isEmpty()) return null;
  const sphere = box.getBoundingSphere(new THREE.Sphere());
  const vFov = THREE.MathUtils.degToRad(camera.fov);
  const hFov = 2*Math.atan(Math.tan(vFov/2)*camera.aspect);
  const distance = sphere.radius * padding / Math.sin(Math.min(vFov,hFov)/2);
  const dir = viewDirection.clone().normalize();
  camera.position.copy(sphere.center).addScaledVector(dir,distance);
  camera.near=Math.max(.01,distance-sphere.radius*2);
  camera.far=Math.max(camera.near+10,distance+sphere.radius*5);
  camera.lookAt(sphere.center);
  camera.updateProjectionMatrix();
  return { box, sphere, distance };
}

/** Anchor model's projected center to fractional viewport (0 left ...1 right). */
export function moveObjectToScreenAnchor(object,camera,anchorX=.68,anchorY=.5) {
  object.updateWorldMatrix(true,true);
  const center = new THREE.Box3().setFromObject(object,true).getCenter(new THREE.Vector3());
  const cameraSpace = center.clone().applyMatrix4(camera.matrixWorldInverse);
  const depth = Math.max(.1,-cameraSpace.z);
  const halfHeight=depth*Math.tan(THREE.MathUtils.degToRad(camera.fov)*.5);
  const halfWidth=halfHeight*camera.aspect;
  // camera right and up vectors in world space
  const right=new THREE.Vector3(1,0,0).applyQuaternion(camera.quaternion);
  const up=new THREE.Vector3(0,1,0).applyQuaternion(camera.quaternion);
  const ndcX=anchorX*2-1,ndcY=1-anchorY*2;
  const offset=right.multiplyScalar(ndcX*halfWidth-cameraSpace.x)
                    .add(up.multiplyScalar(ndcY*halfHeight-cameraSpace.y));
  object.position.add(offset);
  object.updateWorldMatrix(true,true);
}

export function projectBounds(object,camera,width,height){
  object.updateWorldMatrix(true,true);camera.updateMatrixWorld();
  const box=new THREE.Box3().setFromObject(object,true), mn=box.min,mx=box.max;
  const pts=[];
  for(const x of [mn.x,mx.x])for(const y of [mn.y,mx.y])for(const z of [mn.z,mx.z]) {
    const q=new THREE.Vector3(x,y,z).project(camera);
    pts.push({x:(q.x+1)*width/2,y:(1-q.y)*height/2,z:q.z});
  }
  return { left:Math.min(...pts.map(p=>p.x)),top:Math.min(...pts.map(p=>p.y)),
    right:Math.max(...pts.map(p=>p.x)),bottom:Math.max(...pts.map(p=>p.y)),corners:pts};
}

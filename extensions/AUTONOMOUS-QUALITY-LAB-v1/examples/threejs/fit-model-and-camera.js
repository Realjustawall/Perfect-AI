/* Production integration helper: import * as THREE from 'three';
   DOM hero rect -> safe viewport; Box3 measurements -> camera composition.
   Does NOT assume axes/origin or asset scale. Requires user-chosen slot & layout. */
import * as THREE from 'three';

export function measureObject(object) {
  object.updateWorldMatrix(true, true);
  const box = new THREE.Box3().setFromObject(object, true);
  if (box.isEmpty()) throw new Error('Model has no renderable geometry');
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const sphere = box.getBoundingSphere(new THREE.Sphere());
  return { box, center, size, sphere };
}

export function fitCameraToModel(camera, object, {
  canvasWidth, canvasHeight, viewportSlot = { x: 0.48, y: 0.08, width: 0.48, height: 0.84 },
  padding = 1.18, minNear = 0.01,
} = {}) {
  if (!(canvasWidth > 0 && canvasHeight > 0)) throw new Error('Need actual canvas dimensions');
  const safe = Object.fromEntries(Object.entries(viewportSlot).map(([k, v]) => [k, THREE.MathUtils.clamp(v, 0, 1)]));
  if (!(safe.width > 0 && safe.height > 0) || safe.x + safe.width > 1.001 || safe.y + safe.height > 1.001)
    throw new Error('Viewport slot must be normalized rectangle inside canvas');
  const { center, size, sphere } = measureObject(object);
  const aspect = canvasWidth / canvasHeight;
  const halfSize = Math.max(sphere.radius * padding, 0.001);
  const allowedWidth = Math.max(0.1, safe.width * canvasWidth);
  const allowedHeight = Math.max(0.1, safe.height * canvasHeight);
  const xFraction = allowedWidth / canvasWidth;
  const yFraction = allowedHeight / canvasHeight;
  const target = center.clone();
  const direction = new THREE.Vector3().subVectors(camera.position, center).normalize();
  if (direction.lengthSq() < 0.5) direction.set(0, 0, 1);
  let distance;
  if (camera.isPerspectiveCamera) {
    camera.aspect = aspect;
    const halfFovY = THREE.MathUtils.degToRad(camera.fov / 2);
    const halfFovX = Math.atan(Math.tan(halfFovY) * aspect);
    distance = Math.max(halfSize / Math.tan(halfFovY) / yFraction,
                        halfSize / Math.tan(halfFovX) / xFraction) + halfSize;
    camera.near = Math.max(minNear, distance - sphere.radius * 2.5);
    camera.far = Math.max(camera.near + 20, distance + sphere.radius * 4);
    camera.position.copy(center).addScaledVector(direction, distance);
    camera.lookAt(center);
    // shift the view center so model projects to slot center, not global canvas center
    const horizontalFovWidth = 2 * Math.tan(halfFovX) * distance;
    const verticalFovHeight = 2 * Math.tan(halfFovY) * distance;
    const desiredX = safe.x + safe.width / 2;
    const desiredY = safe.y + safe.height / 2;
    const right = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion).normalize();
    const up = new THREE.Vector3(0, 1, 0).applyQuaternion(camera.quaternion).normalize();
    const offset = right.multiplyScalar((0.5 - desiredX) * horizontalFovWidth)
      .add(up.multiplyScalar((desiredY - 0.5) * verticalFovHeight));
    camera.position.add(offset);target.add(offset);
  } else if (camera.isOrthographicCamera) {
    const verticalSpan = Math.max(size.y / yFraction, size.x / (xFraction * aspect)) * padding;
    camera.top = verticalSpan / 2;camera.bottom = -verticalSpan / 2;
    camera.left = -verticalSpan * aspect / 2;camera.right = verticalSpan * aspect / 2;
    camera.position.copy(center).addScaledVector(direction, Math.max(10, sphere.radius * 2));
  } else throw new Error('Use a perspective or orthographic camera');
  camera.lookAt(target);camera.updateProjectionMatrix();camera.updateMatrixWorld();
  return { distance, center:center.toArray(), size:size.toArray(), slot:safe };
}

export function projectedBounds(camera, object, canvasWidth, canvasHeight) {
  const { box } = measureObject(object);
  const corners=[];
  for (const x of [box.min.x,box.max.x]) for (const y of [box.min.y,box.max.y])
    for (const z of [box.min.z,box.max.z]) corners.push(new THREE.Vector3(x,y,z).project(camera));
  const minX=Math.min(...corners.map(p=>p.x)),maxX=Math.max(...corners.map(p=>p.x));
  const minY=Math.min(...corners.map(p=>p.y)),maxY=Math.max(...corners.map(p=>p.y));
  return { x:(minX+1)*.5*canvasWidth,y:(1-maxY)*.5*canvasHeight,
    width:(maxX-minX)*.5*canvasWidth,height:(maxY-minY)*.5*canvasHeight,
    hasClipRisk:corners.some(p=>p.z<-1||p.z>1),
    warning:'Axis-aligned world box projection is conservative when meshes rotate; validate rendered screenshots.' };
}

// Unit-testable geometry helper, independent of render backend.
export function fitDistance(radius, fovDegrees, margin=1.25) {
  if (!(radius > 0) || !(fovDegrees > 0 && fovDegrees < 180) || !(margin >= 1)) throw new Error('Invalid geometry');
  return margin * radius / Math.sin((fovDegrees*Math.PI/180)/2);
}
export function intersect(a,b,padding=0) {
  return !(a.right+padding < b.left || b.right+padding < a.left || a.bottom+padding < b.top || b.bottom+padding < a.top);
}
// Use Three.Box3.setFromObject(model).getBoundingSphere(sphere) then camera.position.z = fitDistance(sphere.radius, camera.fov)
// Camera aspect and text exclusion rectangles must be checked AFTER CSS layout and locale fonts load.

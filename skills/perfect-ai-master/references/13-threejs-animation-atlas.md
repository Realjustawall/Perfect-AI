# Three.js animation atlas: techniques, timelines, rigs, particles, shader motion

Three.js is a renderer/scene graph plus animation system, not a finite library of prebuilt effects. The following taxonomy covers common implementation mechanisms. Select the correct mechanism and prototype before combining them. Most effects can be implemented with scene animation, geometry shaders, imported keyframes, or animation library state driving uniforms.

## Real animation mechanisms

1. **Clock/delta update:** `const clock=new THREE.Clock()`; in loop `const dt=clock.getDelta()`; use elapsed time for sin, dt for rates; cap spikes when tab resumes.
2. **AnimationClip:** keyframe tracks bound by property names and node paths; `AnimationClip` can come from glTF asset or generated code.
3. **AnimationMixer:** play root's clips, update once per frame with delta; cross-fade on state transitions.
4. **AnimationAction:** loop/repetition, enabled, weight and timeScale for a specific clip. Keep action references for cleanup.
5. **NumberKeyframeTrack:** opacity, morphTargetInfluences and numeric properties; use proper property binding path.
6. **VectorKeyframeTrack:** position/scale interpolation; avoid contradictory imperative writes.
7. **QuaternionKeyframeTrack:** smooth rotational interpolation; prefer quaternions over angle wrap.
8. **ColorKeyframeTrack:** material color/lighting changes; keep linear/sRGB awareness.
9. **Boolean/StringKeyframeTrack:** discrete visibility/state; use sparingly and don't replace React app state.
10. **AnimationObjectGroup:** shared animation for many similar objects when appropriate.
11. **SkinnedMesh/Skeleton/Bones:** armatures and skinning; imported rig animation; watch bone bind matrices.
12. **Morph targets:** matching vertex topology; blend `morphTargetInfluences`; render/performance test.
13. **Procedural vertex displacement:** ShaderMaterial or TSL material by version; animate using uniforms, no per-frame CPU recalculation.
14. **Instanced animation:** InstancedMesh with per-instance matrix or instanced attributes; update and flag needsUpdate only when necessary.
15. **Particle Points:** BufferGeometry + Points + custom shader / PointsMaterial for halos, stars, snow, debris.
16. **Sprite billboards:** camera-facing labels, image particles; atlas pooling avoids individual draw calls.
17. **Geometry morph via buffer lerp:** equal array dimensions; buffer assignment once and GPU update when necessary.
18. **Material transitions:** roughness/metalness/opacities (transparent + depthWrite handling), emissive intensity limited.
19. **Light choreography:** orbiting area/directional/point lights; shadow map cost and visual purpose.
20. **Camera dolly:** animate camera.position or rig group, with LookAt target interpolation; maintain subject framing.
21. **Camera orbit:** quaternion or spherical coordinates, damping, gesture control on explicit drag.
22. **Camera rail/path:** CatmullRomCurve3 sample by progress, tangent sets facing; avoid jerky derivatives.
23. **Camera projection shift:** PerspectiveCamera FOV/aspect changes update projection matrix; verify mobile.
24. **Environment maps:** blend/look transitions as supported; precomputed probes, avoid huge HDR swaps per frame.
25. **Skeletal cross-fades:** mixer.clipAction transitions; animate weights, no visible foot sliding if possible.
26. **Inverse kinematics:** specialized solver/third-party, enforce joints, foot contact and performance.
27. **Cloth/hair approximation:** vertex shader waves/CPU bones; true solver only when needed.
28. **Spring constraints:** critically damped equations for smooth pointer/drag return, delta-time independent.
29. **Orbital rings:** several Ellipse/CatmullRom curves oriented on different quaternion planes, sparse point markers.
30. **Torus knot motion:** parametric knot with curve frames; avoid overdraw from overlapping transparent surfaces.
31. **Radial deformation:** distance-based displacement field; protect center silhouette and normals.
32. **Ripple shockwave:** expanding radial band shader on surface, width and falloff defined.
33. **Noise-driven dissolve:** fragment threshold, anti-aliased edge, object hide when fully dissolved.
34. **Fresnel edge highlight:** view-normal angle, no always-on full-screen bloom.
35. **Trail ribbon:** spline through buffered positions; cap history and mesh updates.
36. **Line-drawing in 3D:** progressive curve subset or shader distance cutoff; maintain consistent stroke width.
37. **Explode/reassemble:** per-vertex/particle target positions with deterministic seed, scroll-controlled reversible interpolation.
38. **Particle morph (sphere→logo):** precomputed mapping, stable IDs, blend positions in shader; preserve final target shape.
39. **Flocking:** boids simulation via compute shaders or CPU at small count, spatial partition for scaling.
40. **GPU compute particles:** WebGPU-specific pipelines, fallback and version compatibility testing.
41. **Raymarching SDF:** spheres/torus/metaballs with marching loop, minimize steps/mobile quality tier.
42. **Volumetric fog:** scene fog/depth fog or raymarch; budget transparency and light scattering.
43. **Bloom pulse:** strength/threshold changes tied to narrative but not readability.
44. **Afterimage/motion blur:** accumulate previous frames with decay; avoid ghosting text.
45. **Depth-of-field:** camera focus subject, cost mobile, contrast danger for UI.
46. **Chromatic aberration:** very restrained decorative use or none in monochrome identity.
47. **Mouse picking:** Raycaster on NDC pointer position + click accessible DOM proxy.
48. **Interaction morph on hover:** change material/scale/rotation from a single state owner; desktop fine-pointer only.
49. **Scroll-driven transform:** absolute normalized progress mapped to geometry/material/camera, source can be Anime.js onScroll.
50. **Audio-reactive deformation:** analyser FFT energy to uniforms, optional opt-in mic/media, no unrequested audio.
51. **Video texture:** controlled source lifecycle and frame updates, provide poster and reduced bandwidth fallback.
52. **Text in 3D:** signed-distance-text/geometry as decorative; critical headings remain semantic DOM.
53. **Loading progress scene:** honest streaming progress from actual loader, not fake percentages.
54. **LODs and quality tiers:** lower mesh density/shadows/effects based on distance and measured frame time.
55. **Physics:** external rigid-body solver for accurate contact; use simple spring/math for decorative orb.
56. **XR/multi-view:** stereo rigs/render loop as supported; separate product request, don't add casually.
57. **Instanced vegetation/crowds:** varied transforms/time offset, occlusion, motion budget.
58. **GPGPU texture simulation:** ping-pong texture read/write with float texture support tests.
59. **Shadow motion:** cascades/contact shadows or simple blob shadow; don't light all particles.
60. **Scene transitions:** crossfade render targets or controlled object handover, restore GPU resources.

## Core code — glTF rigged animation

```ts
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const clock = new THREE.Clock();
const loader = new GLTFLoader();
let mixer: THREE.AnimationMixer | undefined;
loader.load('/models/character.glb', gltf => {
  scene.add(gltf.scene);
  mixer = new THREE.AnimationMixer(gltf.scene);
  const first = gltf.animations[0];
  if (first) mixer.clipAction(first).play();
});
function renderFrame() {
  const dt = Math.min(clock.getDelta(), 0.05);
  mixer?.update(dt);
  renderer.render(scene, camera);
}
```

This snippet assumes `scene`, `renderer`, and `camera` are already created. Wrap loading with error handling and disposal in production; do not claim this is a complete app.

## Core code — reversible normalized morph

```ts
function clamp01(x: number) { return Math.max(0, Math.min(1, x)); }
function smoothstep(t: number) { t=clamp01(t); return t*t*(3-2*t); }
function mix(a: number, b: number, t: number) { return a + (b-a)*t; }
function updateScrollScene(progress: number) {
  const morph = smoothstep((progress - 0.25) / 0.45);
  orbGroup.rotation.y = mix(0.0, Math.PI * 1.25, morph);
  orbGroup.scale.setScalar(mix(1.0, 1.4, morph));
  shaderMaterial.uniforms.uMorph.value = morph;
}
```

Mapping by absolute progress guarantees reversal. Separate ambient time animation if desired; if the orb must snap identically to scroll position, ambient angle should not alter orientation in test mode.

## Hard constraints

Avoid GPU instancing if only six meshes exist; avoid postprocessing on every scene; do not raise pixel ratio blindly; keep deliberate geometry accuracy; pause/stop background animation offscreen; dispose resources; report actual browser tests. Use https://threejs.org/docs/ to verify class signatures when installed version differs.

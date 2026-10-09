# Three.js / WebGL / WebGPU engineering — a practical 3D playbook

## 1. Geometry is not just appearance

A real 3D hero requires scene, camera, renderer, geometry, material, light/environment, transform hierarchy, animation, compositing and device fallback. Decide whether the desired object is: (A) polygon surface, (B) parametric surface, (C) point cloud, (D) volumetric illusion via particles, (E) spline ribbons, (F) instanced small meshes, (G) signed-distance-field raymarching, (H) imported glTF animated asset. Different approaches produce different silhouettes and GPU costs.

## 2. Engine subsystems — enumerate and choose

| Subsystem | Three.js classes / ideas | Use | Failure mode to test |
| --- | --- | --- | --- |
| Scene graph | Scene, Object3D, Group, Mesh | parent / child transforms | gimbal issues and double transforms |
| Camera | PerspectiveCamera, OrthographicCamera | cinematic vs schematic | crop, clipping, z fighting |
| Geometry | BufferGeometry, BufferAttribute, InstancedBufferGeometry | custom shapes and dense particles | allocations each frame |
| Materials | MeshBasic/Standard/Physical, PointsMaterial, ShaderMaterial | lit/unlit/shaders | transparency, color mismatch |
| Texture | Texture, DataTexture, CanvasTexture, CubeTexture | images, sprites, data | CORS/mips/aniso/memory |
| Light | Ambient, Directional, Spot, Point, Hemisphere, IBL | specular and form | flattening shadows, overexposure |
| Animation system | AnimationClip, AnimationMixer, AnimationAction, KeyframeTrack | imported clips and articulated models | clock delta mismatches |
| Procedural motion | quaternion slerp, sin/cos, noise, param functions | orbit, morph, deformation | jitter, frame-dependent speed |
| Skeleton | Bone, Skeleton, SkinnedMesh | rigged characters | wrong bind pose, skin weights |
| Morph targets | `morphTargetInfluences`, shader morph | expression and shape | topology inconsistency |
| Draw scaling | Points, InstancedMesh, LOD, frustum culling | 100s–100k elements | draw calls, overdraw |
| Geometry utilities | CatmullRomCurve3, TubeGeometry, Spline curves | orbital paths and ribbons | too many subdivisions |
| Raycasting | Raycaster, interactive mesh pick | hover / click in 3D | touch hit area, perf |
| Controls | OrbitControls, damping, limits | user rotation | fighting scroll and gestures |
| GLTF import | GLTFLoader, DRACOLoader, MeshoptDecoder, KTX2Loader | optimized assets | file size / decoder errors |
| Postprocessing | EffectComposer, RenderPass, Bloom/Output passes | bloom, SSAO and FX | memory, color space, mobile slowdown |
| WebGPU | check supported renderer path; WebGL fallback | advanced rendering | feature differences |
| Canvas 2D fallback | static illustration, CSS or precomputed SVG | devices without WebGL | blank overlay |

## 3. Orb design — concentric orbital shell, true depth

Target: center object evokes an illuminated mathematical instrument, not a flat donut icon. Model layers independently:
1. Volumetric **inner nucleus**: white/silver opaque sphere or shader noise shell with low contrast.
2. Thin **latitude and longitude arcs**: parametric splines of varying radii, inclinations and phase offsets; stroke width + alpha with depth ordering.
3. High-density **halo particle cloud**: 3D positions with spherical/torus/band distributions. Separate near/far points by size, opacity, depth.
4. **Ribbon filaments**: spline curves/tubes, sparse; vary crossing density so center stays legible.
5. **Outer calibration grid**: radial tick marks and circles; should float around orb not flatten it.
6. **Scroll phases**: compact sphere → unfurl bands → rotate ring stack → explode/reconfigure → collapse to CTA emblem.
7. Pointer interaction: low-amplitude orientation target; damp rather than directly setting angles. Disable or reduce pointer effect on coarse pointer/touch.

Point cloud param sketch: `theta=2πu`, `phi=acos(2v−1)`, base sphere `(r sin phi cos theta, r cos phi, r sin phi sin theta)`; distort radius `r = 1 + 0.09 sin(7θ+phase) + 0.07 cos(5φ−phase)`. Use deterministic seed, not Math.random inside render loop. For torus bands: `(R+r cos v) cos u`, `(R+r cos v) sin u`, `r sin v`, rotate with quaternion into alternate orbital planes. Build attributes once; update time/scroll uniforms in GPU.

When a precise reference exists: reconstruct silhouette using multiple screenshots from different times; estimate number of bands, inclination, layering, focal length, color emission, thickness. A single screenshot cannot identify its 3D topology with certainty.

## 4. Coordinate spaces

World, local, view and clip coordinate conversions: `modelMatrix`, `viewMatrix`, `projectionMatrix`. For pointer raycasting convert viewport px to NDC: `(x/canvasWidth)*2-1` and `-(y/canvasHeight)*2+1`. Handle CSS-transformed canvas rect and DPR independently. For camera framing compute field-of-view visible height `2d*tan(fov/2)`; at narrow widths increase camera distance or lower model radius so object doesn't hide headings. For imported glTF, compute Box3 center and size; normalize with explicit scale and floor alignment.

## 5. Lighting/material engineering

Use MeshStandardMaterial for PBR balance and MeshPhysicalMaterial only if clearcoat/transmission requirements warrant the extra GPU expense. For white/black theme maintain separation through **roughness**, directional rim lights, controlled environment reflections, occlusion, composition—not random colored emissive glows. For transparent layers order artifacts may occur; use appropriate depthWrite/transparent/additive blend selectively. Check tone mapping and output color space; sRGB/linear mixing errors turn gray into washed-out white. No absolute 'set ACES on everything' policy; choose and test against render reference.

## 6. Shader map and volumetric effects

- Vertex displacement: uniforms `uTime`, `uScroll`, `uAmplitude`; multiscale sin/noise by position, maintain stable basePosition.
- Fragment glow: Fresnel (`pow(1−dot(normal,viewDir), power)`), physically plausible attenuation if needed.
- Dither/noise: ordered/noise screen-space, avoid flicker/aliasing.
- Thin orbital ribbons: curve samples → BufferGeometry, colors + alpha per segment; shader can vary brightness on a wavefront.
- Morphing: interpolate matching base arrays; if topologies differ, resample into common point count before morph.
- Reveal: use uniforms for cutoff radius/angle, smoothly step across thresholds, anti-alias derivatives if appropriate.
- Postprocessing: bloom only bright pixels; cap glare to preserve legible UI and mobile GPU.

## 7. Animation options

1. `AnimationMixer.update(delta)` for glTF clips; store mixer and update once in render loop; interpolate state with clip controls.
2. Quaternion interpolation for smooth rotation targets; shortest path handling.
3. Parametric scripted keyframes for controlled art direction; sample by elapsed time or **absolute scroll progress**, not incremental per wheel tick.
4. Spring-damped cursor response (critically damped or exponential decay with delta time).
5. GPU particles on shader time/progress; minimize CPU-to-GPU uploads.
6. Camera dolly/roll/orbit/target transitions, never excessive uncontrolled vestibular motion.
7. AnimationMixer-based blending for skeletal avatars, with transitions/crossFadeTo where appropriate.

## 8. Sizing and frame budget

Define budgets before building. Desktop: evaluate 60 fps target = ~16.7ms frame; mobile target often 30/60 depending device. *Targets are not claims*. Measure actual GPU/CPU. Avoid blindly using full DPR: compute backing resolution capped by max pixel dimensions, render scale and quality tier. A 1440×900 canvas at DPR=2 draws ~5.2M pixels; expensive bloom multiplies fill cost. Recompute renderer size only when displayed dimensions change. Size via ResizeObserver + throttle.

Optimizations: object pooling; geometric instancing; share materials/geometries; cull hidden; texture mipmaps and compression; decoders for glTF; lazy render when static; stop loops when tab hidden; dispose textures, geometries, materials, controls and event listeners on exit; renderer context loss handling.

## 9. Responsive, accessibility and no-WebGL

- Desktop art center around visual focal point with no text overlap; mobile move orb to upper area or crop it intentionally with heading below.
- Detect support via renderer try/catch and `webglcontextlost`; output poster or CSS-only neutral orb. No critical information exclusively in Canvas.
- Canvas: descriptive surrounding caption if art meaningful, otherwise `aria-hidden="true"`.
- Interaction: pointer tilt only optional; keyboard activation of related UI controls, not mandatory drag to read content.
- Honor `prefers-reduced-motion`: freeze hero at a stable readable composition; still allow content scrolling.
- On resize update `camera.aspect`, `camera.updateProjectionMatrix()`, canvas backing dimension, overlays, raycasting rect; cap DPR.

## 10. Debug/testing matrix

- Compare viewport screenshot at 320, 375, 768, 1024, 1440, 1920 px; portrait/landscape; DPR 1/2/3; iOS and Android if possible.
- Log `renderer.info.render.calls`, triangles and GPU allocations; interpret alongside profiler not as universal thresholds.
- Check transparent depth sorting, alpha flicker, canvas blur, bloom clipping, texture orientation, mobile thermal throttling, screenshot readiness, lost context, fallback, route cleanup.

Official references:
- https://threejs.org/docs/ (classes and animation system)
- https://threejs.org/manual/pages/responsive.html
- https://threejs.org/manual/#en/fundamentals
- https://threejs.org/examples/

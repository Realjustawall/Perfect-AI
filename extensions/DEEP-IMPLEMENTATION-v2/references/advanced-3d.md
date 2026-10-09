# Advanced 3D / R3F / GPU — deep implementation playbook

**Purpose:** Build real, bounded, device-aware 3D scenes with fallback and measurable GPU/resource behavior.

This file is an original engineering manual and does not reprint proprietary site code. Use it in addition to, never instead of, the complete pre-existing TITAN PLUS/NEXUS material.

## Architecture and execution order
1. Define intended visual, camera framing, lighting and interaction in a scene contract.
2. Choose WebGL baseline; WebGPU is optional and requires installed-version and platform compatibility proof.
3. Budget triangles, draw calls, material variants, texture memory, overdraw, particle counts and shader iterations.
4. Provide low/medium/high quality tiers plus semantic non-WebGL content or image poster.
5. Dispose textures, geometries, controls, render targets and subscriptions; test resize, context loss and reduced motion.

## Inputs / design constraints
Inputs: scene brief, geometry/asset rights, GPU tier assumptions, content and accessible fallback.

## Preferred implementation approach
Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

## Representative source template
```tsx
// R3F: stable scene ownership; keep DOM content outside Canvas.
function Rotator() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => { if (ref.current) ref.current.rotation.y += Math.min(delta, 0.05) * 0.25 });
  return <mesh ref={ref}><icosahedronGeometry args={[1, 3]}/><meshStandardMaterial color="#dedede" roughness={0.45}/></mesh>;
}
// Use <Canvas dpr={[1, 1.6]} frameloop="always"><ambientLight intensity={1}/><Rotator/></Canvas>
// Add a semantic HTML title and static poster outside the scene; dispose owned render targets.
```

## Cross-cutting quality gates
1. No WebGL still presents important text, meaning and CTA.
2. Low GPU tier uses fewer geometry samples/passes/texture bytes and bounded frame budget.
3. Resize/unmount/context loss create no leaked buffers, RAF loops or subscriptions.

## Deep technique reference — all 33 features

### 01. `r3f-canvas-lifecycle`

**Output / operation:** Mount one Canvas per coherent scene; manage resize, suspense, error boundary, delta clamp and cleanup.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/r3f-canvas-lifecycle.md) · Skill `$ztx4-advanced-3d-r3f-canvas-lifecycle`
### 02. `drei-controls-and-environment`

**Output / operation:** Configure OrbitControls/PresentationControls and Environment only when use-case warrants them; bound effects.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/drei-controls-and-environment.md) · Skill `$ztx4-advanced-3d-drei-controls-and-environment`
### 03. `webgl-renderer-baseline`

**Output / operation:** Validate WebGL context availability and color management; document fallback on failure.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/webgl-renderer-baseline.md) · Skill `$ztx4-advanced-3d-webgl-renderer-baseline`
### 04. `webgpu-progressive-enhancement`

**Output / operation:** Feature gate navigator.gpu and renderer/library compatibility; retain WebGL and static fallback.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/webgpu-progressive-enhancement.md) · Skill `$ztx4-advanced-3d-webgpu-progressive-enhancement`
### 05. `glsl-vertex-displacement`

**Output / operation:** Write bounded vertex displacement using time uniforms and smooth normals under mobile precision.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/glsl-vertex-displacement.md) · Skill `$ztx4-advanced-3d-glsl-vertex-displacement`
### 06. `glsl-fragment-lighting`

**Output / operation:** Implement correct coordinate-space, linear color and precision handling with shader compile checks.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/glsl-fragment-lighting.md) · Skill `$ztx4-advanced-3d-glsl-fragment-lighting`
### 07. `wgsl-compute-path`

**Output / operation:** Use WGSL or Three TSL only with a proven build and feature checks; maintain alternate simulator.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/wgsl-compute-path.md) · Skill `$ztx4-advanced-3d-wgsl-compute-path`
### 08. `procedural-geometry`

**Output / operation:** Create/update BufferGeometry with stable buffers and finite vertex values; dispose on replacement.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/procedural-geometry.md) · Skill `$ztx4-advanced-3d-procedural-geometry`
### 09. `sdf-primitives`

**Output / operation:** Compose signed distance sphere/box/torus with smooth boolean operators and predictable bounds.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/sdf-primitives.md) · Skill `$ztx4-advanced-3d-sdf-primitives`
### 10. `raymarching-bounds`

**Output / operation:** Cap ray steps/distance, adapt epsilon to scene scale, terminate misses, and provide low-step mode.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/raymarching-bounds.md) · Skill `$ztx4-advanced-3d-raymarching-bounds`
### 11. `gpu-particles-instanced`

**Output / operation:** Use InstancedMesh/Points or GPU ping-pong rather than thousands of independent React components.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/gpu-particles-instanced.md) · Skill `$ztx4-advanced-3d-gpu-particles-instanced`
### 12. `gpgpu-pingpong-simulation`

**Output / operation:** Create two render targets and swap deterministically; check float texture support and fallback.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/gpgpu-pingpong-simulation.md) · Skill `$ztx4-advanced-3d-gpgpu-pingpong-simulation`
### 13. `volumetric-fog`

**Output / operation:** Render fog at bounded resolution/sample count and stable temporal reprojection where supported.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/volumetric-fog.md) · Skill `$ztx4-advanced-3d-volumetric-fog`
### 14. `volumetric-light-shafts`

**Output / operation:** Use limited samples, physically plausible attenuation and fixed overdraw budgets.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/volumetric-light-shafts.md) · Skill `$ztx4-advanced-3d-volumetric-light-shafts`
### 15. `pbr-material-tuning`

**Output / operation:** Calibrate roughness/metalness, normal intensity, exposure, shadows and renderer color space.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/pbr-material-tuning.md) · Skill `$ztx4-advanced-3d-pbr-material-tuning`
### 16. `hdri-ibl-pmrem`

**Output / operation:** Prefilter HDR environment, track texture memory and clean up PMREM-related GPU objects.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/hdri-ibl-pmrem.md) · Skill `$ztx4-advanced-3d-hdri-ibl-pmrem`
### 17. `instancing-drawcall-reduction`

**Output / operation:** Batch repeated materials/geometry while preserving per-instance picking and transforms.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/instancing-drawcall-reduction.md) · Skill `$ztx4-advanced-3d-instancing-drawcall-reduction`
### 18. `geometry-lod`

**Output / operation:** Switch geometries based on projected pixel radius; add hysteresis to prevent flicker.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/geometry-lod.md) · Skill `$ztx4-advanced-3d-geometry-lod`
### 19. `adaptive-dpr`

**Output / operation:** Clamp DPR based on frame-time trend and interaction, not solely devicePixelRatio.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/adaptive-dpr.md) · Skill `$ztx4-advanced-3d-adaptive-dpr`
### 20. `skeletal-animation`

**Output / operation:** Load skinned glTF clips, update AnimationMixer with frame delta and stop/dispose actions.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/skeletal-animation.md) · Skill `$ztx4-advanced-3d-skeletal-animation`
### 21. `morph-targets`

**Output / operation:** Animate morphTargetInfluences on supported models and verify topology consistency.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/morph-targets.md) · Skill `$ztx4-advanced-3d-morph-targets`
### 22. `physics-fixed-step`

**Output / operation:** Use fixed simulation step, interpolation and collision layers independent of variable render FPS.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/physics-fixed-step.md) · Skill `$ztx4-advanced-3d-physics-fixed-step`
### 23. `rigid-bodies-react-rapier`

**Output / operation:** Model stable rigid-body interactions and use sleeping, solver/step limits and clear reset behavior.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/rigid-bodies-react-rapier.md) · Skill `$ztx4-advanced-3d-rigid-bodies-react-rapier`
### 24. `fluid-heightfield`

**Output / operation:** Approximate water with a bounded height-field and screen-space or vertex normals on low tiers.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/fluid-heightfield.md) · Skill `$ztx4-advanced-3d-fluid-heightfield`
### 25. `fluid-smoke-simulation`

**Output / operation:** Select 2D advection/feedback vs costly 3D textures based on target device and need.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/fluid-smoke-simulation.md) · Skill `$ztx4-advanced-3d-fluid-smoke-simulation`
### 26. `cloth-simulation`

**Output / operation:** Implement constrained particles/Verlet or verified engine with collision and low-res substitute.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/cloth-simulation.md) · Skill `$ztx4-advanced-3d-cloth-simulation`
### 27. `path-tracing-opt-in`

**Output / operation:** Use progressive path tracing only for compatible supported devices and product need; raster fallback.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/path-tracing-opt-in.md) · Skill `$ztx4-advanced-3d-path-tracing-opt-in`
### 28. `postprocessing-budget`

**Output / operation:** Limit SSAO, bloom, depth of field and passes by GPU tier and color-output consistency.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/postprocessing-budget.md) · Skill `$ztx4-advanced-3d-postprocessing-budget`
### 29. `glb-gltf-optimization`

**Output / operation:** Apply mesh merging, Draco/Meshopt/KTX2 with correct transcoder availability and asset rights.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/glb-gltf-optimization.md) · Skill `$ztx4-advanced-3d-glb-gltf-optimization`
### 30. `camera-scroll-story`

**Output / operation:** Drive one normalized scroll state into camera/group transforms with clamped easing and reverse scroll.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/camera-scroll-story.md) · Skill `$ztx4-advanced-3d-camera-scroll-story`
### 31. `webgl-context-recovery`

**Output / operation:** Pause render, clear invalid resources and offer static replacement after context loss.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/webgl-context-recovery.md) · Skill `$ztx4-advanced-3d-webgl-context-recovery`
### 32. `scene-accessibility-layer`

**Output / operation:** Mirror meaning and controls in semantic HTML; avoid essential content only in 3D canvas.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/scene-accessibility-layer.md) · Skill `$ztx4-advanced-3d-scene-accessibility-layer`
### 33. `mobile-poster-fallback`

**Output / operation:** Maintain exact functional content and CTA when WebGL unavailable or reduced data enabled.

**Implementation:** Implementation: prefer one R3F Canvas, useFrame delta clamp, stable geometry/material buffers; choose technique appropriate to GPU tier; bound shader steps and dispose resources.

**Proof:** Tests: WebGL2/no-WebGL, context loss, 320/390/1440px framing, reduced motion, renderer.info counters, assert no unbounded RAF allocation.

[Dedicated recipe](./advanced-3d/recipes/mobile-poster-fallback.md) · Skill `$ztx4-advanced-3d-mobile-poster-fallback`


## Honesty about execution
- The source templates in this pack illustrate the mechanisms. A validated install/build of an optional third-party package is required before claiming its integration works.
- Re-check current API versions in the lockfile and official references.
- Do not claim real GPU frame time, pixel-perfect reconstruction, or site ownership without data.

## Official / maintained references
- [three](https://threejs.org/docs/)
- [r3f](https://r3f.docs.pmnd.rs/)
- [drei](https://drei.docs.pmnd.rs/)
- [wcag](https://www.w3.org/TR/WCAG22/)

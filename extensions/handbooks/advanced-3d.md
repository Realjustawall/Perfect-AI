# Advanced 3D / React Three Fiber — production engineering reference

Select a stable renderer by device: Three.js WebGL as proven baseline; only opt into WebGPU/TSL when validated against installed R3F version, browser support and fallback. Separate rendering simulation from the DOM accessibility layer. Own frame lifecycle and resource disposal. Estimate draw calls, transparency sorting, shader cost, texture residency and battery use before selecting effects.

## Architecture

Input contract → deterministic evidence collection → decision/implementation plan → reference implementation → device and accessibility fallback → test gates → signed-off report.

## Detailed implementation index

### 1. r3f-lifecycle

**Mechanism:** Use Canvas components, useFrame delta clamp, declarative refs and cleanup on unmount.

**Failure pressure:** Never allocate geometries in useFrame.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 2. drei-environment

**Mechanism:** Load environments and controls with Suspense, appropriate loading placeholder, and GPU budget.

**Failure pressure:** Avoid expensive HDRI as compulsory on mobile.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 3. webgpu-progressive

**Mechanism:** Feature detect navigator.gpu and library version; use WebGL fallback and static alternative.

**Failure pressure:** Treat experimental R3F v10 WebGPU APIs as opt-in.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 4. glsl-shaders

**Mechanism:** Develop vertex/fragment programs with precision, uniform ownership, alpha and color-space conversions.

**Failure pressure:** Test compile errors on low-end GPU.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 5. wgsl-tsl-shaders

**Mechanism:** Prototype supported TSL/WebGPU paths with renderer gates and parity screenshots.

**Failure pressure:** Do not paste GLSL into a WGSL shader.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 6. raymarch-sdf

**Mechanism:** Use bounded ray steps, Lipschitz-aware distance estimate, epsilon scaled with depth.

**Failure pressure:** Stop ray after budget; avoid infinite loops.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 7. gpu-particles

**Mechanism:** Use BufferGeometry/InstancedMesh or GPU simulation ping-pong appropriately.

**Failure pressure:** Avoid tens of thousands of React children.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 8. volumetric-effects

**Mechanism:** Bound steps and resolution; use low-resolution fog buffers with temporal stability.

**Failure pressure:** Cap overdraw and use static gradients as fallback.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 9. pbr-materials

**Mechanism:** Calibrate lights, exposure, roughness, metalness and output color space.

**Failure pressure:** Avoid physically impossible materials by default.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 10. hdri-ibl

**Mechanism:** Choose compressed env maps and prefilter; dispose PMREM targets.

**Failure pressure:** Bound texture memory per device.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 11. instancing-batching

**Mechanism:** Merge repeated mesh materials and inspect InstancedMesh instanceMatrix updates.

**Failure pressure:** Avoid per-instance draw calls.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 12. adaptive-lod

**Mechanism:** Use distance and projected pixel area with hysteresis to swap LOD.

**Failure pressure:** Prevent oscillation at threshold.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 13. physics-rapier

**Mechanism:** Run fixed time-step collisions and decouple visual interpolation from physics.

**Failure pressure:** Pause simulation offscreen and respect reduced motion.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 14. path-tracing-progressive

**Mechanism:** Accumulate samples only while scene static, reset on camera/material change.

**Failure pressure:** Never demand path tracing on mobile.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 15. fluid-simulation

**Mechanism:** Prototype stable advection, dissipation, boundaries and reduced-resolution FBO.

**Failure pressure:** Reduce solver iterations for battery-sensitive hardware.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 16. camera-rig-scroll

**Mechanism:** Map normalized scroll progress onto quaternion/camera curves with clamped limits.

**Failure pressure:** Support reverse scroll and short viewports.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

### 17. webgl-context-loss

**Mechanism:** Listen for loss/restoration, release caches, expose static poster fallback.

**Failure pressure:** No blank screen on context failure.

**Execution:** Implement a tiny baseline scene, evaluate bounds/LOD, then add the technique under a budget; add poster fallback and explicit disposal.

**Acceptance:** Run WebGL context loss/restoration, compare desktop/mobile frustum and inspect renderer.info.

## Gate checklist

- [ ] Inputs, constraints and assets have evidence.
- [ ] Implementation has a real code path, not a prompt-only promise.
- [ ] Minimal or static fallback preserves actual user task.
- [ ] Proper cleanup and reduced-motion when relevant.
- [ ] Persian RTL and English LTR components tested when language is supported.
- [ ] Version compatibility and license assumptions documented.
- [ ] Verified tests distinguished from suggestions.

## Codex handoff

Report actual files edited, references consulted, runtime version and selected skills. Preserve original user content; do not install MCP.

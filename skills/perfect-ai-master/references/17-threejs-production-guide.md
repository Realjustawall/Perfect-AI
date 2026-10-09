# Three.js deep production guide — real 3D, animation, render budget

## Pipeline
- Acquire content geometry rights, model/import, orient axes, normalize bounding sphere, compute normals, optimize poly/vertex counts, textures and GPU formats, choose PBR/SDR/HDR lighting, set tone mapping and color space, stage rendering, dispose.
- Distinguish point cloud (`Points`), 3D wire object (`LineSegments`/`EdgesGeometry`), sculpted mesh (`Mesh`), repeated geometry (`InstancedMesh`) and baked video. Only first four yield inspectable Three.js spatial geometry.
- Define ownership: scroll controls `progress`; camera controls `cameraState`; UI animations own DOM only; render frame is single-owner. State deterministically derived from progress instead of accumulating rotation by frame count.

## Coordinates, optics and camera
- World axis Y up; linear world units; track model bounds. Perspective fov changes perceived depth: keep subject 70–80% of smaller view dimension on desktop, 55–70% on mobile with adequate safe text area (starting guidelines, not invariant).
- Calculate camera distance for object radius r and vertical field of view θ: distance ≈ r / tan(θ/2), then add padding. For mobile, change distance/composition, not only canvas width.
- Compose: safe circle around text; z index order: opaque background → WebGL canvas → overlays → accessible UI. Canvas pointer-events none unless raycasting is intentional.

## Geometry
- `BufferGeometry`: typed position/index arrays, normals, uv, bounding sphere. `InstancedMesh`: unique transforms with per-instance matrices; update only when state changes. `Points`: fewer draw calls but alpha sorting and density issues.
- Particle morph: store source+target positions, interpolate by progress; avoid allocating N new vectors on every frame. For GPU versions use uniforms and attributes; isolate shader precision, fallback.
- Orbit: precompute torus/rings, line geometry. Avoid creating geometry per scroll frame.

## Lighting and color correctness
- Default material metalness/roughness + lights are distinct from emissive/glow. Metallic silver depends on reflection environment: no image-based lighting yields flat surfaces.
- Use `renderer.outputColorSpace=THREE.SRGBColorSpace`, compatible tone mapping, check linear color values in shader. Choose monochrome emitter intensity conservatively and clamp bloom so white text remains readable.
- Transparent particles: sort/depth options/overdraw. Alpha sorting conflicts with high instancing density; choose additive only if aesthetic permits and background is dark.

## Performance
- Mobile DPR ≤1.3 or 1.5 as appropriate; desktop ≤2. Do not blindly use native DPR3+; `setPixelRatio` after measuring device.
- Budgets: tune performance in DevTools; target ~16.7ms total for 60FPS, 33.3ms for fallback 30FPS; these are frame budgets not guaranteed performance promises.
- Render on change / input with rAF; pause hidden document, reduced motion, and out-of-viewport canvases. Avoid generating 20k particles on weak mobile devices when 2k visually suffice.
- Batch draw calls, share materials, compress glTF (Draco/Meshopt/KTX2 with compatible loader), LOD, load critical assets first, defer postprocessing.

## Scroll storyboard example
Progress p∈[0,1], phases split at 0,.20,.45,.70,1:
- p0: orb at 0,0,0 radius 1.25, camera z=5.8, typography intro.
- p1: orbit roll + π/2, camera parallax x=.6, type fade.
- p2: morph orb into stretched torus knots, particles rotate y=π.
- p3: reassemble from rings, new feature copy anchored left/right.
- p4: orb shrinks into target button / CTA, ends stable. Use interpolation independent of frame rate; ease each phase intentionally.

## Resource lifecycle
- `removeEventListener`, `cancelAnimationFrame`, stop media, `geometry.dispose`, `material.dispose`, `texture.dispose`, `renderer.dispose`; handle context lost/restored. Re-create scene after WebGL context restore if necessary.
- SSR/React: import only client-side, handle StrictMode double mount, tie cleanup to component lifecycle.

## QA
- Verify using Chrome, Firefox and Safari/WebKit if environment supports them: shader compilation may differ.
- WebGL not supported → DOM+SVG still communicates content; `prefers-reduced-motion` → stable still scene.
- Measure memory and GPU load across route changes and section entry/exit; scroll backwards repeatedly 20 cycles.
- Validate color, camera, text overlap, 320px/375/768/1024/1440/1920px, landscape mobile, zoom 200%, high DPR.

Upstream: https://threejs.org/docs/ , https://threejs.org/manual/ , https://github.com/mrdoob/three.js

# GLB / GLTF Production Asset Optimization

## Baseline
Use `tools/glb-inspect.py` (offline metadata) then `gltf-transform inspect` and Khronos glTF Validator. Verify animations, morph targets, skins, extensions, texture color space, double-sided transparency, and unit scale before optimization. Save a visual baseline of front/side/back at known camera positions.

## Compression choices
- **Meshopt**: usually strong default for interactive web geometry/animation; fast decode; needs `EXT_meshopt_compression` support in loader, preconfigure MeshoptDecoder for Three.js GLTFLoader.
- **Draco**: geometry-only compression, separate decoder (`KHR_draco_mesh_compression`), often smaller transmission but may increase CPU decode; test if low-end mobile device.
- **KTX2/Basis**: GPU-friendly texture compression, needs KTX2Loader + transcoder assets and `detectSupport(renderer)`. Prefer ETC1S for textures with smoother details / UASTC for sharp normals and high quality; test artifacts. Color maps use sRGB semantics, normals/data textures linear.
- **WebP/AVIF**: transmission compression for images; runtime GPU decoding differs, KTX2 better when VRAM bottleneck. Never assume KTX2 is always smallest network payload.

## Budgets are policy—not universal facts
Landing hero suggested initial target: GLB under 2MB compressed for mid-tier mobile when feasible, ~100-200k triangles total visible; start textures max 1024–2048; choose explicit budgets based on page/user needs, not fixed limits. Track  p50/p95 decode, GPU VRAM estimates, draw calls and build size.

## CLI
`npx gltf-transform inspect model.glb`
`npx gltf-transform optimize model.glb model.meshopt.glb --compress meshopt --texture-compress webp`
`npx gltf-transform optimize model.glb model.draco.glb --compress draco --texture-compress webp`
`npx gltf-transform optimize model.glb model.ktx2.glb --compress meshopt --texture-compress ktx2`
The wrapper `tools/glb-optimize.mjs` creates backups only by preserving input, refuses overwrites and reports before/after sizes. Do not merge multiple codecs in the same file. Check availability/versions through help; do not claim these commands were executed if not.

## Render check
Compare A/B GLB visual views and animation timecodes, inspect decoder warnings, verify preserved animations/skins. Size reduction with broken normals, wrong color or clipped animation is FAIL. Save method, tool version, SHA256 and timing for reproducibility. Official: https://gltf-transform.dev/cli

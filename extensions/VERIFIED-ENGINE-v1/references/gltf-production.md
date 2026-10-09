# glTF 3D production pipeline

## Safe optimization principles
Always use new output file, never write over an original GLB. Inventory mesh counts, nodes, textures, materials, animations, skins, morph targets and extensions. Run `npx @gltf-transform/cli inspect scene.glb`. Try `optimize source.glb scene.meshopt.glb --compress meshopt --texture-compress webp`; benchmark download + decode time + rendered appearance. Other profile: `--compress draco` for suitable triangle geometry. KTX2 texture compression needs compatible texture encoders plus GLTFLoader/KTX2Loader and transcoder assets; check CLI `--help` for revision-specific options.

## Fidelity gate
Preserve animations/skinning/morph targets, material appearance, hierarchy IDs used in code, correct coordinate basis and dimensions. Camera-fit using bounding sphere plus viewport FOV, respect text exclusion zones for responsive layouts. Test reloading with and without decoder, on Android low-tier, repeated mount/unmount and context loss. Smaller file does not guarantee higher FPS; measure GPU memory and decode stalls.

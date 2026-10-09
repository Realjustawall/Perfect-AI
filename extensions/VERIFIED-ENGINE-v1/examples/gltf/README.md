# GLB optimization with original preservation

Install the documented `@gltf-transform/cli` in the target project and check `npx gltf-transform --help` for exact current flags. Then:

- `npx gltf-transform inspect assets/input.glb`
- `npx gltf-transform optimize assets/input.glb assets/scene-meshopt.glb --compress meshopt --texture-compress webp`
- `npx gltf-transform optimize assets/input.glb assets/scene-draco.glb --compress draco --texture-compress webp`
- `npx gltf-transform optimize assets/input.glb assets/scene-ktx2.glb --compress meshopt --texture-compress ktx2` (only if KTX2 encoder/renderer support confirmed)

No benchmark can be assumed in advance: compare all three with output size, decode time, visible quality, mobile memory and correct animation/skin/morph preservation. Source GLB is immutable.

Use `tools/glb_inspect.py` for lightweight independent inventory before network-dependent CLI use.

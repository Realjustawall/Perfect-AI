# App integration guide — all five systems

## Renderer and time ownership matrix
| System | Canvas owner | Clock owner | Dependencies | Status of sample |
|---|---|---|---|---|
| Gaussian Splatting | Native THREE.WebGLRenderer | Three loop | three, @pmndrs/vanilla | Adapter + user-supplied .splat |
| Shader Graph | DOM graph UI | static graph compiler | Three TSL for material preview | Editor/export; no live GPU material binding |
| PostFX | Native THREE.WebGLRenderer via EffectComposer | existing frame loop | three, postprocessing | Actual composer demo, GPU unverified |
| Video × 3D | Native THREE.WebGLRenderer | createTimeline | three, mediabunny | CanvasTexture demo; no audio-sync guarantee |
| Scene Editor | Native THREE / isolated Threepipe project | backend's own loop | three, threepipe | Native editor + optional Threepipe backend |

## Integration rules
1. Never run two backends at once on one canvas. When switching from native THREE to Threepipe, create a fresh canvas element; dispose old renderer first.
2. Render-owned resources are cleaned only by their owner. Shared splat loader buffers must not be disposed when a second object still uses them.
3. `SplatLoader` example supports `.splat`. `.ksplat`, `.ply` and `.spz` need separate loaders/conversion pipelines.
4. Material graph CPU compilation has no arbitrary eval. Exported TSL must compile on the specific Three.js version with installed `three/tsl` implementation.
5. `VideoSampleSink` samples are closed in `finally`. A/V sync and exact frame-seek throughput are device and codec dependent.
6. A user-supplied scene JSON is not JavaScript code. Validate structure and limit entity count.
7. Explicitly test reduced motion, keyboard alternatives, RTL typography, 320px mobile, unsupported GPU, shader compile failure and slow network.
8. Never claim browser-rendered if only Node/Python tests were run.

## Package compatibility warning
Threepipe v0.5.1 uses a custom Three.js fork peer URL. Do **not** install `threepipe` into the same npm root used for the standard `three`/`postprocessing` demo; the two examples use separate package manifests, lockfiles and canvases.

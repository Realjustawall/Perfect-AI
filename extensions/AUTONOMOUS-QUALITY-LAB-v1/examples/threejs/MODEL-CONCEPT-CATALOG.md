# Twenty-six real 3D scene architecture blueprints

Every concept requires: storyboard, geometry/asset provenance, scale & pivot convention, lighting rig, bounding-box-based composition, screenshot evidence at 320/390/768/1440, a low-cost mobile variant, keyboard and reduced-motion fallback, explicit geometry disposal. These are scoped blueprints, not 26 bundled finished GLB models.

| Concept | Geometry / interaction | Camera and composition | Mobile strategy |
|---|---|---|---|
| Brand orbital hero | Torus and instanced orbit lines | Screen-space right rail, FOV fit | Half orbit count |
| Product turntable | glTF PBR + environment | Controlled polar angles and target | Reduced reflections |
| Automotive reveal | glTF vehicle + camera rail | Anchored left-to-right stages | 3-stage still sequence |
| Architectural walkthrough | BIM-optimized glTF | Door-height and collision capsule | Room jump navigation |
| Real-estate viewer | Floor-level hotspots | Map-to-3D sync, no text occlusion | Panoramas fallback |
| Fashion configurator | Garment material swaps | Stable body framing, no unexpected zoom | Compressed textures |
| Interactive museum | Framed exhibits + raycast | Focus on exhibit labels | Tap list fallback |
| Medical visualization | Layered organ model | Labels outside projection hull | Static atlas |
| Science molecule | Atoms and bonds instanced | Orthographic diagram mode | Simplified bonds |
| Education physics lab | Springs and constraints | Camera stabilized to experiment | Lower substep count |
| Analytics 3D globe | Batched arcs and sites | Globe bounding inside data-safe zone | Static flat map |
| Logistics warehouse | Instanced shelves | Orthographic high view | Sparse crates |
| Renewable energy turbine | Rotor and wind indicators | Full rotor silhouette visible | Low blade mesh |
| Fluid hero | Height-field ripple | Camera near-grazing surface | Normal-map ripple |
| Cloth product demo | Precomputed mesh deformations | Avoid camera/body collisions | Baked vertex motion |
| Particle story text | GPU-instanced points | Maintain text contrast isolation | Reduce point count |
| Ray-marched statue | SDF sphere-tracing | Limit step budget | Mesh fallback |
| Volumetric cloud | Low-resolution ray march | Back plane behind legible text | Sprite billboards |
| Audio reactive sculpture | FFT driven deformations | Limited amplitude, pause control | Low FFT bins |
| WebGPU material gallery | WGSL + render pipeline | Feature detect and fallback | WebGL2 or poster |
| Interior furniture | glTF material and dimension | Respect real dimensions | Smaller textures |
| Product exploded view | Part groups and annotations | Camera space anchor per part | Linear diagram |
| Solar system orrery | Kepler-like orbital hierarchy | Log scale annotation disclaimers | Reduced orbit trails |
| Interactive map terrain | LOD tile terrain | Horizon + camera clip control | 2D geographic map |
| Three-dimensional typography | Extruded outlines | Font loaded/geometry recomputed | SDF text or DOM fallback |
| Guided photography wall | Depth planes + scroll | Keep DOM captions readable | Flat card stack |

## Implementation contract

1. Never place a model using hard-coded pixel-like world `position` guesses; read actual bounding volume and target DOM rectangle.
2. Convert target DOM slot to normalized viewport and derive camera projection. Reserve separate safe bounds for text.
3. Freeze animation before screenshot comparison or capture at explicit scroll phase.
4. Only use physical units if model source supports them. Declare assumptions.
5. Assets require legal provenance and licenses; do not import unknown GLB from random GitHub issues.
6. Check render budget on real mobile devices before claiming fluidity.

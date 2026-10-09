# GPU / simulation examples and boundaries

- `raymarch.frag`: 72 bounded ray steps, SDF primitives, normal approximation and simple diffuse lighting; integration requires WebGL2 uniforms and fullscreen geometry. Not GPU-profiled.
- `advection.wgsl`: a real WebGPU compute kernel showing ping-pong input/output pattern and guard for out-of-range dispatch IDs. Requires WebGPU device buffers/dispatch and browser support.
- `water-heightfield.html`: a **working CPU height-field visualization**, not 3D fluid simulation and not physically accurate Navier–Stokes; makes click/tap pulses and respects reduced motion at initial state.
- `../r3f-hero/AdaptiveOrbit.tsx`: real procedural 3D mesh with mobile geometry tiers, accurate limits and fallback; requires a compatible project and bundler.

For path tracing and volumetric raymarching, real-time integration depends strongly on GPU support: use documented recipes in `references/advanced-3d/recipes` and never claim an example fragment is a complete path tracing renderer.

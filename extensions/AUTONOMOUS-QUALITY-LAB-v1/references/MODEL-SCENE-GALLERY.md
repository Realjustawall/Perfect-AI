# 3D scene galleries and positioning

See `examples/threejs/MODEL-CONCEPT-CATALOG.md` for 26 model categories. Each has 3D silhouette, camera placement, shading, lighting, mobile fallback and asset licensing strategy. `examples/react/Adaptive3DHero.jsx` is a procedural real R3F scene, but requires dependencies and must be built in target project; `examples/offline-studio/index.html` is a dependency-free CPU-projected 3D demonstration, not a WebGL/WebGPU benchmark.

For actual user-provided GLB, load and inspect node pivot, units and triangulation, then derive bounds using Three.Box3. Compose model inside a normalized safe slot separate from DOM text. Check clipping and screenshot quality at multiple aspect ratios. Never declare exact match without measured comparisons.

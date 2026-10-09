# WebGL/Three.js shader engineering, accessibility and lifecycle

Define actual geometry/topology, vertex shader transformations, fragment lighting/shading, uniforms controlled by time or scroll progress, camera projection, tone mapping, color space, GPU resource lifecycle. Use BufferGeometry and InstancedMesh for density; transparent particle overdraw is usually a bottleneck; choose additive blending only deliberately. A 2D ring gradient is not equivalent to a 3D mesh.

Shader patterns: vertex displacement, signed distance function, noise derivative, fresnel rim, fog/atmospheric depth, orbit trails, point-sprite sizing based on clip-space depth, deterministic morph targets. Ensure no NaNs; cap values; preserve stable performance under resizing and different pixel ratios. Limit postprocessing by tier; avoid doubling GPU cost unintentionally.

Action table: if WebGL lost → show accessible fallback and reconnect if feasible; if reduced motion → render stable representative state once; if invisible → stop rAF; if reduced power → lower detail, not hide semantic content. Tests include context loss and changing preferred color scheme while scene loads.

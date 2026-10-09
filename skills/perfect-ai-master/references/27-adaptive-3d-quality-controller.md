# Adaptive Three.js quality (REAL 3D, constrained devices)

Use tiers selected by observed renderer capacity, context availability, container size and explicit user preference; never assume `mobile == weak`. Consider WebGL capabilities and performance moving average; sample after warm-up and use hysteresis (e.g., low threshold for 45 frames before downgrade, high threshold for 240 frames before upgrade). Avoid oscillation.

| Tier | DPR clamp | Point density | Post FX | Shadow | Frame policy |
|---|---:|---:|---|---|---|
| static | — | SVG fallback | no | no | no WebGL |
| low | 1 | 800–1500 | none | none | render on changes |
| medium | 1.35 | 2500–5000 | rare | cheap | on-demand or capped |
| high | 1.75 | 6000–12000 | selective | selective | rAF when visible |

**Not universal numbers:** benchmark target device and use dynamic quality when scene demands. Full-resolution per-frame bloom + transparent particles can be much costlier than mesh count implies.

```js
function resizeRenderer(renderer,camera,host,quality=1.35){
 const {width,height}=host.getBoundingClientRect();
 if(width<=0||height<=0)return;
 renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,quality));
 renderer.setSize(width,height,false);
 camera.aspect=width/height;camera.updateProjectionMatrix();
}
```

Memory lifecycle: geometry.dispose(), material.dispose(), texture.dispose(), renderer.dispose(); cancel rAF and disconnect observer; handle `webglcontextlost` by showing fallback, `webglcontextrestored` by recreating state when supported. Use instanced meshes for repeated geometry, BufferGeometry for points, avoid texture upload each frame, disable hidden-tab rendering. Preserve accessible HTML primary content.

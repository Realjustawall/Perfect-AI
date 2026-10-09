---
name: zt-three-geometry
description: Procedural geometry: production-level indexed BufferGeometry, normals, bounds. Use when implementing, reviewing or testing procedural geometry for React, Vite, Next.js or Perfect_AI projects.
---

# Procedural geometry

## When to activate
Use on tasks involving **indexed BufferGeometry, normals, bounds**. For unrelated backend tasks do not load this skill.

## Implementation sequence
1. Choose perspective or orthographic camera, scene graph, model coordinate scale and render target.
2. Allocate geometry and materials outside render loop; use indexed/instanced buffers when repeated objects.
3. Constrain frame rendering to actual need, remove handlers and dispose GPU resources.
4. Integrate screen-space text as DOM accessible overlay and provide WebGL failure fallback.
5. Verify 320/375/768/1440, low end DPR=1 and interaction at 30/60FPS.

## Task-specific requirements
- Scope: **indexed BufferGeometry, normals, bounds**. Design the full execution path, not a screenshot placeholder.
- Identify dependency version and actual supported API signature; avoid inventing APIs.
- Use original code, or install licensed upstream through its maintained tool if the user wants upstream code.
- Choose measurable states, error handling, accessibility and performance budgets.

## Implementation starter
```ts
import * as THREE from 'three';
const positions=new Float32Array([0,1,0,-1,-1,0,1,-1,0]);
const g=new THREE.BufferGeometry();
g.setAttribute('position',new THREE.BufferAttribute(positions,3));
g.computeVertexNormals();
// later: g.dispose();
```

## Evidence / acceptance
- Renderer disposes; fallback provides content; no runaway GPU usage; no clipped subject at narrow widths.
- Test common, edge, interrupted, accessibility and responsive states; provide concrete artifacts/evidence.

## Deep references
- `../perfect-ai-master/references/02-threejs-3d.md`
- `../perfect-ai-master/references/13-threejs-animation-atlas.md`
- `../perfect-ai-master/references/17-threejs-production-guide.md`

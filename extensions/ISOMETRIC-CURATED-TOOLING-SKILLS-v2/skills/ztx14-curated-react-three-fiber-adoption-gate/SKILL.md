---
name: ztx14-curated-react-three-fiber-adoption-gate
description: Decide whether a feature needs WebGL/real 3D before introducing Three.js and React Three Fiber into a primarily SVG isometric project.
---

# Adopt React Three Fiber only for actual 3D scenes

> Curated implementation skill. Inspect the installed project and actual component source before changing behavior. Do not assume latest APIs are installed. Preserve unrelated files and existing component ownership.

## Default decision
Isometric Buildlab's documented component system is line-drawn SVG/isometric geometry with its own projection, picking and spring engine. Do not migrate that behavior to WebGL just to get a pointer tilt, depth look, or interactive line figure.

## Choose R3F when evidence requires
- genuine 3D camera/perspective rotation or continuous 3D navigation;
- lighting/materials/shadows or 3D assets that exceed the existing line-art model;
- raycast interaction on actual meshes;
- large 3D scenes with a measured performance/feature reason for WebGL.

## Before adoption
1. Prove SVG/DOM cannot satisfy the product requirement.
2. Define canvas accessibility and semantic DOM alternatives.
3. Budget GPU/memory, reduced-motion behavior, context loss/fallback, asset size and mobile performance.
4. Use R3F pointer events/raycasting rather than writing an ad hoc raycaster; use demand rendering if a static scene can sleep.
5. Keep the existing Isometric/SVG UI where it is adequate and isolate the WebGL scene behind a clear boundary.

## Primary references
- [isometric](https://isometric.buildlab.in/llms.txt)
- [r3f-events](https://github.com/pmndrs/react-three-fiber/blob/master/docs/API/events.mdx)
- [r3f-perf](https://github.com/pmndrs/react-three-fiber/blob/master/docs/advanced/scaling-performance.mdx)
- [three-raycaster](https://threejs.org/docs/#api/en/core/Raycaster)

## Completion evidence
- State what was inspected, what changed, and which checks actually ran. Never report unrun tests or unverified browser behavior as passing.

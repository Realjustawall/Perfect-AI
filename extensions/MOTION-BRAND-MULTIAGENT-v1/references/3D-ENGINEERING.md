# Three.js / React Three Fiber: Exact Placement and Composition

## Placement order is important
1. Load asset. Preserve original source scale and coordinate basis until analysis.
2. `updateWorldMatrix(true,true)` and compute `new THREE.Box3().setFromObject(model,true)`. If empty, fail loudly.
3. Get geometric center and size. Detect near-zero dimensions, skinned mesh, animation transforms, negative scale, Y-up vs Z-up.
4. Parent model under dedicated `alignmentPivot` for recenter/normalization. Add outer `animationPivot` for scroll and pointer rotation and `screenAnchor` group for hero composition.
5. Camera fit must account for BOTH vertical FOV and aspect-derived horizontal FOV. Use BoundingSphere for conservative initial distance, then projected corners to validate.
6. Align visual center to desired anchor e.g. desktop x=.68 y=.52 and phone x=.5 y=.62 with viewport-based formula. This is not CSS left/top positioning of canvas alone.
7. Text-safe region: reserve DOM bounding rectangle. If projected 3D bounds collide, reduce model size or move composition anchor.
8. Refit whenever canvas viewport aspect ratio, font layout, 3D animation bounds or asset changes; avoid refitting every frame.

## Camera mathematics
vertical angle θ_v = degToRad(camera.fov), horizontal θ_h = 2 atan(tan(θ_v/2)*aspect). A conservative sphere radius r fits at distance >= r / sin(min(θ_v,θ_h)/2), multiplied by padding. Camera near/far must contain sphere. For direct screen anchoring at depth d, world half-height = d tan(θ_v/2), half-width = aspect × half-height. Map desired anchor [0,1] to NDC [2x−1,1−2y]; shift object/camera with camera world right/up basis. See `examples/three-placement.js`.

## Cautions
- Box3 is world-axis-aligned, so it can become larger after rotations and is not a tight oriented bounding box. For animated silhouettes use special evaluation across keyframes or OBB.
- Use `SkeletonUtils.clone` for skinned assets; don't naive clone glTF skin matrices.
- React Three Fiber camera must update projection after aspect/FOV changes; Drei Bounds uses refresh/fit/clip, but call only after meaningful scene changes.
- An HTML canvas CSS position is NOT the same as moving 3D mesh in scene units.
- Report the final model projected pixel rectangle and viewport-safe percentage.

## Acceptance test
At 320×740, 390×844, 768×1024, 1440×900, 1920×1080, and each keyframe (p=0,.25,.5,.75,1), project all eight AABB corners into screen coordinates and compare against safe region. Give PASS/FAIL; if fail record screenshot and candidate camera offset. Raycast target should match visible geometry at same pointer location.

Sources: https://threejs.org/docs/pages/Box3.html , https://github.com/pmndrs/drei/blob/master/docs/staging/bounds.mdx

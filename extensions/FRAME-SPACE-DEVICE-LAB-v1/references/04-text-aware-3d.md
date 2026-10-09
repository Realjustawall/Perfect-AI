# Text-Aware 3D Spatial Composer

## Coordinates
Collect HTML `getBoundingClientRect()` for headings, navigation, CTA and floating widgets. For each 3D model, call `Box3.setFromObject(object)` after `object.updateWorldMatrix(true,true)`. Transform eight world-space bounding corners with `Vector3.project(camera)` into screen pixels, respecting canvas bounds. `Box3` is AABB in world coordinates, so rotating objects changes projected bounding extents and requires remeasure.

## Placement process
1. Find visible text obstacle rectangles, padding each by 16–48 px depending on visual density and device.
2. Define safe region = canvas viewport minus mobile safe areas and header/footer. Reserve text zones.
3. Generate candidate model rectangle centers (right, left, lower edge, etc). Score `overlapArea*100 + offscreenArea*30 + distanceFromPreferred*1 + focalPointPenalty`.
4. Solve screen-space rectangle with `tools/compose-core.mjs`. For actual Three.js object: convert target pixel displacement to normalized coords at target depth using camera ray intersection with camera-facing plane; avoid blindly changing x/y world units.
5. Validate with 3D projection from all eight Box3 corners. Recompose on font-ready, image/layout load, container resize, language switch, camera change, and relevant model animation keyframes. Limit updates: ResizeObserver -> one rAF.
6. No feasible fit? Shrink model via binary search or move it below copy, render non-interactive still or 2D preview. Never overlap button/focus indicators just to preserve 3D composition.

## Validation matrix
320,360,390,768,1024,1440, ultrawide; FA/EN; font load; zoom 200/400%; rotation phase .0,.25,.5,.75; pointer interactions; model zoom; DPR variation; long translations. Measured overlap of protected CTA area should be zero. Report overlap pixels and projected bounds.

## Known limitations
AABB can overestimate irregular mesh silhouette; use silhouette mask / depth readback for high-stakes overlaps. Invisible/proxy objects must not poison Box3. If object uses skinned animation, update skeleton matrices and model state before bounds capture. Very wide-angle lenses and post-processing distort geometry after projection; verify against final screenshot.

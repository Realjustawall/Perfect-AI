---
name: zt-three-lighting
description: Cinematic lighting: production-level key/fill/rim, ambient, shadows, tone mapping. Use when implementing, reviewing or testing cinematic lighting for React, Vite, Next.js or Perfect_AI projects.
---

# Cinematic lighting

## When to activate
Use on tasks involving **key/fill/rim, ambient, shadows, tone mapping**. For unrelated backend tasks do not load this skill.

## Implementation sequence
1. Choose perspective or orthographic camera, scene graph, model coordinate scale and render target.
2. Allocate geometry and materials outside render loop; use indexed/instanced buffers when repeated objects.
3. Constrain frame rendering to actual need, remove handlers and dispose GPU resources.
4. Integrate screen-space text as DOM accessible overlay and provide WebGL failure fallback.
5. Verify 320/375/768/1440, low end DPR=1 and interaction at 30/60FPS.

## Task-specific requirements
- Scope: **key/fill/rim, ambient, shadows, tone mapping**. Design the full execution path, not a screenshot placeholder.
- Identify dependency version and actual supported API signature; avoid inventing APIs.
- Use original code, or install licensed upstream through its maintained tool if the user wants upstream code.
- Choose measurable states, error handling, accessibility and performance budgets.

## Implementation starter
**Implementation notes:** Model key/fill/rim, ambient, shadows, tone mapping as explicit states, define input/output props and independent cleanup. Read master reference(s) below before writing code.


## Evidence / acceptance
- Renderer disposes; fallback provides content; no runaway GPU usage; no clipped subject at narrow widths.
- Test common, edge, interrupted, accessibility and responsive states; provide concrete artifacts/evidence.

## Deep references
- `../perfect-ai-master/references/02-threejs-3d.md`
- `../perfect-ai-master/references/13-threejs-animation-atlas.md`
- `../perfect-ai-master/references/17-threejs-production-guide.md`

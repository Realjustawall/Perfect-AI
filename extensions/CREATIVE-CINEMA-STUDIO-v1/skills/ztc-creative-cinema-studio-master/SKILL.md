---
name: ztc-creative-cinema-studio-master
description: "Orchestrate 12 creative cinematic web systems with independent testing and no changes to existing Perfect_AI skill files."
---
# Perfect_AI Creative Cinema Studio — Master

Select the minimum applicable subskills using `../../SKILL-CATALOG.json`. NEVER load all 60+ files blindly. Read parent skill first, then 1-3 subskills per problem, and add existing Perfect_AI skills where already suitable. Route ownership across existing GSAP, Anime.js, Motion, WebGL and DOM layers; exactly one engine owns each animated transform/time property. Preserve all old files and features.

## Project contract
1. Clarify page goal, art direction, brand tokens, locale, minimum device and performance budget from available project context. Do not require MCP.
2. Inventory current code, CSS, Three scene, router, navigation semantics, packages, and media assets. State which sources are authoritative and which modules are optional.
3. Storyboard route/scroll/time keyframes and map content accessibility to semantic HTML separate from decorative 3D.
4. For each requested effect choose a native CSS/WAAPI path first, use optional GSAP/Anime/Motion/Three adapters only when installed/appropriate. Do not inject CDN.
5. Implement an independently reversible slice; preserve feature parity and loading behavior. No destructive edits to Perfect_AI skill library.
6. Verify on desktop, small mobile, RTL, keyboard, reduced motion, failed asset load and back navigation; profile animations. Use browser screenshots and tested frame indexes to substantiate claims.
7. Report IMPLEMENTED / UNIT TESTED / BROWSER TESTED / REAL DEVICE TESTED / NOT TESTED separately; attach evidence and limitations.

## The 12 systems
- `cinematic-transitions`: Cinematic Page Transition Engine — Maintain spatial continuity when route changes: shared DOM elements, typography, hero imagery, and a persistent WebGL scene/camera.
- `image-animation`: Advanced Image Animation Engine — Build performant image transitions with displacement, liquid distortion, multilayer parallax, 3D flips, soft masks, and touch fallbacks.
- `kinetic-typography`: Kinetic Typography Studio — Animate headlines with readable wave, stretch, stroke, shader masks and staged reveals without corrupting Arabic/Persian glyph shaping.
- `procedural-layout`: Procedural Layout Animation — Create elastic image grids, staggered columns, depth shifts and scroll-driven editorial reflows while keeping DOM reading order stable.
- `svg-morph`: SVG Morphing Laboratory — Transform logos, shapes, buttons and menu icons with point normalization, morph interpolation, outline quality, and accessible SVG fallback.
- `product-storytelling`: Apple-Style Product Storytelling — Tie a cinematic product reveal to scroll progress using decoded frame sequences, responsive crops, prefetch, chapter beats and 3D alternatives.
- `material-studio`: Interactive Material Studio — Produce glass/chrome/liquid/fabric/paper/holographic PBR material presets, sensible lighting and pointer-responsive highlights.
- `motion-physics`: Motion Physics Language — Unify spring, inertia, drag and collision behaviors with predictable physical constants and deterministic state updates.
- `immersive-navigation`: Immersive Navigation Engine — Create spatial navigation, 3D menus and camera-path route changes without losing URL semantics or accessibility.
- `product-configurator`: Interactive Product Configurator — Expose color, material, component and camera variants through a validated state machine and an efficient 3D preview.
- `creative-preloader`: Creative Preloader & Intro Engine — Build meaningful cinematic intros gated on actual content readiness, respecting fast connections and reduced motion.
- `editorial-composition`: Editorial Composition Engine — Build distinctive asymmetric, magazine-like layouts with consistent typographic hierarchy, whitespace rhythm and scroll choreography.

## Validation commands
```sh
node --test tests/*.test.mjs
node tools/validate-skills.mjs
python -m http.server 4173 --directory examples/showcase
```

## Integration guardrails
Do not claim the vanilla ESM primitives are a fully integrated GSAP/Anime/Three renderer; they are testable building blocks. Avoid copying unlicensed GitHub demos. No MCP, remote runtime scripts, or forced preloading. Keep visible content when WebGL fails or users request reduced motion.

# Expert reference 04.11 — Three.js 3D system architecture: Production reliability and supply chain

**Class:** locally authored implementation reference · **Area:** threejs-webgl · **Lens:** production-security  
**Upstream documentation:** https://threejs.org/docs/

## Problem framing and scope

This module is used when a Codex agent must design, implement or review **three.js 3d system architecture** with particular emphasis on **production reliability and supply chain**. The user-visible result must function without depending on an illustration or animation. Avoid treating documentation as a substitute for actual code review or browser evidence.

## Core engineering invariant

Use scene/camera/renderer with real depth, control DPR and geometry budget, and dispose textures/geometries/materials on view teardown.

**Antipattern to prevent:** A painted circular Canvas effect is not automatically a 3D mesh; transparent overdraw can dominate GPU costs.

## Procedure — apply in the target codebase

1. Inspect the existing UI state, data flow and dependency versions. Preserve existing functionality and run its baseline tests before edits.
2. Build a written context map for threejs-webgl; explicitly define the desired behavior for the production-security concern. Use dependency pinning, license audits, CSP-aware assets and no unexpected remote execution. Protect secrets and personal data.
3. Implement a small vertical slice using semantic markup and scoped styles first. Then introduce the relevant animation, geometry or interaction runtime if measurable value exists.
4. Apply implementation-specific safeguards: For Three.js, write a scene graph diagram and quantify object count, vertex count, material counts, texture memory, draw calls, lighting, DPR and disposer list. Use actual mesh or GLSL geometry and a plain DOM static alternative.
5. Test the updated component at 320/390/768/1024/1440 CSS px with Persian RTL and English LTR. Check keyboard focus, touch, reduced motion, offline fallback, zoom and long text.
6. Record observations and remediation. A successful build does not by itself prove correct design or interaction.

## Minimal technical anchor

```javascript
const renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
renderer.setPixelRatio(Math.min(1.5,devicePixelRatio));
```

This is a technical anchor; expand and integrate it with the actual framework and installed library API rather than pasting it blindly.

## Verification protocol and evidence

- **Functional:** Verify security/permissions before copying third-party components.
- **Visual:** capture mobile and desktop screenshots in at least two content lengths; track layout overflow and changes after font loading.
- **Accessibility:** keyboard Tab/Shift+Tab, Escape where relevant, visible focus, noncolor state indicators, readable heading order and logical reading flow.
- **Motion:** identify all owners of transform/opacity/position, play and reverse, interrupt mid-transition and check state restoration.
- **Runtime:** check browser console, network assets, listeners, render loops, React unmount and failure fallback.
- **Performance:** measure worst credible target, not only a modern laptop. Document FPS/frame time for animation and memory for Three.js.
- **Source compliance:** verify official documentation, pinned versions and licenses before importing external dependencies.

## Concrete deliverables for the agent

1. Changed source files and the entrypoint; 2. the production-security contract; 3. implementation diff; 4. test commands and results; 5. screenshot or an explicit note if no browser run occurred; 6. unresolved risks, each labeled with next verification step.

## Relationship to the complete pack

Link the per-pattern implementations at `patterns/implementation-atlas/`, the former OMEGA chapters at `skills/perfect-ai-master/references/`, VibeFarsi's original 279 local specs, and the relevant source catalog. The original Anime.js homepage's proprietary visual assets are not implicitly bundled.

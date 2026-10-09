# Production architecture and engineering workflow for Codex

## Project setup

Prefer React + TypeScript + Vite for an interactive static product; Next.js where routing/SSR/content/SEO demand it. Bring in Three.js only for real 3D, Anime.js only for motion requiring choreography, VibeFarsi for site-local React/Tailwind v4 components. Bundle assets; use exact versions and lockfile for reproducibility. Avoid stacking unrelated scroll libraries.

Reference file tree:

```
src/
  app/App.tsx
  components/layout/{Header,Footer}.tsx
  components/sections/{ScrollStory,Capabilities,Process,MotionLab,CTA}.tsx
  components/three/{OrbScene,OrbGeometry,OrbShaders}.tsx
  components/motion/{useScrollProgress,animeScope}.ts
  components/ui/         # VibeFarsi CLI output if installed
  styles/{tokens,global,responsive}.css
  lib/{rtl,format,math,quality}.ts
  content/{fa,en}.ts
  tests/{responsive,motion,accessibility}.spec.ts
```

## Specific data flow

```
window scroll → normalized storyProgress [0..1]
              ├→ chapter animation state (DOM/Anime.js)
              ├→ Three.js uniform uProgress (GPU)
              └→ navigational progress display
pointer input → damped orbit tilt (fine pointer only)
resize/font  → layout measure + camera aspect + scroll threshold refresh
preferences → reduced motion + contrast + quality tier
```

Avoid repeated reads: record scroll event, request one rAF, read `scrollY` once, compute progress, apply. Render only when scene active/needs update or slow ambient time movement on desktop.

## Project deliverables

- a runnable site with npm scripts (`dev`, `build`, `preview`, `typecheck`, `test` where available)
- actual compiled code/feature evidence, no decorative ghost actions
- README with setup, dependencies and browser prerequisites
- source and attribution/credits
- feature-to-file index and test coverage
- screenshots or browser test notes if tools allow

## Integration pitfalls

- Three.js render loop and Anime.js engine both ticking: one should update scene state; avoid duplicate heavy updates.
- React StrictMode mounts effects twice in dev; cleanup scopes, observers, renderer/dispose; no orphaned canvases.
- CSS `transform` and Anime `rotate/translate` on same node conflict; use wrappers.
- CSS scroll snap + Anime scroll thresholds + tall sticky sections may produce jumpy reverse scroll: choose one primary navigation interaction.
- React re-render per animation frame hurts performance; use refs/imperative application for high-frequency 3D transforms.
- `CanvasTexture` repeatedly allocated can leak GPU memory; update same texture and dispose at end.
- Lazy-loading a scene without reserved size causes CLS and threshold shifts.
- RTL mirror CSS transforms is different from reversing DOM content; handle directional icons deliberately.
- VibeFarsi `init` and template install may change globals/theme; use `--dry-run` when possible and inspect diff.

## Build and test loop

1. Source audit → requirements matrix.
2. Install only needed deps → implement tokens/content and static shell.
3. Verify mobile read and focus navigation.
4. Build scene geometry → measure baseline FPS/draw calls.
5. Add scroll timeline and typography → test reverse and rapid input.
6. Add components/forms → test states and semantics.
7. Run `build`, TypeScript checker, unit tests, lint as available.
8. Browser QA grid and record observations.
9. Optimize only observed hotspots.
10. Document changes and unknowns; no fabricated benchmarks.

## Operational scripts

Use bundled `install/install-codex.ps1` to copy original Perfect_AI skill files to a local Codex project (no overwrites by default). Use `install/install-vibefarsi-official.ps1` to ask the VibeFarsi CLI to download the author's current 14 skills separately, when network is available and commands were reviewed. Distinguish author-maintained external skills from local adaptations.

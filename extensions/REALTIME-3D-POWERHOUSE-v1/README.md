# Perfect_AI REALTIME 3D POWERHOUSE v1

**Additive extension** for the full Perfect_AI Creative Cinema Studio archive; never rewrite or remove existing entries.

Five independent systems: Gaussian Splatting Engine, Visual Shader Graph Studio, Cinematic Post-Processing Studio, Video × 3D Fusion Engine and Real-Time 3D Scene Editor.

## Paths
- `skills/` — Codex instruction packs (master, 5 primary and specialist skills).
- `src/core/` — safe, dependency-free algorithms (graph compiler, scene history, timeline, Splat policy, postfx presets).
- `src/adapters/` — optional installed library integrations using npm imports.
- `examples/web-studio/` — interactive Vite web app with four systems plus an isolated Threepipe editor example.
- `tests/` — Node built-in tests, Python Splat structural tests.
- `tools/` — asset inspection and preservation verification.
- `references/` — exhaustive, system-specific engineering specs.
- `install/` — non-overwriting Windows PowerShell installation.

## Run locally
Windows PowerShell from the extracted extension root:
```powershell
cd examples/web-studio
npm install
npm run dev
```
An internet connection is needed only to install npm packages, unless they are already cached; no runtime CDN, MCP or paid API. Use only local or properly licensed media/3D files. `npm run build` must pass before production.

## Understand the limits
The pure-JS core is unit testable immediately; the Vite app requires installed dependencies. CPU tests **do not prove** WebGPU, live shader compilation, browser decoding, mobile FPS, sample video compatibility or full-blown 3D editing. TSL Node Editor upstream is experimental; generated TSL is version-sensitive. Native scene JSON does not embed GLB files; Threepipe is the GLB export path. Code generation is restricted to approved operators; visual node sockets need further UI polish for complex graphs.

**Package isolation:** Threepipe v0.5.1 declares a custom Three.js fork as its peer dependency. It lives in the independent `examples/threepipe` package so its renderer cannot collide with vanilla Three.js/postprocessing. Start each example in a separate terminal.

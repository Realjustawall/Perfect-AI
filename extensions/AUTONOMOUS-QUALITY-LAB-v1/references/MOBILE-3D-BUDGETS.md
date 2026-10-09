# Mobile cinematic experience without reckless resource costs

A blanket 60 FPS guarantee for all Android devices is not technically supportable. Quality is measured by 95th percentile frame time on target hardware, LCP/INP/CLS, animation reversibility and sustained battery/heat response. Prefer a rich experience that adapts.

Budget controller action order: (1) pause offscreen canvases (2) remove unnecessary postFX passes (3) lower DPR with hysteresis (4) reduce particles/instancing count (5) choose lower LOD and simplify shader (6) offer intentional reduced-motion and static fallback. Preserve the key story/scene content and avoid silently replacing with empty placeholder. Example `examples/threejs/adaptive-render-quality.js` uses frame samples and cooldown; real app should report renderer.info, mesh counts, memory and network.

Test touch gestures, tap target size, fixed headers, 320px, 360px, 390px, 430px, mobile landscape, tablet 768px, desktop 1440/1920, 400% effective reflow, device-pixel ratio 1–3, simulated CPU slowdown and actual low-end device. Emulator ≠ physical performance proof.

R3F idle scenes: `frameloop="demand"` + invalidate on change. Cinematic scenes can run continuous frames only while on screen. On visibility change pause optional animations and restore exact scroll position.

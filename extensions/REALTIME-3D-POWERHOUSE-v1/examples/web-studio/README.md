# Five-system visual studio (Vite)

Windows: `cd examples/web-studio`, `npm install`, `npm run dev`. No CDN and no MCP. A network connection may be needed once for npm dependencies.

Features: native shader graph editor with TSL export, real postprocessing composer, media frame-to-CanvasTexture synchronized with the camera, native Three.js scene editor (transform gizmos + undo/redo + JSON), dedicated Threepipe separate app (`../threepipe`), and Gaussian splat loader (requires user-provided local `.splat`).

**The package is a starter workspace, not a production-certified scene editor.** TSL export requires review against the exact installed Three.js revision and GPU path. The original node editor repository is experimental. `.ksplat` is intentionally unsupported in the pmndrs adapter. Splat files are not provided due to licensing/size. GPU/browsers need real target testing.

Vite's `public` folder can serve `public/assets/my-scene.splat`. The path passed to the loader should then be `/assets/my-scene.splat`.

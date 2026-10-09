# Threepipe integration

Use `../../src/adapters/threepipe.mjs` with a **dedicated canvas**, and install `threepipe` via npm in the destination project. The adapter exports the real ThreeViewer, TransformControlsPlugin, load/exportScene and dispose.

`viewer.exportScene()` exports scene content as a Blob on compatible versions. Check version-specific API before adopting in production.

Never let Threepipe and native WebGLRenderer own the same canvas. If integrating with an existing Threepipe app, prefer the existing viewer and plugin instance instead of creating another renderer.

## Isolated app

**Compatibility:** Threepipe v0.5.1 specifies its own `three` fork as npm peer. This folder has an independent `package.json` and Vite app. Do not merge node_modules or lockfiles with `examples/web-studio`.

PowerShell: `cd examples/threepipe; npm install; npm run dev` and open `http://127.0.0.1:5174`. This is not a CDN or MCP dependency. The custom npm peer tarball requires network access during installation. Test the resolved package and license before production.

# Live Lab — original Three.js + Anime.js implementation

This is **a real dependency-based example**, not a copy of the animejs.com homepage or its proprietary orb. Uses `Three.js` TorusKnotGeometry + Points + lights, and actual Anime.js v4 `createTimeline().seek()` for headline beats. UI monochrome, RTL Persian, progress tracking, resize, GPU cleanup awareness, no React required.

```bash
npm install
npm run dev
npm run build
```

Must validate in a browser with network/npm dependencies; source-level syntax verification alone is not visual verification. Integrate cleanup hooks when moving code into a SPA/router. In this single-page demo the resources live for the page duration. Pause/visibility/reduced-motion should be manually tested.

The animated text is sample content and requires actual rendering verification in your npm environment.

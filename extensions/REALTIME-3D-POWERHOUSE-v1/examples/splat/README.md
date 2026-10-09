# Gaussian Splatting

Serve licensed capture files locally. Basic example:

```js
import * as THREE from 'three';
import {attachSplat} from '../../src/adapters/splat-vanilla.mjs';
const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60,1,.1,100);
const splat = await attachSplat({renderer,scene,camera,url:'/assets/capture.splat'});
renderer.render(scene,camera);
// On unmount: splat.dispose(), then release resources *owned* by your application.
```

The loader in `@pmndrs/vanilla` is documented for `.splat`. Conversion/loading of `.ply` and `.ksplat` requires a separate validated decoder or conversion tool. Optimize sorted splat count, file size, mobile DPR, prefetch/cancel and touch UX. Accurate multi-splat compositing depends on alphaTest / alphaHash tradeoffs; test visual artifacts. Avoid uploading private room scans without consent.

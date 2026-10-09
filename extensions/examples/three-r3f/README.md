# Real R3F adaptive 3D hero — integration recipe

This sample is an actual React Three Fiber scene, **not** a prerecorded image. Requirements: compatible React/ReactDOM, `three`, `@react-three/fiber`, and optionally `@react-three/drei`. Choose R3F version matching your React major (v9/React 19; v8/React 18). Do not treat v10 alpha WebGPU hooks as stable. The example uses the standard WebGL route.

1. Put `AdaptiveHero.tsx` into a React + TypeScript application and mount it from a regular DOM page.
2. Install compatible library versions according to the official R3F docs; record versions in the lockfile.
3. Place HTML title and actions OUTSIDE the canvas as demonstrated. CSS class names are defined in `AdaptiveHero.css`.
4. Test mobile width, reduced-motion and browser without WebGL. Canvas will use an accessible fallback if creation fails.
5. Run frame profiling on the actual user device and tune quality. The quality governor sample uses *simulated test frame samples*; it does not claim actual measured FPS.

This example source has not been dependency-installed or browser-built in the creation environment. Inspect and test against your actual app.

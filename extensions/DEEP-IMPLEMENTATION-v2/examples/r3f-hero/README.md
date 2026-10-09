# R3F real-scene starter

This component creates **actual 3D torus knot geometry** in a real Three.js canvas. It adapts FOV/framing and object segments, clamps frame deltas, and supplies a non-WebGL state. This is a source example, **not a completed npm build**.

Install compatible React, react-dom, three and @react-three/fiber in a version-locked Vite/React project. Insert `AdaptiveOrbit` under a React error boundary, and add a DOM-visible headline/CTA. For production add proper error boundary on shader/context failures, test WebGL loss, confirm resource disposal. `navigator.gpu` alone is NOT proof that WebGPU integration will work.

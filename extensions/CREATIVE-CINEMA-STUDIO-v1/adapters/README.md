# External-renderer integration adapters (optional)

- `three-displacement.mjs` shows actual GLSL displacement on a supplied Three.js texture; it must be tested against target Three.js version, installed renderer, color pipeline and actual GPU. Add a matching `texture.colorSpace` when appropriate.
- `three-scene-bridge.mjs` interpolates an existing Three.js camera and target in a persistent renderer; pass your renderer's real render callback and dispose listeners on page teardown. It uses real clock time, so replay screenshots should use an injected clock/RAF.
- `gsap-adapters.mjs` wraps target project's licensed/installable GSAP Flip and ScrollTrigger. It does not bundle GSAP.

These adapters are NOT claimed to have passed full GPU or GSAP integration testing in this ZIP build. Do not import them automatically into every target project. Preserve current app versions, verify imports and browsers, and test repeated navigation/cleanup.

# Animation interoperability — explicit ownership examples

These are integration snippets for *separately installed* libraries. Do not bundle all three engines into a site by default. Every library owns distinct targets/properties. Use a shared scroll progress signal if combining with a 3D scene. Each snippet is a focused example, not a complete built app.

- `rive-button.tsx`: existing exported `.riv` state machine with named trigger; requires a user-provided Rive asset and `@rive-app/react-canvas` compatible version.
- `theatre-camera.ts`: model of a sequenced camera value using `@theatre/core`; test against the installed version and remove authoring studio in production.
- `anime-scroll.ts`: Anime.js v4 timeline + scroll with cleanup; API imports pinned by installed version.

Refs: https://rive.app/docs/runtimes/react/react, https://www.theatrejs.com/docs/latest, https://animejs.com/documentation/

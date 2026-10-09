# WebGL/WebGPU Compatibility Lab — Technical production playbook

## Purpose
Select a compatible Three.js rendering backend and gracefully recover from failed initialization or unsupported shaders.

## Architecture, invariants and algorithm
**Capability matrix**: WebGPU API availability is only a first check; await actual device/renderer init. Three.js WebGPURenderer may automatically select WebGL2 backend but does not support every ShaderMaterial/WebGL extension use. Prefer TSL/node materials for the shared path, or maintain WebGL-specific shaders. Device loss and shader compilation failure should trigger safe teardown + retry/2D fallback rather than a blank page. Use real device and browser matrix with WebGL-forced mode, normal mode, and no-graphics mode. Tag each test result with actual backend, GPU adapter only when privacy-appropriate, browser and driver; do not claim raw GPU timing if unsupported.

## Required end-to-end procedure
1. Inspect WebGPU availability, WebGL2 context and installed Three.js version.
2. Prefer WebGPURenderer where compatible; await renderer.init() and rely on renderer fallback when supported.
3. Detect materials unsuitable for WebGPURenderer (e.g. ShaderMaterial) and use a WebGL2-specific implementation when required.
4. Dispose partially initialized resources before fallback and preserve accessibility.
5. Test WebGL-forced mode and screenshot/static fallback, capture renderer backend and console errors.

## Negative tests and fallback states
- Missing dependency or unsupported browser: report `unverified`, preserve the approved page and offer a nonblank fallback.
- Invalid input and incomplete brand brief: report exact failing constraint rather than silently choosing unrelated colors/layout.
- Reduced motion, keyboard-only, Persian RTL and English LTR: test individually with screenshots and DOM assertions.
- Rendering errors and low GPU budget: degrade aesthetics before removing essential content.
- Repeated same input: deterministic output; document acceptable GPU raster differences.

## Acceptance gates
- No blank canvas on unsupported devices.
- Shaders compile on tested backend; unsupported are marked unverified.
- Resize/lifecycle safe.
- WebGPU success not inferred from navigator.gpu only.

## Operational evidence
Log environment, installed package versions, exact commands, JSON report, paths to generated screenshots/traces, failures, and unresolved items. Keep artifacts and code changes separate. **Do not** call a template success a browser-tested application.

## Official sources
- https://threejs.org/manual/pages/webgpurenderer

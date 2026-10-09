---
name: ztp3d-realtime-visual-powerhouse-master
description: "Coordinate five specialized graphics systems: Gaussian Splatting, TSL Shader Graph, Cinematic PostFX, Video/3D Fusion, Threepipe/Three.js Scene Editor — strictly additive, no MCP."
---
# Perfect_AI Real-Time Visual Powerhouse — Master

## Router / scope
Read `../../SKILL-CATALOG.json` when working in the source extension; after project installation the same catalog is at `<project>/.perfect-ai-extensions/REALTIME-3D-POWERHOUSE-v1/SKILL-CATALOG.json` (the installer relocates resources). Use only the smallest set of relevant parent + specialist skills. Keep all 2,610 existing Perfect_AI Skill files untouched.

| Need | Parent skill | Runtime |
| --- | --- | --- |
| Photoreal captured room/object | `ztp3d-gaussian-splatting` | `@pmndrs/vanilla` (`.splat`) |
| Editable shader material graph | `ztp3d-shader-graph` | Local graph editor + Three TSL |
| Film-look bloom/grading | `ztp3d-cinematic-postfx` | `postprocessing` with WebGLRenderer |
| Precise decoded video+3D | `ztp3d-video-3d-fusion` | `mediabunny`, `three` |
| Edit scene with gizmos/export | `ztp3d-realtime-scene-editor` | Native Three or dedicated Threepipe viewer |

## Non-negotiable boundaries
- One canvas, one renderer owner. Never run Threepipe and direct Three renderer against same active canvas.
- One clock controls video, camera and effects. No duplicate requestAnimationFrame loops on one canvas.
- Imported file and graph data is **data**, never code to evaluate. Maximum file size, type checks and provenance mandatory.
- TSL Node Editor upstream is experimental; generated code must be checked against installed Three revision.
- Mediabunny samples must be closed after draw. `.splat` is not equivalent to `.ksplat` or `.ply`.
- Rendering, decoding, video/audio sync, GPU throughput and browser compatibility require actual device verification.
- Do not bundle or remotely fetch copyrighted/user-specific models without explicit permission.
- Respect existing application routing, font stack (including Persian RTL), accessibility, reduced motion and performance budgets.

## Build execution order
1. Inventory project files and packages, identify integration surface and render ownership.
2. Write an acceptance contract per selected system: user-visible result + failure behavior + size and FPS budgets.
3. Select parent skill and 2-4 specialist skills; use `src/core` for pure logic and `src/adapters` for upstream integration.
4. Implement an end-to-end vertical slice, including teardown, errors, fallback, keyboard accessibility, configuration serialization.
5. Run unit tests and browser smoke tests in the real project; never equate npm install with tested rendering.
6. Verify 320/390/768/1440 widths and Chromium/Firefox/WebKit where libraries permit. Record unsupported separately.
7. Preserve original archive file bytes and report SHA-256 checks after packaging.

## Example
Run `cd extensions/REALTIME-3D-POWERHOUSE-v1/examples/web-studio && npm install && npm run dev`.
This requires local npm packages and valid user-provided media/splat assets; no MCP or CDN.

## Result contract
Report statuses separately: code authored, unit tested, dependency-installed, build verified, browser rendered, GPU hardware verified, production-ready. Missing evidence must be labelled NOT TESTED.

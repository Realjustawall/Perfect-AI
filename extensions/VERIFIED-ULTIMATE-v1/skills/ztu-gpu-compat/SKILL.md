---
name: ztu-gpu-compat
description: "Select a compatible Three.js rendering backend and gracefully recover from failed initialization or unsupported shaders."
---
# WebGL/WebGPU Compatibility Lab — Perfect_AI VERIFIED ULTIMATE

## Mission / ماموریت
Select a compatible Three.js rendering backend and gracefully recover from failed initialization or unsupported shaders.

## When to invoke
Three.js apps using WebGPU/TSL or modern shaders.

## Exact workflow
1. Inspect WebGPU availability, WebGL2 context and installed Three.js version.
2. Prefer WebGPURenderer where compatible; await renderer.init() and rely on renderer fallback when supported.
3. Detect materials unsuitable for WebGPURenderer (e.g. ShaderMaterial) and use a WebGL2-specific implementation when required.
4. Dispose partially initialized resources before fallback and preserve accessibility.
5. Test WebGL-forced mode and screenshot/static fallback, capture renderer backend and console errors.

## Acceptance criteria
- No blank canvas on unsupported devices.
- Shaders compile on tested backend; unsupported are marked unverified.
- Resize/lifecycle safe.
- WebGPU success not inferred from navigator.gpu only.

## Evidence contract
Write a machine-readable report with `status` = `pass|fail|unverified`, measured values, runtime/browser/device, changed files, exact command, artifacts and rationale. **Never** claim hardware/browser success from unit tests alone. Preserve original project files unless user explicitly authorizes edits. Avoid MCP; use local CLI and files.

## Compatibility and precautions
Read the installed dependency versions and project conventions first; prefer official APIs. Respect reduced motion, keyboard navigation, privacy, Persian RTL and low-power devices. Do not let two animation engines own the same DOM property. Test fallback modes and undo changes when the same acceptance check regresses.

## Working files
- `../../references/gpu-compat-implementation.md`
- `../../examples/gpu-compat/README.md`

## Official references
- https://threejs.org/manual/pages/webgpurenderer

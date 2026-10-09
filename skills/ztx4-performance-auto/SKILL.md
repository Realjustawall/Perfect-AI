---
name: ztx4-performance-auto
description: "Deep implementation master for Automatic Performance Optimization with 18 targeted Codex skills, code, tests and no MCP. Additive to all existing Perfect_AI versions."
---

# Automatic Performance Optimization

Measure and adapt rendering/interaction cost instead of optimizing blindly.

## Mandatory sequence
1. Collect baseline from real page and low-power emulation; record sample size and device details.
2. Set budgets for LCP, INP, CLS, JS, CSS, image bytes, GPU draw calls, FPS and memory where measurable.
3. Find bottlenecks using traces, frame graphs and network waterfalls before changes.
4. Adapt 3D quality progressively with hysteresis, and provide no-WebGL/reduced-motion fallback.
5. Re-run functional + performance regression; never claim FPS/VRAM from unavailable hardware.

## Skill routing
Choose only technique files needed for this project from `DEEP-IMPLEMENTATION-v2/references/performance-auto.md`. Never indiscriminately load all 300+ skills into context.

## Runbook
Inputs: reproducible page build, trace device class, performance budgets and regression baseline.

Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

## Acceptance gates
1. Performance claims include capture device/trace and baseline.
2. Quality downgrade has hysteresis and retains functional content.
3. WebVitals / GPU figures absent unless actually measured.

## Runnable assets
`extensions/DEEP-IMPLEMENTATION-v2/examples` and `tools` (installed main package). See `RUNBOOK-FA.md`.

## Sources
- [web-vitals](https://web.dev/articles/vitals)
- [three](https://threejs.org/docs/)
- [react-profiler](https://react.dev/reference/react/Profiler)

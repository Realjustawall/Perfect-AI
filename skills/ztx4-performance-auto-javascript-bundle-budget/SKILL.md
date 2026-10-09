---
name: ztx4-performance-auto-javascript-bundle-budget
description: "Implement javascript bundle budget for Automatic Performance Optimization with concrete acceptance gates, responsive/RTL safety, and no MCP. Additive Perfect_AI extension."
---

# Automatic Performance Optimization / javascript-bundle-budget

## Precise purpose
Run build analyzer; split feature code by routes and interaction points.

## First read
- `$perfect-ai-master` and `$ztx3-nexus-master` remain available; never overwrite or replace them.
- `../../extensions/DEEP-IMPLEMENTATION-v2/references/performance-auto.md` inside the full pack.
- Consult corresponding existing NEXUS handbook at `extensions/handbooks/performance-auto.md`.
- This is a new supplemental Skill, not a claim that third-party software is bundled.

## Input contract
Inputs: reproducible page build, trace device class, performance budgets and regression baseline.

## Implementation workflow for this technique
1. **Identify specific need:** Run build analyzer; split feature code by routes and interaction points.
2. **Baseline:** inspect existing code and record behavior and compatible dependency versions; keep old behavior unchanged.
3. **Build:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.
4. **Technique-specific output:** create a named source module, stylesheet, fixture and test targeting `javascript-bundle-budget` rather than a generic screenshot.
5. **Variations:** desktop / compact container / 320px mobile / Persian RTL / English LTR / reduced motion / blocked external assets.
6. **Measure:** log what runs with concrete outputs, fail gracefully when engine or browser support unavailable.
7. **No regressions:** do not delete, reformat or overwrite unrelated existing application code.

## Technique-specific verification
- Assert: Run build analyzer; split feature code by routes and interaction points.
- Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.
- Performance claims include capture device/trace and baseline.; Quality downgrade has hysteresis and retains functional content.; WebVitals / GPU figures absent unless actually measured.

## Deliverables
`implementation-notes.md`, source implementation, relevant fallback source, test fixture, screenshots if browser-run, `verified-results.json` showing passed/failed/unrun.

## Source of truth
- [web-vitals](https://web.dev/articles/vitals)
- [three](https://threejs.org/docs/)
- [react-profiler](https://react.dev/reference/react/Profiler)

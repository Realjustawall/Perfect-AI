# Automatic Performance Optimization — deep implementation playbook

**Purpose:** Measure and adapt rendering/interaction cost instead of optimizing blindly.

This file is an original engineering manual and does not reprint proprietary site code. Use it in addition to, never instead of, the complete pre-existing TITAN PLUS/NEXUS material.

## Architecture and execution order
1. Collect baseline from real page and low-power emulation; record sample size and device details.
2. Set budgets for LCP, INP, CLS, JS, CSS, image bytes, GPU draw calls, FPS and memory where measurable.
3. Find bottlenecks using traces, frame graphs and network waterfalls before changes.
4. Adapt 3D quality progressively with hysteresis, and provide no-WebGL/reduced-motion fallback.
5. Re-run functional + performance regression; never claim FPS/VRAM from unavailable hardware.

## Inputs / design constraints
Inputs: reproducible page build, trace device class, performance budgets and regression baseline.

## Preferred implementation approach
Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

## Representative source template
```js
const frameTimes = []; let last = performance.now();
function sample(now){const delta=Math.min(200,now-last);last=now;if(delta>0)frameTimes.push(delta);if(frameTimes.length>120)frameTimes.shift();requestAnimationFrame(sample)}
requestAnimationFrame(sample);
// Do not interpret a single FPS sample as device class; measure sustained p95 with cooldown.
```

## Cross-cutting quality gates
1. Performance claims include capture device/trace and baseline.
2. Quality downgrade has hysteresis and retains functional content.
3. WebVitals / GPU figures absent unless actually measured.

## Deep technique reference — all 18 features

### 01. `frame-time-observer`

**Output / operation:** Sample real frame deltas and compute rolling median/p95 excluding idle backgrounds.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/frame-time-observer.md) · Skill `$ztx4-performance-auto-frame-time-observer`
### 02. `dpr-governor`

**Output / operation:** Adjust DPR with hysteresis and cooldown to avoid oscillation and resize thrash.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/dpr-governor.md) · Skill `$ztx4-performance-auto-dpr-governor`
### 03. `gpu-drawcall-audit`

**Output / operation:** Inspect renderer.info and batching opportunity, verify picture parity.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/gpu-drawcall-audit.md) · Skill `$ztx4-performance-auto-gpu-drawcall-audit`
### 04. `geometry-budget`

**Output / operation:** Track triangles/vertices/material switches per scene and quality tier.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/geometry-budget.md) · Skill `$ztx4-performance-auto-geometry-budget`
### 05. `shader-iteration-budget`

**Output / operation:** Limit ray steps/noise octaves/post passes and cap high-frequency loops.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/shader-iteration-budget.md) · Skill `$ztx4-performance-auto-shader-iteration-budget`
### 06. `gputexture-memory-estimate`

**Output / operation:** Estimate mipmaps/compressed/uncompressed texture residency and render targets.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/gputexture-memory-estimate.md) · Skill `$ztx4-performance-auto-gputexture-memory-estimate`
### 07. `asset-compression-pipeline`

**Output / operation:** Use modern images, AVIF/WebP fallback, Meshopt/Draco/KTX2 based on support.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/asset-compression-pipeline.md) · Skill `$ztx4-performance-auto-asset-compression-pipeline`
### 08. `javascript-bundle-budget`

**Output / operation:** Run build analyzer; split feature code by routes and interaction points.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/javascript-bundle-budget.md) · Skill `$ztx4-performance-auto-javascript-bundle-budget`
### 09. `lcp-optimization`

**Output / operation:** Prioritize hero render, preload critical resources and avoid render blocking.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/lcp-optimization.md) · Skill `$ztx4-performance-auto-lcp-optimization`
### 10. `inp-optimization`

**Output / operation:** Defer heavy handlers, yield long tasks, avoid synchronous layout reads/writes.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/inp-optimization.md) · Skill `$ztx4-performance-auto-inp-optimization`
### 11. `cls-optimization`

**Output / operation:** Reserve layout boxes, preload critical fonts and never inject height without bounds.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/cls-optimization.md) · Skill `$ztx4-performance-auto-cls-optimization`
### 12. `scroll-jank-analysis`

**Output / operation:** Trace scroll/wheel handlers, passive listeners and sync layout read thrash.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/scroll-jank-analysis.md) · Skill `$ztx4-performance-auto-scroll-jank-analysis`
### 13. `battery-data-adaptation`

**Output / operation:** Use reduced-data and power-hint proxies cautiously; user override must work.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/battery-data-adaptation.md) · Skill `$ztx4-performance-auto-battery-data-adaptation`
### 14. `visibility-throttling`

**Output / operation:** Pause rendering or lower FPS in hidden tabs and offscreen sections.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/visibility-throttling.md) · Skill `$ztx4-performance-auto-visibility-throttling`
### 15. `adaptive-postprocessing`

**Output / operation:** Disable costly effects on lower tiers while preserving object silhouette.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/adaptive-postprocessing.md) · Skill `$ztx4-performance-auto-adaptive-postprocessing`
### 16. `worker-offscreen-canvas`

**Output / operation:** Move CPU-heavy deterministic workloads to workers where architecture permits.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/worker-offscreen-canvas.md) · Skill `$ztx4-performance-auto-worker-offscreen-canvas`
### 17. `performance-ci-budgets`

**Output / operation:** Create threshold-based trend gates without treating lab scores as field metrics.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/performance-ci-budgets.md) · Skill `$ztx4-performance-auto-performance-ci-budgets`
### 18. `before-after-proof`

**Output / operation:** Attach measured traces and functional screenshots before claiming any improvement.

**Implementation:** Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

**Proof:** Tests: frame budget on measured device, no quality thrash, LCP/INP/CLS trend, interactive fidelity, context cleanup, report unmeasured as unknown.

[Dedicated recipe](./performance-auto/recipes/before-after-proof.md) · Skill `$ztx4-performance-auto-before-after-proof`


## Honesty about execution
- The source templates in this pack illustrate the mechanisms. A validated install/build of an optional third-party package is required before claiming its integration works.
- Re-check current API versions in the lockfile and official references.
- Do not claim real GPU frame time, pixel-perfect reconstruction, or site ownership without data.

## Official / maintained references
- [web-vitals](https://web.dev/articles/vitals)
- [three](https://threejs.org/docs/)
- [react-profiler](https://react.dev/reference/react/Profiler)

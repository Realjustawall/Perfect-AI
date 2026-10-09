# Automatic Performance Optimization — production engineering reference

Record budgets for LCP, INP, CLS, JavaScript, shader execution, FPS and memory. Profile before optimizing. Implement adaptive tiers based on measured frame time, visibility and reduced-data preferences; use hysteresis and upper/lower bounds. Preserve important content, keyboard functionality and visual hierarchy in all tiers.

## Architecture

Input contract → deterministic evidence collection → decision/implementation plan → reference implementation → device and accessibility fallback → test gates → signed-off report.

## Detailed implementation index

### 1. core-web-vitals

**Mechanism:** Instrument LCP, INP and CLS using web-vitals and associate routes/contexts.

**Failure pressure:** Do not conflate lab metric with field data.

**Execution:** Measure baseline; set explicit performance budget; implement quality governor, cleanup and repeatable trace.

**Acceptance:** Validate stable quality tiers against synthetic frame times; never claim simulated numbers are real FPS.

### 2. longtask-observer

**Mechanism:** Track long tasks and identify render/layout causes without collecting private data.

**Failure pressure:** Avoid synchronous logging in animation frames.

**Execution:** Measure baseline; set explicit performance budget; implement quality governor, cleanup and repeatable trace.

**Acceptance:** Validate stable quality tiers against synthetic frame times; never claim simulated numbers are real FPS.

### 3. frame-budget-governor

**Mechanism:** Use rolling trimmed frame time and hysteresis to choose quality tier.

**Failure pressure:** Prevent rapid oscillation.

**Execution:** Measure baseline; set explicit performance budget; implement quality governor, cleanup and repeatable trace.

**Acceptance:** Validate stable quality tiers against synthetic frame times; never claim simulated numbers are real FPS.

### 4. gpu-drawcall-budget

**Mechanism:** Measure renderer.info.render.calls, triangles and textures.

**Failure pressure:** No fixed universal number as a success metric.

**Execution:** Measure baseline; set explicit performance budget; implement quality governor, cleanup and repeatable trace.

**Acceptance:** Validate stable quality tiers against synthetic frame times; never claim simulated numbers are real FPS.

### 5. shader-profiling

**Mechanism:** Compare shader variants and bound ray steps/overdraw.

**Failure pressure:** Test on mid/low-tier hardware.

**Execution:** Measure baseline; set explicit performance budget; implement quality governor, cleanup and repeatable trace.

**Acceptance:** Validate stable quality tiers against synthetic frame times; never claim simulated numbers are real FPS.

### 6. bundle-analysis

**Mechanism:** Identify route chunks, critical dependencies and hydration cost.

**Failure pressure:** Do not load editor-only libraries in production.

**Execution:** Measure baseline; set explicit performance budget; implement quality governor, cleanup and repeatable trace.

**Acceptance:** Validate stable quality tiers against synthetic frame times; never claim simulated numbers are real FPS.

### 7. image-font-pipeline

**Mechanism:** Use responsive images, formats, preload critical hero, lazy remainder.

**Failure pressure:** Avoid oversize 4k assets on phone.

**Execution:** Measure baseline; set explicit performance budget; implement quality governor, cleanup and repeatable trace.

**Acceptance:** Validate stable quality tiers against synthetic frame times; never claim simulated numbers are real FPS.

### 8. adaptive-dpr

**Mechanism:** Cap renderer DPR based on measured frame budget and display constraints.

**Failure pressure:** Never use window.devicePixelRatio uncapped.

**Execution:** Measure baseline; set explicit performance budget; implement quality governor, cleanup and repeatable trace.

**Acceptance:** Validate stable quality tiers against synthetic frame times; never claim simulated numbers are real FPS.

### 9. offscreen-pausing

**Mechanism:** Use IntersectionObserver and visibilitychange to suspend loops.

**Failure pressure:** Do not run hidden canvas continuously.

**Execution:** Measure baseline; set explicit performance budget; implement quality governor, cleanup and repeatable trace.

**Acceptance:** Validate stable quality tiers against synthetic frame times; never claim simulated numbers are real FPS.

### 10. battery-data-saving

**Mechanism:** Use saveData and reduced-motion and opt-in heavy effects.

**Failure pressure:** Never require Battery Status API.

**Execution:** Measure baseline; set explicit performance budget; implement quality governor, cleanup and repeatable trace.

**Acceptance:** Validate stable quality tiers against synthetic frame times; never claim simulated numbers are real FPS.

### 11. memory-cleanup

**Mechanism:** Dispose geometry/material/texture/render targets/listeners on teardown.

**Failure pressure:** Avoid orphaned GPU allocations.

**Execution:** Measure baseline; set explicit performance budget; implement quality governor, cleanup and repeatable trace.

**Acceptance:** Validate stable quality tiers against synthetic frame times; never claim simulated numbers are real FPS.

### 12. performance-regressions

**Mechanism:** Run repeatable Lighthouse/Playwright traces with consistent conditions.

**Failure pressure:** Do not report unexecuted measurements.

**Execution:** Measure baseline; set explicit performance budget; implement quality governor, cleanup and repeatable trace.

**Acceptance:** Validate stable quality tiers against synthetic frame times; never claim simulated numbers are real FPS.

## Gate checklist

- [ ] Inputs, constraints and assets have evidence.
- [ ] Implementation has a real code path, not a prompt-only promise.
- [ ] Minimal or static fallback preserves actual user task.
- [ ] Proper cleanup and reduced-motion when relevant.
- [ ] Persian RTL and English LTR components tested when language is supported.
- [ ] Version compatibility and license assumptions documented.
- [ ] Verified tests distinguished from suggestions.

## Codex handoff

Report actual files edited, references consulted, runtime version and selected skills. Preserve original user content; do not install MCP.

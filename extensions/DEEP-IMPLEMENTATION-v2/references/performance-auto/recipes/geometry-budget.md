# geometry-budget — independent recipe

**Domain:** Automatic Performance Optimization  
**Why it exists:** Track triangles/vertices/material switches per scene and quality tier.

## Configuration and boundaries
Inputs: reproducible page build, trace device class, performance budgets and regression baseline.

## Step-by-step execution
1. State observable success behavior in one sentence: Track triangles/vertices/material switches per scene and quality tier.
2. Inspect user-owned source and choose target platform and installed versions. Do not guess API compatibility.
3. Implement the exact behavior in an isolated named module, keeping a testable input/output contract.
4. Build a fallback without external renderers or pointer-only interaction.
5. Connect semantic state changes to engine state, not vice versa. One owner per property.
6. Add acceptance tests for error, resize, rollback and RTL/reduced-motion.
7. Compare baseline and modified screenshot/trace where visual; attach actual evidence when run.

## Execution pattern
Implementation: measure before change; identify CPU/GPU/asset bottleneck; adapt DPR/LOD/pass budgets using p95 frame time and hysteresis.

## Required acceptance
1. Performance claims include capture device/trace and baseline.
2. Quality downgrade has hysteresis and retains functional content.
3. WebVitals / GPU figures absent unless actually measured.

## Example baseline (adapt to this topic)
```js
const frameTimes = []; let last = performance.now();
function sample(now){const delta=Math.min(200,now-last);last=now;if(delta>0)frameTimes.push(delta);if(frameTimes.length>120)frameTimes.shift();requestAnimationFrame(sample)}
requestAnimationFrame(sample);
// Do not interpret a single FPS sample as device class; measure sustained p95 with cooldown.
```

## Risk checklist
- No invented asset licenses, untested library version, unexplained loss of keyboard behavior.
- No extra network services or MCP requirement.
- Never silently treat an example snippet as a fully built standalone product.
- Log execution status as PASS / FAIL / NOT RUN separately.

## Source references
- [web-vitals](https://web.dev/articles/vitals)
- [three](https://threejs.org/docs/)
- [react-profiler](https://react.dev/reference/react/Profiler)

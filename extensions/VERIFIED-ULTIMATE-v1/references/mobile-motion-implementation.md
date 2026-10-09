# Mobile Motion Budget Engine — Technical production playbook

## Purpose
Measure frame times and adjust DPR particles shadows LOD and postprocessing under explicit thresholds and hysteresis.

## Architecture, invariants and algorithm
**Budget**: 60 Hz ≈16.7ms frame time, 90 Hz≈11.1ms, 120 Hz≈8.3ms; actual performance must be measured, not inferred from refresh rate. Use rolling p95/p99, first-load separately, cooldown/hysteresis, and minimum motion accessibility contract. Degrade first bloom/blur/shadows/complexity, then DPR, particle count and LOD. Preserve scroll progress, object focal placement and text readability. Never disable useful interactions merely because animation is reduced; implement semantic fallback. Evaluate real hardware with Chrome Android profiling and temperature/battery notes. Suppress quality upgrades while frame time is unstable.

## Required end-to-end procedure
1. Run reduced-motion and capability probes, never treat UA strings as proof of GPU tier.
2. Collect representative frame timings with warmup and p95; detect long stalls separately.
3. Adjust nonessential effects first, then DPR, shadows, samples, particles and LOD.
4. Use cooldown/hysteresis to prevent quality oscillation; restore only after sustained recovery.
5. Test on real hardware for performance claims and document battery constraints.

## Negative tests and fallback states
- Missing dependency or unsupported browser: report `unverified`, preserve the approved page and offer a nonblank fallback.
- Invalid input and incomplete brand brief: report exact failing constraint rather than silently choosing unrelated colors/layout.
- Reduced motion, keyboard-only, Persian RTL and English LTR: test individually with screenshots and DOM assertions.
- Rendering errors and low GPU budget: degrade aesthetics before removing essential content.
- Repeated same input: deterministic output; document acceptable GPU raster differences.

## Acceptance gates
- Quality changes are bounded and reversible.
- Critical motion and content remain accessible.
- No invented 60/90/120 FPS claims.
- Slow simulations lower quality; fast ones recover.

## Operational evidence
Log environment, installed package versions, exact commands, JSON report, paths to generated screenshots/traces, failures, and unresolved items. Keep artifacts and code changes separate. **Do not** call a template success a browser-tested application.

## Official sources
- https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing

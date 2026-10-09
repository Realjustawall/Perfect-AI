---
name: ztu-mobile-motion
description: "Measure frame times and adjust DPR particles shadows LOD and postprocessing under explicit thresholds and hysteresis."
---
# Mobile Motion Budget Engine — Perfect_AI VERIFIED ULTIMATE

## Mission / ماموریت
Measure frame times and adjust DPR particles shadows LOD and postprocessing under explicit thresholds and hysteresis.

## When to invoke
Any animation-heavy mobile experience.

## Exact workflow
1. Run reduced-motion and capability probes, never treat UA strings as proof of GPU tier.
2. Collect representative frame timings with warmup and p95; detect long stalls separately.
3. Adjust nonessential effects first, then DPR, shadows, samples, particles and LOD.
4. Use cooldown/hysteresis to prevent quality oscillation; restore only after sustained recovery.
5. Test on real hardware for performance claims and document battery constraints.

## Acceptance criteria
- Quality changes are bounded and reversible.
- Critical motion and content remain accessible.
- No invented 60/90/120 FPS claims.
- Slow simulations lower quality; fast ones recover.

## Evidence contract
Write a machine-readable report with `status` = `pass|fail|unverified`, measured values, runtime/browser/device, changed files, exact command, artifacts and rationale. **Never** claim hardware/browser success from unit tests alone. Preserve original project files unless user explicitly authorizes edits. Avoid MCP; use local CLI and files.

## Compatibility and precautions
Read the installed dependency versions and project conventions first; prefer official APIs. Respect reduced motion, keyboard navigation, privacy, Persian RTL and low-power devices. Do not let two animation engines own the same DOM property. Test fallback modes and undo changes when the same acceptance check regresses.

## Working files
- `../../references/mobile-motion-implementation.md`
- `../../examples/mobile-motion/README.md`

## Official references
- https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing

---
name: ztp3d-cinematic-postfx-gpu-budget-and-scaling
description: "Resolution and Frame Budgets: specialized Perfect_AI quality workflow for Cinematic Post-Processing Studio."
---
# Resolution and Frame Budgets

## Where this skill applies
Control DPR, multi-sampling, pass count, half-res blur and performance tiers.

## Task-specific implementation plan
Track frame p50/p95, draw calls and memory before/after; do not infer FPS only from CSS or desktop emulation.

### Inputs and dependencies
- Existing project source and its installed versions, target browser, 3D scene/camera, ownership rules.
- Parent integration guide: `../ztp3d-cinematic-postfx/SKILL.md`.
- Working example and adapter: `../../src/adapters/postprocessing.mjs`.
- Upstream technical reference: https://github.com/pmndrs/postprocessing.

### Step-by-step operational checklist
1. Inspect target source files and preserve all existing behavior; explicitly name the owner of each component, canvas and animation timeline.
2. Validate input data and preconditions. For missing support, stop gracefully with a useful error and a visible fallback.
3. Implement resolution and frame budgets through smallest observable patch, preferring local modules, deterministic data and reusable functions.
4. Include edge cases: empty assets, large assets, stale asynchronous work, component unmount, 320px mobile, RTL layout and prefers-reduced-motion.
5. Verify each change independently before enabling it in the full pipeline; record precise reproduction steps.
6. Test final rendering on browser and target device and collect screenshot, console and resource lifecycle evidence.
7. Classify final result as documented / implemented / unit tested / browser tested / actual GPU tested.

### Targeted acceptance tests
Reduce GPU cost on 360px high-DPR viewport without changing critical composition.

### Failure and rollback
- If a feature is unavailable, keep prior renderer or accessible HTML content intact and report why.
- If perf regresses, turn off the optional effect/plugin through an explicit feature flag.
- Do not change or delete upstream Perfect_AI skills; add new files or narrowly patch the destination application only on request.
- Always distinguish simulated/browser/device evidence.

### Example deliverables
- Implementation diff and dependency changes; deterministic fixture and tested commands.
- Baseline/target render screenshots and p95 frame-time notes where GPU work is involved.
- List of remaining limitations, security/privacy and licensing issues.

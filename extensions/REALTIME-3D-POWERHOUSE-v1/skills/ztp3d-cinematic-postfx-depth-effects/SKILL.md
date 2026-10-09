---
name: ztp3d-cinematic-postfx-depth-effects
description: "Depth-Dependent Effects: specialized Perfect_AI quality workflow for Cinematic Post-Processing Studio."
---
# Depth-Dependent Effects

## Where this skill applies
Control DOF and AO with correct depth texture and MSAA/render pass interoperability.

## Task-specific implementation plan
Avoid feedback from screen-space AO artifacts near edges; verify transparent objects and background handling.

### Inputs and dependencies
- Existing project source and its installed versions, target browser, 3D scene/camera, ownership rules.
- Parent integration guide: `../ztp3d-cinematic-postfx/SKILL.md`.
- Working example and adapter: `../../src/adapters/postprocessing.mjs`.
- Upstream technical reference: https://github.com/pmndrs/postprocessing.

### Step-by-step operational checklist
1. Inspect target source files and preserve all existing behavior; explicitly name the owner of each component, canvas and animation timeline.
2. Validate input data and preconditions. For missing support, stop gracefully with a useful error and a visible fallback.
3. Implement depth-dependent effects through smallest observable patch, preferring local modules, deterministic data and reusable functions.
4. Include edge cases: empty assets, large assets, stale asynchronous work, component unmount, 320px mobile, RTL layout and prefers-reduced-motion.
5. Verify each change independently before enabling it in the full pipeline; record precise reproduction steps.
6. Test final rendering on browser and target device and collect screenshot, console and resource lifecycle evidence.
7. Classify final result as documented / implemented / unit tested / browser tested / actual GPU tested.

### Targeted acceptance tests
Render depth chart and measure halo and temporal instability.

### Failure and rollback
- If a feature is unavailable, keep prior renderer or accessible HTML content intact and report why.
- If perf regresses, turn off the optional effect/plugin through an explicit feature flag.
- Do not change or delete upstream Perfect_AI skills; add new files or narrowly patch the destination application only on request.
- Always distinguish simulated/browser/device evidence.

### Example deliverables
- Implementation diff and dependency changes; deterministic fixture and tested commands.
- Baseline/target render screenshots and p95 frame-time notes where GPU work is involved.
- List of remaining limitations, security/privacy and licensing issues.

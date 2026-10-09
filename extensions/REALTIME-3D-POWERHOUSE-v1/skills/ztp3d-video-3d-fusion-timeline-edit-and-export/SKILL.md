---
name: ztp3d-video-3d-fusion-timeline-edit-and-export
description: "Non-Linear Editing and Export: specialized Perfect_AI quality workflow for Video × 3D Fusion Engine."
---
# Non-Linear Editing and Export

## Where this skill applies
Represent clip trim, split, camera keyframes, overlays and exports as serializable data.

## Task-specific implementation plan
Use deterministic project JSON and Mediabunny encoder workflows with explicit formats; do not claim export until a muxed playable file is verified.

### Inputs and dependencies
- Existing project source and its installed versions, target browser, 3D scene/camera, ownership rules.
- Parent integration guide: `../ztp3d-video-3d-fusion/SKILL.md`.
- Working example and adapter: `../../src/adapters/video-texture.mjs`.
- Upstream technical reference: https://github.com/Vanilagy/mediabunny.

### Step-by-step operational checklist
1. Inspect target source files and preserve all existing behavior; explicitly name the owner of each component, canvas and animation timeline.
2. Validate input data and preconditions. For missing support, stop gracefully with a useful error and a visible fallback.
3. Implement non-linear editing and export through smallest observable patch, preferring local modules, deterministic data and reusable functions.
4. Include edge cases: empty assets, large assets, stale asynchronous work, component unmount, 320px mobile, RTL layout and prefers-reduced-motion.
5. Verify each change independently before enabling it in the full pipeline; record precise reproduction steps.
6. Test final rendering on browser and target device and collect screenshot, console and resource lifecycle evidence.
7. Classify final result as documented / implemented / unit tested / browser tested / actual GPU tested.

### Targeted acceptance tests
Export 5-second clip with audio and open in two independent players; preserve frame order.

### Failure and rollback
- If a feature is unavailable, keep prior renderer or accessible HTML content intact and report why.
- If perf regresses, turn off the optional effect/plugin through an explicit feature flag.
- Do not change or delete upstream Perfect_AI skills; add new files or narrowly patch the destination application only on request.
- Always distinguish simulated/browser/device evidence.

### Example deliverables
- Implementation diff and dependency changes; deterministic fixture and tested commands.
- Baseline/target render screenshots and p95 frame-time notes where GPU work is involved.
- List of remaining limitations, security/privacy and licensing issues.

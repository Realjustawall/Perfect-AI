---
name: ztp3d-realtime-scene-editor-camera-light-editor
description: "Camera and Lighting Tools: specialized Perfect_AI quality workflow for Real-Time 3D Scene Editor."
---
# Camera and Lighting Tools

## Where this skill applies
Edit camera target/FOV, light intensity/color and HDRI environment with safe defaults.

## Task-specific implementation plan
Use lens ranges and near/far fitting. Track baked vs dynamic lighting. Keep UI overlay accessible and lighting changes undoable.

### Inputs and dependencies
- Existing project source and its installed versions, target browser, 3D scene/camera, ownership rules.
- Parent integration guide: `../ztp3d-realtime-scene-editor/SKILL.md`.
- Working example and adapter: `../../src/adapters/three-editor.mjs`.
- Upstream technical reference: https://github.com/repalash/threepipe.

### Step-by-step operational checklist
1. Inspect target source files and preserve all existing behavior; explicitly name the owner of each component, canvas and animation timeline.
2. Validate input data and preconditions. For missing support, stop gracefully with a useful error and a visible fallback.
3. Implement camera and lighting tools through smallest observable patch, preferring local modules, deterministic data and reusable functions.
4. Include edge cases: empty assets, large assets, stale asynchronous work, component unmount, 320px mobile, RTL layout and prefers-reduced-motion.
5. Verify each change independently before enabling it in the full pipeline; record precise reproduction steps.
6. Test final rendering on browser and target device and collect screenshot, console and resource lifecycle evidence.
7. Classify final result as documented / implemented / unit tested / browser tested / actual GPU tested.

### Targeted acceptance tests
Save and restore multiple camera bookmarks and lights.

### Failure and rollback
- If a feature is unavailable, keep prior renderer or accessible HTML content intact and report why.
- If perf regresses, turn off the optional effect/plugin through an explicit feature flag.
- Do not change or delete upstream Perfect_AI skills; add new files or narrowly patch the destination application only on request.
- Always distinguish simulated/browser/device evidence.

### Example deliverables
- Implementation diff and dependency changes; deterministic fixture and tested commands.
- Baseline/target render screenshots and p95 frame-time notes where GPU work is involved.
- List of remaining limitations, security/privacy and licensing issues.

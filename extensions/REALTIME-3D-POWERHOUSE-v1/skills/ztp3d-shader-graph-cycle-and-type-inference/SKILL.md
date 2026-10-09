---
name: ztp3d-shader-graph-cycle-and-type-inference
description: "Dependency and Type Analysis: specialized Perfect_AI quality workflow for Visual Shader Graph Studio."
---
# Dependency and Type Analysis

## Where this skill applies
Determine topological execution order and enforce float/vec2/vec3/vec4 compatibility before compilation.

## Task-specific implementation plan
The included core checks graph validity and topology; implement stronger type inference before shipping graphs using heterogeneous scalar/vector connections.

### Inputs and dependencies
- Existing project source and its installed versions, target browser, 3D scene/camera, ownership rules.
- Parent integration guide: `../ztp3d-shader-graph/SKILL.md`.
- Working example and adapter: `../../src/core/graph.mjs`.
- Upstream technical reference: https://github.com/takahirox/tsl-node-editor.

### Step-by-step operational checklist
1. Inspect target source files and preserve all existing behavior; explicitly name the owner of each component, canvas and animation timeline.
2. Validate input data and preconditions. For missing support, stop gracefully with a useful error and a visible fallback.
3. Implement dependency and type analysis through smallest observable patch, preferring local modules, deterministic data and reusable functions.
4. Include edge cases: empty assets, large assets, stale asynchronous work, component unmount, 320px mobile, RTL layout and prefers-reduced-motion.
5. Verify each change independently before enabling it in the full pipeline; record precise reproduction steps.
6. Test final rendering on browser and target device and collect screenshot, console and resource lifecycle evidence.
7. Classify final result as documented / implemented / unit tested / browser tested / actual GPU tested.

### Targeted acceptance tests
Reject vec3 output piped into a scalar-only operation and catch an indirect dependency cycle.

### Failure and rollback
- If a feature is unavailable, keep prior renderer or accessible HTML content intact and report why.
- If perf regresses, turn off the optional effect/plugin through an explicit feature flag.
- Do not change or delete upstream Perfect_AI skills; add new files or narrowly patch the destination application only on request.
- Always distinguish simulated/browser/device evidence.

### Example deliverables
- Implementation diff and dependency changes; deterministic fixture and tested commands.
- Baseline/target render screenshots and p95 frame-time notes where GPU work is involved.
- List of remaining limitations, security/privacy and licensing issues.

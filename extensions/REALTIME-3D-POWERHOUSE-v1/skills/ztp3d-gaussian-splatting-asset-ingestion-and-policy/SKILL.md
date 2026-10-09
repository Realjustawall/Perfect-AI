---
name: ztp3d-gaussian-splatting-asset-ingestion-and-policy
description: "Splat Asset Ingestion: specialized Perfect_AI quality workflow for Gaussian Splatting Engine."
---
# Splat Asset Ingestion

## Where this skill applies
Inspect extension, file size, MIME, license, provenance and capture permission; reject unexpected remote origins and malformed 32-byte record legacy .splat files.

## Task-specific implementation plan
Start with local .splat hosted by Vite. Check known record format length, limit bytes before decoding, supply capture provenance and a private-data policy. Do not assume .ply/.ksplat/.spz is accepted by the vanilla loader.

### Inputs and dependencies
- Existing project source and its installed versions, target browser, 3D scene/camera, ownership rules.
- Parent integration guide: `../ztp3d-gaussian-splatting/SKILL.md`.
- Working example and adapter: `../../src/adapters/splat-vanilla.mjs`.
- Upstream technical reference: https://github.com/pmndrs/drei-vanilla.

### Step-by-step operational checklist
1. Inspect target source files and preserve all existing behavior; explicitly name the owner of each component, canvas and animation timeline.
2. Validate input data and preconditions. For missing support, stop gracefully with a useful error and a visible fallback.
3. Implement splat asset ingestion through smallest observable patch, preferring local modules, deterministic data and reusable functions.
4. Include edge cases: empty assets, large assets, stale asynchronous work, component unmount, 320px mobile, RTL layout and prefers-reduced-motion.
5. Verify each change independently before enabling it in the full pipeline; record precise reproduction steps.
6. Test final rendering on browser and target device and collect screenshot, console and resource lifecycle evidence.
7. Classify final result as documented / implemented / unit tested / browser tested / actual GPU tested.

### Targeted acceptance tests
Pass a valid local .splat and a fake .glb; success is allowed splat, rejection for unsupported and remote URLs; run tools/inspect-splat.py against a sample capture.

### Failure and rollback
- If a feature is unavailable, keep prior renderer or accessible HTML content intact and report why.
- If perf regresses, turn off the optional effect/plugin through an explicit feature flag.
- Do not change or delete upstream Perfect_AI skills; add new files or narrowly patch the destination application only on request.
- Always distinguish simulated/browser/device evidence.

### Example deliverables
- Implementation diff and dependency changes; deterministic fixture and tested commands.
- Baseline/target render screenshots and p95 frame-time notes where GPU work is involved.
- List of remaining limitations, security/privacy and licensing issues.

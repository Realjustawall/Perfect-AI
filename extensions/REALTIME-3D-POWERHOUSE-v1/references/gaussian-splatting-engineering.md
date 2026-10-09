# Gaussian Splatting Engine — Detailed engineering specification

## Outcome and ownership
Stream locally hosted Gaussian splat captures into a pre-existing Three.js WebGL scene with stable camera ownership, depth handling, bounded memory and graceful fallback.

**Primary executable module:** `src/adapters/splat-vanilla.mjs`. **Source:** https://github.com/pmndrs/drei-vanilla.
The current code provides a transparent end-to-end starter, not evidence that every upstream library is fully integrated or tested on every graphics backend.

## Accurate upstream API sketch
```js
new SplatLoader(renderer); const data = await loader.loadAsync(url); const splat = new Splat(data, camera, {alphaTest:0.1}); scene.add(splat);
```

## Work packages and gates

### 1. Splat Asset Ingestion

**Requirement.** Inspect extension, file size, MIME, license, provenance and capture permission; reject unexpected remote origins and malformed 32-byte record legacy .splat files.

**Implementation.** Start with local .splat hosted by Vite. Check known record format length, limit bytes before decoding, supply capture provenance and a private-data policy. Do not assume .ply/.ksplat/.spz is accepted by the vanilla loader.

**Acceptance.** Pass a valid local .splat and a fake .glb; success is allowed splat, rejection for unsupported and remote URLs; run tools/inspect-splat.py against a sample capture.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 2. Progressive Loading and Failure UX

**Requirement.** Handle pending, ready, error, retry, cancel and obsolete requests; prevent stale async completions from overwriting a newer scene.

**Implementation.** Track request tokens, guard the scene mount state, preserve existing renderer and recover to a static poster without blank screens. LoadingManager progress is not necessarily bytes.

**Acceptance.** Simulate slow asset, switch routes, fail fetch and verify no stale visual or unhandled rejection.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 3. Multi-Splat Alpha and Depth Ordering

**Requirement.** Configure alphaTest/alphaHash with documented tradeoffs and inspect sorting artifacts when several splats overlap.

**Implementation.** Prefer one loader/cache owner. Place splats on separate objects while sharing decoded data as documented. Compare alphaTest and alphaHash in movement; record halos/noise and TAA cost.

**Acceptance.** Render overlap at near/far distances with rotating camera; compare edge halos and draw order.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 4. Splat + GLB Hybrid Composition

**Requirement.** Combine splat environmental captures with GLB interactive meshes, standard lights and accessible HTML labels.

**Implementation.** Use one scene/camera/clock. Splats have appearance baked from capture and may not respond to dynamic light as PBR meshes do. Calibrate scale, orientation, occlusion, shadows and coordinates.

**Acceptance.** Verify visual scale and occlusion at 3 camera angles and fallback labels in keyboard-only mode.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 5. Splat Mobile Quality and RAM

**Requirement.** Adapt DPR, render size, splat count and orbit performance using real device measurements, not GPU estimates alone.

**Implementation.** Bound file sizes, detect device constraints where supported, provide a fallback static image and speed controls. Never equate transfer bytes with decoded GPU memory.

**Acceptance.** Record p50/p95 frame time, memory trend and cold decode for representative Android hardware.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 6. Splat Camera and Hotspots

**Requirement.** Maintain a stable camera rig and clickable hotspot positions in mixed capture/3D worlds.

**Implementation.** Map scene coordinates and occlusion separately. Expose semantic DOM controls and plain text descriptions. Avoid pointer conflicts with orbit controls and clickable overlay elements.

**Acceptance.** Tab through every hotspot, orbit camera, resize window and verify correct position.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 7. Splat Asset Ownership and Cleanup

**Requirement.** Define who owns renderer, loader cache, worker, buffer, object and material and release only owned assets.

**Implementation.** Removing scene node is not necessarily disposing shared splat buffers. Keep ref counts for reused captures. Clean event listeners and abort stale loads without destroying other consumers.

**Acceptance.** Repeat 30 mount/switch/unmount cycles and compare steady-state allocation trends.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 8. Splat Privacy and Licensing

**Requirement.** Check room scans, faces, location metadata, capture rights and delivery of private interiors.

**Implementation.** Do not bundle third-party scans unless the rights explicitly permit redistribution. Document origin and avoid unapproved telemetry of raw capture content.

**Acceptance.** Manifest includes permission/provenance fields; restricted capture is excluded from release.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 9. Splat Visual Verification

**Requirement.** Use screenshots at timed camera poses to compare halos, readability, ordering and load-failure fallback.

**Implementation.** Use fixed camera and time, capture reference/test pairs and device details. No claim of cross-driver pixel equality; require visual tolerance and human review.

**Acceptance.** Run multiple angles on desktop and mobile, plus no-WebGL fallback; label any unexecuted test.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

## Evidence and deployment gates
- SOURCE REVIEWED: package revision, current method signatures, license and controlled imports.
- UNIT PASS: deterministic state/timeline validations plus negative-path tests.
- BUILD PASS: `npm run build` with resolved/pinned versions in destination.
- BROWSER PASS: GPU screenshot on supported Chromium/Firefox/WebKit and a documented fallback.
- DEVICE PASS: responsive mobile GPU, touch, accessibility, p95 frame time and teardown measurements.
- PRODUCTION PASS: only when app-specific acceptance tests and asset rights are verified.

Never silently upgrade a status. No MCP. No CDN. No destructive edits to pre-existing skills.

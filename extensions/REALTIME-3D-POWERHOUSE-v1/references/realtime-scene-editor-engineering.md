# Real-Time 3D Scene Editor — Detailed engineering specification

## Outcome and ownership
Edit spatial scene graphs interactively with selection, transforms, scene JSON, GLB import/export, undo/redo and stable renderer ownership, optionally leveraging Threepipe.

**Primary executable module:** `src/adapters/three-editor.mjs`. **Source:** https://github.com/repalash/threepipe.
The current code provides a transparent end-to-end starter, not evidence that every upstream library is fully integrated or tested on every graphics backend.

## Accurate upstream API sketch
```js
const viewer=new ThreeViewer({canvas}); viewer.addPluginSync(new TransformControlsPlugin()); await viewer.load("/assets/model.glb"); const output=await viewer.exportScene(); viewer.dispose();
```

## Work packages and gates

### 1. Serializable Scene Document

**Requirement.** Define versioned schema for transforms, object identity, hierarchy, materials and asset references.

**Implementation.** Use src/core/scene-state.mjs for safe JSON validation and undo/redo. Separate model-provided metadata from editable local properties. Avoid `eval` on imported documents.

**Acceptance.** JSON round-trip keeps IDs, transforms and colors and rejects cycles/invalid data.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 2. Raycast Selection and Hierarchy

**Requirement.** Select objects with Raycaster and stable IDs even if the click intersects a nested mesh.

**Implementation.** Separate helper/overlay layers from user objects. Map GLB child hits to selected root, handle hidden/locked objects, use semantic object list.

**Acceptance.** Pick nested mesh, gizmo and background correctly; keyboard alternative supported.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 3. Transform Gizmos and Snapping

**Requirement.** Translate/rotate/scale via TransformControls, snapping and coordinate system modes.

**Implementation.** Disable OrbitControls while dragging. Provide undo transactions, world/local switch, precise numeric fields, pivot controls and reset. Bound extremely large/zero scales.

**Acceptance.** Translate with mouse, numeric inspector, snap to grid and undo/redo; gestures must not fight orbit.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 4. PBR Material Editor

**Requirement.** Edit base color, metallic, roughness, maps and material identity without changing shared assets unexpectedly.

**Implementation.** Clone shared materials when editing single instance. Preserve map color spaces; serialize editable overrides separately from imported GLB payloads.

**Acceptance.** Material edit affects intended instance only and remains after save/import.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 5. Camera and Lighting Tools

**Requirement.** Edit camera target/FOV, light intensity/color and HDRI environment with safe defaults.

**Implementation.** Use lens ranges and near/far fitting. Track baked vs dynamic lighting. Keep UI overlay accessible and lighting changes undoable.

**Acceptance.** Save and restore multiple camera bookmarks and lights.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 6. GLB/GLTF Import and Export

**Requirement.** Load local user files, retain file provenance and export scene while preserving transforms.

**Implementation.** Threepipe offers viewer.load and viewer.exportScene with Blob. Native editor demo imports GLB for preview but its JSON currently serializes only native primitive objects; do not claim GLB persistence there.

**Acceptance.** Import a skinned/animated GLB, edit transform, export in Threepipe backend and reopen exported file.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 7. Undo, Redo and Command Journal

**Requirement.** Define atomic transactions and replayable event history, limited memory and safe corruption recovery.

**Implementation.** Included store supports undo/redo for JSON documents. Long-lived collaboration requires conflict strategy and stable persistence, not included by default.

**Acceptance.** Undo/redo repeated transforms and branching after undo restores correct state.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 8. Threepipe Viewer Integration

**Requirement.** Integrate transform gizmos, picking, materials and scene export with ThreeViewer lifecycle.

**Implementation.** Use a dedicated Threepipe canvas and one viewer, do not create a second Three renderer on same canvas. Call viewer.dispose once and leave caches controlled by Threepipe.

**Acceptance.** Create viewer, load model, edit transform, export, dispose; verify no GPU leaks.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 9. Scene Persistence and Collaboration

**Requirement.** Store scene versions, migrations, checksums and optional change approval.

**Implementation.** Default mode is local JSON only with explicit user download. Collaborative sync requires server/CRDT system and separate permissions, not silently provided.

**Acceptance.** Validate file on import and restore full layout after reload.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 10. Professional Editing UX

**Requirement.** Offer transform modes, object tree, inspector, shortcuts, precise controls, camera bookmarks and selection status.

**Implementation.** Support keyboard users, touch picking, zoom, asset errors, fast resizes and responsive inspector widths. Do not auto-enable pointer lock.

**Acceptance.** Complete transform/export journey on mobile and desktop; keyboard alternative for essential commands.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 11. Scene Visual and GPU Verification

**Requirement.** Capture fixed camera views, texture failures, context loss, render FPS and memory trends.

**Implementation.** Headless browser checks cannot substitute for phone GPU profiling. Compare before/after screenshots and source asset integrity.

**Acceptance.** Open/save/reopen GLB, check visual parity and performance budget across device tiers.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

## Evidence and deployment gates
- SOURCE REVIEWED: package revision, current method signatures, license and controlled imports.
- UNIT PASS: deterministic state/timeline validations plus negative-path tests.
- BUILD PASS: `npm run build` with resolved/pinned versions in destination.
- BROWSER PASS: GPU screenshot on supported Chromium/Firefox/WebKit and a documented fallback.
- DEVICE PASS: responsive mobile GPU, touch, accessibility, p95 frame time and teardown measurements.
- PRODUCTION PASS: only when app-specific acceptance tests and asset rights are verified.

Never silently upgrade a status. No MCP. No CDN. No destructive edits to pre-existing skills.

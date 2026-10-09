# Cinematic Post-Processing Studio — Detailed engineering specification

## Outcome and ownership
Build a composable Three.js WebGL post-processing pipeline with controlled color space, quality presets, measurable budgets and safe resize/dispose.

**Primary executable module:** `src/adapters/postprocessing.mjs`. **Source:** https://github.com/pmndrs/postprocessing.
The current code provides a transparent end-to-end starter, not evidence that every upstream library is fully integrated or tested on every graphics backend.

## Accurate upstream API sketch
```js
const composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene,camera)); composer.addPass(new EffectPass(camera,new BloomEffect())); composer.render(deltaTime);
```

## Work packages and gates

### 1. EffectComposer Lifecycle

**Requirement.** Own exactly one composer per renderer; initialize passes in correct order and dispose reliably.

**Implementation.** Choose this path for WebGLRenderer; Threepipe and WebGPU have their own render managers. Never call renderer.render and composer.render for the same frame output. Release passes and targets on detach.

**Acceptance.** Switch effects 30x and confirm no rising render-target count or double render loop.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 2. Linear Light and Color Grading

**Requirement.** Audit SRGBColorSpace, tone mapping, intermediate precision, lighting exposure and HDR color.

**Implementation.** Prevent double gamma encoding and duplicate tone mapping. Compare reference charts before and after a grading pass; test banding.

**Acceptance.** Gray ramp and skin tones should remain stable and no extra conversion should occur.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 3. Bloom and Highlight Control

**Requirement.** Tune luminance thresholds, softness, intensity and HDR falloff rather than over-blooming everything.

**Implementation.** Use strict intensity budgets, frame/pixel measurement and separate mobile preset. Preserve text legibility and CTA contrast.

**Acceptance.** Capture highlight charts on desktop/mobile and demonstrate reduced overdraw.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 4. Depth of Field, Lens and Grain

**Requirement.** Layer focus, vignette, chromatic aberration, film grain and procedural dirt thoughtfully.

**Implementation.** Use physically motivated lens settings. Do not blur critical content, and disable expensive/full-screen effects on low devices. Some effects need depth buffers.

**Acceptance.** Screenshot foreground/background focus, edge artifacts and reduced-motion modes.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 5. Cinematic Presets and Reproducibility

**Requirement.** Store film look presets as versioned plain data and expose runtime controls.

**Implementation.** Included presets: natural, film, neon, mobile. Record white balance/exposure/contrast/color management settings as project-owned config.

**Acceptance.** Preset application is deterministic, validates all numbers and handles unknown names.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 6. Resolution and Frame Budgets

**Requirement.** Control DPR, multi-sampling, pass count, half-res blur and performance tiers.

**Implementation.** Track frame p50/p95, draw calls and memory before/after; do not infer FPS only from CSS or desktop emulation.

**Acceptance.** Reduce GPU cost on 360px high-DPR viewport without changing critical composition.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 7. Depth-Dependent Effects

**Requirement.** Control DOF and AO with correct depth texture and MSAA/render pass interoperability.

**Implementation.** Avoid feedback from screen-space AO artifacts near edges; verify transparent objects and background handling.

**Acceptance.** Render depth chart and measure halo and temporal instability.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 8. Effect Fallback and Context Loss

**Requirement.** Recover when WebGL context is lost or effects fail compilation.

**Implementation.** Fail to direct renderer output or safe static imagery. Log specific unsupported pass; preserve existing UI and screen-reader content.

**Acceptance.** Simulate context loss and failed shader compile; website remains navigable.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 9. Cinematic Visual Regression

**Requirement.** Use fixed frame/time/camera references, controlled browser/DPR and tolerant comparisons.

**Implementation.** Record before/after screenshot, pass ordering, color settings, device metrics, render timings and artifact review.

**Acceptance.** Verify no exposure jump, bloom text loss or frame budget regression.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

## Evidence and deployment gates
- SOURCE REVIEWED: package revision, current method signatures, license and controlled imports.
- UNIT PASS: deterministic state/timeline validations plus negative-path tests.
- BUILD PASS: `npm run build` with resolved/pinned versions in destination.
- BROWSER PASS: GPU screenshot on supported Chromium/Firefox/WebKit and a documented fallback.
- DEVICE PASS: responsive mobile GPU, touch, accessibility, p95 frame time and teardown measurements.
- PRODUCTION PASS: only when app-specific acceptance tests and asset rights are verified.

Never silently upgrade a status. No MCP. No CDN. No destructive edits to pre-existing skills.

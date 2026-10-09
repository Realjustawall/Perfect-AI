# Video × 3D Fusion Engine — Detailed engineering specification

## Outcome and ownership
Use deterministic decoded media samples as Three.js video textures sharing one timeline with camera, lighting and 3D objects while correctly cleaning decoded resources.

**Primary executable module:** `src/adapters/video-texture.mjs`. **Source:** https://github.com/Vanilagy/mediabunny.
The current code provides a transparent end-to-end starter, not evidence that every upstream library is fully integrated or tested on every graphics backend.

## Accurate upstream API sketch
```js
const input=new Input({source:new BlobSource(file),formats:ALL_FORMATS}); const track=await input.getPrimaryVideoTrack(); const sink=new VideoSampleSink(track); const sample=await sink.getSample(tSeconds); sample.draw(ctx,0,0,w,h); sample.close();
```

## Work packages and gates

### 1. Media File Ingestion

**Requirement.** Read MP4/WebM files locally, validate formats, size, video tracks and coded resolution.

**Implementation.** Use Mediabunny input with BlobSource and ALL_FORMATS, detect browser codec support and reject DRM. Do not upload private media.

**Acceptance.** Unsupported file rejected with visible explanation; valid video track loaded locally.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 2. Timestamped Video Frames

**Requirement.** Use VideoSampleSink.getSample(seconds) and close every video sample after rendering.

**Implementation.** Mediabunny seeks in seconds, returns frame at/before requested timestamp, and may be asynchronous. Guard out-of-order seeks; enforce last-request-wins and bounded queue.

**Acceptance.** Rapid seek to 0, 10, 2, 18 seconds must show the last requested frame without leaking decoded frames.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 3. CanvasTexture Fusion

**Requirement.** Transfer decoded samples to Canvas2D then Three.CanvasTexture with explicit color space.

**Implementation.** Match content aspect ratio and sample rotation/flip; avoid GPU readbacks. Set texture.needsUpdate when new frame drawn; release it at unmount.

**Acceptance.** Render video plane next to an animated GLB and inspect timestamp overlay alignment.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 4. Synchronized Camera and Effects

**Requirement.** One clock owns camera transform, video seek and post-processing parameters.

**Implementation.** CreateTimeline provides seek, pause, reverse, progress and clamp/loop. For actual A/V use audio playback time as the master clock and sample video at audio currentTime.

**Acceptance.** Capture pause/reverse/seek positions and ensure video and camera remain aligned.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 5. A/V Synchronization and Drift

**Requirement.** Handle audio latency, playback speed, drift and dropped frames deliberately.

**Implementation.** Prefer HTMLMediaElement audio clock for common playback; use precise decoded frame seek for editing, with tolerance, queue backpressure, decode batching and frame dropping policy.

**Acceptance.** Measure drift for 30 seconds on target device; report tolerance in milliseconds.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 6. Non-Linear Editing and Export

**Requirement.** Represent clip trim, split, camera keyframes, overlays and exports as serializable data.

**Implementation.** Use deterministic project JSON and Mediabunny encoder workflows with explicit formats; do not claim export until a muxed playable file is verified.

**Acceptance.** Export 5-second clip with audio and open in two independent players; preserve frame order.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 7. Video Masking and Spatial Occlusion

**Requirement.** Support green-screen/chroma, alpha masks, depth compositing and plane geometry.

**Implementation.** Use custom ShaderMaterial/TSL where supported. Flat video has no depth by default; depth data or manually-authored masks are required for real occlusion.

**Acceptance.** Verify overlay intersections and edge transparency at 3 camera angles.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 8. Codec and Browser Capability Matrix

**Requirement.** Report H.264/HEVC/VP9/AV1 and container support based on browser runtime.

**Implementation.** WebCodecs availability varies by browser/OS; check canRead and selected track decodability, not just filename.

**Acceptance.** Run Chrome/Firefox/WebKit smoke tests with small licensed clips and record unsupported results.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 9. Subtitles, Controls and Semantics

**Requirement.** Provide keyboard play/pause/seek, captions/description tracks and reduced-motion alternatives.

**Implementation.** Media-text/3D composition must not hide captions behind GPU canvas. Put semantic HTML controls and transcripts above canvas.

**Acceptance.** Keyboard and screen-reader test caption toggle, scrubber and reduced-motion fallback.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

### 10. Video Decoder and Texture Budget

**Requirement.** Limit decode queue, texture resolution, retained frames, data URLs and long video length.

**Implementation.** Always close VideoSample, dispose textures, revoke URLs and prevent stale async requests. Keep GPU and CPU memory tracking separate.

**Acceptance.** Run 100 seeks and 30 reimports without progressive memory growth.

**Failure handling.** Log a causal error message, preserve the previously working experience, disable the optional feature if the rendering backend fails, dispose only owned GPU resources, and record retry/fallback status.

## Evidence and deployment gates
- SOURCE REVIEWED: package revision, current method signatures, license and controlled imports.
- UNIT PASS: deterministic state/timeline validations plus negative-path tests.
- BUILD PASS: `npm run build` with resolved/pinned versions in destination.
- BROWSER PASS: GPU screenshot on supported Chromium/Firefox/WebKit and a documented fallback.
- DEVICE PASS: responsive mobile GPU, touch, accessibility, p95 frame time and teardown measurements.
- PRODUCTION PASS: only when app-specific acceptance tests and asset rights are verified.

Never silently upgrade a status. No MCP. No CDN. No destructive edits to pre-existing skills.

# Mediabunny + Three.js video texture

The adapter in `../../src/adapters/mediabunny.mjs` reads a **local Blob** using `Input`, `BlobSource`, `ALL_FORMATS`, and `VideoSampleSink`. Seek by seconds and always call `sample.close()` after use. The integration in `../../src/adapters/video-texture.mjs` draws frames to Canvas2D and uploads them to a `THREE.CanvasTexture`, with a single timeline driving camera and media.

Real audio-video sync requires treating the audio clock as authoritative; this visual starter uses a local clock only. Encoders/decoders and pixel formats vary by browser. DRM-protected media is not supported. Test iOS Safari and mobile device playback. Do not retain private file data in telemetry or upload it to external services.

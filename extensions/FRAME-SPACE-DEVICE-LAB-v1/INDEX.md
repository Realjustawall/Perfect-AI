# Skill routing

| Intent | Load first | Extra skill |
|---|---|---|
| timed animation regression | `ztx9-animation-frame-inspector` | `ztx9-motion-determinism`, `ztx9-frame-differencing` |
| scroll-linked issues | `ztx9-scroll-timeline-compatibility` | `ztx9-scroll-native-fallback`, `ztx9-nested-scroll-reverse` |
| GLB is large/slow | `ztx9-gltf-asset-optimization` | `ztx9-geometry-codec-selection`, `ztx9-texture-budget-ktx2` |
| model overlaps heading | `ztx9-3d-text-aware-composer` | `ztx9-projection-math`, `ztx9-responsive-safe-regions` |
| screenshots differ | `ztx9-visual-regression-root-cause` | `ztx9-dom-style-trace`, `ztx9-pixel-region-attribution` |
| mobile animation jank | `ztx9-real-device-motion-profiler` | `ztx9-adb-remote-debug`, `ztx9-adaptive-quality-thresholds` |

**Invariant:** Keep every previous Skill and file; do not silently overwrite; no MCP; runtime claims require recorded tests. All new resources in this extension only.

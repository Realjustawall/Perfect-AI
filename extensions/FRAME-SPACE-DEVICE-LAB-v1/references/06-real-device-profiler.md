# Real Device Motion Profiler — Android + Chrome + Windows

## Requirements and consent
Physical Android device, USB cable, approved USB debugging, Android Chrome remote debugging; `adb` installed locally; never connect to someone else's phone without authorization. Record OS/Chrome version/model class (privacy-conscious), display refresh rate and battery/thermal state with permission. A Windows PC + device is ideal. This cannot be fully verified inside generic headless CI.

## Protocol
1. `adb devices -l`: approve trust dialog; record serial but redact when publishing.
2. In Chrome Android, open the page on phone; enable remote debugging.
3. `adb forward tcp:9222 localabstract:chrome_devtools_remote` (may differ per Chrome build).
4. Run `node tools/real-device-profiler.mjs --url https://test.example --duration 8 --out reports/android.json` using CDP over localhost; it attempts to attach to the remote Chrome tab, otherwise report error. Playwright connectOverCDP support varies; avoid claiming compatibility if not tested.
5. Capture requestAnimationFrame deltas and optionally Long Animation Frames (`PerformanceObserver` when supported). Save p50/p95/p99, 30fps/60fps/90fps deadline misses based on actual targetHz. Include `visibilityState`, `devicePixelRatio` and viewport. rAF sampling from JS reflects scheduling, NOT hardware FPS or GPU frame presentation; validate with Chrome Performance trace/GPU tools.
6. Replay scripted interactions in repeatable scenarios: hero scroll, 3D rotation, pointer/drag, language switch. Warm-up and perform 3 runs, report median and worst p95. Compare on charger/off charger and thermal throttling when feasible.

## Honest claims
Chrome emulation / CPU throttle is a proxy, not a real Android GPU. A high refresh-rate 120Hz phone cannot be scored using a fixed 16.67ms deadline. No remote Android attached? Output `not_measured` and follow-up instructions; NEVER fabricate FPS. Collect and redact device IDs, URLs containing tokens, contents of user pages.

## Suggested profile policy
- smooth: p95 interval <= (1000/targetHz)*1.35 ms AND no interaction failures
- borderline: <= 2x frame budget
- degraded: >2x frame budget (reduce DPR, particles, lights, postprocessing, shadow size)
These are configurable heuristics for rAF sample deltas, not certified actual GPU FPS metrics.

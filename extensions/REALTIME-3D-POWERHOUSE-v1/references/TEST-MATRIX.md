# Test plan: unit / build / browser / GPU / release

**Unit (immediate):** run `node --test tests/*.test.mjs` from extension root and `python -m unittest discover -s tests -p 'test_*.py'`. These validate pure core algorithms and splat structural inspector.

**Build (requires package install):** `cd examples/web-studio && npm install && npm run build`. If install is blocked, report BUILD NOT TESTED.

**Browser (requires installed Chromium/Firefox/WebKit):** open `http://127.0.0.1:5173`, visit all five tabs, observe controls and test asset failure states. Capture 360/390/768/1440 widths, RTL and reduced motion. A `*.splat` and video file must be provided for media cases. Record external library versions and browser console warnings.

**GPU & real device:** capture p50/p95 frame times and GPU resource counts across 30 route transitions, viewport resizing, 100 video seeks and 30 editor open/close operations. A headless software rasterizer is not representative of mobile GPU.

**Release:** confirm licensing/provenance of captures and videos, screen-reader accessible fallback, working disconnected/no-WebGL mode, and no `eval` in imported JSON paths.

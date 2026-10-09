# Lighthouse CI for production budgets

## Local-first setup
Use production build served on localhost. Install `@lhci/cli` in devDependencies and run `npx lhci autorun --config=...` after the server is up. Use >=3 runs and inspect distribution. Keep upload target `filesystem` to avoid exposing reports; avoid temporary public storage for private URLs. Baseline thresholds initially warn if app is immature, then tighten. Suggested starter category scores: performance >= 0.85 as warning, accessibility >=0.90 as warning, best-practices >=0.90; choose strict failures only after baseline stabilizes.

## Performance facts
Field INP is NOT directly measured by Lighthouse lab; use real-user instrumentation. Lighthouse TBT is a lab proxy. Monitor LCP, CLS and TBT and verify heavy 3D assets don't block hero content. Perform comparisons with fixed throttling/device/browser and after warm-up; score noise does not prove actual regression. Local desktop Lighthouse is not a true Android GPU profiling substitute.

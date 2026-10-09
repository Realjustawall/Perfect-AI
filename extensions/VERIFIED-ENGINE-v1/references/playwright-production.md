# Playwright Trace & interactive failure triage

## Trace policy
Use `trace: 'retain-on-failure'`, `screenshot: 'only-on-failure'`, `video: 'retain-on-failure'`. Set `retries` separately. Preserve traces under a unique output directory per run. To debug, `npx playwright show-trace path/to/trace.zip`; inspect actions, snapshots, console, requests and timeline. Avoid blanket `trace:'on'` in normal CI because artifacts and runtime cost rise.

## Motion and scroll
For every cinematic section, test 0%, 25%, 50%, 75%, 100% progress, reverse back to 0%, user interaction and reduced motion. Wait on explicit app readiness (e.g., `[data-ready=true]`) rather than arbitrary timer. Capture fixed random seeds and targeted pixel ratios; GPU snapshots are tolerant/driver-scoped. Detect horizontal overflow and focus loss after navigation. Report source file clues but never assert pixel diff alone proves exact line cause.

## Root cause workflow
1. Reproduce and retain trace. 2. Classify console/network/layout/animation/loading error. 3. Match failing page element to DOM/computed style and repository source map. 4. Make minimum safe patch on approved branch. 5. Rerun exact failing test + broad regression. 6. Report evidence and residual uncertainty.

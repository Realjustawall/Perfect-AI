# Cross-Browser CI Engine — Technical production playbook

## Purpose
Run reproducible Playwright tests across Chromium Firefox WebKit with RTL LTR reduced-motion and responsive projects.

## Architecture, invariants and algorithm
**Matrix**: Chrome/Chromium, Firefox, WebKit desktop; RTL Persian mobile; Reduced Motion desktop/mobile; optional 200%/400% zoom; local fonts and browser language. Use Playwright Projects to reuse a single suite. Keep screenshot golden images platform-specific, control animation clock where possible, and collect Trace on failure. Avoid `waitForTimeout` as a substitute for readiness except bounded settle after discrete physical scroll testing. Emulation does not measure physical phone GPU. CI should run on PRs and main, guard trusted secrets, and expose reports as artifacts without public PII.

## Required end-to-end procedure
1. Copy the versioned template into the destination project after explicit confirmation.
2. Install `@playwright/test` and matching browsers.
3. Run browser projects and mobile emulation in parallel with traces on failure.
4. Test zoom, keyboard and scroll in addition to viewport width; note emulation is not a physical device.
5. Configure CI to upload artifacts and fail on reproducible regressions.

## Negative tests and fallback states
- Missing dependency or unsupported browser: report `unverified`, preserve the approved page and offer a nonblank fallback.
- Invalid input and incomplete brand brief: report exact failing constraint rather than silently choosing unrelated colors/layout.
- Reduced motion, keyboard-only, Persian RTL and English LTR: test individually with screenshots and DOM assertions.
- Rendering errors and low GPU budget: degrade aesthetics before removing essential content.
- Repeated same input: deterministic output; document acceptable GPU raster differences.

## Acceptance gates
- Chromium Firefox WebKit each run real tests.
- RTL LTR reduced-motion covered.
- Trace and screenshot artifacts retained on failure.
- CI reports missing browser installation as unverified, not passed.

## Operational evidence
Log environment, installed package versions, exact commands, JSON report, paths to generated screenshots/traces, failures, and unresolved items. Keep artifacts and code changes separate. **Do not** call a template success a browser-tested application.

## Official sources
- https://playwright.dev/docs/test-projects
- https://playwright.dev/docs/ci

# Visual Benchmark Laboratory — Technical production playbook

## Purpose
Render multiple real design variants and compare reproducible screenshots, brand criteria, accessibility and measured web performance.

## Architecture, invariants and algorithm
**Comparability**: all variants must use exactly identical user task, copy, viewport, font state, fixture data and capture policy. Fix random seeds; wait for layout and ready signals. The runner takes real screenshots. It can objectively measure overflow, missing content, console errors and Core Web Vitals with a different harness; it cannot magically quantify originality or art direction. Obtain structured human or independent vision reviewer scores with rationale and evidence; prevent those reviewers from seeing each other's initial score. Separate hard gates from weighted preferences. Only choose a winner if essential UX gates pass. Test screenshot stability and equality of fixture content.

## Required end-to-end procedure
1. Define 3+ variants with stable seed, same copy, content and viewport.
2. Run `npm run benchmark` inside `examples/visual-benchmark` after npm install.
3. Capture desktop/mobile screenshots, store DOM metadata, timings and console errors.
4. Use objective gates for overflow/accessibility/contrast; have independent human or visual reviewer judge artistic originality; do not claim automated aesthetics measure taste.
5. Save decision matrix with provenance, weighting and screenshots.

## Negative tests and fallback states
- Missing dependency or unsupported browser: report `unverified`, preserve the approved page and offer a nonblank fallback.
- Invalid input and incomplete brand brief: report exact failing constraint rather than silently choosing unrelated colors/layout.
- Reduced motion, keyboard-only, Persian RTL and English LTR: test individually with screenshots and DOM assertions.
- Rendering errors and low GPU budget: degrade aesthetics before removing essential content.
- Repeated same input: deterministic output; document acceptable GPU raster differences.

## Acceptance gates
- Every candidate has the same viewport and input.
- Broken UX fails regardless of perceived aesthetics.
- Report separates measured and subjective ratings.
- The first run does not overwrite approved screenshots.

## Operational evidence
Log environment, installed package versions, exact commands, JSON report, paths to generated screenshots/traces, failures, and unresolved items. Keep artifacts and code changes separate. **Do not** call a template success a browser-tested application.

## Official sources
- https://playwright.dev/docs/test-projects
- https://playwright.dev/docs/test-snapshots

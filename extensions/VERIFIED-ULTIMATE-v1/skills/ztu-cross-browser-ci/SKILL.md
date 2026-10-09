---
name: ztu-cross-browser-ci
description: "Run reproducible Playwright tests across Chromium Firefox WebKit with RTL LTR reduced-motion and responsive projects."
---
# Cross-Browser CI Engine — Perfect_AI VERIFIED ULTIMATE

## Mission / ماموریت
Run reproducible Playwright tests across Chromium Firefox WebKit with RTL LTR reduced-motion and responsive projects.

## When to invoke
All production-bound sites, particularly bilingual and immersive sites.

## Exact workflow
1. Copy the versioned template into the destination project after explicit confirmation.
2. Install `@playwright/test` and matching browsers.
3. Run browser projects and mobile emulation in parallel with traces on failure.
4. Test zoom, keyboard and scroll in addition to viewport width; note emulation is not a physical device.
5. Configure CI to upload artifacts and fail on reproducible regressions.

## Acceptance criteria
- Chromium Firefox WebKit each run real tests.
- RTL LTR reduced-motion covered.
- Trace and screenshot artifacts retained on failure.
- CI reports missing browser installation as unverified, not passed.

## Evidence contract
Write a machine-readable report with `status` = `pass|fail|unverified`, measured values, runtime/browser/device, changed files, exact command, artifacts and rationale. **Never** claim hardware/browser success from unit tests alone. Preserve original project files unless user explicitly authorizes edits. Avoid MCP; use local CLI and files.

## Compatibility and precautions
Read the installed dependency versions and project conventions first; prefer official APIs. Respect reduced motion, keyboard navigation, privacy, Persian RTL and low-power devices. Do not let two animation engines own the same DOM property. Test fallback modes and undo changes when the same acceptance check regresses.

## Working files
- `../../references/cross-browser-ci-implementation.md`
- `../../examples/cross-browser-ci/README.md`

## Official references
- https://playwright.dev/docs/test-projects
- https://playwright.dev/docs/ci

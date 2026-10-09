# Visual QA & Self-Correction — production engineering reference

Run production build, unit tests and visual browser matrices. Gate screenshot comparisons on fonts loaded and animations settled. Test RTL/LTR, 320px/400% zoom, safe areas, reduced motion, 3D fallback and realistic flow. Iterate from measured issues with minimal diffs and maintain a change log. Clearly separate executed tests from recommended tests.

## Architecture

Input contract → deterministic evidence collection → decision/implementation plan → reference implementation → device and accessibility fallback → test gates → signed-off report.

## Detailed implementation index

### 1. playwright-matrix

**Mechanism:** Exercise widths, heights, pointer devices, locale and reduced motion.

**Failure pressure:** No single 1440 screenshot as proof of responsive.

**Execution:** Build deterministic test fixtures with reduced animation, local fonts and stable mock data; run browser matrix.

**Acceptance:** Collect screenshots, errors and keyboard flow logs; rerun after each targeted fix.

### 2. screenshot-regression

**Mechanism:** Use Playwright toHaveScreenshot with meaningful tolerances and stable state.

**Failure pressure:** Avoid testing random particle frames.

**Execution:** Build deterministic test fixtures with reduced animation, local fonts and stable mock data; run browser matrix.

**Acceptance:** Collect screenshots, errors and keyboard flow logs; rerun after each targeted fix.

### 3. overflow-detector

**Mechanism:** Compare scrollWidth/clientWidth and report offending element rectangles.

**Failure pressure:** Allow internal overflowing tables intentionally.

**Execution:** Build deterministic test fixtures with reduced animation, local fonts and stable mock data; run browser matrix.

**Acceptance:** Collect screenshots, errors and keyboard flow logs; rerun after each targeted fix.

### 4. keyboard-e2e

**Mechanism:** Test Tab/ShiftTab/Escape/Enter/Space, focus traps and return focus.

**Failure pressure:** No hover-only critical action.

**Execution:** Build deterministic test fixtures with reduced animation, local fonts and stable mock data; run browser matrix.

**Acceptance:** Collect screenshots, errors and keyboard flow logs; rerun after each targeted fix.

### 5. axe-a11y

**Mechanism:** Run automated accessibility scan and manually verify key task with keyboard.

**Failure pressure:** Axe passing does not guarantee accessible UX.

**Execution:** Build deterministic test fixtures with reduced animation, local fonts and stable mock data; run browser matrix.

**Acceptance:** Collect screenshots, errors and keyboard flow logs; rerun after each targeted fix.

### 6. scroll-progress-reversal

**Mechanism:** Scrub forward/back to anchors and compare deterministic transforms.

**Failure pressure:** No motion sticky state when scrolling up.

**Execution:** Build deterministic test fixtures with reduced animation, local fonts and stable mock data; run browser matrix.

**Acceptance:** Collect screenshots, errors and keyboard flow logs; rerun after each targeted fix.

### 7. webgl-fallback-test

**Mechanism:** Emulate disabled WebGL and ensure informative static scene.

**Failure pressure:** No blank hero without graphics API.

**Execution:** Build deterministic test fixtures with reduced animation, local fonts and stable mock data; run browser matrix.

**Acceptance:** Collect screenshots, errors and keyboard flow logs; rerun after each targeted fix.

### 8. network-failure-states

**Mechanism:** Block requests and assert retry/cache/empty UI.

**Failure pressure:** No endless loading skeleton.

**Execution:** Build deterministic test fixtures with reduced animation, local fonts and stable mock data; run browser matrix.

**Acceptance:** Collect screenshots, errors and keyboard flow logs; rerun after each targeted fix.

### 9. form-journey

**Mechanism:** Test required/optional, localized validation, server errors and recovery.

**Failure pressure:** No fake success toast.

**Execution:** Build deterministic test fixtures with reduced animation, local fonts and stable mock data; run browser matrix.

**Acceptance:** Collect screenshots, errors and keyboard flow logs; rerun after each targeted fix.

### 10. visual-fix-loop

**Mechanism:** Prioritize layout/functional deviations, patch, retest and screenshot diff.

**Failure pressure:** Do not change large unrelated code during fix.

**Execution:** Build deterministic test fixtures with reduced animation, local fonts and stable mock data; run browser matrix.

**Acceptance:** Collect screenshots, errors and keyboard flow logs; rerun after each targeted fix.

## Gate checklist

- [ ] Inputs, constraints and assets have evidence.
- [ ] Implementation has a real code path, not a prompt-only promise.
- [ ] Minimal or static fallback preserves actual user task.
- [ ] Proper cleanup and reduced-motion when relevant.
- [ ] Persian RTL and English LTR components tested when language is supported.
- [ ] Version compatibility and license assumptions documented.
- [ ] Verified tests distinguished from suggestions.

## Codex handoff

Report actual files edited, references consulted, runtime version and selected skills. Preserve original user content; do not install MCP.

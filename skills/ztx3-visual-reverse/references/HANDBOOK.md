# Visual Reverse Engineering — production engineering reference

Obtain authorized observations of the reference: viewport-size screenshots, DOM computed styles if accessible, video/screen recordings of scroll states and performance traces. Build evidence matrix for layout geometry, text metrics, colors, effects and animation curves. Reimplement independently, respect rights, compare screen captures and mark unobserved behaviors as unknown.

## Architecture

Input contract → deterministic evidence collection → decision/implementation plan → reference implementation → device and accessibility fallback → test gates → signed-off report.

## Detailed implementation index

### 1. reference-capture-plan

**Mechanism:** Capture top/mid/bottom scroll frames at repeatable viewport sizes.

**Failure pressure:** Do not claim full behavior from single screenshot.

**Execution:** Create evidence table with screenshots/timecodes/measurements; reimplement independently; capture matched viewpoints.

**Acceptance:** Compare bounded image regions at identical viewport/scroll progress; log inferred vs observed.

### 2. layout-measure

**Mechanism:** Extract bounding rectangles, grid tracks, spacing and sticky constraints with developer tools.

**Failure pressure:** Account for device pixel ratio and zoom.

**Execution:** Create evidence table with screenshots/timecodes/measurements; reimplement independently; capture matched viewpoints.

**Acceptance:** Compare bounded image regions at identical viewport/scroll progress; log inferred vs observed.

### 3. font-metrics-analysis

**Mechanism:** Measure visible glyph, baseline, line box and fallback behavior.

**Failure pressure:** Do not assume visual font equals font file name.

**Execution:** Create evidence table with screenshots/timecodes/measurements; reimplement independently; capture matched viewpoints.

**Acceptance:** Compare bounded image regions at identical viewport/scroll progress; log inferred vs observed.

### 4. motion-frame-sampling

**Mechanism:** Sample scroll progress and timestamped frames to estimate easing, transform and timeline.

**Failure pressure:** Distinguish scroll-linked from time-linked motion.

**Execution:** Create evidence table with screenshots/timecodes/measurements; reimplement independently; capture matched viewpoints.

**Acceptance:** Compare bounded image regions at identical viewport/scroll progress; log inferred vs observed.

### 5. 3d-shape-inference

**Mechanism:** Use silhouette, shading, perspective and parallax to estimate scene geometry.

**Failure pressure:** Label inferred topology rather than original extraction.

**Execution:** Create evidence table with screenshots/timecodes/measurements; reimplement independently; capture matched viewpoints.

**Acceptance:** Compare bounded image regions at identical viewport/scroll progress; log inferred vs observed.

### 6. design-token-recovery

**Mechanism:** Record inferred type scale, neutral palette, elevation and radii tokens.

**Failure pressure:** Never reproduce licensed assets without permission.

**Execution:** Create evidence table with screenshots/timecodes/measurements; reimplement independently; capture matched viewpoints.

**Acceptance:** Compare bounded image regions at identical viewport/scroll progress; log inferred vs observed.

### 7. visual-diff-pipeline

**Mechanism:** Use stable fonts and controlled motion then compare snapshots with perceptual tolerance.

**Failure pressure:** Anti-aliasing differences should not dominate score.

**Execution:** Create evidence table with screenshots/timecodes/measurements; reimplement independently; capture matched viewpoints.

**Acceptance:** Compare bounded image regions at identical viewport/scroll progress; log inferred vs observed.

### 8. responsive-fidelity

**Mechanism:** Re-measure reference at 320/768/1440 and short heights.

**Failure pressure:** Do not scale desktop layout uniformly.

**Execution:** Create evidence table with screenshots/timecodes/measurements; reimplement independently; capture matched viewpoints.

**Acceptance:** Compare bounded image regions at identical viewport/scroll progress; log inferred vs observed.

### 9. accessibility-elevation

**Mechanism:** Keep semantic and keyboard behavior even if reference is inaccessible.

**Failure pressure:** Pixel fidelity is not a license to break accessibility.

**Execution:** Create evidence table with screenshots/timecodes/measurements; reimplement independently; capture matched viewpoints.

**Acceptance:** Compare bounded image regions at identical viewport/scroll progress; log inferred vs observed.

### 10. difference-prioritizer

**Mechanism:** Fix structural large-area mismatches before icon microdiffs.

**Failure pressure:** Do not optimize to screenshots at expense of flow.

**Execution:** Create evidence table with screenshots/timecodes/measurements; reimplement independently; capture matched viewpoints.

**Acceptance:** Compare bounded image regions at identical viewport/scroll progress; log inferred vs observed.

### 11. rights-provenance

**Mechanism:** Track reference sources, screenshot date, reused code licenses and original replacements.

**Failure pressure:** Never claim source-identical without proof.

**Execution:** Create evidence table with screenshots/timecodes/measurements; reimplement independently; capture matched viewpoints.

**Acceptance:** Compare bounded image regions at identical viewport/scroll progress; log inferred vs observed.

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

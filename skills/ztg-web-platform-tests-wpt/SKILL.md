---
name: ztg-web-platform-tests-wpt
description: Consult and safely integrate web-platform-tests/wpt for Cross-browser conformance tests. Preserve RTL, responsive accessibility, dependency and license controls.
---

# GitHub research guide: web-platform-tests/wpt

**Origin:** https://github.com/web-platform-tests/wpt  
**Expected value:** Cross-browser conformance tests.  
**Rights flag:** BSD-3-Clause; check current. Do not treat this as license verification for a particular file or release.

## How to use this upstream project without MCP

1. Inspect the actual task and determine whether `wpt` supplies a feature not already present in the Perfect_AI pack. Do not import a whole GitHub repository merely to satisfy a trend.
2. Check the original repo's README, release history, LICENSE, install guide and installed dependency versions at the time of work.
3. Read the upstream implementation and extract only the necessary design principle or, with license compliance, the needed source component.
4. Prefer official registry or npm install commands over arbitrary `curl | bash` scripts. Preserve project lockfiles, make changes in a branch, review generated diffs and dependencies.
5. Adapt design to real UI contexts: 320px container, desktop, RTL Persian, LTR English, reduced motion, input from touch and keyboard, true page content and honest metrics.
6. Ensure observable behavior is tested in an actual browser. Document what was implemented and which upstream source was only consulted.

## Integration brief

- Desired value: **Cross-browser conformance tests**.
- Fallback: semantic HTML with CSS; no JS-only critical UI.
- Style: honor user color and typography brief, specifically strict monochrome on Perfect_AI.
- Animation owners: never let two libraries animate the same `transform` independently.
- Accessibility: keyboard actions, readable text, visible focus, correct labels, and state-independent semantics.
- Cleanup: remove event handlers, dispose GPU assets, stop animations on unmount, handle React Strict Mode.

## Required acceptance

- [ ] Source inspected; exact upstream revision identified.
- [ ] License and any non-MIT restrictions considered.
- [ ] Only task-relevant portions integrated and attribution preserved as needed.
- [ ] Independent compile/build and browser QA completed.
- [ ] No MCP, no remote execution without human review.
- [ ] Report source and changed files, actual testing evidence and open risks.

**Classification:** locally authored integration guidance, **not** a vendored original GitHub skill or codebase.

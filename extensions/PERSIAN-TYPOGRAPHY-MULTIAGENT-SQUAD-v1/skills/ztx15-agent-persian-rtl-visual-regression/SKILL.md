---
name: ztx15-agent-persian-rtl-visual-regression
description: Build and run a Persian/RTL visual regression matrix covering layout direction, mixed-script islands, inputs, digits, responsive breakpoints and font rendering.
---

# Persian RTL Visual Regression

## Test matrix
- Routes/locales: Persian-only, English-only, mixed Persian/English and any locale switcher.
- Viewports: mobile portrait, mobile landscape, tablet and desktop; include the project's real breakpoints.
- Components: navigation, breadcrumbs, cards, dialogs, menus, forms, validation errors, tables, pagination, charts, code blocks, tooltips and motion-driven scenes.
- Direction cases: expected RTL flow, icons with directional semantics, start/end alignment, logical margins/paddings, arrow affordances and embedded LTR code/URLs.
- Text cases: Persian letters `پ چ ژ گ ک ی`, Arabic/Persian numerals according to product policy, punctuation, ellipses, long words, wrapping and truncation.

## Execution
1. Set stable viewport, locale, font assets, reduced-motion preference and deterministic animation state.
2. Wait for the real font to load and for the page to reach a stable visual state before capturing screenshots.
3. Compare against approved baselines. Do not rebaseline automatically to hide a regression; inspect large diffs.
4. Combine visual tests with keyboard and screen-reader semantic checks because screenshots do not prove accessibility.
5. When snapshots are unavailable, describe a manual checklist and mark automated visual testing as not run.

## Done
No accidental LTR ordering, clipped glyphs, collapsed controls, incorrect icon direction, overflow or inconsistent layout at the tested viewport/language combinations. Keep the results and known gaps in the release record.

# Responsive verification matrix and failure triage

## Mandatory automated matrix
Widths: 320, 360, 375, 390, 430, 600, 768, 820, 1024, 1280, 1440, 1920. Heights: 568, 667, 768, 900; portrait and landscape. RTL/LTR; reduced-motion both; color schemes; JS disabled for meaningful HTML fallback; DPR 1 and 2 where supported; desktop zoom 200%/400% checked manually where headless emulation differs.

## Assertions
- `document.documentElement.scrollWidth <= innerWidth + 1` unless there is a specifically documented intentional horizontal region; inspect offending elements instead of hiding overflow.
- Primary heading and CTA have visible bounding boxes entirely within viewport for initial layout; no fixed bars cover interactive controls.
- Keyboard: skip link, focus order, all menus/dialogs; Escape and focus return. `axe-core`/Playwright accessibility audit supplements—not replaces—manual screen reader checks.
- Resize from 320 → 1920 → 375 while a modal is open; preserve state and ensure no ResizeObserver loops.
- `prefers-reduced-motion`: disable orbit/scroll loops; text visible, body navigable.
- Persistent scroll progress: reverse reaches same scene state; seek deep link; no trapped scroll.
- Broken image, network offline, WebGL unavailable: functional fallback.

## Triage order
P0 function blocked/hidden, inaccessible keyboard; P1 overflow and text clipping, CLS; P2 layout misalignment, excess whitespace; P3 polish. Fix content constraints/DOM before paint effects. Report which combinations were actually run vs specified targets.

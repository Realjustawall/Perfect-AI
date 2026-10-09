# WCAG 2.2 operational web quality

Test keyboard, meaningful order, bypass blocks, headings/regions, alt text, dialogs, zoom/reflow, visible focused state, 24x24 WCAG 2.2 AA target criterion exceptions vs recommended >=44px ergonomic targets. Avoid misleading one-size-fits-all thresholds. Text contrast 4.5:1 regular, 3:1 large; nontext contrast 3:1 for UI boundaries/graphics where required. Color not sole info channel. Screen reader accessible names and descriptions.

Motion: respect reduced-motion, pause/stop for moving info, no flashing thresholds; no keyboard traps. Dynamic updates use live regions when necessary but don't spam. Focus must remain visible and not covered by sticky header; check content at 400% reflow equivalent. Evaluate common input methods and voice control labels.

Tools: axe-core + Playwright, accessibility tree, keyboard manual, VoiceOver/NVDA/TalkBack when available. Automated tools do not certify WCAG conformance. Sources: https://www.w3.org/TR/WCAG22/ .

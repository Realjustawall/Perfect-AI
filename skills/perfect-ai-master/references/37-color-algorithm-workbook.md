# Color algorithm workbook — real decisions, not random palette lists

Write an auditable **color brief** first: brand must/avoid, type (developer app, educational, financial, creative), UI density, emotional tone, background, number of chart series, target locales, standards. Generate at least 3 candidates only if design freedom exists. Rank candidates by legibility (hard gate), semantic distinctness (hard gate for states), restrained coherence, UI density compatibility, user preference, print/projection constraints.

Formula WCAG contrast ratio `(L_lighter+.05)/(L_darker+.05)`, where L is *linear-light* relative luminance in sRGB. For translucent text/surface, composite and compute actual displayed RGB before contrast. Check each token pair: body/bg, muted/bg, action/on-action, focus/adjacent, border/background, tooltip, input/error, chart line/chart background. Ensure disabled controls communicate disabled state textually and still have focus handling appropriate for semantics; exceptions can apply to inactive UI under WCAG but don't make it invisible.

Build tonal scales with OKLCH and gamut-map by reducing chroma preserving lightness/hue; ensure monotonic **actual perceived lightness** where feasible, and distances large enough for intended differentiation. Add CSS `color-scheme` and system variants, maintain brand continuity without breaking contrast.

If user says "black & white", user preference takes precedence. Use graphite/ivory neutral architecture with optional extremely subtle texture, not arbitrary purple/cyan. Chart categories in strict monochrome use stroke patterns, markers, dashes, labels, and ordering.

**Test output contract:** emit `tokens.css`, `palette.json`, `contrast-report.json`, `design-rationale.md`, and examples of buttons, cards, forms and charts using tokens, not hardcoded values. Existing `tools/color-engine.mjs` covers OKLCH and contrast; supplemental checks must be measured, not claimed automatic if only described.

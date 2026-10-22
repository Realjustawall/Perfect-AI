---
name: ztx15-agent-persian-font-loading-e2e
description: Test the full Persian font loading path from licensed asset and CSS declaration to browser font readiness, computed style, layout stability and fallback.
---

# Persian Font Loading End-to-End

## Implementation requirements
- Use the approved local/self-hosted asset or an official font provider. Pin the release where feasible and record its license/source.
- Apply a design token such as `--font-persian: "Vazirmatn", "Estedad", sans-serif` only when the declared font files are actually bundled/loaded.
- Scope `lang="fa"` and `dir="rtl"` correctly. Preserve LTR handling for code, URLs, email addresses, identifiers and appropriate numeric widgets.
- Use an intentional `font-display` policy; review fallback metrics and layout shift rather than blindly optimizing for early swap.

## E2E checks
1. Verify the font request succeeds and has the expected content type/asset version.
2. Use `document.fonts.ready` and `document.fonts.check('16px "Vazirmatn"')` as loading signals, while remembering that these do not prove every Persian glyph is present.
3. Inspect `getComputedStyle(element).fontFamily` for Persian headings, body, links, buttons, inputs, selects and textareas.
4. Combine with glyph-coverage tests and visual screenshots; inspect a clean browser state and a simulated failed font request.
5. Check desktop, narrow mobile, zoom, responsive font sizes, initial render/SSR hydration, and cumulative layout shift if instrumentation is available.

## Acceptance
Pass only if the expected asset is loaded, the intended family is applied to Persian UI, glyph checks pass, fallbacks are sensible, and no text is clipped or visibly broken. Report unavailable browser access as `not run`, not as success.

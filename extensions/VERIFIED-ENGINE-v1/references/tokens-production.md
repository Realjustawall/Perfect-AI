# Style Dictionary v5 + DTCG color/token pipeline

## Brand-source requirement
Read confirmed brand identity JSON. If unspecified, propose candidate palettes but mark them as proposals rather than approved. Source tokens follow Design Tokens Community Group `$type`, `$value`. Maintain primitives, semantic aliases and component-level tokens; never put literal HEX colors directly in components where semantic tokens exist.

## Build and CSS mapping
Use `new StyleDictionary(config); await sd.buildAllPlatforms()` for current ESM API; verify installed major version. Generate ordinary CSS custom properties for the app. For Tailwind v4 map CSS variables into `@theme` or consume variables directly. For Bootstrap 5.3 use `--bs-*` overrides/data-bs-theme. Use logical CSS for RTL and per-language font stacks. Keep light and dark semantic roles symmetric, and verify WCAG contrast on actual renders.

## Change detection
Compare generated tokens against the approved baseline: breaking deletions, altered aliases, invalid references, contrast regressions and reflows. Never claim tokens generated if no build command was run. Names and references should be stable; consuming apps should use a single token source of truth.

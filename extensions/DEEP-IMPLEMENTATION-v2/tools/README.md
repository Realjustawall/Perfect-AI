# Executable tools — no MCP, no network calls

Run from `extensions/DEEP-IMPLEMENTATION-v2`.

- `node tools/router.mjs examples/decision-brief.json 7`: choose relevant ztx4 SKILL.md candidates without loading all skills.
- `node tools/colors.mjs examples/color-brief.json candidate.css`: create **five** scored OKLCH palettes, CSS semantic tokens and WCAG checks. Scores are declared heuristics, not user studies.
- `node --test tests/core.test.mjs`: Node unit tests for router, color conversion and adaptive quality.
- `python tools/figma-local.py examples/figma-local-sample.json`: inspect local auto-layout.
- `python tools/image-diff.py before.png after.png difference.png`: compute pixel difference without rescaling.
- `python tools/security-audit.py ./skills`: flag potentially unsafe instructions, review manually.
- `python tools/verify-preservation.py old.zip new.zip`: prove old archive payloads unchanged.
- `python tests/browser-smoke.py`: Playwright Chromium smoke test of stand-alone HTML example (requires Python Playwright and Chromium).

**Scope:** Example applications for R3F/Rive/Theatre need project dependencies and compatible version-locked runtimes; they are documented starter integrations, not blindly declared as tested.

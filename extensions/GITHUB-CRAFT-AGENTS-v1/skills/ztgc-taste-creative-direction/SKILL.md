---
name: ztgc-taste-creative-direction
description: "Taste Skill specialist for Perfect_AI; use for Produce genuinely distinctive, brand-appropriate design directions instead of repeating generic AI-generated sections."
---

# Taste Skill — Perfect_AI integration

This is a newly authored, offline skill that integrates the methods of [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill/blob/main/skills/SKILL.md). It is **not** a verbatim mirror of the original upstream files. For optionally retrieving an official licensed source separately, see `tools/sync_upstreams.py`. Never silently replace previous Perfect_AI skills.

## Scope and result
Produce genuinely distinctive, brand-appropriate design directions instead of repeating generic AI-generated sections.

## Actual procedure
1. Extract brand story, audience, functional requirements, legal/asset limits and language direction.
2. Generate multiple fundamentally distinct composition concepts: editorial, restrained, kinetic, brutalist, immersive; avoid cosmetic-only palette variants.
3. Produce a layout grammar including headline widths, typographic axes, negative space, image treatment and mobile reading order.
4. Select based on accessibility, load budget, originality relative to supplied references and ease of maintenance.
5. Do not invent or scrape copyrighted assets; keep original source attribution and user-provided references.

## Acceptance gates
- [ ] Readable Persian shaping and realistic sample content
- [ ] Headlines do not rely on arbitrary fixed line counts
- [ ] Variants maintain usable navigation and responsive reading order

## Terminal workflow (verify commands on installed version)
```powershell
python scripts/layout_variant.py --seed 42 --out design-variants.json  # in extension
```

## Licensing, external tools and provenance
- Upstream: https://github.com/Leonxlnx/taste-skill
- Upstream source SHA: `03ed209b8fdc0a3cd6bccf8a5b3bfffe56aa4558` (the inspected main skill, not the new original work).
- License noted at inspection: **MIT**.
- Dependencies: Optional: Python/GSAP only when selected; avoid treating style recipes as universal rules.
- No MCP is needed or used. External npm tools are not contained in this ZIP and require separate installation and their own license acceptance.

## Interoperation with existing Perfect_AI
- Route only this skill plus a few genuinely relevant pre-existing skills; do not indiscriminately import thousands.
- Preserve user edits and established design tokens.
- Inspect source and tests before applying a code change.
- Require screenshots or test evidence before marking visual output verified.
- Write a final report separating PASS, FAIL and NOT_RUN, including commands, URLs and paths.

## Specialized skills
- `ztgc-taste-creative-style-contrast` — Produce three composition styles with different grid logic, typography, illustration approach, white space and art direction; report trade-offs.
- `ztgc-taste-image-to-code-bridge` — Translate references into design tokens and structural descriptions; never pretend image-derived code is original site source.
- `ztgc-taste-brandkit-to-tokens` — Turn a brand brief into versioned semantic color/type/spacing tokens; test contrast, RTL, themes and touch targets.

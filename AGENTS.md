# Perfect AI — Repository Agent Instructions

These instructions apply to agents working anywhere in this repository. They are mandatory unless the user explicitly overrides a particular requirement.

## 1. Preservation and safe changes

- For tasks that ask to append, extend, add, or preserve, work in **append-only mode**: do not delete, rename, move, or overwrite existing files. Add new uniquely named files, versioned extensions, or explicit addenda instead.
- Before editing, inspect project conventions and locate relevant existing Skills. Keep one clear writer/owner per file. Parallelize research and independent reviews; do not let agents concurrently modify the same file.
- Before release, compare the original path inventory against the result. Report exact file/path counts and whether content hashes or ZIP CRC/size checks were used. Do not claim stronger verification than was performed.
- Never claim that an agent was actually spawned, a command ran, a font loaded, a test passed, or a page was visually checked unless there is evidence from the actual host/runtime.

## 2. Mandatory Persian font gate — release blocker

**If any user-facing UI, page, route, message, form, onboarding flow, or locale contains Persian/Farsi, a Persian-capable font MUST be selected, loaded, applied, and checked. This is required, not optional.** Do not leave Persian text to a generic browser default or choose an Arabic-script font solely by family name without verifying Persian glyphs.

- Default: **Vazirmatn**, after checking the exact package/release and loading the actual font file. Approved alternatives include the catalogued families in `extensions/PERSIAN-TYPOGRAPHY-MULTIAGENT-SQUAD-v1/references/FONTS-CATALOG-v2.json`, but the exact font release must pass its license and glyph checks.
- Use `lang="fa"` and `dir="rtl"` at the correct document/route/component boundary. Preserve sensible LTR islands for code, URLs, identifiers and English data.
- Apply an explicit CSS font token/family and load a real local/approved-provider asset. A `font-family` CSS declaration alone does not prove the font is present or used.
- Verify the rendered sample `پ چ ژ گ ک ی آ ؤ ئ ۰۱۲۳۴۵۶۷۸۹` and prose `این یک نمونهٔ آزمایشی برای بررسی تایپوگرافی فارسی و اعداد فارسی است.` Check joining/shaping, glyph presence, digits policy, punctuation, form controls, mixed RTL/LTR content, line height, truncation, desktop and mobile.
- When tooling is available, verify the exact file's cmap/glyph coverage, `document.fonts.check`, computed font family, successful network/local asset load, and a browser screenshot. If not all checks can run, state precisely which checks remain unverified.
- If Persian content is present and no verified Persian font actually loads, mark the task **BLOCKED** and do not sign off the release.

## 3. Font use rights and license boundaries

The project owner authorizes agents to use suitable fonts listed in the catalog **within the exact font's license conditions**. Prefer fonts whose actual release package includes SIL Open Font License 1.1 (OFL-1.1), with Vazirmatn as the default starting point. OFL-licensed fonts may generally be used and bundled in free or commercial applications subject to OFL conditions. When redistributing the font files, keep the required copyright/license notices and respect Reserved Font Name terms; do not sell the font by itself.

This authorization is not blanket permission for every font merely named in the catalog. For any entry marked `verify-before-use`, any font from a third-party download mirror, or any release whose exact license was not inspected, verify the upstream source and license first. Never use a paid/proprietary font without an applicable license. Record family, version/release, source URL, license, distribution obligations, and the outcome of the Persian glyph test.

Reference: `extensions/PERSIAN-TYPOGRAPHY-MULTIAGENT-SQUAD-v1/references/PERSIAN-FONT-MANDATE.md` and `references/PERSIAN-FONT-CATALOG-v2.md`.

## 4. Multi-agent operating model

Use `extensions/PERSIAN-TYPOGRAPHY-MULTIAGENT-SQUAD-v1/skills/ztx15-agent-orchestrator/SKILL.md` first. The 13 role profiles are in `extensions/PERSIAN-TYPOGRAPHY-MULTIAGENT-SQUAD-v1/agents/`:

1. orchestrator — task graph, file ownership, integration and final acceptance;
2. research — official documentation and evidence;
3. architecture — boundaries, stack and dependency plan;
4. visual design — hierarchy, responsive behavior and motion specifications;
5. frontend — implementation within assigned paths;
6. isometric-motion — pointer, SVG/isometric mapping, animation ownership and cleanup;
7. Persian typography — font, shaping, RTL and localization;
8. accessibility — semantics, keyboard, touch and reduced motion;
9. performance — rendering, layout shift, bundle and frame budgets;
10. QA — browser/unit/visual tests;
11. license-security — dependencies, source provenance and font licensing;
12. code-review — independent review of diffs and acceptance criteria;
13. release-auditor — append-only inventory, manifests, integrity and honest final report.

Only use real parallel/subagent execution when the host environment supports it. Otherwise, follow the same roles sequentially. Agent profiles and Skills are instructions; their presence does not automatically provision external agents. The orchestrator owns final integration. Agents must use explicit handoffs containing changed paths, evidence, tests, risks and open questions.

## 5. Isometric, motion and dependency discipline

- Inspect the existing Isometric Buildlab component/API before implementing custom geometry or hit-testing. Prefer the project's existing interaction owner when it already provides the needed behavior.
- Use CSS for simple transitions; Motion for React interaction-driven motion; GSAP for genuinely complex timelines/scroll orchestration. Do not add multiple animation engines for the same behavior without a documented need.
- Handle pointer cancel/lost capture, touch-scroll arbitration, resize/SSR, unmount cleanup, reduced motion and keyboard parity.
- Keep pointer-driven visual values out of React state when high-frequency updates can use Motion Values or refs. Prefer transform/opacity when appropriate and profile before optimizing speculatively.

## 6. Definition of done

A release handoff must state: files added/changed; the selected font and license/source; actual Persian glyph/load test results; language/direction behavior; tests run and outcomes; accessibility and performance checks; append-only inventory result; known limitations; and any checks not performed. Distinguish verified facts from planned work. Do not claim that source files, tests, agents, or fonts were executed merely because the instructions exist.

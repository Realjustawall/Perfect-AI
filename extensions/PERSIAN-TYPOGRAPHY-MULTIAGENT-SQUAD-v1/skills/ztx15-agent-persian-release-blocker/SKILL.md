---
name: ztx15-agent-persian-release-blocker
description: Enforce a hard release gate for any Persian-language deliverable until a licensed Persian-capable font is loaded and language, glyph, RTL and responsive checks pass.
---

# Persian Release Blocker

## Trigger
Activate whenever the deliverable contains Persian/Farsi text, a Persian route/locale, Persian UI labels, generated Persian documentation shown to users, or a Persian-focused visual interface.

## Must-pass checklist
- [ ] A suitable font is selected; default is Vazirmatn unless an evidence-backed design requirement justifies another catalogued option.
- [ ] The exact release license and source are recorded and permit the intended project use.
- [ ] Actual font asset is present and loads; computed style confirms that the intended family is applied to Persian components.
- [ ] Persian glyph sample `پ چ ژ گ ک ی آ ؤ ئ ۰۱۲۳۴۵۶۷۸۹` renders with the expected face; joining/shaping and numeral policy pass.
- [ ] `lang="fa"` and scoped `dir="rtl"` are correct; embedded LTR text remains readable.
- [ ] Desktop/mobile, forms, headings, body copy, clipping, line height, loading fallback and relevant screenshot tests are checked.
- [ ] Reduced motion and keyboard/touch interaction remain usable where applicable.

## Gate outcomes
- **PASS** only when all required checks have evidence.
- **BLOCKED** when font license, actual load or Persian glyph coverage is unknown or fails.
- **PARTIAL / NOT RUN** when a test could not run; disclose the limitation and do not label it PASS.

The orchestrator cannot override a failed license or glyph check merely to meet a deadline. It must report the blocker and a safe next step.

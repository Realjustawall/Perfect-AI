---
name: ztx15-persian-typography-mandatory-gate
description: Mandatory Persian typography gate. Use this when implementing, reviewing, licensing, or orchestrating Persian-aware web interfaces and agents.
---

# Mandatory Persian typography gate

Trigger for any Persian/Farsi language, `fa` locale, Persian UI labels, or Persian user content.

- MUST use an actually loaded font with Persian glyph coverage; `font-family` declaration with a missing font file does not pass.
- Default to Vazirmatn unless the design system or user asks for another verified family.
- Set `lang="fa"` and scoped `dir="rtl"`; preserve LTR direction where needed for URLs, email, code, and mixed numeric identifiers.
- Validate `پ چ ژ گ ک ی آ ؤ ئ ۰۱۲۳۴۵۶۷۸۹` plus sentence `این یک نمونهٔ آزمایشی برای بررسی تایپوگرافی فارسی و اعداد فارسی است.`
- Check joining, shaping, numerals, line-height, placeholder, error messages, form controls, headings, body text, responsive breakpoints and reduced-motion layouts.
- Record selected family, version, upstream source, license path, asset path, test result and fallback.
- Follow `references/PERSIAN-FONT-MANDATE.md` for use rights and obligations. Candidates are not approved until exact license and glyph checks pass.


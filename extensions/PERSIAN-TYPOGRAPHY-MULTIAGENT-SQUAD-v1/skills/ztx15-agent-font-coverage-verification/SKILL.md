---
name: ztx15-agent-font-coverage-verification
description: Verify Persian-specific glyph coverage in the exact selected font file rather than inferring support from a family name or Arabic-script label.
---

# Persian Font Glyph Coverage Verification

## Mandatory coverage sample
Test `پ چ ژ گ ک ی آ ؤ ئ ۰۱۲۳۴۵۶۷۸۹` and the sentence `این یک نمونهٔ آزمایشی برای بررسی تایپوگرافی فارسی و اعداد فارسی است.`

## Procedure
1. Resolve the actual font URL/file and version loaded in the page. Do not validate a family name while the browser is using a fallback.
2. If available, inspect character maps with FontTools (`ttx`, `fontTools.ttLib`) or an equivalent font inspection tool. Check Persian-specific code points including U+067E PEH, U+0686 TCHEH, U+0698 JEH, U+06AF GAF, U+06A9 KEHEH, U+06CC FARSI YEH and the numeral range chosen by the product.
3. Check the exact static subset/variable font file used in production. A full upstream font may cover a glyph that is missing from a Latin-only or reduced subset.
4. Render the sample in a browser and inspect joining, shaping, spacing, baseline, diacritics if used, numerals and punctuation. Font cmap coverage does not by itself prove shaping or good visual behavior.
5. Check fallback behavior on a clean browser/profile and when the font request fails.
6. Record family, version, source, file path/hash when available, code-point coverage evidence and the screenshot/test result.

## Fail criteria
Missing Persian-specific letters, visible tofu boxes, broken joining, accidental fallback for Persian text or unknown identity of the loaded file means the font gate is blocked. Do not declare support solely because the font is labeled Arabic.

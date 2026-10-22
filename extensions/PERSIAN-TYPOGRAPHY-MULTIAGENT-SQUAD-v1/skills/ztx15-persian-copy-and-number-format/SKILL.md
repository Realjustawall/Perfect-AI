---
name: ztx15-persian-copy-and-number-format
description: Persian copy, numbers and mixed-script typography. Use this when implementing, reviewing, licensing, or orchestrating Persian-aware web interfaces and agents.
---

# Persian copy, numbers and mixed-script typography

- Choose an explicit product policy for Persian digits (`۰۱۲۳۴۵۶۷۸۹`) versus Latin digits in phone numbers, codes, prices, IDs and charts. Do not change digits globally without product/context requirements.
- Validate the chosen font's glyph for Persian-specific characters and digits; a general Arabic-family label is not sufficient.
- Preserve LTR display for URLs, email addresses, code, serial numbers and many numeric tokens inside RTL interfaces; use `<bdi>`/CSS isolation or equivalent when needed.
- Check punctuation placement, parentheses, truncation/ellipsis, line wrapping, tooltips, form errors, table alignment and chart labels in RTL.
- Avoid using a display/calligraphic family for long UI text without readability and line-height tests.


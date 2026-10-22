---
name: ztx15-persian-font-loading-performance
description: Persian font loading and performance. Use this when implementing, reviewing, licensing, or orchestrating Persian-aware web interfaces and agents.
---

# Persian font loading and performance

- Prefer one strong variable Persian sans for the primary UI, and load other families only where there is a real typographic role (e.g. display headings or editorial text).
- Prefer self-hosting from verified local assets for deterministic builds and privacy where suitable; otherwise use an official provider and pin the version/URL if possible.
- Subset only after coverage tests for Persian letters, combining marks, punctuation and digits. Do not make a subset that accidentally omits `پ چ ژ گ`.
- Use `font-display: swap` or a deliberate fallback strategy; test cumulative layout shift, fallback metrics, first render, slow network and offline behavior.
- Preload only the critical regular/variable face used above the fold. Avoid preloading every weight/family.
- Verify variable axes and supported weights in the exact binary; don't request unavailable weights that synthesize poorly.


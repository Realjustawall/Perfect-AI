# Quality gates — functional, visual, performance, accessibility, SEO, cross-device

## No silent assumptions

Always label: `Implemented` (code present), `Statically checked` (syntax/type), `Browser verified` (actual run), `Measured` (record actual number). Never call an intended 60fps target measured or say a third-party screenshot has been replicated exactly without pixel comparisons.

## Gate 1 — Repository safety

- Detect package manager by lock file, use matching commands. Read existing package scripts.
- Check type/lint/build commands before adding dependencies. No forced upgrades unrelated to feature.
- Preserve deployment configuration, tests, assets, licenses; no deleting old versions without request.
- Keep generated files organized. Git diff reviewed for secrets, duplicates, untracked huge assets.

## Gate 2 — Visual & responsive grid

| Width | Height | Mode | Required checks |
| --- | --- | --- | --- |
| 320 | 568 | portrait, touch | horizontal overflow, nav, button access, text reflow |
| 375 | 667 | portrait, touch | scene overlap, sticky progress, header |
| 390 | 844 | portrait, DPR high | blur/alias, scroll backward, caps |
| 768 | 1024 | portrait tablet | 1/2 column transitions and font wrap |
| 1024 | 768 | landscape | sticky height, nav fit, focus visibility |
| 1440 | 900 | desktop | typography, 3D layering, readability |
| 1920 | 1080 | large | max-width, no absurdly huge orb, motion scale |

At each size inspect beginning, middle, end of **every section**. For reference reconstruction capture reference/replica at same viewport and scroll progress; compare geometry silhouette, alignment, tracking, whitespace, contrasts and keyframes; identify differences instead of stating perfect match.

## Gate 3 — Interaction test cases

1. Tab through all actionable elements; focus order matches DOM, ring visible, no keyboard trap.
2. Press Enter/Space for actions; Escape for dialogs/menus; hover-only details have click/focus access.
3. In forms test Persian and Arabic numerals, LTR fields, validation, server errors, loading, disabled, success, retry.
4. Scroll slow/fast up and down, scroll directly via scrollbar, keyboard PageDown/Home/End, anchor links and browser history.
5. Test resize/orientation during mid-animation; repeated unmount/remount for memory leaks.
6. Disable JS/WebGL; meaningful textual content remains accessible.
7. Simulate prefers-reduced-motion, prefers-contrast and color-scheme where applicable.

## Gate 4 — Performance

Record measured Web Vitals LCP/CLS/INP where tooling is available; targets to investigate: LCP <=2.5s, CLS <=0.1, INP <=200ms at p75, subject to actual site/network/test context. These are guidelines, not results. For 3D test CPU/GPU frame timings, actual FPS distribution, memory, draw calls, triangles, fill overdraw, resource loading and idle energy. Separate initial JS parse from runtime scene cost.

Recommendations: asset compression, responsive image `srcset`, image aspect-ratio for CLS, font-display appropriate, route code-splitting, per-route lazy 3D, texture compression where supported, generated lod, small code imports, no excessive CSS backdrop-filter, no endless canvas updates offscreen.

## Gate 5 — Accessibility (WCAG-oriented)

- Semantic HTML, one h1, landmarks, named regions, form labels, live regions for status.
- Contrast AA >=4.5:1 normal text, 3:1 large text; non-text UI important graphics generally 3:1. Measure not guess.
- No flashes (especially >3 times/second), user control over moving/auto-updating content, reduced motion honor.
- Keyboard accessible with 44px-ish targets; no focus obscured by sticky nav; zoom 200% without loss of functionality.
- Informative 3D must have a text alternative; decorative 3D can be aria-hidden. Provide content even when canvas fails.
- Mixed RTL/LTR screenreader reading order tested.

## Gate 6 — Functional security and correctness

- CSP/third-party script integrity policy as appropriate; never `innerHTML` untrusted content or evaluate remote content.
- Avoid dependency supply chain surprises (read licenses/lockfile), prefer HTTPS, no secrets in front-end or generated demo.
- Iranian payment/OTP validation server-side; don't rely on client regex. Idempotent callbacks, rate limits, expiry handling.
- Forms should not store sensitive data in `localStorage` without documented need.
- Avoid non-functional CTA and placeholder links; either implement or label demo.

## Gate 7 — Delivery report template

```
Implemented: [files/sections/components]
Visual benchmark: [source URLs/screenshots if examined]
Commands run: [package install, typecheck, tests, build]
Browser matrices tested: [viewport + browser + outcomes]
Performance: [measured numbers, test environment] or NOT MEASURED
Known limitations: [external model not obtained, WebGPU fallback etc]
Next action: [a concrete actionable next step]
```

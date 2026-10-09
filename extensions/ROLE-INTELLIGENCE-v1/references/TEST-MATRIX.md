# Quality evidence matrix

| Dimension | Repro test | Output | Certification rule |
|---|---|---|---|
| Visual fidelity | 320, 390, 768, 1440 px screenshots | device screenshots | no verified regressions |
| Animation | timeline at 0/25/50/75/100%, reverse | frame series | no missing/unexpected states |
| Pointer | mouse, touch, keyboard | event logs | primary actions accessible |
| RTL/Fonts | fa/en toggle, glyph and network inspection | computed-font + screenshots | correct scripts and no clipping |
| Three.js | project Box3 to screen, different cameras | bounding rectangles | model avoids text safe regions |
| Mobile GPU | actual device trace if available | fps frame distribution | target explicitly measured, no fabricated FPS |
| Forms | invalid/valid/network errors | playwright logs | recoverable, comprehensible |
| Core web vitals | field evidence, lab baseline | LCP/INP/CLS | declare field vs lab, no overclaim |
| Brand | approved brand-identity.json | tokens and rendered screens | cannot certify without approval |
| Security | sensitive UI/network/URL | redacted evidence | no unreviewed leakage |
| SEO | rendered DOM/meta/sitemap | crawl report | supported content and routes |

Unrun tests MUST be recorded `not_verified` with the reason.

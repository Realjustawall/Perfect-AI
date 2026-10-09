# Production Telemetry & Regression Watch — Technical production playbook

## Purpose
Measure consented real user web vitals and runtime problems, compare cohort p75 with baselines and alert on reproducible regressions.

## Architecture, invariants and algorithm
**RUM policy**: require opt-in or an approved lawful telemetry basis; do not log full URL/query strings, user text, IP, tokens, precise fingerprint, or screen recordings by default. Sample appropriately; log release version, route category, coarse device tier, metric and timestamp. `web-vitals` provides LCP, INP, CLS with optional attribution. Summarize p75 by release/route/tier only with sufficient sample size (sample 30 default for demos; larger in production). Compare to a pre-agreed baseline (e.g. increase in p75 >20% over same cohort), exclude low-sample noise, stratify slow networks. Report `regression|within-budget|insufficient-samples` rather than false certainty. Retention, authentication, rate limits and CSP must be implemented before deploying the example endpoint.

## Required end-to-end procedure
1. Add `web-vitals` standard or attribution client only when privacy policy allows.
2. Sample sessions, scrub URLs/messages and avoid PII.
3. Send small same-origin events with release, route class, device tier and time; use bounded queue.
4. Aggregate p75 LCP INP CLS per sample-size-qualified cohort, distinguish missing samples.
5. Compare against a baseline by thresholds; output a suggested rollback/escalation, never blindly auto-deploy.

## Negative tests and fallback states
- Missing dependency or unsupported browser: report `unverified`, preserve the approved page and offer a nonblank fallback.
- Invalid input and incomplete brand brief: report exact failing constraint rather than silently choosing unrelated colors/layout.
- Reduced motion, keyboard-only, Persian RTL and English LTR: test individually with screenshots and DOM assertions.
- Rendering errors and low GPU budget: degrade aesthetics before removing essential content.
- Repeated same input: deterministic output; document acceptable GPU raster differences.

## Acceptance gates
- No telemetry enabled without configured endpoint/policy.
- Sensitive fields are dropped.
- Low sample sizes never labeled regression-proof.
- p75 cohort reports identify versions and sample counts.

## Operational evidence
Log environment, installed package versions, exact commands, JSON report, paths to generated screenshots/traces, failures, and unresolved items. Keep artifacts and code changes separate. **Do not** call a template success a browser-tested application.

## Official sources
- https://github.com/GoogleChrome/web-vitals
- https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing

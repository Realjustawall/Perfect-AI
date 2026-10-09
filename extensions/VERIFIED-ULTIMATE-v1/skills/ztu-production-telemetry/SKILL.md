---
name: ztu-production-telemetry
description: "Measure consented real user web vitals and runtime problems, compare cohort p75 with baselines and alert on reproducible regressions."
---
# Production Telemetry & Regression Watch — Perfect_AI VERIFIED ULTIMATE

## Mission / ماموریت
Measure consented real user web vitals and runtime problems, compare cohort p75 with baselines and alert on reproducible regressions.

## When to invoke
After deployment or staged rollout with user permission and telemetry governance.

## Exact workflow
1. Add `web-vitals` standard or attribution client only when privacy policy allows.
2. Sample sessions, scrub URLs/messages and avoid PII.
3. Send small same-origin events with release, route class, device tier and time; use bounded queue.
4. Aggregate p75 LCP INP CLS per sample-size-qualified cohort, distinguish missing samples.
5. Compare against a baseline by thresholds; output a suggested rollback/escalation, never blindly auto-deploy.

## Acceptance criteria
- No telemetry enabled without configured endpoint/policy.
- Sensitive fields are dropped.
- Low sample sizes never labeled regression-proof.
- p75 cohort reports identify versions and sample counts.

## Evidence contract
Write a machine-readable report with `status` = `pass|fail|unverified`, measured values, runtime/browser/device, changed files, exact command, artifacts and rationale. **Never** claim hardware/browser success from unit tests alone. Preserve original project files unless user explicitly authorizes edits. Avoid MCP; use local CLI and files.

## Compatibility and precautions
Read the installed dependency versions and project conventions first; prefer official APIs. Respect reduced motion, keyboard navigation, privacy, Persian RTL and low-power devices. Do not let two animation engines own the same DOM property. Test fallback modes and undo changes when the same acceptance check regresses.

## Working files
- `../../references/production-telemetry-implementation.md`
- `../../examples/production-telemetry/README.md`

## Official references
- https://github.com/GoogleChrome/web-vitals
- https://developer.mozilla.org/en-US/docs/Web/API/Performance_API/Long_animation_frame_timing

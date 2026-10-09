# Dynamic multi-agent selection, evidence integrity, arbitration

Base roles: design critic, design advocate, brand guardian, accessibility, mobile performance and visual regression. Select contextual reviewers by website category and features; e-commerce needs checkout/pricing; dashboards need data visualization, finance needs trust/security, immersive 3D needs camera/gpu, education needs learning and readability, landing pages need conversion/copywriting/motion.

Run read-only agents independently using `scripts/agent_review.py`. Real Codex CLI requires installation and logged-in Windows environment, otherwise use prompt-only mode. Limit parallelism by default to 3 and timeout each worker. Brand approval is mandatory: no fake brand/identity score from unapproved JSON.

Issue schema: role, severity, viewport, selector, source_file (or unknown), screenshot_path, reproduction, observation, why it matters, specific proposed change, preserve_this_strength, and verdict. The arbiter prioritizes concrete blockers; averaging one positive and one critical failure is forbidden. The arbiter does not run a write-capable agent.

Specialists include critic, advocate, brand, accessibility, visual regression, conversion, checkout, pricing integrity, merchandising, dashboard IA, data visualization, dashboard state, RTL typography, localization, motion director, GPU, camera, 3D placement, form usability, trust/privacy, semantic SEO, education, docs search, SEO, original design and real-device QA.

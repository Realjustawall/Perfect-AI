---
name: zt-rtl-i18n
description: Persian RTL internationalization: production-level logical CSS, bidi, jalali, number formats. Use when implementing, reviewing or testing persian rtl internationalization for React, Vite, Next.js or Perfect_AI projects.
---

# Persian RTL internationalization

## When to activate
Use on tasks involving **logical CSS, bidi, jalali, number formats**. For unrelated backend tasks do not load this skill.

## Implementation sequence
1. Inspect project dependencies, application entrypoints, routing and build scripts.
2. Define interfaces and state machines before visuals, preserve existing behavior.
3. Build semantic HTML and mobile-first layouts with logical CSS; integrate motion only when interaction works.
4. Validate keyboard, screen reader names, bidirectionality, input error and loading states.
5. Run typecheck, build, unit tests, browser tests, and inspect responsive overflow.

## Task-specific requirements
- Scope: **logical CSS, bidi, jalali, number formats**. Design the full execution path, not a screenshot placeholder.
- Identify dependency version and actual supported API signature; avoid inventing APIs.
- Use original code, or install licensed upstream through its maintained tool if the user wants upstream code.
- Choose measurable states, error handling, accessibility and performance budgets.

## Implementation starter
```tsx
<main lang="fa" dir="rtl"><h1>پروژهٔ جدید</h1><p>با <bdi>Perfect_AI v4</bdi> بسازید.</p></main>
```
Store canonical numbers/date values; localize only during display. Use logical CSS properties.

## Evidence / acceptance
- 320px no horizontal overflow; 200% zoom; LTR islands correct; focus order consistent.
- Test common, edge, interrupted, accessibility and responsive states; provide concrete artifacts/evidence.

## Deep references
- `../perfect-ai-master/references/04-ui-ux-system.md`
- `../perfect-ai-master/references/05-responsive-rtl.md`
- `../perfect-ai-master/references/11-workflow-architecture.md`

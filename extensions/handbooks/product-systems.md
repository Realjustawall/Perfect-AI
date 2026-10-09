# Complete Page & Product Systems — production engineering reference

Produce complete navigable multi-route experiences, not isolated aesthetic heroes. For each product type, define real data shapes, permissions, forms, empty/loading/error/offline states, accessible navigation and mobile tasks. Connect sample front end to mock adapters without pretending back-end actions succeeded. Map actual conversion flows and test them end-to-end.

## Architecture

Input contract → deterministic evidence collection → decision/implementation plan → reference implementation → device and accessibility fallback → test gates → signed-off report.

## Detailed implementation index

### 1. landing-page

**Mechanism:** Hero, proof, features, pricing, FAQs, CTA with real hierarchy and truthful claims.

**Failure pressure:** No fake logos/testimonials.

**Execution:** Define sitemap, task journey, data adapter, reusable components and page-specific states before implementing routes.

**Acceptance:** Run journey from entry to task completion; exercise offline, empty, error, role and mobile paths.

### 2. saas-application

**Mechanism:** Workspace, onboarding, roles, billing UI and stateful settings shell.

**Failure pressure:** Do not claim backend connected if mock.

**Execution:** Define sitemap, task journey, data adapter, reusable components and page-specific states before implementing routes.

**Acceptance:** Run journey from entry to task completion; exercise offline, empty, error, role and mobile paths.

### 3. ecommerce

**Mechanism:** Catalog, search/filter, product detail, cart, stock states, checkout shell.

**Failure pressure:** Never simulate payment success as real.

**Execution:** Define sitemap, task journey, data adapter, reusable components and page-specific states before implementing routes.

**Acceptance:** Run journey from entry to task completion; exercise offline, empty, error, role and mobile paths.

### 4. analytics-dashboard

**Mechanism:** Metric definitions, drilldowns, loading/error states, responsive charts.

**Failure pressure:** No invented analytics in production copy.

**Execution:** Define sitemap, task journey, data adapter, reusable components and page-specific states before implementing routes.

**Acceptance:** Run journey from entry to task completion; exercise offline, empty, error, role and mobile paths.

### 5. documentation-portal

**Mechanism:** Search, sidebar, versioned content, anchors, keyboard navigation.

**Failure pressure:** No broken deep links.

**Execution:** Define sitemap, task journey, data adapter, reusable components and page-specific states before implementing routes.

**Acceptance:** Run journey from entry to task completion; exercise offline, empty, error, role and mobile paths.

### 6. portfolio

**Mechanism:** Case-study evidence, performance-optimized work media and contact flows.

**Failure pressure:** No hollow buzzword cards.

**Execution:** Define sitemap, task journey, data adapter, reusable components and page-specific states before implementing routes.

**Acceptance:** Run journey from entry to task completion; exercise offline, empty, error, role and mobile paths.

### 7. studio-site

**Mechanism:** Editorial work grid, cinematic storytelling and accessible static proof.

**Failure pressure:** Do not allow WebGL to hide content.

**Execution:** Define sitemap, task journey, data adapter, reusable components and page-specific states before implementing routes.

**Acceptance:** Run journey from entry to task completion; exercise offline, empty, error, role and mobile paths.

### 8. education-platform

**Mechanism:** Course map, lesson progress, quizzes and a11y transcript.

**Failure pressure:** Never discard learner progress silently.

**Execution:** Define sitemap, task journey, data adapter, reusable components and page-specific states before implementing routes.

**Acceptance:** Run journey from entry to task completion; exercise offline, empty, error, role and mobile paths.

### 9. admin-panel

**Mechanism:** Permissions, tables, bulk actions, audit trails and confirms.

**Failure pressure:** No destructive action without confirmation.

**Execution:** Define sitemap, task journey, data adapter, reusable components and page-specific states before implementing routes.

**Acceptance:** Run journey from entry to task completion; exercise offline, empty, error, role and mobile paths.

### 10. blog-magazine

**Mechanism:** Taxonomy, article rhythm, reading time estimate and author provenance.

**Failure pressure:** Respect content sourcing.

**Execution:** Define sitemap, task journey, data adapter, reusable components and page-specific states before implementing routes.

**Acceptance:** Run journey from entry to task completion; exercise offline, empty, error, role and mobile paths.

### 11. 3d-showcase

**Mechanism:** Progressive WebGL hero, product annotations and static fallback.

**Failure pressure:** Do not force 3D download for all users.

**Execution:** Define sitemap, task journey, data adapter, reusable components and page-specific states before implementing routes.

**Acceptance:** Run journey from entry to task completion; exercise offline, empty, error, role and mobile paths.

### 12. multilingual-rtl-product

**Mechanism:** Locale router, bidi isolation, translations and date formats.

**Failure pressure:** Do not simply reverse UI flex directions.

**Execution:** Define sitemap, task journey, data adapter, reusable components and page-specific states before implementing routes.

**Acceptance:** Run journey from entry to task completion; exercise offline, empty, error, role and mobile paths.

## Gate checklist

- [ ] Inputs, constraints and assets have evidence.
- [ ] Implementation has a real code path, not a prompt-only promise.
- [ ] Minimal or static fallback preserves actual user task.
- [ ] Proper cleanup and reduced-motion when relevant.
- [ ] Persian RTL and English LTR components tested when language is supported.
- [ ] Version compatibility and license assumptions documented.
- [ ] Verified tests distinguished from suggestions.

## Codex handoff

Report actual files edited, references consulted, runtime version and selected skills. Preserve original user content; do not install MCP.

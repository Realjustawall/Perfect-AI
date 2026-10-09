# Complete Page & Product Systems — deep implementation playbook

**Purpose:** Produce functioning multi-page product flows, not isolated decorative landing screenshots.

This file is an original engineering manual and does not reprint proprietary site code. Use it in addition to, never instead of, the complete pre-existing TITAN PLUS/NEXUS material.

## Architecture and execution order
1. Select a product archetype and define information architecture and end-to-end journeys.
2. Build shared shell, navigation, states, tokens, content model and responsive behavior.
3. Implement auth/permission boundaries, form validation and async/loading/error/empty states where relevant.
4. Add at least two real user flows and navigation deep links, not inert cards or buttons.
5. Test mobile RTL/LTR, keyboard, accessibility, empty datasets and realistic copy.

## Inputs / design constraints
Inputs: product page map, data model, permissions, journeys and error state requirements.

## Preferred implementation approach
Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

## Representative source template
```tsx
// State matrix matters more than a screenshot of the happy path.
type LoadState<T>={status:'loading'}|{status:'error';message:string}|{status:'empty'}|{status:'success';data:T};
function Content<T>({state,render}:{state:LoadState<T>,render:(data:T)=>React.ReactNode}){
 switch(state.status){case 'loading':return <p role="status">در حال بارگذاری…</p>;case 'error':return <p role="alert">{state.message}</p>;case 'empty':return <p>موردی یافت نشد.</p>;case 'success':return <>{render(state.data)}</>}
}
```

## Cross-cutting quality gates
1. At least two functional end-to-end user journeys.
2. Every page includes realistic loading/error/empty state.
3. Keyboard/RTL/mobile deep links preserved.

## Deep technique reference — all 22 features

### 01. `landing-page`

**Output / operation:** Hero, proof, capabilities, comparison, CTA and accessible navigation with meaningful hierarchy.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/landing-page.md) · Skill `$ztx4-product-systems-landing-page`
### 02. `saas-marketing`

**Output / operation:** Pricing tiers, features, case studies, trial flow, FAQ and plan decision states.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/saas-marketing.md) · Skill `$ztx4-product-systems-saas-marketing`
### 03. `ecommerce-storefront`

**Output / operation:** Catalog, faceted search, product detail, cart, checkout error/empty states.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/ecommerce-storefront.md) · Skill `$ztx4-product-systems-ecommerce-storefront`
### 04. `analytics-dashboard`

**Output / operation:** Filters, charts, data tables, loading/empty/errors and responsive dense layout.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/analytics-dashboard.md) · Skill `$ztx4-product-systems-analytics-dashboard`
### 05. `blog-publication`

**Output / operation:** Archives, author metadata, article typography, related content, SEO and RSS.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/blog-publication.md) · Skill `$ztx4-product-systems-blog-publication`
### 06. `portfolio-creative`

**Output / operation:** Project case studies, credits, galleries, contact and reduced-motion portfolio navigation.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/portfolio-creative.md) · Skill `$ztx4-product-systems-portfolio-creative`
### 07. `product-documentation`

**Output / operation:** Versioned nav, search, code blocks, anchors, TOC and keyboard support.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/product-documentation.md) · Skill `$ztx4-product-systems-product-documentation`
### 08. `admin-console`

**Output / operation:** Permissions, CRUD, audit trails, tables, bulk actions and confirmation patterns.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/admin-console.md) · Skill `$ztx4-product-systems-admin-console`
### 09. `course-learning`

**Output / operation:** Lessons, progress, media transcripts, quiz errors, resume states and navigation.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/course-learning.md) · Skill `$ztx4-product-systems-course-learning`
### 10. `3d-studio-showcase`

**Output / operation:** 3D hero with poster alternative and accessible project details.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/3d-studio-showcase.md) · Skill `$ztx4-product-systems-3d-studio-showcase`
### 11. `onboarding-wizard`

**Output / operation:** Progressive disclosure, step validation, back/forward preservation and review.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/onboarding-wizard.md) · Skill `$ztx4-product-systems-onboarding-wizard`
### 12. `account-settings`

**Output / operation:** Profile, privacy, notifications, destructive actions and audit feedback.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/account-settings.md) · Skill `$ztx4-product-systems-account-settings`
### 13. `search-discovery`

**Output / operation:** Autosuggest, filters, pagination, zero-results and debouncing.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/search-discovery.md) · Skill `$ztx4-product-systems-search-discovery`
### 14. `booking-workflow`

**Output / operation:** Date/time selection, time zone handling, constraints, confirmation and errors.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/booking-workflow.md) · Skill `$ztx4-product-systems-booking-workflow`
### 15. `design-system-site`

**Output / operation:** Component docs, live controls, tokens, accessibility notes and changelog.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/design-system-site.md) · Skill `$ztx4-product-systems-design-system-site`
### 16. `product-roadmap`

**Output / operation:** Projects, milestones, sortable views, filtering and editing permissions.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/product-roadmap.md) · Skill `$ztx4-product-systems-product-roadmap`
### 17. `help-center`

**Output / operation:** Semantic search, suggested articles, ticket creation and accessibility.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/help-center.md) · Skill `$ztx4-product-systems-help-center`
### 18. `real-time-dashboard`

**Output / operation:** Socket reconnection, stale data, live-announcement throttling and graceful offline.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/real-time-dashboard.md) · Skill `$ztx4-product-systems-real-time-dashboard`
### 19. `multi-tenant-saas`

**Output / operation:** Tenant isolation UI, role selection, scoped navigation and error states.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/multi-tenant-saas.md) · Skill `$ztx4-product-systems-multi-tenant-saas`
### 20. `rtl-bilingual-product`

**Output / operation:** Full locale switch retaining state and adjusting typography/logical alignment.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/rtl-bilingual-product.md) · Skill `$ztx4-product-systems-rtl-bilingual-product`
### 21. `payment-ui-safety`

**Output / operation:** Never mimic storing card details; use provider tokens and validated error flows.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/payment-ui-safety.md) · Skill `$ztx4-product-systems-payment-ui-safety`
### 22. `full-journey-integration`

**Output / operation:** Assert two or more end-to-end flows with screenshot and network error handling.

**Implementation:** Implementation: build semantic shell plus complete forms/navigation/empty/loading/error; implement two distinct end-to-end journeys, links and responsive IA.

**Proof:** Tests: no dead controls, mobile-first flow, keyboard and RTL/LTR, empty data, valid errors, slow network and deep links.

[Dedicated recipe](./product-systems/recipes/full-journey-integration.md) · Skill `$ztx4-product-systems-full-journey-integration`


## Honesty about execution
- The source templates in this pack illustrate the mechanisms. A validated install/build of an optional third-party package is required before claiming its integration works.
- Re-check current API versions in the lockfile and official references.
- Do not claim real GPU frame time, pixel-perfect reconstruction, or site ownership without data.

## Official / maintained references
- [wcag](https://www.w3.org/TR/WCAG22/)
- [tailwind](https://tailwindcss.com/docs/theme)
- [bootstrap](https://getbootstrap.com/docs/5.3/customize/color-modes/)

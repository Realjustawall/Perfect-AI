# Tailwind v4 OKLCH system — expert manual

## Mission
generate palette scales with feasible chroma, semantic aliases and verify contrast. This chapter is meant to be read and applied to a real application, not checked off as a conceptual mention.

## Verification-first workflow
1. Identify the user's visible feature and success criteria. Record existing framework versions and lockfile.
2. Read the owner-specific documentation for versioned APIs; choose a smallest possible implementation proving functionality.
3. Implement semantic document structure before decorative motion. Use a layout that reflows without extra JS for 320px and 400% browser zoom.
4. Connect state transitions. Every clickable control must perform a real action and announce outcome when appropriate.
5. Design with a semantic palette. Use the prior Perfect_AI color tools to verify final computed text/background combinations, not just raw hex tokens.
6. Test both fa-IR with RTL and en-US with LTR. Pay attention to bidirectional punctuation and numbers.
7. Validate cleanup for observers, event listeners, animation timelines, renderer and responsive media listeners.
8. Run actual build and targeted browser tests; report any unavailable tests as unverified.

## Framework-specific exact contracts
**Tailwind CSS v4:** `@import "tailwindcss";` with `@theme` at top level, data-driven variants and container queries. Do not present `tailwind.config.js` and `@tailwind base;` as the default v4 setup. Define `@theme` values for utility generation and `:root` semantic aliases for runtime theme switching.

**Bootstrap v5.3:** mobile-first breakpoints xs <576px, sm >=576px, md >=768px, lg >=992px, xl >=1200px, xxl >=1400px. RTL requires the RTL CSS bundle and `<html lang="fa" dir="rtl">`. CSS variables use `--bs-*` and color modes use `data-bs-theme`. JS plugins need the bundle once and explicit event lifecycle.

## Working adaptation example
### Tailwind fragment
```html
<main class="mx-auto w-full max-w-6xl min-w-0 px-4 sm:px-6 lg:px-8" lang="fa" dir="rtl">
  <section class="@container rounded-2xl border border-zinc-300 p-4 dark:border-zinc-700">
    <div class="grid grid-cols-1 gap-4 @lg:grid-cols-2">
      <article><h1 class="text-2xl font-semibold sm:text-4xl">داشبورد حرفه‌ای</h1><p class="mt-2 max-w-prose">محتوا در نمایشگرهای کوچک پنهان نمی‌شود.</p></article>
      <aside class="min-w-0 rounded-lg bg-zinc-100 p-4 text-zinc-900">Accessible summary</aside>
    </div>
  </section>
</main>
```
### Bootstrap fragment
```html
<main class="container py-4" lang="fa" dir="rtl" data-bs-theme="dark">
  <section class="row g-3 align-items-start">
    <article class="col-12 col-lg-7"><h1 class="h2">داشبورد حرفه‌ای</h1><p>Responsive semantic primary content.</p></article>
    <aside class="col-12 col-lg-5"><div class="card"><div class="card-body">Accessible summary</div></div></aside>
  </section>
</main>
```

## Decision caveats
- generate palette scales with feasible chroma, semantic aliases and verify contrast.
- Do not introduce an unnecessary second CSS framework or animation runtime.
- For physical animation, WebGL, or onScroll timelines, visual effect is supplementary to semantic user interaction and should honor `prefers-reduced-motion`.
- Prefer CSS logical properties to custom left/right mirroring; in docs or code samples use `dir="ltr"` locally when needed.
- Do not claim external libraries or performance tests executed when installation or browser runtime was unavailable.

## Minimum acceptance suite
| Situation | Acceptance |
|---|---|
| 320/360/390/430px | no body overflow; full control names; 44px comfortable tap areas where applicable |
| 576/768/992/1024px | controlled reflow, no fixed width clipping; container test |
| 1440/1920px | bounded reading width, coherent line lengths and focus visibility |
| RTL/LTR | logical start/end alignment, correct focus order and text shaping |
| 200%/400% zoom | actionable content still visible and reachable |
| Keyboard | tab order, Escape, visible focus, no accidental traps |
| Reduced motion | decorative effects stop, no information missing |
| High contrast | borders and focus remain perceivable |
| 3D unavailable | usable static alternative and no crashes |

## Further primary reading
- https://tailwindcss.com/docs/theme
- https://tailwindcss.com/docs/responsive-design
- https://getbootstrap.com/docs/5.3/layout/grid/
- https://getbootstrap.com/docs/5.3/getting-started/rtl/
- https://www.w3.org/WAI/WCAG22/quickref/

The reference is original engineering guidance, not a verbatim reprint of proprietary project source.

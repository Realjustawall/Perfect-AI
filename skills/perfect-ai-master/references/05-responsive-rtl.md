# Responsive by construction — mobile, tablet, desktop, input modes, RTL

## 1. Don't confuse responsive CSS with responsive experience

A page adapts content, layout, graphics, interaction, typography and resource budgets. For each major section specify constraints for width, *height*, aspect ratio, DPR, touch precision, font scaling, keyboard, RTL and reduced motion. The same hero shouldn't simply shrink from 1440px to 375px with `transform:scale()`.

## 2. Width-driven layout strategy

Start at 320px min CSS viewport, test 360/375/390/430, 600, 768, 1024, 1280, 1440, 1920. Breakpoints based on actual content breakage, not purely device labels. Suggested *review points* (not universal CSS defaults):

| Width | Navigation | Grids | Orb / 3D stage | Type |
| --- | --- | --- | --- | --- |
| 320–479 | single compact header/menu | single column | <=viewport width, usually visual top with copy below | `clamp(2.1rem,8vw,3.4rem)` display, readable body |
| 480–767 | compact / bottom disclosure | 1–2 columns if content fits | reduced point count, simplified postprocess | 2.5–4rem display |
| 768–1023 | menu or full nav if fits | 2 columns | orb offset and shorter sticky stage | 3.5–5rem display |
| 1024–1439 | full navigation | 2–4 columns | full 3D with moderate DPR | 4–6rem display |
| >=1440 | controlled max-width content | 3–4 columns | full shader, max 3D size to preserve negative space | responsive cap |

## 3. Height and scroll stage issues

- Distinguish `100vh`, `100dvh`, `100svh`, `100lvh`. Use `min-height:100svh` for reliable initial hero and `dvh` when desired dynamic behavior is verified.
- Sticky scroll journey: outer section `height` should derive from scenes (`n * min(100svh,...)`) and sticky child `top:0; height:100svh`; ensure parent overflow isn't clipping sticky unexpectedly.
- When mobile is in landscape with height 360px, pinned 3D can hide content; switch to normal flow/text-first or shallower journey.
- Anchor navigation header offset: `scroll-margin-top:var(--header-height)`; fixed elements must not cover focused content.
- Beware scrollbar disappearing due to modal, iOS Safari toolbar and overscroll behavior.

## 4. RTL, LTR mixed content and logical CSS

```html
<html lang="fa" dir="rtl">
  <h1>اسکیل <bdi dir="ltr">Perfect_AI</bdi> شاهکار خلق کنید</h1>
  <code dir="ltr">npm i animejs three</code>
</html>
```

Use `margin-inline`, `padding-inline`, `inset-inline-start/end`, `border-inline`, `text-align:start`, Tailwind v4 equivalents (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`). Do **not** flip numeric quantities, maps, logos, UI play icons or waveform directional semantics without thought. Phone/IBAN/code/url controls need LTR while labels remain Persian. Avoid mixing `flex-row-reverse` with `dir=rtl`. For bilingual toggles, set `lang`, `dir`, typography and icons in a coherent state, and preserve URL/internal identifiers.

## 5. Touch and pointer

- Minimum touch targets target >=44x44 CSS px; gap between adjacent actions.
- Pointer detection via `(hover:hover) and (pointer:fine)` vs coarse pointer. `:hover` must never be essential.
- Mobile swipe can conflict with vertical page scrolling; favor CSS `touch-action:pan-y` for decorative canvas and `pointer-events:none` when orb isn't directly draggable.
- If interactive canvas can rotate, show an affordance and separate axis handling; pointer capture on deliberate drag only. Ensure browser back swipe works.
- For reduced motion/performance tiers disable optional parallax and continuously moving background.

## 6. Responsive Three.js exact pipeline

1. Size visible canvas container via CSS, not window alone.
2. Measure `getBoundingClientRect()` or ResizeObserver contentRect when dimension changes.
3. Compute render pixel width/height with capped DPR/quality; avoid oversized offscreen buffer.
4. Call renderer `setSize(cssW,cssH,false)` as appropriate; update backing strategy consistently. Prevent doubled DPR scaling.
5. Update camera.aspect and `.updateProjectionMatrix()`; recalc scene composition and raycaster canvas rect.
6. On high DPI decide quality tier based on observed frame time (e.g., EMA), and show simpler geometry/bloom if FPS remains low.
7. Reflow DOM foreground independently of 3D camera and preserve text focus.

## 7. Responsive Anime.js

Use `createScope({ mediaQueries:{ small:'(max-width: 767px)', reduce:'(prefers-reduced-motion: reduce)' } })` to select durations/distances or return static state. For text splittings, re-measure lines after font load/width changes; don't animate old letter wrappers after reflow. For scroll timelines, test reverse path and final state across breakpoint transitions; if rebuilding, revert old scope first. Smooth scroll optional and should not interfere with native controls.

## 8. Typography and content reflow

Mobile font size >=16px inputs to avoid iOS focus zoom; safe line-height, no `white-space:nowrap` on long Persian headings. Use `text-wrap: balance` where supported and fallback naturally. Never clip Arabic descenders/calligraphic forms in word/line reveal. Maintain actual semantic order matching visual order. Zoom browser to 200% and check horizontal overflow and clipped CTA.

## 9. Device matrix and acceptance

Test at least:
- 320x568 small Android, 375x667 iPhone-size, 390x844 portrait, 768x1024 tablet, 1024x768 landscape, 1440x900 desktop, 1920x1080.
- Touch/no hover, keyboard only, reduced motion, high contrast, dark/light where present, landscape, 200% zoom, font loading delayed, JS disabled fallback, context loss.
- Validate not just screenshot: tab through controls, submit form errors, scroll down/back/up slowly and fast, back/forward route, scroll anchoring, image loading.

## 10. CSS starter

```css
:root { --header-h: 72px; --gutter: clamp(16px,4vw,72px); }
.page-container { width:min(100% - 2 * var(--gutter), 1300px); margin-inline:auto; }
.hero { min-height:100svh; display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1fr); gap:clamp(24px,4vw,80px); align-items:center; }
.hero-copy { min-width:0; }
.hero-visual { min-width:0; aspect-ratio:1; position:relative; }
.hero canvas { display:block; width:100%; height:100%; }
:where(section[id]) { scroll-margin-top:calc(var(--header-h) + 16px); }
@media (max-width: 800px) { .hero { grid-template-columns:1fr; }.hero-visual{order:-1; width:min(94vw,520px); margin-inline:auto;} }
@media (max-height: 500px) and (orientation:landscape) { .hero {min-height:auto; padding-block:120px 48px;} }
@media (prefers-reduced-motion:reduce) { *,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important} }
```

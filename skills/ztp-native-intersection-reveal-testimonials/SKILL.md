---
name: ztp-native-intersection-reveal-testimonials
description: Apply IntersectionObserver reveal via native to a testimonials, including implementation code, responsive constraints, RTL, reduced motion and browser acceptance tests. Use for testimonials animation or responsive frontend engineering.
---

# Codex skill: IntersectionObserver reveal for Testimonials

For each user request, inspect existing code first, apply the practical implementation below (do not just describe it), retain all existing product functionality, and test the actual result. The snippet is a starting integration recipe, not a complete standalone application. Avoid MCP and avoid fetching untrusted code automatically.

# Pattern: IntersectionObserver reveal for Testimonials

**Pattern ID:** `ztp-native-intersection-reveal-testimonials`  
**Technique:** NATIVE / IntersectionObserver reveal  
**Audience:** Persian + English, desktop/mobile, touch/keyboard.  
**Reference:** https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

## Why and when

Intersection-based enhancements with content-first visibility. In the **Testimonials** context: quote cards with attribution. Important constraint: **quotes must be authentic user supplied data**. 

## Implementation prerequisites

- No dependency required. Use the existing project package manager and do not install packages without checking existing versions.
- Base responsive contract: inline sizes 320–2560 CSS px, content width independent of device, safe areas, container queries where useful.
- Create HTML semantic structure first; running animations are progressive enhancement, never a substitute for functionality.
- For a Perfect_AI request, honor the strict monochrome design system; otherwise choose colors through the palette-decision engine and audit contrast.

## Scoped markup starter (adapt, not copy into every component)

```html
<section id="zt-intersection-reveal-testimonials" lang="fa" dir="rtl" aria-label="Testimonials">
  <h2 data-zt-heading>Testimonials: clear, real heading</h2>
  <div data-zt-collection>
    <p data-zt-item>Actual readable content; replace with verified product copy.</p>
  </div>
  <button type="button" data-zt-trigger>Open details</button>
  <span data-zt-status role="status"></span>
  <div data-zt-scene aria-hidden="true"></div>
  <!-- SVG-specific effects: add an accessible <svg> with [data-zt-path] and [data-zt-marker]. -->
  <!-- Draggable effect: add a nonessential visual node [data-zt-drag]. -->
  <!-- Dialog effect: add native <dialog> with [data-zt-close] control. -->
</section>
```

**Scaffold note:** Replace placeholder copy with project data, preserve heading hierarchy, and do not create imaginary claims.

## Technique implementation

```javascript
const nodes=document.querySelectorAll('#zt-intersection-reveal-testimonials [data-zt-item]');
const observer=new IntersectionObserver((entries)=>entries.forEach(e=>{if(e.isIntersecting){e.target.dataset.visible='true';observer.unobserve(e.target);}}),{threshold:.12});
nodes.forEach(node=>observer.observe(node));
// CSS: [data-zt-item]{opacity:1} @media(prefers-reduced-motion:no-preference){[data-zt-item]{transition:opacity .5s,transform .5s;}[data-visible=false]{opacity:.2;transform:translateY(10px)}}
// Disconnect when view unmounts; initial content remains accessible.
```

**Runtime contract:** If snippet uses JavaScript, place it in the existing app lifecycle and remove listeners/observers during teardown. If snippet uses CSS, include it in a bundled stylesheet with feature detection and sensible non-support fallback.

## Interaction specification

1. Initial: content is visible and usable without JS, including with WebGL unsupported.
2. Enter/gesture: motion runs only when useful; keyboard/touch users get the same affordance and outcome.
3. During interaction: preserve critical pointer events and focus. Avoid forced synchronous layout in a frame callback.
4. Cancel/interruption: dispose observers, timers, animation handles and GPU resources, restore original styles.
5. Reverse/navigate: scroll back restores progress or safely retains final state; no duplicate listeners after route changes.

## Responsive + RTL acceptance matrix

| Width or mode | Required behavior |
|---|---|
| 320–374px | one-column content, no horizontal overflow, full labels and usable tap targets |
| 375–767px | natural wrapping, dynamic browser chrome, safe-area padding |
| 768–1023px | 2-column only if container is wide enough; no reliance on hover |
| 1024–1439px | balanced layout and legible supporting copy, bounded motion amplitude |
| >=1440px | max-width limits; 3D/compositing resolution remains budgeted |
| Persian RTL | logical CSS properties, correct mixed-direction numerals and focus flow |
| 200–400% zoom | content reflows without clipped functional elements |
| Reduced motion / WebGL blocked | static readable content; controls remain functional |

## Definition of done

- [ ] Correct semantic hierarchy and real content for testimonials.
- [ ] Verified: do not create fictional endorsements.
- [ ] Contrast target >= 4.5:1 for normal text, >= 3:1 for relevant UI boundaries and large text.
- [ ] Tested 320, 390, 768, 1024 and 1440px, RTL/LTR, keyboard, coarse pointer, reduced motion.
- [ ] No hidden error in the console; no React component leaks; screenshots compared where visual fidelity matters.
- [ ] Run bundle/build/lint + targeted browser test; document any unverified dependency-specific sample.

## Source and rights

Originally authored integration recipe based on the API documentation above; it is **not** copied original source from a third-party website. The scaffold is illustrative. Copy only pieces appropriate to the actual component. For library code verify package/version and upstream license.

---
name: ztp-native-view-transition-checkout
description: Apply Document view transitions via native to a checkout form, including implementation code, responsive constraints, RTL, reduced motion and browser acceptance tests. Use for checkout animation or responsive frontend engineering.
---

# Codex skill: Document view transitions for Checkout form

For each user request, inspect existing code first, apply the practical implementation below (do not just describe it), retain all existing product functionality, and test the actual result. The snippet is a starting integration recipe, not a complete standalone application. Avoid MCP and avoid fetching untrusted code automatically.

# Pattern: Document view transitions for Checkout form

**Pattern ID:** `ztp-native-view-transition-checkout`  
**Technique:** NATIVE / Document view transitions  
**Audience:** Persian + English, desktop/mobile, touch/keyboard.  
**Reference:** https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API

## Why and when

Animate DOM state changes with safe feature detection. In the **Checkout form** context: fields, payment details and submit control. Important constraint: **critical controls must never be draggable or under animation**. 

## Implementation prerequisites

- No dependency required. Use the existing project package manager and do not install packages without checking existing versions.
- Base responsive contract: inline sizes 320–2560 CSS px, content width independent of device, safe areas, container queries where useful.
- Create HTML semantic structure first; running animations are progressive enhancement, never a substitute for functionality.
- For a Perfect_AI request, honor the strict monochrome design system; otherwise choose colors through the palette-decision engine and audit contrast.

## Scoped markup starter (adapt, not copy into every component)

```html
<section id="zt-view-transition-checkout" lang="fa" dir="rtl" aria-label="Checkout form">
  <h2 data-zt-heading>Checkout form: clear, real heading</h2>
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

**Scaffold note:** The checkout form requires extra interactive implementation: validation, focus and error summary. The basic scaffold is illustrative and not a complete application flow.

## Technique implementation

```javascript
const link=document.querySelector('#zt-view-transition-checkout [data-zt-trigger]');
link?.addEventListener('click',async ()=>{
 const update=()=>document.querySelector('#zt-view-transition-checkout [data-zt-item]').classList.toggle('selected');
 if(document.startViewTransition && !matchMedia('(prefers-reduced-motion: reduce)').matches){await document.startViewTransition(update).finished;} else update();
});
// Only use for client-side state changes; make controls semantic buttons.
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

- [ ] Correct semantic hierarchy and real content for checkout form.
- [ ] Verified: validation, focus and error summary.
- [ ] Contrast target >= 4.5:1 for normal text, >= 3:1 for relevant UI boundaries and large text.
- [ ] Tested 320, 390, 768, 1024 and 1440px, RTL/LTR, keyboard, coarse pointer, reduced motion.
- [ ] No hidden error in the console; no React component leaks; screenshots compared where visual fidelity matters.
- [ ] Run bundle/build/lint + targeted browser test; document any unverified dependency-specific sample.

## Source and rights

Originally authored integration recipe based on the API documentation above; it is **not** copied original source from a third-party website. The scaffold is illustrative. Copy only pieces appropriate to the actual component. For library code verify package/version and upstream license.

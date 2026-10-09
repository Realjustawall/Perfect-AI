# Pattern: Material state transition for KPI strip

**Pattern ID:** `ztp-three-material-transition-metrics`  
**Technique:** THREE / Material state transition  
**Audience:** Persian + English, desktop/mobile, touch/keyboard.  
**Reference:** https://threejs.org/docs/

## Why and when

Physically sensible tone change without saturated glow. In the **KPI strip** context: metric values and context. Important constraint: **units and numbers must be clear**. 

## Implementation prerequisites

- npm install three. Use the existing project package manager and do not install packages without checking existing versions.
- Base responsive contract: inline sizes 320–2560 CSS px, content width independent of device, safe areas, container queries where useful.
- Create HTML semantic structure first; running animations are progressive enhancement, never a substitute for functionality.
- For a Perfect_AI request, honor the strict monochrome design system; otherwise choose colors through the palette-decision engine and audit contrast.

## Scoped markup starter (adapt, not copy into every component)

```html
<section id="zt-material-transition-metrics" lang="fa" dir="rtl" aria-label="KPI strip">
  <h2 data-zt-heading>KPI strip: clear, real heading</h2>
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
import * as THREE from 'three';
const mat=new THREE.MeshStandardMaterial({color:'#777777',roughness:.8});
const mesh=new THREE.Mesh(new THREE.SphereGeometry(.9,36,24),mat);scene.add(mesh);
const target=new THREE.Color('#eeeeee');
const update=(delta)=>{mat.color.lerp(target,1-Math.exp(-delta*4));};
// Change target in response to a real state event; dispose resources.
```

**Runtime contract:** Bootstrap once: `const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera(42,1,.1,100); const renderer = new THREE.WebGLRenderer({alpha:true, antialias:true}); camera.position.z=5; const clock=new THREE.Clock();` Mount the renderer canvas inside `[data-zt-scene]`, add ambient/directional light for standard materials, and drive `update(delta,elapsed)` from a single `requestAnimationFrame` loop. The snippet is inserted into this host. Test WebGL context loss, reduced motion, and cleanup. The GLB URL is a placeholder until an asset is supplied.

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

- [ ] Correct semantic hierarchy and real content for kpi strip.
- [ ] Verified: tabular numerals and live updates controlled.
- [ ] Contrast target >= 4.5:1 for normal text, >= 3:1 for relevant UI boundaries and large text.
- [ ] Tested 320, 390, 768, 1024 and 1440px, RTL/LTR, keyboard, coarse pointer, reduced motion.
- [ ] No hidden error in the console; no React component leaks; screenshots compared where visual fidelity matters.
- [ ] Run bundle/build/lint + targeted browser test; document any unverified dependency-specific sample.

## Source and rights

Originally authored integration recipe based on the API documentation above; it is **not** copied original source from a third-party website. The scaffold is illustrative. Copy only pieces appropriate to the actual component. For library code verify package/version and upstream license.

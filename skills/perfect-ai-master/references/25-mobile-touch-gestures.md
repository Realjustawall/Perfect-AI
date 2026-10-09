# Pointer/touch interaction model — mobile-first

- Treat touch as first-class input. Hover is enhancement only, never exclusive access to important information. Use `pointerdown`/`pointermove`/`pointerup`/`pointercancel` for unified mouse, pen and touch; capture pointer only when a genuine drag is initiated and release it reliably. `touch-action:pan-y` on horizontal drag controls if vertical page scroll must remain available; do not globally use `touch-action:none`.
- Model tap vs drag thresholds in CSS pixels, account for device pixel ratio indirectly via pointer coords. Cancel gestures when a nested button gets focus or pointer type changes. Support Escape to cancel drag and keyboard arrows for sliders where appropriate.
- Provide comfortable interactive targets (often >=44x44 CSS px), separation, and visible focus. Avoid long-press as the sole action. Do not hijack pull-to-refresh/back swipe or trap vertical scroll.
- Sticky footer/mobile nav: inset `env(safe-area-inset-bottom)`; test bottom browser bar & on-screen keyboard. Menus: button with `aria-expanded`, close on Escape, outside pointer; return focus to trigger.
- Check gestures with passive listeners; don't call `preventDefault` on passive events. Disable unnecessary motion when reduced-motion enabled.

```js
const drag={active:false,startX:0};
handle.addEventListener('pointerdown',event=>{
 if(event.button!==0 || event.target.closest('button,a,input'))return;
 drag.active=true;drag.startX=event.clientX;handle.setPointerCapture(event.pointerId);
});
handle.addEventListener('pointermove',event=>{
 if(!drag.active)return;
 const delta=event.clientX-drag.startX;
 // set visual translation; clamp to known bounds
});
const end=()=>{drag.active=false};
handle.addEventListener('pointerup',end);handle.addEventListener('pointercancel',end);
```

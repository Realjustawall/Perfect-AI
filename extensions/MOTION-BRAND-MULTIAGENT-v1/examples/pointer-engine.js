/** Local pointer space + damped animation. No global cursor replacement. */
export function bindInteractiveSurface(el, {maxTilt = 7, strength = 10} = {}) {
  if (!el || !matchMedia('(hover: hover) and (pointer: fine)').matches ||
      matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  const state = { x: 0, y: 0, tx: 0, ty: 0, raf: 0, running: true };
  function move(ev) {
    const box = el.getBoundingClientRect();
    if (!box.width || !box.height) return;
    const nx = Math.max(-1, Math.min(1, ((ev.clientX-box.left)/box.width)*2-1));
    const ny = Math.max(-1, Math.min(1, ((ev.clientY-box.top)/box.height)*2-1));
    state.tx = nx; state.ty = ny;
  }
  function leave(){state.tx=state.ty=0;}
  function frame() {
    if (!state.running) return;
    state.x += (state.tx-state.x)*.14;
    state.y += (state.ty-state.y)*.14;
    el.style.setProperty('--zt-pointer-rotate-x', `${-state.y*maxTilt}deg`);
    el.style.setProperty('--zt-pointer-rotate-y', `${state.x*maxTilt}deg`);
    el.style.setProperty('--zt-pointer-offset-x', `${state.x*strength}px`);
    el.style.setProperty('--zt-pointer-offset-y', `${state.y*strength}px`);
    state.raf=requestAnimationFrame(frame);
  }
  el.addEventListener('pointermove',move,{passive:true});
  el.addEventListener('pointerleave',leave);
  frame();
  return () => {state.running=false;cancelAnimationFrame(state.raf);
    el.removeEventListener('pointermove',move);el.removeEventListener('pointerleave',leave);
    ['--zt-pointer-rotate-x','--zt-pointer-rotate-y','--zt-pointer-offset-x','--zt-pointer-offset-y'].forEach(v=>el.style.removeProperty(v));};
}

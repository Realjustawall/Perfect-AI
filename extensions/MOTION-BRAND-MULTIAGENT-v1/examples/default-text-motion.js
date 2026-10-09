// Default motion module for modern Vite/React projects using Anime.js v4.
// npm i animejs
// Call initDefaultTextMotion() from the application's client entry point.
import { animate, splitText, stagger } from 'animejs';

/** Progressive enhancement: content is visible without JavaScript and reduced motion. */
export async function initDefaultTextMotion({root=document, selectors='h1,h2,.section-heading,[data-zt-reveal]'}={}) {
  if (typeof document === 'undefined') return () => {};
  const mq = matchMedia('(prefers-reduced-motion: reduce)');
  let ended = false;
  let observer = null;
  let effects = [];
  const active = new Set();

  function teardown() {
    observer?.disconnect(); observer = null;
    for (const revert of effects.splice(0)) revert();
    active.clear();
  }

  async function mount() {
    if (mq.matches || ended) return;
    await document.fonts.ready;
    if (mq.matches || ended) return;
    const items = [...root.querySelectorAll(selectors)].filter(el =>
      el instanceof HTMLElement && !el.hasAttribute('data-zt-no-motion') && !el.hasAttribute('data-zt-motion-ready')
    );
    observer = typeof IntersectionObserver === 'undefined' ? null :
      new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting || !active.has(entry.target)) continue;
          const state = active.get(entry.target);
          state.visible = true;
          state.animation?.play();
          observer.unobserve(entry.target);
        }
      }, {threshold: .1, rootMargin:'0px 0px -4% 0px'});

    for (const el of items) {
      el.dataset.ztMotionReady = 'true';
      const state = {animation:null,visible:!observer};
      active.add(el);
      const split = splitText(el, {words:{wrap:'clip'}});
      // Unlike standalone animate(), addEffect recreates animations after responsive line re-splits.
      split.addEffect(({words}) => {
        const animation = animate(words, {
          y:['105%','0%'], opacity:[0.15,1], duration:700,
          delay:stagger(42), ease:'out(3)', autoplay:false
        });
        state.animation = animation;
        if (state.visible) animation.play();
        return animation;
      });
      effects.push(() => {
        split.revert();
        delete el.dataset.ztMotionReady;
      });
      if (observer) observer.observe(el);
    }
  }

  function onMotionChange() {
    teardown();
    if (!mq.matches) mount();
  }
  mq.addEventListener('change',onMotionChange);
  await mount();
  return () => {ended=true;mq.removeEventListener('change',onMotionChange);teardown();};
}

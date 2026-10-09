import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

/** One timeline owns scroll stage and DOM elements. Three updates consume a shared scalar. */
export function initPinnedStory({ section, stage, modelState, title, copy }) {
  if (typeof window === 'undefined' || !section || !stage) return () => {};
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduced.matches) return () => {};
  const state = { progress: 0 };
  const timeline = gsap.timeline({
    defaults: { ease: 'none' },
    scrollTrigger: {
      trigger: section, pin: stage, start: 'top top', end: '+=230%',
      scrub: 0.45, invalidateOnRefresh: true,
      onUpdate: self => { modelState.progress = self.progress; },
    },
  });
  // Do not animate the pin node: animate INNER child nodes.
  timeline.fromTo(title, { yPercent: 12, opacity: .35 }, { yPercent: 0, opacity: 1, duration: .4 });
  timeline.fromTo(copy, { opacity: .25, y: 12 }, { opacity: 1, y: 0, duration: .3 }, '-=.2');
  const refresh = () => ScrollTrigger.refresh();
  document.fonts?.ready.then(refresh);
  window.addEventListener('resize', refresh, { passive: true });
  return () => { window.removeEventListener('resize', refresh); timeline.scrollTrigger?.kill(); timeline.kill(); };
}

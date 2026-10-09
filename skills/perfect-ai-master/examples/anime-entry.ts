/** Example recipe for Anime.js v4 text/DOM motion. Requires `npm i animejs`. */
import { animate, createTimeline, stagger, splitText, onScroll } from 'animejs';

export async function animateHeading(element: HTMLElement) {
  await document.fonts.ready;
  const { words } = splitText(element, { words: { wrap: 'clip' } });
  if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  const timeline = createTimeline({ defaults: { duration: 630, ease:'outCubic' } });
  timeline.add(words, { y:['100%', '0%'], opacity:[0, 1], delay:stagger(40) });
  return timeline;
}

export function revealOnScroll(target: HTMLElement) {
  if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  return animate(target,{ y:[25,0], opacity:[0,1], duration:650,
    autoplay:onScroll({ target, enter:'bottom top', leave:'top bottom', sync:true })
  });
}

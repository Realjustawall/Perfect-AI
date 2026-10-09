import gsap from 'gsap';
import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function installLenisSync() {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};
  const lenis = new Lenis({ autoRaf: false });
  const update = () => ScrollTrigger.update();
  const ticker = time => lenis.raf(time * 1000); // GSAP seconds -> milliseconds.
  lenis.on('scroll', update);
  gsap.ticker.add(ticker);
  return () => { gsap.ticker.remove(ticker); lenis.off('scroll', update); lenis.destroy(); };
}

/** Pure 0..1 progress mapping for sticky 3D scroll journeys. No Anime.js required. */
export const clamp01 = x => Math.min(1, Math.max(0, Number.isFinite(x) ? x : 0));
export const smoothstep = x => { const t=clamp01(x);return t*t*(3-2*t); };
export const lerp = (a,b,t) => a+(b-a)*clamp01(t);
export function progressFromScroll(scrollY, sectionTop, sectionHeight, viewportHeight) {
  const travel = Math.max(1, sectionHeight - viewportHeight);
  return clamp01((scrollY - sectionTop)/travel);
}
/** A chapter's soft entry and exit envelope. */
export function chapterOpacity(progress,start,end,edge=.12) {
  if (end<=start) return 0;
  const width=end-start;
  const fade=Math.min(Math.max(edge,0.001),.49)*width;
  return Math.min(smoothstep((progress-start)/fade),smoothstep((end-progress)/fade));
}
export function scenePose(progress) {
  const p=clamp01(progress);
  return {
    yaw:lerp(0, Math.PI*2.5, smoothstep(p)),
    scale:lerp(1,1.22,smoothstep((p-.14)/.54)),
    explode:smoothstep((p-.25)/.35)*(1-smoothstep((p-.76)/.22)),
    halo:smoothstep((p-.1)/.6),
  };
}

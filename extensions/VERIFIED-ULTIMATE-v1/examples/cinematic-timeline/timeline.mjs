// A single deterministic time source; adapters must own non-overlapping properties.
export function createPlayhead(durationMs, onRender) {
  if (!Number.isFinite(durationMs) || durationMs <= 0) throw Error('durationMs must be positive');
  let ms = 0,playing = false,direction=1,lastTime=null;
  const clamp = t => Math.min(durationMs, Math.max(0,Number(t)||0));
  const render = () => onRender(ms/durationMs, ms);
  return {
    get timeMs(){return ms}, get progress(){return ms/durationMs}, get playing(){return playing},
    seek(t){ ms=clamp(t);render();return ms },
    play(){playing=true;lastTime=null}, pause(){playing=false;lastTime=null},
    reverse(){direction*=-1;playing=true;lastTime=null},
    replay(){direction=1;this.seek(0);this.play()},
    tick(now){ if(!playing) return;
      if(lastTime===null){lastTime=now;render();return}
      const dt=Math.max(0,Math.min(1000,now-lastTime));lastTime=now;this.seek(ms+dt*direction);
      if(ms===0||ms===durationMs){playing=false;lastTime=null}
    }
  };
}
// Build each adapter only after corresponding library is installed; time units differ.
export const adaptAnime = animation => (progress,ms) => {animation.pause();animation.seek(ms,true)};
export const adaptGSAP = timeline => (progress,ms) => {timeline.pause();timeline.time(ms/1000,true)};
export const adaptMotion = controls => (progress,ms) => {controls.pause();controls.time=ms/1000};
export const adaptThree = renderAtNormalizedProgress => (progress,ms) => renderAtNormalizedProgress(progress,ms);
export function combineAdapters(...adapters){ return (progress,ms) => {for (const cb of adapters) cb(progress,ms)} }
// Never animate same CSS transform via GSAP AND Anime simultaneously.

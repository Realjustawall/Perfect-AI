/** One canonical clock; video, camera and effects share seconds. */
export function createTimeline({duration,loop=false}={}){
 if(!Number.isFinite(duration)||duration<=0)throw Error('positive duration required');
 let time=0,rate=1,playing=false,last=null;
 const listeners=new Set();
 const clamp=x=>loop?((x%duration)+duration)%duration:Math.max(0,Math.min(duration,x));
 const emit=()=>{for(const cb of listeners)cb({time,progress:time/duration,playing,rate});};
 return {
  seek(seconds){if(!Number.isFinite(seconds))throw Error('invalid time');time=clamp(seconds);last=null;emit();return time;},
  play(){playing=true;last=null;emit();},pause(){playing=false;last=null;emit();},
  rate(value){if(!Number.isFinite(value)||value===0)throw Error('rate cannot be zero');rate=value;emit();},
  tick(timestampMs){if(!Number.isFinite(timestampMs))throw Error('invalid timestamp');
    if(!playing){last=timestampMs;return time;}
    if(last!==null){time=clamp(time+Math.min(0.25,Math.max(0,(timestampMs-last)/1000))*rate);if(!loop&&(time===0||time===duration))playing=false;}
    last=timestampMs;emit();return time;},
  read:()=>({time,progress:time/duration,rate,playing}),
  onChange(cb){listeners.add(cb);return()=>listeners.delete(cb);}
 };
}
export function nearestFrame(seconds,fps=30){if(seconds<0||!Number.isFinite(seconds)||fps<=0)throw Error('invalid media timing');return Math.round(seconds*fps);}
export function syncVideoElement(video,time,tolerance=0.065){if(!video||!Number.isFinite(time))return false; if(!Number.isFinite(video.duration)||time>video.duration)return false;
 if(Math.abs(video.currentTime-time)>tolerance){video.currentTime=time;return true;}return false;}

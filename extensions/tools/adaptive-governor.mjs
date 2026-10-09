// Standalone rendering quality policy: uses measured samples, not a claimed FPS benchmark.
export function chooseQuality({frameTimes=[],current='high',reducedMotion=false,saveData=false,hidden=false,deviceMemory=null}={}){
 if(hidden||reducedMotion||saveData)return 'static';
 if(!frameTimes.length)return current;
 const times=frameTimes.filter(x=>Number.isFinite(x)&&x>=0).slice(-90).sort((a,b)=>a-b);
 if(!times.length)return current;
 const trimmed=times.slice(Math.floor(times.length*.1),Math.ceil(times.length*.9));
 const avg=trimmed.reduce((a,b)=>a+b,0)/trimmed.length;
 if(avg>33||deviceMemory!==null&&deviceMemory<=2)return 'low';
 if(avg>21)return current==='low'?'low':'medium';
 if(avg<14&&deviceMemory!==null&&deviceMemory>=4)return 'high';
 if(avg<17)return current==='low'?'medium':current;
 return current;
}
export const tierSettings={static:{particles:0,dpr:1,shadows:false,postFx:false},low:{particles:150,dpr:1,shadows:false,postFx:false},medium:{particles:800,dpr:1.25,shadows:false,postFx:false},high:{particles:2400,dpr:1.75,shadows:true,postFx:true}};

import {clamp} from './utils.mjs';
/** Honest readiness: progress is task completion, not invented network bytes. */
export class ReadinessGate{
 constructor(tasks){if(!Array.isArray(tasks)||!tasks.length)throw new Error('readiness tasks required');this.tasks=tasks.map(({name,run,required=true,weight=1})=>({name,run,required,weight,status:'pending'}));if(this.tasks.some(t=>!t.name||typeof t.run!=='function'||t.weight<=0))throw new Error('invalid tasks')}
 get progress(){return this.tasks.reduce((s,t)=>s+(t.status==='passed'?t.weight:0),0)/this.tasks.reduce((s,t)=>s+t.weight,0)}
 async start({signal,onProgress=()=>{}}={}){const reports=[];for(const task of this.tasks){if(signal?.aborted)return {status:'aborted',progress:this.progress,reports};try{await task.run(signal);task.status='passed';reports.push({name:task.name,status:'passed'})}catch(e){task.status='failed';reports.push({name:task.name,status:'failed',message:String(e)});if(task.required){onProgress(this.progress,task);return {status:'failed',progress:this.progress,reports}}}onProgress(this.progress,task)}return {status:'ready',progress:this.progress,reports}}
}
export function introProgress(progress,{maxDuration=700}={}){return {opacity:1-clamp(progress),translateY:clamp(progress)*-18,maxDuration}}

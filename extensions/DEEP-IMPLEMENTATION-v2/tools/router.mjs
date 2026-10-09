#!/usr/bin/env node
// Offline, deterministic, additive retrieval router. Does not execute skill content.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const base=path.dirname(fileURLToPath(import.meta.url));
const catalog=JSON.parse(fs.readFileSync(path.resolve(base,'../registry/skill-map.json'),'utf8'));
const stop=new Set(['and','the','for','with','from','make','build','website','site','skills','that','are','design','in','to','a','of','user','new','use']);
const tokens=s=>new Set((String(s).toLowerCase().match(/[a-z0-9-]{3,}|[\u0600-\u06ff]{2,}/g)||[]).filter(x=>!stop.has(x)));
const overlaps=(a,b)=>[...a].filter(x=>b.has(x)).length;
export function route(brief, max=7){
 const statement=[brief.goal,brief.features?.join(' '),brief.constraints?.join(' '),brief.stack?.join(' '),brief.tags?.join(' ')].filter(Boolean).join(' ');
 const wanted=tokens(statement);
 const recs=catalog.skills.filter(x=>x.task!=='master'&&x.task!=='domain-master').map(x=>{
  const source=tokens(`${x.domain} ${x.task.replaceAll('-',' ')} ${x.description}`);
  let score=overlaps(wanted,source);
  for (const key of Object.keys(brief.weights||{})) if(source.has(key))score+=Number(brief.weights[key])||0;
  return {...x,score};
 }).filter(x=>x.score>0).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));
 const result=[];const domains=new Set();
 for(const r of recs){if(result.length>=max)break;if(domains.has(r.domain)&&result.length<Math.min(max-1,4))continue;result.push(r);domains.add(r.domain)}
 if(result.length<max)for(const r of recs)if(!result.includes(r)){result.push(r);if(result.length>=max)break}
 return {selected:result,unresolved:statement.trim()?[]:['No goals/features specified'],evidence:'keyword-ranking-only; model judgment required',skipped:Math.max(0,recs.length-result.length)};
}
if(import.meta.url===`file://${process.argv[1]}`){const f=process.argv[2];if(!f){console.error('Usage: node router.mjs brief.json [max]');process.exit(2)};console.log(JSON.stringify(route(JSON.parse(fs.readFileSync(f,'utf8')),Math.min(12,Math.max(1,Number(process.argv[3]||7)))),null,2));}

/** Immutable-ish command history, schema-limited editor data, no serialized executable JS. */
const NAMES=/^[a-zA-Z0-9_\- ]{1,90}$/;
const types=new Set(['group','mesh','light','camera','splat']);
const vec=(v,n=3)=>Array.isArray(v)&&v.length===n&&v.every(x=>Number.isFinite(x)&&Math.abs(x)<=1e7);
export function validateScene(doc){
 const errors=[];
 if(!doc||doc.version!==1||!Array.isArray(doc.objects))return {ok:false,errors:['invalid version/objects']};
 if(doc.objects.length>1000)errors.push('too many objects');
 const ids=new Set();
 for(const o of doc.objects){
  if(!NAMES.test(o.id??''))errors.push('invalid id');
  if(ids.has(o.id))errors.push(`duplicate id ${o.id}`);ids.add(o.id);
  if(!types.has(o.type))errors.push(`unknown type ${o.type}`);
  if(!vec(o.position)||!vec(o.rotation)||!vec(o.scale)||o.scale.some(x=>Math.abs(x)<1e-6))errors.push(`invalid transform ${o.id}`);
  if(o.color && !/^#[0-9a-fA-F]{6}$/.test(o.color))errors.push(`invalid color ${o.id}`);
  if(o.parent && o.parent===o.id)errors.push(`self parenting ${o.id}`);
 }
 for(const o of doc.objects) if(o.parent&&!ids.has(o.parent))errors.push(`missing parent ${o.id}`);
 return {ok:errors.length===0,errors};
}
export function cloneDoc(doc){return JSON.parse(JSON.stringify(doc));}
export function createEditorStore(initial={version:1,objects:[]},limit=80){const check=validateScene(initial);if(!check.ok)throw Error(check.errors.join(','));
 let doc=cloneDoc(initial),undos=[],redos=[];const subscribers=new Set();
 const notify=()=>{for(const fn of subscribers)fn(cloneDoc(doc));};
 return {
  read:()=>cloneDoc(doc),
  transact(fn){const candidate=cloneDoc(doc);fn(candidate);const c=validateScene(candidate);if(!c.ok)throw Error(c.errors.join(','));undos.push(doc);if(undos.length>limit)undos.shift();doc=candidate;redos=[];notify();return cloneDoc(doc);},
  undo(){if(!undos.length)return false;redos.push(doc);doc=undos.pop();notify();return true;},
  redo(){if(!redos.length)return false;undos.push(doc);doc=redos.pop();notify();return true;},
  importJSON(s){const next=JSON.parse(s);const c=validateScene(next);if(!c.ok)throw Error(c.errors.join(','));undos.push(doc);doc=cloneDoc(next);redos=[];notify();},
  exportJSON:()=>JSON.stringify(doc,null,2),
  subscribe(fn){subscribers.add(fn);return()=>subscribers.delete(fn);}
 };
}
export function blankObject(id,type='mesh'){return {id,type,position:[0,0,0],rotation:[0,0,0],scale:[1,1,1],color:'#75a8ff'};}

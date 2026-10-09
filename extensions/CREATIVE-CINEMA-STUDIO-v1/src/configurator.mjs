/** Strict, serializable product configuration; no arbitrary user-provided HTML or eval. */
export class ProductConfigurator{
 constructor(schema,initial={}){if(!schema||typeof schema!=='object')throw new Error('schema');this.schema=schema;this.history=[];this.state={};for(const [key,def] of Object.entries(schema)){if(!Array.isArray(def.options)||!def.options.length)throw new Error(`options required ${key}`);this.state[key]=initial[key]??def.default??def.options[0]}for(const [key,value] of Object.entries(this.state))this.validate(key,value)}
 validate(key,value){const def=this.schema[key];if(!def||!def.options.includes(value))throw new Error(`invalid ${key} option ${value}`);if(def.requires&&Object.entries(def.requires).some(([other,valid])=>!valid.includes(this.state[other])))throw new Error(`${key} incompatible with current configuration`);}
 update(key,value){const previous={...this.state};this.state[key]=value;try{for(const [name,val] of Object.entries(this.state))this.validate(name,val)}catch(err){this.state=previous;throw err}this.history.push(previous);return this.snapshot()}
 undo(){if(this.history.length)this.state=this.history.pop();return this.snapshot()}
 snapshot(){return Object.freeze({...this.state})}
 serialize(){return Object.entries(this.state).sort(([a],[b])=>a.localeCompare(b)).map(([k,v])=>`${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&')}
 static parse(params,schema){const search=new URLSearchParams(params);const allowed={};for(const [key,def] of Object.entries(schema))if(search.has(key)&&def.options.includes(search.get(key)))allowed[key]=search.get(key);return new ProductConfigurator(schema,allowed)}
}
export function variantPatch(variant,config){return Object.fromEntries(Object.entries(config).filter(([k])=>k in variant).map(([k,v])=>[k,variant[k]?.[v]??null]));}

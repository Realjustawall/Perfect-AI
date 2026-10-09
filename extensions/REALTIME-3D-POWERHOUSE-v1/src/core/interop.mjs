/** Prohibit two render loops from owning a single canvas. */
export function createRendererRegistry(){const ownership=new WeakMap();return {
 acquire(canvas,name){if(!canvas||typeof canvas!=='object')throw Error('canvas required');const old=ownership.get(canvas);if(old&&old!==name)throw Error(`canvas already owned by ${old}`);ownership.set(canvas,name);return()=>{if(ownership.get(canvas)===name)ownership.delete(canvas);};},
 owner(canvas){return ownership.get(canvas)||null;}
};}
export function assertNoDuplicateSources(modules){const owners=new Map();for(const m of modules){for(const key of m.ownedProperties||[]){const old=owners.get(key);if(old)throw Error(`${key} double owned: ${old}/${m.name}`);owners.set(key,m.name);}}return true;}

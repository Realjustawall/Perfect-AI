import {clamp,intersection} from './utils.mjs';
/** Seeded editorial templates with deliberate constraint scoring, no magic aesthetic AI score. */
export function editorialGrid(items,{viewport=1440,gap=24,maxColumns=12,seed=19}={}){
 if(!Array.isArray(items))throw new Error('items');const columns=viewport<640?4:viewport<1024?8:maxColumns;let y=0;let state=seed>>>0;const rand=()=>{state=(1664525*state+1013904223)>>>0;return state/2**32};const placements=[];
 for(const item of items){const minCols=viewport<640?4:item.kind==='headline'?Math.ceil(columns*.6):Math.ceil(columns*.32);const span=Math.min(columns,Math.max(minCols,Math.round(columns*(.35+rand()*.5))));const align=viewport<640?0:Math.floor(rand()*(columns-span+1));const rowHeight=item.kind==='headline'?Math.max(160,viewport*.14):Math.max(220,viewport*.2);placements.push({...item,col:align,span,row:y,height:rowHeight});y+=rowHeight+gap}
 return {columns,gap,placements,documentHeight:y};
}
export function contrastHeuristic(backgroundLuminance,foregroundLuminance){const a=Math.max(backgroundLuminance,foregroundLuminance),b=Math.min(backgroundLuminance,foregroundLuminance);return (a+.05)/(b+.05)}
export function checkEditorial(placements){const issues=[];for(const p of placements){if(p.span<=0||p.col<0)issues.push({id:p.id,error:'invalid span/column'});if(!p.alt&&p.kind==='image')issues.push({id:p.id,error:'image missing alt'})}return issues}

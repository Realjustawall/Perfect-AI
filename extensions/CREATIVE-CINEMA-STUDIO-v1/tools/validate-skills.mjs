import {readdir,readFile} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import assert from 'node:assert/strict';
const base=resolve(import.meta.dirname,'../skills');const dirs=await readdir(base,{withFileTypes:true});const names=new Set();let count=0;
for(const item of dirs){if(!item.isDirectory())continue;const path=join(base,item.name,'SKILL.md');const txt=await readFile(path,'utf8');const match=txt.match(/^---\r?\nname:\s*([a-z0-9-]+)/m);assert.ok(match,`${path}: YAML name missing`);assert.equal(match[1],item.name);assert.ok(!names.has(item.name),'duplicate skill name');names.add(item.name);assert.ok(txt.length>700,`${item.name} too brief`);assert.ok(txt.includes('Acceptance')||txt.includes('acceptance')||txt.includes('Validation'),`${item.name} missing acceptance`);count++}
assert.equal(count,dirs.filter(d=>d.isDirectory()).length);console.log(JSON.stringify({status:'pass',skills:count}));

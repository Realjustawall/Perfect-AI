import test from 'node:test';import assert from 'node:assert/strict';
import {constructDesignSystem} from '../tools/palette-decision.mjs';
test('strict Perfect_AI mode preserves grayscale',()=>{const x=constructDesignSystem({monochrome:true,product:'developer'});for(const v of Object.values(x.semantic)){const [r,g,b]=[v.slice(1,3),v.slice(3,5),v.slice(5,7)].map(n=>parseInt(n,16));assert.equal(r,g);assert.equal(g,b)}assert.equal(x.patternRequiredForStatus,true)});
test('selected palette establishes accessible text pairs',()=>{for(const p of ['developer','education','finance','health','creative','gaming']){const x=constructDesignSystem({product:p,mode:'dark'});assert.ok(x.audit.filter(y=>['body','muted','button'].includes(y.name)).every(y=>y.pass),JSON.stringify(x.audit))}});
test('semantic CSS variables emit properties',()=>{const x=constructDesignSystem({monochrome:true});assert.ok(x.css.includes('--color-background:'));assert.ok(x.css.includes('--color-action-foreground:'))});

import test from 'node:test';import assert from 'node:assert/strict';
import {decide} from '../tools/design-engine.mjs';
import {oklchHex,contrast,createPalettes,previewCvd,toCss} from '../tools/color-intelligence.mjs';
import {chooseQuality,tierSettings} from '../tools/adaptive-governor.mjs';

test('black:white WCAG contrast ~=21',()=>assert.ok(Math.abs(contrast('#000000','#ffffff')-21)<.00001));
test('OKLCH gamut mapper always yields valid hex',()=>{for(let h=0;h<360;h+=12)assert.match(oklchHex(.56,.4,h),/^#[\da-f]{6}$/i)});
test('5 accessible dark & light candidates and blackwhite',()=>{for(const mode of ['light','dark']){for(const mono of [true,false]){let p=createPalettes({mode,monochrome:mono});assert.equal(p.length,5);p.forEach(x=>{assert.ok(x.checks.body>=4.5);assert.ok(x.checks.button>=4.5);assert.ok(x.checks.focusVsBackground>=3);});if(mono)for(let x of p)assert.equal(x.tokens.accent.slice(1,3),x.tokens.accent.slice(3,5));}}});
test('CVD preview shape',()=>assert.match(previewCvd('#336699','deuteranopia'),/^#[\da-f]{6}$/));
test('CSS token export',()=>assert.ok(toCss(createPalettes()[0]).includes('--zt-background:')));
test('design route selects 3D skill and not 50 unrelated',()=>{const skills=[{name:'ztx3-nexus-master',description:''},{name:'perfect-ai-master',description:''},{name:'ztx3-advanced-3d',description:'three 3d'}];let d=decide({goal:'3D interactive Three.js hero with particles',locale:'fa-IR'},skills);assert.ok(d.selectedDomains.includes('advanced-3d'));assert.ok(d.selectedSkills.length<=7)});
test('quality governor pauses hidden and honors budget',()=>{assert.equal(chooseQuality({hidden:true}), 'static');assert.equal(chooseQuality({frameTimes:Array(90).fill(40)}),'low');assert.equal(chooseQuality({frameTimes:Array(90).fill(10),deviceMemory:8}),'high');assert.equal(tierSettings.low.postFx,false)});

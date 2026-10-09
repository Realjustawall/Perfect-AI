import test from 'node:test'; import assert from 'node:assert/strict';
import {hexToRgb,contrastRatio,choosePalette,compositeHex,oklchToHex,cssTokens} from '../tools/color-engine.mjs';
test('WCAG black-white 21 to 1',()=>assert.ok(Math.abs(contrastRatio('#000000','#ffffff')-21)<1e-8));
test('hex decode and compositing',()=>{assert.deepEqual(hexToRgb('#112233'),[17,34,51]);assert.equal(compositeHex('#ffffff','#000000',.5),'#808080');});
test('strict monochrome produces only greyscale tokens',()=>{for(const mode of ['dark','light']){let {palette,pairs,warnings}=choosePalette({mode,monochrome:true});for(const hex of Object.values(palette)){let [r,g,b]=hexToRgb(hex);assert.equal(r,g);assert.equal(g,b);}assert.ok(pairs.body>=7&&pairs.muted>=4.5&&pairs.button>=4.5&&pairs.border>=3);assert.deepEqual(warnings,[]);}});
test('product palettes meet contrast',()=>{for(const product of ['developer','finance','health','education','creative','commerce','science','gaming']){for(const mode of ['dark','light']){const result=choosePalette({product,mode});assert.deepEqual(result.warnings,[],product+'/'+mode+': '+result.warnings);}}});
test('gamut mapped OKLCH outputs valid hex',()=>{for(let h=0;h<360;h+=13)assert.match(oklchToHex(.6,.42,h),/^#[0-9a-f]{6}$/);});
test('CSS role token export',()=>assert.match(cssTokens(choosePalette({monochrome:true}).palette),/--zt-surface-raised:/));
test('invalid input fails',()=>assert.throws(()=>oklchToHex(-1,.1,30)));

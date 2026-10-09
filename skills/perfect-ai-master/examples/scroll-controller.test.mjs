import test from 'node:test';
import assert from 'node:assert/strict';
import {clamp01,smoothstep,progressFromScroll,chapterOpacity,scenePose} from './scroll-controller.mjs';
test('progress clamps and handles short sections', () => {
  assert.equal(progressFromScroll(-100,0,600,800),0);
  assert.equal(progressFromScroll(3000,0,600,800),1);
  assert.equal(progressFromScroll(400,100,900,500),.75);
});
test('easing is monotonic and reversible', () => {
  const xs=Array.from({length:101},(_,i)=>i/100);
  for(let i=1;i<xs.length;i++) assert.ok(smoothstep(xs[i])>=smoothstep(xs[i-1]));
  assert.deepEqual(scenePose(.35), scenePose(.35));
});
test('envelope is zero outside chapter and high in middle', () => {
  assert.equal(chapterOpacity(0,.2,.4),0);
  assert.equal(chapterOpacity(.5,.2,.4),0);
  assert.ok(chapterOpacity(.3,.2,.4)>.99);
  assert.equal(clamp01(Infinity),0);
});

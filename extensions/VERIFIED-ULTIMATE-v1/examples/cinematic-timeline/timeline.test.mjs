import test from 'node:test';import assert from 'node:assert/strict';
import {createPlayhead,adaptThree,combineAdapters} from './timeline.mjs';
test('seek idempotent and clamps',()=>{const frames=[];const p=createPlayhead(2000,(n)=>frames.push(n));p.seek(1000);p.seek(1000);assert.deepEqual(frames,[.5,.5]);p.seek(-5);assert.equal(p.progress,0);p.seek(9999);assert.equal(p.progress,1)});
test('reverse deterministic',()=>{const p=createPlayhead(1000,()=>{});p.seek(1000);p.reverse();p.tick(10);p.tick(260);assert.equal(p.timeMs,750);p.pause();p.replay();p.tick(0);p.tick(500);assert.equal(p.timeMs,500)});
test('adapters receive canonical playhead',()=>{let t=-1;const p=createPlayhead(1000,combineAdapters(adaptThree((n)=>t=n)));p.seek(750);assert.equal(t,.75)});

import test from 'node:test';import assert from 'node:assert/strict';import {AdaptiveMotionBudget} from './budget.mjs';
test('slow frames reduce quality',()=>{const b=new AdaptiveMotionBudget({cooldownMs:0});for(let i=0;i<50;i++)b.observeFrame(48,i*17);assert.notEqual(b.tier,'high')});
test('reduced motion stops non-essential particles',()=>{const b=new AdaptiveMotionBudget({reduceMotion:true});assert.equal(b.observeFrame(16,0).particles,0)});
test('clean initial tier',()=>{const b=new AdaptiveMotionBudget();assert.equal(b.tier,'high')});

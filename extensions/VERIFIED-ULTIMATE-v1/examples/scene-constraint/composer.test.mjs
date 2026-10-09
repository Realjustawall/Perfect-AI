import test from 'node:test';import assert from 'node:assert/strict';
import {overlap,chooseSceneCandidate,corners} from './composer.mjs';
test('box corners eight',()=>assert.equal(corners({min:{x:0,y:0,z:0},max:{x:1,y:1,z:1}}).length,8));
test('no overlapping text selects right',()=>{let x=chooseSceneCandidate([{id:'bad',rect:{left:20,right:320,top:30,bottom:240}},{id:'good',rect:{left:580,right:790,top:70,bottom:300}}],[{left:20,right:400,top:15,bottom:250}],{width:900,height:450});assert.equal(x.winner.id,'good')});
test('fallback when all collide',()=>assert.equal(chooseSceneCandidate([{rect:{left:0,right:100,top:0,bottom:100}}],[{left:0,right:200,top:0,bottom:200}],{width:320,height:300}).requiresFallback,true));

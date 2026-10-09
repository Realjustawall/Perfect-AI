import test from 'node:test';import assert from 'node:assert/strict';
import {intersection,solvePlacement,screenBoundsFromPoints} from '../tools/compose-core.mjs';
test('intersection and no-overlap',()=>{
 assert.equal(intersection({x:0,y:0,width:10,height:10},{x:10,y:0,width:3,height:4}),0);
 assert.equal(intersection({x:0,y:0,width:10,height:10},{x:5,y:5,width:10,height:10}),25);
});
test('text aware solver gives non-occluded feasible candidate',()=>{
 const s=solvePlacement({viewport:{x:0,y:0,width:1200,height:700},model:{width:300,height:300},obstacles:[{x:30,y:30,width:550,height:620}],preferred:{x:850,y:350}});
 assert.equal(s.feasible,true);assert.equal(s.occlusion,0);assert.equal(s.crop,0);
});
test('no valid candidate honestly infeasible',()=>{
 const s=solvePlacement({viewport:{x:0,y:0,width:150,height:150},model:{width:180,height:180},obstacles:[]});assert.equal(s.feasible,false);
});
test('projection math',()=>{
 const s=screenBoundsFromPoints([{x:-1,y:1},{x:1,y:-1}],{x:10,y:20,width:100,height:200});assert.deepEqual(s,{x:10,y:20,width:100,height:200});
});

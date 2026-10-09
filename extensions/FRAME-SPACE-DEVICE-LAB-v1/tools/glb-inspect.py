"""Offline GLB structural stats. NOT Khronos semantic validator. stdlib only."""
import json,struct,argparse,os,sys
from pathlib import Path

def inspect_glb(path):
    data=Path(path).read_bytes()
    if len(data)<20: raise ValueError('Truncated GLB')
    magic,version,length=struct.unpack_from('<4sII',data,0)
    if magic!=b'glTF' or version!=2:raise ValueError('Not GLB 2.0')
    if length!=len(data):raise ValueError(f'Header size mismatch: {length}!={len(data)}')
    pos=12;chunks=[];payload=None
    while pos < len(data):
        if pos+8>len(data):raise ValueError('Incomplete chunk header')
        size,ctype=struct.unpack_from('<I4s',data,pos);pos+=8
        if size%4:raise ValueError('Chunk not 4-byte aligned')
        if size>len(data)-pos:raise ValueError('Chunk overruns file')
        block=data[pos:pos+size];pos+=size
        chunks.append({'type':ctype.decode('ascii','replace'),'bytes':size})
        if ctype==b'JSON' and payload is None:payload=block
    if payload is None:raise ValueError('Missing JSON chunk')
    obj=json.loads(payload.rstrip(b' \t\r\n\0'))
    if not isinstance(obj,dict):raise ValueError('GLB JSON must be object')
    acc=obj.get('accessors',[]); meshes=obj.get('meshes',[])
    primitives=[prim for mesh in meshes for prim in mesh.get('primitives',[])]
    triangleEstimate=0
    for p in primitives:
        if p.get('mode',4)==4:
            ix=p.get('indices'); attrs=p.get('attributes',{});
            count=acc[ix]['count'] if isinstance(ix,int) and ix<len(acc) else (acc[attrs['POSITION']]['count'] if 'POSITION' in attrs and attrs['POSITION']<len(acc) else 0)
            triangleEstimate+=count//3
    return {'file':str(path),'bytes':len(data),'chunks':chunks,'meshes':len(meshes),'nodes':len(obj.get('nodes',[])),'primitives':len(primitives),'triangles_estimate':triangleEstimate,'images':len(obj.get('images',[])),'textures':len(obj.get('textures',[])),'materials':len(obj.get('materials',[])),'animations':len(obj.get('animations',[])),'skins':len(obj.get('skins',[])),'extensionsUsed':obj.get('extensionsUsed',[]),'extensionsRequired':obj.get('extensionsRequired',[]),'note':'Structural count only: use glTF Validator and rendered A/B for correctness.'}

def main():
 p=argparse.ArgumentParser();p.add_argument('file');p.add_argument('--json');a=p.parse_args();result=inspect_glb(a.file);out=json.dumps(result,indent=2,ensure_ascii=False)
 if a.json:Path(a.json).parent.mkdir(parents=True,exist_ok=True);Path(a.json).write_text(out+'\n',encoding='utf8')
 print(out)
if __name__=='__main__':
 try:main()
 except Exception as e: print(f'ERROR: {e}',file=sys.stderr);sys.exit(1)

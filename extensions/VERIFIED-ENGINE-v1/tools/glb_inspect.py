#!/usr/bin/env python3
"""No dependencies. Inventory GLB header + JSON (does not validate rendering or decode compression)."""
import argparse, json, struct, pathlib, sys

def inspect(path):
 p=pathlib.Path(path)
 with p.open('rb') as f:
  header=f.read(12)
  if len(header)!=12: raise ValueError('Truncated GLB header')
  magic, version, length=struct.unpack('<4sII',header)
  if magic!=b'glTF' or version!=2: raise ValueError('Expected glTF 2.0 GLB')
  if length!=p.stat().st_size: raise ValueError('Declared size differs from physical size')
  raw=f.read(8)
  if len(raw)!=8: raise ValueError('Missing JSON chunk header')
  json_len,tag=struct.unpack('<I4s',raw)
  if tag!=b'JSON': raise ValueError('First GLB chunk not JSON')
  if json_len>max(64_000_000,length): raise ValueError('Oversized JSON chunk')
  payload=f.read(json_len)
  if len(payload)!=json_len: raise ValueError('Truncated JSON chunk')
 meta=json.loads(payload.decode('utf-8').rstrip(' \t\r\n\x00'))
 counts={k:len(meta.get(k,[])) for k in ['scenes','nodes','meshes','primitives','materials','textures','images','animations','skins','cameras','accessors']}
 counts['primitives']=sum(len(m.get('primitives',[])) for m in meta.get('meshes',[]))
 return {'file':str(p),'bytes':length,'version':version,'counts':counts,'extensionsRequired':meta.get('extensionsRequired',[]),'extensionsUsed':meta.get('extensionsUsed',[]),'warnings':(['Contains animations; verify clips survive optimization'] if counts['animations'] else [])}
if __name__=='__main__':
 ap=argparse.ArgumentParser();ap.add_argument('glb');ap.add_argument('--json',action='store_true');a=ap.parse_args()
 try:
  r=inspect(a.glb);print(json.dumps(r,ensure_ascii=False,indent=2));sys.exit(0)
 except (ValueError,OSError,UnicodeDecodeError,json.JSONDecodeError) as exc:
  print(json.dumps({'error':str(exc)}),file=sys.stderr);sys.exit(2)

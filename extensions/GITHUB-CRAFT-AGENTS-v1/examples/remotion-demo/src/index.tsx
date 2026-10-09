import React from 'react';
import {Composition,registerRoot,useCurrentFrame,interpolate,AbsoluteFill} from 'remotion';
const Video: React.FC = () => {const frame=useCurrentFrame();const opacity=interpolate(frame,[0,18,115,135],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});const y=interpolate(frame,[0,35],[70,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});return <AbsoluteFill style={{background:'#09090d',color:'#fff',alignItems:'center',justifyContent:'center',fontFamily:'sans-serif'}}><h1 style={{fontSize:90,letterSpacing:'-.06em',opacity,transform:`translateY(${y}px)`}}>ZERO / TECH</h1><p style={{opacity:.75}}>Deterministic design motion</p></AbsoluteFill>};
const Root:React.FC=()=> <Composition id="PerfectAITitle" component={Video} width={1920} height={1080} fps={30} durationInFrames={150}/>;
registerRoot(Root);

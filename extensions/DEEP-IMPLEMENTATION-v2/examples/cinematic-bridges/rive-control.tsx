// Example only. Requires @rive-app/react-canvas and a LICENSED, exported .riv asset.
import React from 'react';
import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
export function RiveControl(){
 const { rive, RiveComponent } = useRive({ src:'/assets/owned-state-machine.riv', stateMachines:'Main', autoplay:true });
 const pressed=useStateMachineInput(rive,'Main','pressed');
 return <div><RiveComponent style={{height:140}} aria-hidden="true"/>
   <button type="button" onClick={()=>pressed?.fire?.()}>Play interaction</button>
 </div>;
}
// Input type must be verified against exported Rive editor state machine; 'pressed' is example only.

import { useRive, useStateMachineInput } from '@rive-app/react-canvas';
// Supply an authored .riv file containing State Machine 1 with a trigger named 'activate'.
export function InteractiveRiveButton(){
  const { rive, RiveComponent } = useRive({src:'/assets/button.riv',stateMachines:'State Machine 1',autoplay:true});
  const trigger=useStateMachineInput(rive,'State Machine 1','activate');
  const activate=()=>trigger?.fire();
  return <button type="button" onClick={activate} aria-label="Play button animation"
    style={{minWidth:160,minHeight:48,padding:0,border:0,background:'transparent'}}>
    <RiveComponent aria-hidden="true" style={{height:48,width:160,pointerEvents:'none'}}/>
    <span style={{position:'absolute',height:1,width:1,overflow:'hidden',clip:'rect(0,0,0,0)'}}>Activate</span>
  </button>;
}

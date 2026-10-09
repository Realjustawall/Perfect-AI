/** Exact timestamp seeks for offline files. A sample is always closed on every path. */
export async function openMediaFrames(file){
 if(!(file instanceof Blob))throw Error('Blob/File required');
 const {Input,BlobSource,ALL_FORMATS,VideoSampleSink}=await import('mediabunny');
 const input=new Input({source:new BlobSource(file),formats:ALL_FORMATS});
 if(!await input.canRead())throw Error('unsupported media');
 const track=await input.getPrimaryVideoTrack();if(!track)throw Error('video track missing');
 const sink=new VideoSampleSink(track);
 const duration=await input.getDurationFromMetadata();
 let serial=0;
 return {duration,async renderAt(seconds,ctx,w,h){
   if(!Number.isFinite(seconds)||seconds<0)throw Error('invalid seek time');
   const current=++serial;
   const sample=await sink.getSample(seconds);
   if(!sample)return false;
   try{if(current!==serial)return false;sample.draw(ctx,0,0,w,h);return true;}
   finally{sample.close();}
 },close(){serial++; /* Input resources are managed by the Mediabunny API. */}};
}

const EventEmitter =require('events');

const emitter=new EventEmitter(); 

const callback1=(args) =>{
    console.log('first callback -',args);
};
emitter.on('sunneng',callback1 )
emitter.on('sunneng',(args)=>{
    console.log('second callback - ',args);
});


emitter.emit('sunneng',{message:1});

emitter.emit('sunneng',{message:2});
emitter.removeAllListeners();
emitter.emit('sunneng',{message:3});
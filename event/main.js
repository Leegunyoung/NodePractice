const logger = require('./logger.js');
const emitter = new logger.Logger();

emitter.on('log',(event) =>
    {console.log(event);}
);

emitter.log(()=>{
    console.log('..... doing something!');
})

//event는 그 객체안에서만 만들어지는것이고 넣어주려면 class써야한다.
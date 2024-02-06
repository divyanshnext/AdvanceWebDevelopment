const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on("firstevent", (arg1, arg2) => {
    // event handler
    console.log("event occured with argument: " , arg1,arg2); 

  });
  /** Event emissson emit method */
myEmitter.emit('firstevent', 'hello', 'hi');

myEmitter.once('firstevent', (arg1,arg2) => {
    console.log('this listener will be executed only once.');

// for(var i=0;i<2;i++){
//     myEmitter.emit('firstevent','hello,'hi');

// }

});



// this code is not completed complete it please 

import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

// you can have setTimeout and setInterval pass arguments to a callback

const callback1 = (message) => {
    log(message);
};
const intervalId = setInterval(callback1, 500, 'hi!');   // 2   si riproduce finché non viene fermato

const callback2 = (arg1, arg2) => {                    // 3
    log(arg1, arg2);
    clearInterval(intervalId);          // intervallo eliminato
};
setTimeout(callback2, 5000, 'good', 'bye');          // tempo di attesa per la funzione

log('= = = =  the call stack is empty  = = = =');    // 1

// // this is a different way to pass arguments to pass arguments in a scheduled task
// setTimeout(() => {
//   callback1('good', 'bye');
// }, 5001);

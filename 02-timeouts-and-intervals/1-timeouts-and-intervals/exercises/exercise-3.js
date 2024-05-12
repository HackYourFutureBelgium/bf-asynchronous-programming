import { labeledLogger } from '../../../lib/labeled-logger.js';

const { log } = labeledLogger();

// fill in the blanks

let x = '';

const exercise3_cb_1 = () => {
    x += 'a';
    log('cb 1:', x);
};
const intervalId = setInterval(exercise3_cb_1, 70);      //  3

const exercise3_cb_2 = () => {         
    x += 'w';
    log('cb 2:', x);
};
setTimeout(exercise3_cb_2, 50);  // 1

const exercise3_cb_3 = () => {
    const test = x === 'whaaaa!';
    log('cb 3:', test);
    console.assert(test, 'x should be "whaaaa!');
};
setTimeout(exercise3_cb_3, 400);     //   5

const exercise3_cb_4 = () => {
    clearInterval(intervalId); // clear something
    x += '!';
    log('cb 4:', x);
};
setTimeout(exercise3_cb_4, 300);    //  4

const exercise3_cb_5 = () => {
    x += 'h';
    log('cb 5:', x);
};
setTimeout(exercise3_cb_5, 60);   //  2

log(x);

log('= = = =  the call stack is empty  = = = =');

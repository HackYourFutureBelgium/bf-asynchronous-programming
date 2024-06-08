import { labeledLogger } from '../../lib/labeled-logger.js';

const { log, error } = labeledLogger();

/* Using Promises 2

  all together!

  Try with these input values:
    asdf
    -2
    -1
    0
    1
    2

*/

// declare callbacks
const logSuccessFailure = (resolvedValue) => {
    const finalMessage =
        resolvedValue === true ? 'number is even' : 'number is not even';
    log(finalMessage);
};
const mustBeGreaterThanZero = (resolvedValue) => {
    log('checking if ' + resolvedValue + ' is greater than 0');
    if (resolvedValue <= 0) {
        throw new RangeError(resolvedValue + ' is not greater than 0');
    }
    return resolvedValue;
};
const inputANumberExecutor = (resolve, reject) => {
    const userInput = prompt('enter an even number greater than 0');
    const userNumber = Number(userInput);
    const isANumber =
        userInput !== '' && userInput !== null && !Number.isNaN(userNumber);

    if (isANumber) {
        resolve(userNumber);
    } else {
        reject('input is not a number: ' + userInput);
    }
};
const handleRejection = (err) => {
    error('promise was rejected:', err);
};
const isEvenNumber = (resolvedValue) => {
    log('checking if ' + resolvedValue + ' is even');
    return resolvedValue % 2 === 0;
};

// use callbacks
new Promise(inputANumberExecutor)
    .then(mustBeGreaterThanZero) // is the number greater than zero?
    .then(isEvenNumber) // is the number even?
    .then(logSuccessFailure) // log the success/failure of the user's input
    .catch(handleRejection); // did an error or rejection occur?

log('= = = =  the call stack is empty  = = = =');

import { userInputHandler } from '../handlers/userInputHandler.js';

export const userInputListener = (id = '') => {
    document.getElementById(id).addEventListener('click', userInputHandler);
};

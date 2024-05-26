import { wikiService } from '../api-calls/wikiService.js';

export const userInputHandler = async (event) => {
    const inputValue = event.target.parentElement.children[0].value;

    try {
        const response = await wikiService(inputValue);
        console.log(response);
    } catch (error) {
        console.log(error.message);
    }
};

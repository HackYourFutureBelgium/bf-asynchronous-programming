import { ORIGIN } from '../config.js';
import XMLHttpRequest from 'xhr2';

/**
 * Returns an array of all Pokemon with a specific ability.
 *
 * @async
 * @param {string} [ability=''] - The ability to request.
 * @returns {Promise<object[]>} An array of Pokemon objects with a name and URL.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const pokemonWithAbility = async (ability = '') => {
    const URL = `${ORIGIN}/ability/${ability}`;

    const reportError = (error) => {
        const message = error.statusText
            ? `${error.status}: ${error.statusText}\n-> ${URL}`
            : `HTTP error! status: ${error.status}\n-> ${URL}`;
        throw new Error(message);
    };
    const wrapper = async () => {
        return new Promise((resolve, reject) => {
            let xReq = new XMLHttpRequest();
            xReq.open('GET', URL, true);
            xReq.onload = (event) => {
                resolve(JSON.parse(xReq.response));
            };
            xReq.onerror = reportError;
            xReq.send();
        });
    };
    const result = await wrapper();
    const pokemon = result.pokemon.map((p) => p.pokemon);
    return pokemon;
};

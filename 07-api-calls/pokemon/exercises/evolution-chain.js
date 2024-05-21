import { ORIGIN } from '../config.js';
import XMLHttpRequest from 'xhr2';

/**
 * Returns an array of pokemon in an evolution chain.
 *
 * @async
 * @param {number} [chainId=1] - The evolution chain's id to fetch.
 * @returns {Promise<object[]>} An array of Pokemon objects with a name and URL.
 *
 * @throws {Error} HTTP error! status: {number}.
 */
export const evolutionChain = async (chainId = 1) => {
    // --- generate and declare your resource's URL ---
    // docs: https://pokeapi.co/docs/v2#evolution-section
    const URL = `${ORIGIN}/evolution-chain/${chainId}`;

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

    const pokemon = [];

    let poke = result.chain;
    if (poke.species) {
        pokemon.push(poke.species);
    }
    while (poke.evolves_to[0]) {
        poke = poke.evolves_to[0];
        pokemon.push(poke.species);
    }

    // --- return the final data ---
    // console.log(pokemon);
    return pokemon;
};

// await evolutionChain(4);

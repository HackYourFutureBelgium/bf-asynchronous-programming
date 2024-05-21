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
    // --- fetch the API data (this works!) ---
    // const encodedURL = encodeURI(URL);
    // const response = await fetch(encodedURL);

    // --- throw an error if the response is not ok (this works!) ---
    // if (!response.ok) {
    //     const message = response.statusText
    //         ? `${response.status}: ${response.statusText}\n-> ${URL}`
    //         : `HTTP error! status: ${response.status}\n-> ${URL}`;
    //     throw new Error(message);
    // }

    /* --- parse the data if the response was ok (this works!) ---*/
    // const data = JSON.parse(result);
    // console.log(result);

    // --- process the fetched data (if necessary) ---
    //  you do not need to use `await` below this comment
    //  you can refactor this to a separate logic function and test it
    const pokemon = []; // tricky one!  you will need to push all the species into an array

    let poke = result.chain;
    if (poke.species) {
        // console.log(poke.species, poke.evolves_to, poke.evolves_to.length);
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

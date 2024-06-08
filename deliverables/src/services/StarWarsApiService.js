import { SW_API_BASE_URL } from '../config.js';

export const StarWarsApiService = async (field = '') => {
    const toReturn = [];
    const Path = `${field}/`;

    let URL = SW_API_BASE_URL + Path;
    let encodedURL = encodeURI(URL);

    const response = await fetch(encodedURL);

    if (!response.ok) {
        console.log(
            `ERROR: error with status code: ${response.status} with message: ${response.statusText} ocurred`,
        );
        throw new Error(
            `ERROR: error with status code: ${response.status} with message: ${response.statusText} ocurred`,
        );
    }

    const firstFetch = await response.json();
    firstFetch.results.map((i) => toReturn.push(i));
    const iteration = Math.ceil(firstFetch.count / 10);

    for (let i = 2; i < iteration; i++) {
        const toAdd = `?page=${i}`;
        URL = '';
        URL = SW_API_BASE_URL + Path + toAdd;
        encodedURL = encodeURI(URL);
        const data = await fetch(encodedURL);

        if (!data.ok) {
            console.log(response);
            throw response;
        }
        const dataToAdd = await data.json();

        dataToAdd.results.map((i) => toReturn.push(i));
    }

    // console.log(toReturn, firstFetch);
    return toReturn;
};

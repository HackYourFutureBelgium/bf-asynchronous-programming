import { ST_API_BASE_URL } from '../config.js';

export const StarTrekApiService = async (
    field = '',
    pageNumber = 1,
    pageSize = 10,
) => {
    const Path = `${field}/search?$pageNumber={pageNumber}&pageSize=${pageSize}`;
    const URL = ST_API_BASE_URL + Path;
    const encodedURL = encodeURI(URL);

    const response = await fetch(encodedURL);

    if (!response.ok) {
        console.log(response);
        throw response;
    }

    const toReturn = await response.json();
    console.log(toReturn);
    return toReturn;
};

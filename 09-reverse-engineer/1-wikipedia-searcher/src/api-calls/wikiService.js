
import { BASE_URL } from '../config.js';

export const wikiService = async (searchValue = '') => {
    var params = {
        action: 'query',
        list: 'search',
        prop: 'info',
        format: 'json',
        srsearch: searchValue,
        srlimit: '5',
        inprop: 'url',
        utf8: '',
        origin: '*',
    };

    let url = BASE_URL + '?';

    Object.keys(params).forEach((key) => {
        url += '&' + key + '=' + params[key];
    });

    const response = await fetch(url);

    if (!response.ok) {
        console.log(response.statusText);
        throw new Error(response.statusText);
    }
    // if (response.query === undefined) {
    //     console.log(response);
    //     throw new Error(response);
    // }
    const parsedResponse = await response.json();

    // console.log('response', parsedResponse.query.search);
    return parsedResponse.query.search;
};

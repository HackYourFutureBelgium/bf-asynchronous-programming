import { BASE_URL } from '../config.js';
import { state } from '../data/state.js';

export const apiService = async () => {
    const filterQuery = `q=${state.filter}`;
    const sortQuery = `&sort=${state.sort.field} ${state.sort.type}`;
    const pageQuery = `&page=${state.pagination.currentPage}&per_page=${state.pagination.pageSize}`;

    const url =
        BASE_URL + 'repositories?' + filterQuery + sortQuery + pageQuery;

    const encodedUrI = encodeURI(url);

    const response = await fetch(encodedUrI);

    if (!response.ok) {
        console.log(response.statusText);
        throw new Error(response.statusText);
    }

    const parsedResponse = await response.json();

    // console.log('response', parsedResponse);
    return parsedResponse;
};
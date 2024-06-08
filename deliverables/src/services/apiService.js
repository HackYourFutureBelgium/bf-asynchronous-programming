import { state } from '../../data/state.js';
import { HP_API_BASE_URL } from '../config.js';

export const apiService = async () => {
    const path =
        HP_API_BASE_URL +
        '/characters?filter[nationality_not_null]=true&filter[born_not_null]=true';

    const birthYearQuery = `&filter[born_cont]=${state.renderRequest.filter.birthYear}`;
    const nationalityQuery = `&filter[nationality_cont]=${state.renderRequest.filter.nationality}`;
    const nameQuery = `&filter[name_cont]=${state.renderRequest.filter.name}`;

    const sortQuery = `&sort=${state.renderRequest.sort.type}${state.renderRequest.sort.field}`;
    const paginationQuery = `&page[number]=${state.renderRequest.pagination.currentPage}&page[size]=${state.renderRequest.pagination.pageSize}`;

    const url =
        path +
        birthYearQuery +
        nationalityQuery +
        nameQuery +
        paginationQuery +
        sortQuery;
    const encodedURI = encodeURI(url);

    const response = await fetch(encodedURI);

    if (!response) {
        console.log(response);
        throw response;
    }

    const toReturn = await response.json();

    return toReturn;
};

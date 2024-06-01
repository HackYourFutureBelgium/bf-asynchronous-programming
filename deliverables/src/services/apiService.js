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
// https://api.potterdb.com/v1/characters?page[number]=1&page[size]=8&filter[name_cont]=ass&sort=gender desc
// https://api.potterdb.com/v1/spells?page[number]=1&page[size]=80&sort=effect&filter[effect_cont]=as
// https://members-api.parliament.uk/api/Members/Search?skip=2
// https://web.dragonball-api.com
// https://docs.potterdb.com/apis/rest
// https://api.potterdb.com/v1/characters
// https://api.artic.edu/api/v1/artworks/search?q=ta&from=2&size=8&fields=title&sort[id]=asc
// https://openlibrary.org/search.json?title=as&limit=4&offset=4&sort=rating%20desc&fields=author_name

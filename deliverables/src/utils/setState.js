import { state } from '../../data/state.js';
import { renderPageBase } from '../components/renderPageBase.js';
import { apiService } from '../services/apiService.js';

export const getData = async () => {
    try {
        const charactersPromise = apiService();
        const [characters] = await Promise.all([charactersPromise]);

        state.itemsToRender = [];
        characters.data.map((item) =>
            state.itemsToRender.push({
                name: item.attributes.name,
                nationality: item.attributes.nationality,
                birthYear: item.attributes.born,
            }),
        );

        state.renderRequest.pagination.totalItems =
            characters.meta.pagination.records;
        if (characters.meta.pagination.last != undefined) {
            state.renderRequest.pagination.totalPages =
                characters.meta.pagination.last;
        } else {
            state.renderRequest.pagination.totalPages = Math.ceil(
                characters.meta.pagination.records /
                    state.renderRequest.pagination.pageSize,
            );
        }
        renderPageBase();
    } catch (error) {
        console.log(error);
    }
};

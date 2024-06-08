import { apiService } from '../../api-calls/apiService.js';
import { state } from '../../data/state.js';
import { renderPageBase } from '../components/renderPageBase.js';

export const setData = async () => {
    try {
        const response = await apiService();

        document.body.innerHTML = '';
        state.itemsToDisplay = [];

        response.items.map((item) =>
            state.itemsToDisplay.push({ name: item.name }),
        );

        state.pagination.totalItems = response.total_count;
        state.pagination.totalPages = Math.ceil(
            state.pagination.totalItems / state.pagination.pageSize,
        );
        console.log(response, state.pagination);
        renderPageBase();
    } catch (error) {
        console.log('something went wrong', error);
        throw new Error(error.message);
    }
};
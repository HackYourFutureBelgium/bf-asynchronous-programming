import { state } from '../../../data/state.js';
import { renderPageBase } from '../../components/renderPageBase.js';

export const setPageNumberHandler = (event) => {
    const valueArray = event.target.id.split('-');

    if (valueArray[2] === 'first') {
        state.renderRequest.pagination.currentPage = 1;
    } else if (valueArray[2] === 'previous') {
        state.renderRequest.pagination.currentPage =
            state.renderRequest.pagination.currentPage - 1;
    } else if (valueArray[2] === 'next') {
        state.renderRequest.pagination.currentPage =
            state.renderRequest.pagination.currentPage + 1;
    } else if (valueArray[2] === 'last') {
        state.renderRequest.pagination.currentPage =
            state.renderRequest.pagination.totalPages;
    } else {
        state.renderRequest.pagination.currentPage = Number(valueArray[2]);
    }

    renderPageBase();
};

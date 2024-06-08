import { state } from '../../data/state.js';

export const paginateItems = () => {
    state.renderRequest.pagination.totalItems = state.itemsToRender.length;
    state.renderRequest.pagination.totalPages = Math.ceil(
        state.itemsToRender.length / state.renderRequest.pagination.pageSize,
    );

    const max =
        state.renderRequest.pagination.currentPage *
        state.renderRequest.pagination.pageSize;
    const min = max - state.renderRequest.pagination.pageSize;

    state.itemsToRender = state.itemsToRender.filter((item, index) => {
        if (index >= min && index < max) return item;
    });
};

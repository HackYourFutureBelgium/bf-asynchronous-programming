import { state } from '../../data/state.js';
import { setData } from '../utils/setData.js';

export const paginationHandler = (event) => {
    const type = event.target.id;

    if (type === 'next') {
        state.pagination.currentPage = state.pagination.currentPage + 1;
    } else {
        if (state.pagination.currentPage === 1) return;
        state.pagination.currentPage = state.pagination.currentPage - 1;
    }
    setData();
};
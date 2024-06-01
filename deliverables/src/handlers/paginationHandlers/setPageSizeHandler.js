import { state } from '../../../data/state.js';
import { renderPageBase } from '../../components/renderPageBase.js';

export const setPageSizeHandler = (event) => {
    const newValue = event.target.value;
    state.renderRequest.pagination.pageSize = Number(newValue);
    state.renderRequest.pagination.currentPage = 1;
    renderPageBase();
};

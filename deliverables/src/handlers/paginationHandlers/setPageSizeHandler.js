import { state } from '../../../data/state.js';
import { getData } from '../../utils/setState.js';

export const setPageSizeHandler = (event) => {
    const newValue = event.target.value;
    state.renderRequest.pagination.pageSize = Number(newValue);
    state.renderRequest.pagination.currentPage = 1;
    getData();
};

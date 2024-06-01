import { state } from '../../../data/state.js';
import { data } from '../../../data/data.js';
import { renderPageBase } from '../../components/renderPageBase.js';

export const clearFilterHandler = () => {
    document.getElementById('input-name').value = '';
    document.getElementById('input-height').value = '';
    document.getElementById('input-birthyear').value = '';

    state.renderRequest.filter.name =
        document.getElementById('input-name').value;
    state.renderRequest.filter.height =
        document.getElementById('input-height').value;
    state.renderRequest.filter.birthYear =
        document.getElementById('input-birthyear').value;

    state.itemsToRender = data.items;
    state.renderRequest.pagination.currentPage = 1;

    renderPageBase();
};

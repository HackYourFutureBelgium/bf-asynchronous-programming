import { state } from '../../../data/state.js';
import { getData } from '../../utils/setState.js';
import { clearFilterHandler } from './clearFilterHandler.js';

export const filterHandler = (event) => {
    if (event.type != 'click' && event.key === 'Escape') {
        clearFilterHandler();
        return;
    }

    if (event.type != 'click' && event.key != 'Enter') return;

    state.renderRequest.filter.name =
        document.getElementById('input-name').value;
    state.renderRequest.filter.nationality =
        document.getElementById('input-nationality').value;
    state.renderRequest.filter.birthYear =
        document.getElementById('input-birthyear').value;

    state.renderRequest.pagination.currentPage = 1;

    getData();
};

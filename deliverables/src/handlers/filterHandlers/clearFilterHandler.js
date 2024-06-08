import { state } from '../../../data/state.js';
import { getData } from '../../utils/setState.js';

export const clearFilterHandler = () => {
    document.getElementById('input-name').value = '';
    document.getElementById('input-nationality').value = '';
    document.getElementById('input-birthyear').value = '';

    state.renderRequest.filter.name =
        document.getElementById('input-name').value;
    state.renderRequest.filter.nationality =
        document.getElementById('input-nationality').value;
    state.renderRequest.filter.birthYear =
        document.getElementById('input-birthyear').value;

    state.renderRequest.pagination.currentPage = 1;

    getData();
};
import { state } from '../../data/state.js';

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

    console.log(state.renderRequest.filter);
};

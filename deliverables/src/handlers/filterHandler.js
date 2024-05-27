import { state } from '../../data/state.js';
import { renderPageBase } from '../components/renderPageBase.js';
import { clearFilterHandler } from './clearFilterHandler.js';

export const filterHandler = (event) => {
    if (event.type != 'click' && event.key === 'Escape') {
        clearFilterHandler();
        return;
    }

    if (event.type != 'click' && event.key != 'Enter') return;

    state.renderRequest.filter.name =
        document.getElementById('input-name').value;
    state.renderRequest.filter.height =
        document.getElementById('input-height').value;
    state.renderRequest.filter.birthYear =
        document.getElementById('input-birthyear').value;

    console.log(state.renderRequest.filter);
    renderPageBase();
};

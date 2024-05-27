import { state } from '../../data/state.js';
import { renderPageBase } from '../components/renderPageBase.js';
import { filterItems } from '../logic/sorters/filterItems.js';
import { itemSorter } from '../logic/sorters/itemSorter.js';
import { clearFilterHandler } from './clearFilterHandler.js';

export const filterHandler = (event) => {
    if (event.type != 'click' && event.key === 'Escape') {
        clearFilterHandler();
        return;
    }

    if (event.type != 'click' && event.key != 'Enter') return;

    filterItems();
    itemSorter();

    renderPageBase();

    document.getElementById('input-name').value =
        state.renderRequest.filter.name;
    document.getElementById('input-height').value =
        state.renderRequest.filter.height;
    document.getElementById('input-birthyear').value =
        state.renderRequest.filter.birthYear;
};

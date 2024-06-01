import { state } from '../../data/state.js';
// import { data } from '../../data/data.js';
import { renderContainer } from './renderContainer.js';
import { itemSorter } from '../logic/sorters/itemSorter.js';
import { filterItems } from '../logic/filters/filterItems.js';
import { paginateItems } from '../logic/paginateItems.js';

export const renderPageBase = () => {
    document.body.innerHTML = '';

    filterItems();
    itemSorter();
    paginateItems();

    const root = document.createElement('div');
    root.classList = 'root';
    root.id = 'root';

    const container = renderContainer();
    root.appendChild(container);

    document.body.appendChild(root);

    document.getElementById('input-name').value =
        state.renderRequest.filter.name;
    document.getElementById('input-height').value =
        state.renderRequest.filter.height;
    document.getElementById('input-birthyear').value =
        state.renderRequest.filter.birthYear;
};

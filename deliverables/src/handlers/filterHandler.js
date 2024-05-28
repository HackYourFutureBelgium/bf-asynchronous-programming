import { renderPageBase } from '../components/renderPageBase.js';
import { filterItems } from '../logic/filters/filterItems.js';
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
};

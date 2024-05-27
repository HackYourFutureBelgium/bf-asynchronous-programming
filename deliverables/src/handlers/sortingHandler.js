import { state } from '../../data/state.js';
import { renderPageBase } from '../components/renderPageBase.js';
import { itemSorter } from '../logic/sorters/itemSorter.js';

export const sortingHandler = async (event) => {
    if (event.type === 'click') {
        state.renderRequest.sort.field = event.target.classList[1];
        state.renderRequest.sort.type = event.target.classList[0].split('-')[0];
    }

    itemSorter();

    renderPageBase();
};

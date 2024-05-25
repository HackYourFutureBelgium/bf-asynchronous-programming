import { state } from '../../data/state.js';
import { renderPageBase } from '../components/renderPageBase.js';
import { birthYearSorter } from '../logic/sorters/birthYearSorter.js';
import { numberSorter } from '../logic/sorters/numberSorter.js';
import { stringSorter } from '../logic/sorters/stringSorter.js';

export const sortingHandler = async (event) => {
    const field = event.target.classList[1];
    const sortType = event.target.classList[0].split('-')[0];

    if (field === 'name') {
        state.itemsToRender = state.itemsToRender.sort((a, b) =>
            stringSorter(a.name, b.name),
        );
    }
    if (field === 'height') {
        state.itemsToRender = state.itemsToRender.sort((a, b) =>
            numberSorter(b.height, a.height),
        );
    }
    if (field === 'birthyear') {
        state.itemsToRender = state.itemsToRender.sort((a, b) =>
            birthYearSorter(b.birth_year, a.birth_year),
        );
    }

    if (sortType === 'dsc') {
        state.itemsToRender = state.itemsToRender.map(state.itemsToRender.pop, [
            ...state.itemsToRender,
        ]);
    }

    renderPageBase();
};

import { state } from '../../../data/state.js';
import { birthYearSorter } from './birthYearSorter.js';
import { numberSorter } from './numberSorter.js';
import { stringSorter } from './stringSorter.js';

export const itemSorter = () => {
    if (state.renderRequest.sort.field === 'name') {
        state.itemsToRender = state.itemsToRender.sort((a, b) =>
            stringSorter(a.name, b.name),
        );
    }
    if (state.renderRequest.sort.field === 'height') {
        state.itemsToRender = state.itemsToRender.sort((a, b) =>
            numberSorter(b.height, a.height),
        );
    }
    if (state.renderRequest.sort.field === 'birthyear') {
        state.itemsToRender = state.itemsToRender.sort((a, b) =>
            birthYearSorter(b.birth_year, a.birth_year),
        );
    }

    if (state.renderRequest.sort.type === 'dsc')
        state.itemsToRender = state.itemsToRender.reverse();
};

import { state } from '../../data/state.js';
import { getData } from '../utils/setState.js';

export const sortingHandler = async (event) => {
    console.log(event.target.classList);
    if (event.type === 'click') {
        if (event.target.classList[1] === 'birthyear') {
            state.renderRequest.sort.field = 'born';
        } else {
            state.renderRequest.sort.field = event.target.classList[1];
        }
        if (event.target.classList[0].split('-')[0] === 'dsc') {
            state.renderRequest.sort.type = '-';
        } else {
            state.renderRequest.sort.type = '';
        }
    }

    getData();
};

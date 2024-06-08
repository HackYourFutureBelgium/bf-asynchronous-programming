import { state } from '../../data/state.js';
import { setData } from '../utils/setData.js';

export const changePageSizeHandler = (event) => {
    const inputValue = event.target.parentElement.children[2].value;
    console.log(inputValue);
    state.pagination.pageSize = Number(inputValue);
    setData();
};
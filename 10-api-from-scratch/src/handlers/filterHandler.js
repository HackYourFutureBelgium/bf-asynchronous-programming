import { state } from '../../data/state.js';
import { setData } from '../utils/setData.js';

export const filterHandler = (event) => {
    const inputValue = event.target.parentElement.children[0].value;
    state.filter = inputValue;
    setData();
};
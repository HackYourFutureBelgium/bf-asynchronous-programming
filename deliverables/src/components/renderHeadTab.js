import { state } from '../../data/state.js';
import { filterHandler } from '../handlers/filterHandlers/filterHandler.js';
import { sortingHandler } from '../handlers/sortingHandler.js';

export const renderHeadTab = (headName = '') => {
    const headEl = document.createElement('th');
    headEl.id = 'head-div';
    headEl.classList = 'head-div';

    const inputDiv = document.createElement('div');
    inputDiv.id = 'input-div';
    inputDiv.classList = 'input-div';

    const tableHead = document.createElement('h4');
    tableHead.classList = 'table-h';
    tableHead.id = 'table-h';
    tableHead.innerHTML = headName;

    const inputEl = document.createElement('input');
    inputEl.id = `input-${headName.replace(/ +/g, '').toLowerCase()}`;
    inputEl.classList = 'input';

    inputEl.addEventListener('keyup', filterHandler);

    const btnDiv = document.createElement('div');
    btnDiv.classList = 'btn-div';
    btnDiv.id = 'btn-div';

    const ascendButton = document.createElement('button');
    ascendButton.type = 'button';
    ascendButton.id = 'asc-btn';
    ascendButton.classList = `asc-btn ${headName
        .replace(/ +/g, '')
        .toLowerCase()}`;
    ascendButton.innerHTML = 'asc';

    const descButton = document.createElement('button');
    descButton.type = 'button';
    descButton.id = 'dsc-btn';
    descButton.classList = `dsc-btn ${headName
        .replace(/ +/g, '')
        .toLowerCase()}`;
    descButton.innerHTML = 'dsc';

    ascendButton.addEventListener('click', sortingHandler);
    descButton.addEventListener('click', sortingHandler);

    btnDiv.appendChild(ascendButton);
    btnDiv.appendChild(descButton);

    inputDiv.appendChild(tableHead);
    inputDiv.appendChild(inputEl);

    headEl.appendChild(btnDiv);
    headEl.appendChild(inputDiv);

    return headEl;
};
import { sortingHandler } from '../handlers/sortingHandler.js';

export const renderHeadTab = (headName = '') => {
    const headEl = document.createElement('th');
    headEl.id = 'head-div';
    headEl.classList = 'head-div';

    const tableHead = document.createElement('h4');
    tableHead.classList = 'table-h';
    tableHead.id = 'table-h';
    tableHead.innerHTML = headName;

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

    headEl.appendChild(btnDiv);
    headEl.appendChild(tableHead);

    return headEl;
};

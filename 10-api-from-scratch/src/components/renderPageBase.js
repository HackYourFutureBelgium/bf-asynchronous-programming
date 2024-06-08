import { state } from '../../data/state.js';
import { changePageSizeHandler } from '../handlers/changePageSizeHandler.js';
import { filterHandler } from '../handlers/filterHandler.js';
import { paginationHandler } from '../handlers/paginationHandler.js';

export const renderPageBase = () => {
    const container = document.createElement('div');

    const filterInput = document.createElement('input');
    filterInput.id = 'filter-input';

    const filterButton = document.createElement('button');
    filterButton.type = 'button';
    filterButton.id = 'filter-button';
    filterButton.innerHTML = 'Filter';

    filterButton.addEventListener('click', filterHandler);

    container.appendChild(filterInput);
    container.appendChild(filterButton);

    const displaySection = document.createElement('div');

    const ulEl = document.createElement('ul');
    state.itemsToDisplay.map((item) => {
        const liEl = document.createElement('li');
        liEl.innerHTML = item.name;
        ulEl.appendChild(liEl);
    });

    displaySection.appendChild(ulEl);

    const paginatorSection = document.createElement('div');

    const previous = document.createElement('button');
    previous.type = 'button';
    previous.id = 'previous';
    previous.innerHTML = 'Previous';

    const next = document.createElement('button');
    next.type = 'button';
    next.id = 'next';
    next.innerHTML = 'Next';

    previous.addEventListener('click', paginationHandler);
    next.addEventListener('click', paginationHandler);

    const pageSelector = document.createElement('input');
    pageSelector.id = 'page-select';
    pageSelector.type = 'text';

    const pageSelectBtn = document.createElement('button');
    pageSelectBtn.type = 'button';
    pageSelectBtn.innerHTML = 'Set Page Size';

    pageSelectBtn.addEventListener('click', changePageSizeHandler);

    paginatorSection.appendChild(previous);
    paginatorSection.appendChild(next);
    paginatorSection.appendChild(pageSelector);
    paginatorSection.appendChild(pageSelectBtn);

    container.appendChild(displaySection);
    container.appendChild(paginatorSection);

    document.body.appendChild(container);
};
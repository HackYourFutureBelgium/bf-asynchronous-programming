import { filterHandler } from '../handlers/filterHandler.js';
import { renderTable } from './renderTable.js';

export const renderContainer = () => {
    const containerToReturn = document.createElement('div');
    containerToReturn.classList = 'container';
    containerToReturn.id = 'container';

    const filterSection = document.createElement('div');
    filterSection.classList = 'filter-section';
    filterSection.id = 'filter-section';

    const filterButton = document.createElement('button');
    filterButton.classList = 'filter-btn';
    filterButton.id = 'filter-btn';
    filterButton.type = 'button';
    filterButton.innerHTML = 'Filter';

    filterButton.addEventListener('click', filterHandler);

    filterSection.appendChild(filterButton);

    const table = renderTable();

    containerToReturn.appendChild(filterSection);
    containerToReturn.appendChild(table);

    return containerToReturn;
};

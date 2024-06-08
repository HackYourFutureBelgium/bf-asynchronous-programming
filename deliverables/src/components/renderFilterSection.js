
import { clearFilterHandler } from '../handlers/filterHandlers/clearFilterHandler.js';
import { filterHandler } from '../handlers/filterHandlers/filterHandler.js';

export const renderFilterSection = () => {
    const filterSection = document.createElement('div');
    filterSection.classList = 'filter-section';
    filterSection.id = 'filter-section';

    const filterButton = document.createElement('button');
    filterButton.classList = 'filter-btn';
    filterButton.id = 'filter-btn';
    filterButton.type = 'button';
    filterButton.innerHTML = 'Filter';

    const clearFilterButton = document.createElement('button');
    clearFilterButton.classList = 'clear-filter-btn';
    clearFilterButton.id = 'clear-filter-btn';
    clearFilterButton.type = 'button';
    clearFilterButton.innerHTML = 'Clear Filters';

    filterButton.addEventListener('click', filterHandler);
    clearFilterButton.addEventListener('click', clearFilterHandler);

    filterSection.appendChild(filterButton);
    filterSection.appendChild(clearFilterButton);

    return filterSection;
};

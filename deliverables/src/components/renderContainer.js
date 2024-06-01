import { renderFilterSection } from './renderFilterSection.js';
import { renderPaginator } from './paginator/renderPaginator.js';
import { renderTable } from './renderTable.js';

export const renderContainer = () => {
    const containerToReturn = document.createElement('div');
    containerToReturn.classList = 'container';
    containerToReturn.id = 'container';

    const header = document.createElement('h2');
    header.id = 'header';
    header.classList = 'header';
    header.innerHTML = 'Data Organizer :';

    const filterSection = renderFilterSection();
    const tableSection = renderTable();
    const paginatorSection = renderPaginator();

    containerToReturn.appendChild(header);
    containerToReturn.appendChild(filterSection);
    containerToReturn.appendChild(tableSection);
    containerToReturn.appendChild(paginatorSection);

    return containerToReturn;
};

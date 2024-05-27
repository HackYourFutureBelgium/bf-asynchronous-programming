import { renderFilterSection } from './renderFilterSection.js';
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
    const table = renderTable();

    containerToReturn.appendChild(header);
    containerToReturn.appendChild(filterSection);
    containerToReturn.appendChild(table);

    return containerToReturn;
};

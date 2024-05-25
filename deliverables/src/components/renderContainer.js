import { renderTable } from './renderTable.js';

export const renderContainer = () => {
    const containerToReturn = document.createElement('div');
    containerToReturn.classList = 'container';
    containerToReturn.id = 'container';

    const table = renderTable();

    containerToReturn.appendChild(table);
    return containerToReturn;
};

import { renderHeadTab } from './renderHeadTab.js';

export const renderTableHead = () => {
    const tableHeader = document.createElement('thead');
    tableHeader.classList = 't-head';
    tableHeader.id = 't-head';

    const tableHead = document.createElement('tr');
    tableHead.classList = 'table-head';
    tableHead.id = 'table-head';

    const tableHeadName = renderHeadTab('Name');
    const tableHeadHeight = renderHeadTab('Nationality');
    const tableHeadBirthYear = renderHeadTab('Birth Year');

    tableHead.appendChild(tableHeadName);
    tableHead.appendChild(tableHeadHeight);
    tableHead.appendChild(tableHeadBirthYear);

    tableHeader.appendChild(tableHead);
    return tableHeader;
};

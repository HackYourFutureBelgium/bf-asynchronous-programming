import { state } from '../../data/state.js';
import { renderTableHead } from './renderTableHead.js';

export const renderTable = () => {
    const tableSection = document.createElement('div');
    tableSection.id = 'table-section';
    tableSection.classList = 'table-section';

    const table = document.createElement('table');
    table.id = 'table-main';
    table.classList = 'table-main';

    const tableHeader = renderTableHead();

    const tableBody = document.createElement('tbody');
    tableBody.classList = 't-body';
    tableBody.id = 't-body';

    table.appendChild(tableHeader);
    table.appendChild(tableBody);

    if (state.itemsToRender.length === 0) {
        let tableRow = document.createElement('tr');
        tableRow.classList = 't-row';
        tableRow.id = 't-row';

        const tableData = document.createElement('td');
        tableData.classList = 't-no-data';
        tableData.id = 't-no-data';
        tableData.colSpan = '3';
        tableData.innerHTML = `No values found .`;

        tableRow.appendChild(tableData);
        tableBody.appendChild(tableRow);
    }

    state.itemsToRender.map((item, i) => {
        let tableRow = document.createElement('tr');
        tableRow.classList = 't-row';
        tableRow.id = 't-row';

        const tableDataName = document.createElement('td');
        tableDataName.classList = 't-data';
        tableDataName.id = 't-data';
        tableDataName.innerHTML = `${item.name}`;

        const tableDataHeight = document.createElement('td');
        tableDataHeight.classList = 't-data';
        tableDataHeight.id = 't-data';
        tableDataHeight.innerHTML = `${item.nationality}`;

        const tableDataYear = document.createElement('td');
        tableDataYear.classList = 't-data';
        tableDataYear.id = 't-data';
        tableDataYear.innerHTML = `${item.birthYear}`;

        tableRow.appendChild(tableDataName);
        tableRow.appendChild(tableDataHeight);
        tableRow.appendChild(tableDataYear);

        tableBody.appendChild(tableRow);
    });

    tableSection.appendChild(table);

    return tableSection;
};

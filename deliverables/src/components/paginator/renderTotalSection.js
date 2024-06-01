import { state } from '../../../data/state.js';

export const renderTotalSection = () => {
    const totalSection = document.createElement('div');
    totalSection.id = 'total-section';
    totalSection.classList = 'total-section';

    const totalItemsCounter = document.createElement('h5');
    totalItemsCounter.id = 'total-counter';
    totalItemsCounter.classList = 'total-items-counter';
    totalItemsCounter.innerHTML = `Total Items: ${state.renderRequest.pagination.totalItems}`;

    const totalPagesCounter = document.createElement('h5');
    totalPagesCounter.id = 'total-counter';
    totalPagesCounter.classList = 'total-pages-counter';
    totalPagesCounter.innerHTML = `Total Pages: ${state.renderRequest.pagination.totalPages}`;

    totalSection.appendChild(totalItemsCounter);
    totalSection.appendChild(totalPagesCounter);

    return totalSection;
};

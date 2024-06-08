
import { state } from '../../../data/state.js';
import { setPageNumberHandler } from '../../handlers/paginationHandlers/setPageNumberHandler.js';
import { renderNumberButtons } from './renderNumberButtons.js';

export const renderPagerSection = () => {
    const pagerSection = document.createElement('div');
    pagerSection.id = 'pager-section';
    pagerSection.classList = 'pager-section';

    const buttonSection = document.createElement('div');
    buttonSection.id = 'pag-btn-sec';
    buttonSection.classList = 'pag-btn-sec';

    const firstButton = document.createElement('button');
    firstButton.id = 'order-btn-first';
    firstButton.classList = 'btn-dis';
    firstButton.innerHTML = '|<<';
    if (state.renderRequest.pagination.currentPage != 1) {
        firstButton.classList = 'btn-order';
        firstButton.addEventListener('click', setPageNumberHandler);
    }

    const previousButton = document.createElement('button');
    previousButton.id = 'order-btn-previous';
    previousButton.classList = 'btn-dis';
    previousButton.innerHTML = '<<';
    if (state.renderRequest.pagination.currentPage > 1) {
        previousButton.classList = 'btn-order';
        previousButton.addEventListener('click', setPageNumberHandler);
    }

    const numberButtons = renderNumberButtons();

    const nextButton = document.createElement('button');
    nextButton.id = 'order-btn-next';
    nextButton.classList = 'btn-dis';
    nextButton.innerHTML = '>>';
    if (
        state.renderRequest.pagination.currentPage <
        state.renderRequest.pagination.totalPages
    ) {
        nextButton.classList = 'btn-order';
        nextButton.addEventListener('click', setPageNumberHandler);
    }

    const lastButton = document.createElement('button');
    lastButton.id = 'order-btn-last';
    lastButton.classList = 'btn-dis';
    lastButton.innerHTML = '>>|';
    if (
        state.renderRequest.pagination.currentPage !=
        state.renderRequest.pagination.totalPages
    ) {
        lastButton.classList = 'btn-order';
        lastButton.addEventListener('click', setPageNumberHandler);
    }

    buttonSection.appendChild(firstButton);
    buttonSection.appendChild(previousButton);
    buttonSection.appendChild(numberButtons);
    buttonSection.appendChild(nextButton);
    buttonSection.appendChild(lastButton);

    pagerSection.appendChild(buttonSection);

    return pagerSection;
};

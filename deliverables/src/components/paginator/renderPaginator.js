import { renderPageSizeSection } from './renderPageSizeSection.js';
import { renderPagerSection } from './renderPagerSection.js';
import { renderTotalSection } from './renderTotalSection.js';

export const renderPaginator = () => {
    const paginatorSection = document.createElement('div');
    paginatorSection.id = 'paginator-section';
    paginatorSection.classList = 'paginator-section';

    const totalItemsSection = renderTotalSection();

    const pagerSection = renderPagerSection();

    const pageSizeSection = renderPageSizeSection();

    paginatorSection.appendChild(totalItemsSection);
    paginatorSection.appendChild(pagerSection);
    paginatorSection.appendChild(pageSizeSection);

    return paginatorSection;
};
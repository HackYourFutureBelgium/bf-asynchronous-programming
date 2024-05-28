import { PAGE_SIZES } from '../../data/data.js';
import { state } from '../../data/state.js';

export const renderPaginator = () => {
    const paginatorSection = document.createElement('div');
    paginatorSection.id = 'paginator-section';
    paginatorSection.classList = 'paginator-section';

    const totalItemsSection = document.createElement('div');
    totalItemsSection.id = 'total-section';
    totalItemsSection.classList = 'total-section';

    const totalItemsCounter = document.createElement('h5');
    totalItemsCounter.id = 'total-counter';
    totalItemsCounter.classList = 'total-counter';
    totalItemsCounter.innerHTML = `Total Items: ${state.itemsToRender.length}`;

    const pagerSection = document.createElement('div');
    pagerSection.id = 'pager-section';
    pagerSection.classList = 'pager-section';

    const pageSizeSection = document.createElement('div');
    pageSizeSection.id = 'page-size-section';
    pageSizeSection.classList = 'page-size-section';

    const pageSizeLabel = document.createElement('label');
    pageSizeLabel.id = 'page-size-label';
    pageSizeLabel.classList = 'page-size-label';
    pageSizeLabel.for = 'page-size-select';
    pageSizeLabel.innerHTML = 'Page Size : ';

    const pageSizeSelect = document.createElement('select');
    pageSizeSelect.id = 'page-size-select';
    pageSizeSelect.classList = 'page-size-select';
    pageSizeSelect.name = 'page-size-select';

    PAGE_SIZES.map((x, i) => {
        const pageSizeOption = document.createElement('option');
        pageSizeLabel.id = `page-size-option-${i}`;
        pageSizeLabel.classList = `page-size-option`;
        pageSizeOption.value = x;
        pageSizeOption.innerHTML = x;

        pageSizeSelect.appendChild(pageSizeOption);
    });

    pageSizeSection.appendChild(pageSizeLabel);
    pageSizeSection.appendChild(pageSizeSelect);

    totalItemsSection.appendChild(totalItemsCounter);

    paginatorSection.appendChild(totalItemsSection);
    paginatorSection.appendChild(pagerSection);
    paginatorSection.appendChild(pageSizeSection);

    return paginatorSection;
};

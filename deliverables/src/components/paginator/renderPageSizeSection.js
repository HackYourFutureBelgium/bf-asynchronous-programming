import { PAGE_SIZES } from '../../../data/data.js';
import { state } from '../../../data/state.js';
import { setPageSizeHandler } from '../../handlers/paginationHandlers/setPageSizeHandler.js';

export const renderPageSizeSection = () => {
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
    pageSizeSelect.addEventListener('change', setPageSizeHandler);

    PAGE_SIZES.map((x, i) => {
        const pageSizeOption = document.createElement('option');
        pageSizeLabel.id = `page-size-option-${i}`;
        pageSizeLabel.classList = `page-size-option`;
        pageSizeOption.value = x;
        pageSizeOption.innerHTML = x;
        if (x === state.renderRequest.pagination.pageSize)
            pageSizeOption.selected = true;

        pageSizeSelect.appendChild(pageSizeOption);
    });

    pageSizeSection.appendChild(pageSizeLabel);
    pageSizeSection.appendChild(pageSizeSelect);

    return pageSizeSection;
};

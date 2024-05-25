import { renderContainer } from './renderContainer.js';

export const renderPageBase = () => {
    document.body.innerHTML = '';
    const root = document.createElement('div');
    root.classList = 'root';
    root.id = 'root';

    const container = renderContainer();
    root.appendChild(container);

    document.body.appendChild(root);
};

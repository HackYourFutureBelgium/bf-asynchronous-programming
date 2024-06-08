import { state } from '../../../data/state.js';
import { setPageNumberHandler } from '../../handlers/paginationHandlers/setPageNumberHandler.js';

export const renderNumberButtons = () => {
    const numberButtons = document.createElement('div');
    numberButtons.id = 'pag-num-sec';
    numberButtons.classList = 'pag-num-sec';

    for (let i = 1; i <= state.renderRequest.pagination.totalPages; i++) {
        if (i === state.renderRequest.pagination.currentPage - 2) {
            const backTwo = document.createElement('button');
            backTwo.id = `num-btn-${i}`;
            backTwo.classList = 'num-btn';
            backTwo.innerHTML = i;
            backTwo.addEventListener('click', setPageNumberHandler);

            numberButtons.appendChild(backTwo);
        }

        if (i === state.renderRequest.pagination.currentPage - 1) {
            if (state.renderRequest.pagination.currentPage === 2) {
                const buttonZero = document.createElement('button');
                buttonZero.id = `num-btn-${i}`;
                buttonZero.classList = 'btn-dis';
                buttonZero.innerHTML = '.';

                const backOne = document.createElement('button');
                backOne.id = `num-btn-${i}`;
                backOne.classList = 'num-btn';
                backOne.innerHTML = i;
                backOne.addEventListener('click', setPageNumberHandler);

                numberButtons.appendChild(buttonZero);
                numberButtons.appendChild(backOne);
            } else {
                const backOne = document.createElement('button');
                backOne.id = `num-btn-${i}`;
                backOne.classList = 'num-btn';
                backOne.innerHTML = i;
                backOne.addEventListener('click', setPageNumberHandler);

                numberButtons.appendChild(backOne);
            }
        }

        if (state.renderRequest.pagination.currentPage === 1 && i === 1) {
            const buttonSubZero = document.createElement('button');
            buttonSubZero.id = `num-btn-${i}`;
            buttonSubZero.classList = 'btn-dis';
            buttonSubZero.innerHTML = '..';

            const buttonZero = document.createElement('button');
            buttonZero.id = `num-btn-${i}`;
            buttonZero.classList = 'btn-dis';
            buttonZero.innerHTML = '.';

            numberButtons.appendChild(buttonSubZero);
            numberButtons.appendChild(buttonZero);
        }

        if (i === state.renderRequest.pagination.currentPage) {
            const buttonZero = document.createElement('button');
            buttonZero.id = `num-btn-${i}`;
            buttonZero.classList = 'btn-dis';
            buttonZero.innerHTML = i;

            numberButtons.appendChild(buttonZero);
        }

        if (i === state.renderRequest.pagination.currentPage + 1) {
            if (
                state.renderRequest.pagination.currentPage ===
                state.renderRequest.pagination.totalPages - 1
            ) {
                const buttonZero = document.createElement('button');
                buttonZero.id = `num-btn-${i}`;
                buttonZero.classList = 'btn-dis';
                buttonZero.innerHTML = '.';

                const backOne = document.createElement('button');
                backOne.id = `num-btn-${i}`;
                backOne.classList = 'num-btn';
                backOne.innerHTML = i;
                backOne.addEventListener('click', setPageNumberHandler);

                numberButtons.appendChild(backOne);
                numberButtons.appendChild(buttonZero);
            } else {
                const forwardOne = document.createElement('button');
                forwardOne.id = `num-btn-${i}`;
                forwardOne.classList = 'num-btn';
                forwardOne.innerHTML = i;
                forwardOne.addEventListener('click', setPageNumberHandler);

                numberButtons.appendChild(forwardOne);
            }
        }

        if (i === state.renderRequest.pagination.currentPage + 2) {
            const forwardTwo = document.createElement('button');
            forwardTwo.id = `num-btn-${i}`;
            forwardTwo.classList = 'num-btn';
            forwardTwo.innerHTML = i;
            forwardTwo.addEventListener('click', setPageNumberHandler);

            numberButtons.appendChild(forwardTwo);
        }

        if (
            i === state.renderRequest.pagination.totalPages &&
            state.renderRequest.pagination.currentPage ===
                state.renderRequest.pagination.totalPages
        ) {
            const buttonSubZero = document.createElement('button');
            buttonSubZero.id = `num-btn-${i}`;
            buttonSubZero.classList = 'btn-dis';
            buttonSubZero.innerHTML = '..';

            const buttonZero = document.createElement('button');
            buttonZero.id = `num-btn-${i}`;
            buttonZero.classList = 'btn-dis';
            buttonZero.innerHTML = '.';

            numberButtons.appendChild(buttonZero);
            numberButtons.appendChild(buttonSubZero);
        }
    }

    return numberButtons;
};
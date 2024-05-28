export const state = {
    itemsToRender: [],
    renderRequest: {
        sort: {
            field: '',
            type: '',
        },
        filter: {
            name: '',
            height: '',
            birthYear: '',
        },
        pagination: {
            currentPage: 1,
            pageSize: 4,
            totalPages: 0,
            totalItems: 0,
        },
    },
};

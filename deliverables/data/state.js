export const state = {
    itemsToRender: [],
    renderRequest: {
        sort: {
            field: '',
            type: '',
        },
        filter: {
            name: '',
            nationality: '',
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

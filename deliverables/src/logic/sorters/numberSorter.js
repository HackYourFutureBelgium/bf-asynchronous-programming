export const numberSorter = (a, b) => {
    if (isNaN(Number(b)) && isNaN(Number(a))) {
        return 0;
    }
    if (isNaN(Number(a))) {
        return 0 - Number(b);
    }
    if (isNaN(Number(b))) {
        return Number(a) - 0;
    }
    return Number(a) - Number(b);
};

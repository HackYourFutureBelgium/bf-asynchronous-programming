export const stringSorter = (string1, string2) => {
    let fa = string1.toLowerCase(),
        fb = string2.toLowerCase();

    if (fa < fb) {
        return -1;
    }
    if (fa > fb) {
        return 1;
    }
    return 0;
};

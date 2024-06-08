import { numberSorter } from './numberSorter.js';

export const birthYearSorter = (stringA, stringB) => {
    {
        if (stringA === 'unknown' && stringB === 'unknown') {
            return 0;
        }
        if (stringA === 'unknown') {
            return -1;
        }
        if (stringB === 'unknown') {
            return 1;
        }
        const splitA = stringA.split('B');
        const splitB = stringB.split('B');
        return numberSorter(splitA[0], splitB[0]);
    }
};

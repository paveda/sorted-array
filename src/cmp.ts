import type { Comparator } from './types';

export const numberCmp: Comparator<number> = (a, b) => {
    if (a === b) {
        return 0;
    }

    return a < b ? -1 : 1;
}

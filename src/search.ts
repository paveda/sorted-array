import type { Comparator } from './types';

type InternalSearchResult = {
    index: number;
    found: boolean;
}

export function search<T>(array: T[], element: T, cmp: Comparator<T>): number {
    const { index, found } = internalSearch(array, element, cmp);

    return found ? index : -1;
}

export function internalSearch<T>(array: T[], element: T, cmp: Comparator<T>): InternalSearchResult {
    let right = array.length - 1;
    let left = 0;
    let mid = 0;
    let ord = 0;

    while (right >= left) {
        mid = (left + right) / 2 >>> 0;
        ord = cmp(element, array[mid]);

        if (ord === 0) {
            return {
                index: mid,
                found: true,
            }
        }

        if (ord === 1) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return {
        index: left,
        found: false,
    }
}

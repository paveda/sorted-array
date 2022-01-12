import { sort } from './sort';
import { insert } from './insert';
import { search } from './search';
import type { Comparator } from './types';

export function create<T>(array: T[], cmp: Comparator<T>) {
    const sortedArray = sort(array, cmp);

    return {
        array: sortedArray,
        insert: (element: T) => insert(sortedArray, element, cmp),
        search: (element: T) => search(sortedArray, element, cmp),
    }
}

import type { Comparator } from './types';
import { internalSearch } from './search';

export function insert<T>(array: T[], element: T, cmp: Comparator<T>): number {
    const { index } = internalSearch(array, element, cmp);

    let top = array.push(element) - 1;

    while (top > index) {
        array[top] = array[top - 1];
        array[top - 1] = element; 

        top--
    }

    return index;
}

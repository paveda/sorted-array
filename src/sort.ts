import type { Comparator } from './types';
import { insert } from './insert';

export function sort<T>(array: T[], cmp: Comparator<T>): T[] {
    const sorted: T[] = [];

    for (let i = 0; i < array.length; i++) {
        insert(sorted, array[i], cmp);
    }

    return sorted;
}

import type { CompareFunction } from './types';

export function bubbleSort<T>(array: T[], compare: CompareFunction<T>): T[] {
    const sorted = array.slice(0);
    let len = sorted.length ;
    let swapped = false;

    for (let i = 1; i <= len - 1; i++) {
        swapped = false;

        for (let j = 0; j < len - 1; j++) {
            if (compare(sorted[j], sorted[j + 1]) === 1) {
                let temp = sorted[j];
                sorted[j] = sorted[j + 1];
                sorted[j + 1] = temp;
                swapped = true
            }
        }

        if (!swapped) {
            break;
        }
    }

    return sorted;
}
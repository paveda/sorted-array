import type { CompareFunction, Index } from "./types";

export function binarySearch<T>(
    array: T[],
    element: T,
    compare: CompareFunction<T>,
    near = false
): Index {

    let high = array.length - 1;
    let low = 0;
    let pos = -1;
    let mid = 0;
    let ordering = 0;

    while (high >= low) {
        mid = (high + low) / 2 >>> 0;
        ordering = compare(array[mid], element);
        if (ordering < 0) {
            low  = mid + 1;
        } else if (ordering > 0) {
            high = mid - 1;
        } else {
            pos = mid;
            break;
        };
    }

    if (pos === -1 && near) {
        return low;
    }

    return pos;
}
import { Comparator, Ordering } from "../types";

export function binarySearch<T>(
    array: T[],
    element: T,
    compare: Comparator<T>,
    nearest = false,
) {
    let high = array.length - 1;
    let low = 0;
    let pos = -1;
    let index;
    let ordering;

    while (high >= low) {
        index = Math.floor((high + low) / 2);
        ordering = compare(array[index], element);

        if (ordering === Ordering.Eq) {
            return [index, true] as const;
        }

        if (ordering === Ordering.Left) {
            low  = index + 1;
        } else {
            high = index - 1;
        }
    }

    return [
        nearest ? low : -1,
        false,
    ] as const;
}
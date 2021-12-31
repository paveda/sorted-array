import { Ordering } from "../types";

export function defaultComparator<T>(a: T, b: T): Ordering {
    if (a === b) {
        return Ordering.Eq;
    }

    return a < b ? Ordering.Left : Ordering.Right;
}

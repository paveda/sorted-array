import { Comparator } from "./types";
import {binarySearch} from "./helpers";

function defaultCompare<T>(a: T, b: T) {
    if (a === b) {
        return 0;
    }

    return a > b ? 1 : -1;
}

export class SortedArray<T = number> {
    protected readonly compare: Comparator<T>;
    protected elements: T[] = [];

    constructor(array?: T[], comparator?: Comparator<T>) {
        this.compare = comparator || defaultCompare;

        if (array) {
            for (let i = 0; i < array.length; i++) {
                this.insert(array[i]);
            }
        }
    }

    /**
     *
     * @param element
     */
    insert(element: T): number {
        const [index, found] = binarySearch(
            this.elements,
            element,
            this.compare,
            true,
        )

        found
            ? this.elements[index] = element
            : this.elements.splice(index, 0, element);

        return index;
    }

    /**
     * @name search
     * @description
     * @param element The element to search
     * @returns Index of the element in the array, or -1 if the element could not be found.
     * @public
     */
    search(element: T): number {
        const [index, _] = binarySearch(
            this.elements,
            element,
            this.compare,
        )

        return index;
    }

    /**
     * @name remove
     * @param element
     */
    remove(element: T): T | -1 {
        const i = this.search(element);
        if (i === -1) {
            return i;
        }

        return this.elements.splice(i, 1)[0];
    }

    /**
     * @name removeRange
     * @param from
     * @param to
     */
    removeRange(from: T, to?: T) {
        let open = this.search(from);
        let close = to
            ? this.search(to)
            : this.elements.length;

        while (open < close) {
            this.elements.splice(open, 1);
            open++;
        }
    }

    /**
     *
     */
    clear() {
        this.elements = [];
    }

    /**
     *
     * @param element
     */
    has(element: T): boolean {
        return (this.search(element) !== -1);
    }

    /**
     *
     * @param index
     */
    at(index: number) {
        return this.elements.at(index);
    }

    lt(element: T) {

    }

    lte(element: T) {
        let index = this.search(element);
        let ordering;

        if (index === -1) {
            return -1
        }

        for (; index >= 0; index--) {
            ordering = this.compare(this.elements[index], element);
            if (ordering <= 0) {
                return index
            }
        }

        return -1
    }

    gt(element: T) {

    }

    gte(element: T) {

    }

    slice(from?: number, to?: number): SortedArray<T> {
        return new SortedArray<T>(this.elements.slice(from, to), this.compare);
    }

    getArray(): T[] {
        return this.elements.slice(0);
    }
}
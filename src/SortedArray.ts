import type { Index, Size, CompareFunction } from './types';
import { binarySearch } from './binarySearch';
import { bubbleSort } from './bubbleSort';

/**
 *
 */
export class SortedArray<T> {
    private array: T[] = [];

    /**
     *
     * @param array -
     * @param compareFunction -
     */
    constructor(array: T[], compareFunction?: CompareFunction<T>) {
        if (compareFunction) {
            this.compare = compareFunction;
        }

        this.array = bubbleSort(array, this.compare);
    }

    /**
     *
     * @param element -
     * @param unique -
     */
    insert(element: T, unique = true): Index {
        let pos = binarySearch(this.array, element, this.compare, true);

        pos++;

        let high = this.array.length - 1;
        while ((pos < high) && (this.compare(element, this.array[pos]) === 0)){
            pos++;
        }

        let mid = this.array.length;
        this.array.push(element);
        while (mid > pos) {
            this.array[mid] = this.array[--mid];
        }

        this.array[pos] = element;

        return pos;
    }
    delete(element: T, all = true): Index {}

    set(index: Index, element: T): T {}
    get(index: Index): T {}

    search(element: T): Index {}
    has(element: T): boolean {}

    slice(from: Index, to = this.array.length): SortedArray<T> {}
    splice(from: Index, to = this.array.length): SortedArray<T> {}
    concat(array: T[] | SortedArray<T>): SortedArray<T>{}
    merge(array: T[] | SortedArray<T>): Size {}

    peek(index: Index): T {}
    first(): T {}
    last(): T {}

    join(separator: string): string {}

    toArray(): T[] {}

    private compare(a: T, b: T): number {}
}

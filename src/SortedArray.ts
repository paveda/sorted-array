import type { Index, Size, CompareFunction } from './types';
import { bubbleSort } from './bubbleSort';
import { binarySearch } from "./binarySearch";

/**
 *
 */
export class SortedArray<T = number> {
    private readonly array: T[] = [];
    private readonly compare: CompareFunction<T>;

    /**
     *
     * @param array -
     * @param compareFunction -
     */
    constructor(array: T[], compareFunction: CompareFunction<T>) {
        this.compare = compareFunction;
        this.array = bubbleSort(array, this.compare);
    }

    /**
     *
     * @param element -
     * @param unique -
     */
    insert(element: T, unique = true): Index {
        let high = this.array.length - 1;
        let low = 0;
        let pos = -1;
        let index = 0;
        let ordering = 0;

        while (high >= low) {
            index = (high + low) / 2 >>> 0;
            ordering = this.compare(this.array[index], element);
            if (ordering < 0) {
                low  = index + 1;
            } else if (ordering > 0) {
                high = index - 1;
            } else {
                pos = index;
                break;
            }
        }

        if (pos === -1) {
            pos = high;
        }

        pos++;

        high = this.array.length-1;
        while ((pos < high) && (this.compare(element, this.array[pos]) === 0)){
            pos++;
        }

        index = this.array.length;
        this.array.push(element);
        while (index > pos) {
            this.array[index] = this.array[--index];
        }

        this.array[pos] = element;

        return pos;
    }

    /**
     *
     * @param element -
     * @param all -
     */
    delete(element: T, all = true): Index {
        const index = binarySearch(this.array, element, this.compare);

        if (index === -1) {
            return index;
        }

        this.array.splice(index, 1);

        return index;
    }

    /**
     *
     * @param index -
     */
    get(index: Index): T {
        return this.array[index];
    }

    /**
     *
     * @param element -
     */
    search(element: T): Index {
        const index = binarySearch(this.array, element, this.compare);

        return index;
    }

    /**
     *
     * @param element -
     */
    has(element: T): boolean {
        const index = binarySearch(this.array, element, this.compare);

        return (index !== -1);
    }

    /**
     *
     * @param from -
     * @param to -
     */
    slice(from: Index, to = this.array.length): SortedArray<T> {
        const slice = this.array.slice(from, to);
        const sortedArray = new SortedArray<T>(slice, this.compare);

        return sortedArray;
    }

    /**
     *
     * @param from -
     * @param to -
     */
    splice(from: Index, to = this.array.length): SortedArray<T> {
        const splice = this.array.splice(from, to);
        const sortedArray = new SortedArray<T>(splice, this.compare);

        return sortedArray;
    }

    /**
     *
     * @param array -
     */
    concat(array: T[] | SortedArray<T>): SortedArray<T>{
        const one = array instanceof SortedArray ? array.toArray() : array;
        const two = this.array.slice(0);
        const tree = one.concat(two);
        const sortedArray = new SortedArray<T>(tree, this.compare);

        return sortedArray;
    }

    /**
     *
     * @param array -
     */
    merge(array: T[] | SortedArray<T>): Size {
        for (const element of array) {
            this.insert(element);
        }

        return this.array.length;
    }

    /**
     *
     */
    first(): T | undefined {
        return this.array.at(0);
    }

    /**
     *
     */
    last(): T | undefined {
        return this.array.at(-1);
    }

    /**
     *
     * @param separator
     */
    join(separator: string): string {
        return this.array.join(separator);
    }

    /**
     *
     */
    toArray(): T[] {
        return this.array.slice(0);
    }

    get length() {
        return this.array.length;
    }

    [Symbol.iterator]() {
        let i = 0;
        const array = this.array;

        return {
            next() {
                if (i < array.length - 1) {
                    i = i + 1;

                    return {
                        value: array[i],
                        done: false
                    }
                }

                return {
                    value: array[i],
                    done: true
                }
            }
        }
    }
}

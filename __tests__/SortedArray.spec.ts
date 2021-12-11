import { SortedArray } from '../src/SortedArray';
import { compareNumbers } from "../src/compareNumbers";

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('SortedArray', () => {
    describe('Insertion', () => {
        it('100 random numbers', () => {
            const array = new SortedArray<number>([], compareNumbers);

            for (let i = 0; i < 100; i++) {
                array.insert(getRandomInt(0, 20000))
            }

            for (let i = 0; i < 99; i++) {
                expect(array.get(i)).toBeLessThanOrEqual(array.get(i + 1));
            }
        })
    })

    describe('', () => {
        it('has', () => {
            const array = new SortedArray<number>([1, 2, 3], compareNumbers);
            expect(array.has(2)).toBeTruthy();
        })
        it('get', () => {
            const array = new SortedArray<number>([1, 2, 3], compareNumbers);
            expect(array.get(2)).toBe(3);
        })
        it('search', () => {
            const array = new SortedArray<number>([1, 2, 3], compareNumbers);
            expect(array.search(2)).toBe(1);
        })
    })

    describe('', () => {
        it('slice', () => {
            const ARRAY = [1, 2, 3, 4, 5];
            const EXPECT = [1, 2, 3];
            const sortedArray = new SortedArray<number>(ARRAY, compareNumbers);
            const slice = sortedArray.slice(0, 3);

            expect(slice.toArray()).toEqual(EXPECT);
        })
        it('splice', () => {
            const ARRAY = [1, 2, 3, 4, 5];
            const EXPECT = [1, 2, 3];
            const sortedArray = new SortedArray<number>(ARRAY, compareNumbers);
            const splice = sortedArray.splice(0, 3);

            expect(splice.toArray()).toEqual(EXPECT);
            expect(sortedArray.toArray()).toEqual([4, 5]);
        })
        it('concat', () => {
            const ONE = [1, 2, 3, 4, 5];
            const TWO = [6, 7, 8, 9];
            const EXPECT = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const sortedArray = new SortedArray<number>(ONE, compareNumbers);
            const concat = sortedArray.concat(TWO);

            expect(concat.toArray()).toEqual(EXPECT);

        })
        it('merge', () => {
            const ONE = [1, 2, 3, 4, 5];
            const TWO = [6, 7, 8, 9];
            const EXPECT = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            const sortedArray = new SortedArray<number>(ONE, compareNumbers);
            sortedArray.merge(TWO);

            expect(sortedArray.toArray()).toEqual(EXPECT);
        })
    })

    it('delete', () => {
        const ARRAY = [1, 2, 3, 4, 5];
        const sortedArray = new SortedArray<number>(ARRAY, compareNumbers);

        const index = sortedArray.delete(4);

        expect(index).toBe(3);
        expect(sortedArray.length).toBe(4);
    })
})

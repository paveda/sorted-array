import { bubbleSort } from '../src/bubbleSort';
import { compareNumbers } from '../src/compareNumbers';

describe('Bubble sort', () => {
    it('Sort array of numbers', () => {
        const ARRAY = [2, 1, 4, 5, 7, 12, 0];
        const SORTED_ARRAY = [0, 1, 2, 4, 5, 7, 12];

        expect(bubbleSort(ARRAY, compareNumbers)).toEqual(SORTED_ARRAY);
    })
})
import { binarySearch } from '../src/binarySearch';
import { compareNumbers } from '../src/compareNumbers';

describe('Binary search', () => {
    it('Search in array of numbers', () => {
        const ARRAY = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        const SEARCH_ELEMENT = 3;
        const EXPECTED_INDEX = 3;

        expect(binarySearch(ARRAY, SEARCH_ELEMENT, compareNumbers)).toBe(EXPECTED_INDEX);
    })
    it('Search near index', () => {
        const ARRAY = [0, 1, 2, 4, 5, 6, 7, 8, 9];
        const SEARCH_ELEMENT = 3;
        const EXPECTED_INDEX = 3;

        expect(binarySearch(ARRAY, SEARCH_ELEMENT, compareNumbers, true)).toBe(EXPECTED_INDEX);
    })
})
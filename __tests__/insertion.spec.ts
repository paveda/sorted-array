import { SortedArray } from '../src/SortedArray';
import { defaultComparator } from "../src/helpers";

describe('Insertion in sorted array', () => {
    const sortedArray = new SortedArray([1, 3, 4], defaultComparator);

    it('', () => {
        const EXPECTED_INDEX = 1;
        const index = sortedArray.insert(2);

        expect(index).toBe(EXPECTED_INDEX);
    })
})
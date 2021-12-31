import { binarySearch, defaultComparator } from '../src/helpers';

describe('Binary search function', () => {
    it('Should return [1, true]', () => {
        const EXPECTED_INDEX = 1;
        const [index, found] = binarySearch(
            [1, 2, 3, 4, 5],
            2,
            defaultComparator,
        );

        expect(index).toBe(EXPECTED_INDEX);
        expect(found).toBeTruthy();
    })

    it('Should return [-1, false]', () => {
        const EXPECTED_INDEX = -1;
        const [index, found] = binarySearch(
            [1, 2, 3, 4, 5],
            10,
            defaultComparator,
        );

        expect(index).toBe(EXPECTED_INDEX);
        expect(found).toBeFalsy();
    })

    it('Should return index of nearest element', () => {
        const EXPECTED_INDEX = 3;
        const [index, found] = binarySearch(
            [1, 2, 3, 5, 6],
            4,
            defaultComparator,
            true,
        );

        expect(index).toBe(EXPECTED_INDEX);
        expect(found).toBeFalsy();
    })
})

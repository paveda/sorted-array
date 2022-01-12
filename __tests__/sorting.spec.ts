import { sort, numberCmp } from '../src';

describe('Sorting', () => {
    it('should sort array of numbers', () => {
        const array = [ 2, 5, 1, 0, 4, 3, 6 ];
        const EXPECTED = [ 0, 1, 2, 3, 4, 5, 6 ];

        const sortedArray = sort(array, numberCmp);

        expect(sortedArray).toEqual(EXPECTED);
    })
})

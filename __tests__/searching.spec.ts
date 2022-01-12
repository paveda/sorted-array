import { search, numberCmp } from '../src';

describe('Searching', () => {
    it('should return index of element', () => {
        const array = [0, 1, 2, 3, 4, 5];
        const EXPECTED = 3;

        const index = search(array, 3, numberCmp);

        expect(index).toBe(EXPECTED);
    })

    it('should return -1 if element is not found', () => {
        const array = [0, 1, 2, 3, 4, 5];
        const EXPECTED = -1;

        const index = search(array, 10, numberCmp);

        expect(index).toBe(EXPECTED);
    })
})

import { insert, numberCmp } from '../src';

describe('Insertion', () => {
    it('should insert new element', () => {
        const array = [0, 1, 3, 4];
        const EXPECTED = [0, 1, 2, 3, 4];

        insert(array, 2, numberCmp);

        expect(array).toEqual(EXPECTED);
    })

    it('correct insert in first and last position', () => {
        const array = [1, 2, 3];
        const EXPECTED = [0, 1, 2, 3, 4];

        insert(array, 0, numberCmp);
        insert(array, 4, numberCmp);

        expect(array).toEqual(EXPECTED);
    })
})

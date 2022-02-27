const {shuffleArray} = require('./utils')

const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(testArray))).toBe(true);
    })

    test('returns an array of the same length as argument', () => {
        expect(shuffleArray(testArray)).toHaveLength(10);
    })

    test('same items are in the array', () => {
        expect(shuffleArray(testArray)).toEqual(expect.arrayContaining(testArray))
    })

    test('shuffle the items', () => {
        let result = shuffleArray(testArray)
        expect(result.join()).not.toEqual(testArray.join())
    })
})
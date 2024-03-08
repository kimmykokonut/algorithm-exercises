import { findPivot } from '../src/quick-sort';

describe('quicksort functions', () => {
  test('it will find a pivot point halfway through the array', () => {
    const array = [1,6,9];
    const leftPointer = 0;
    const rightPointer = 2;
    expect(findPivot(array, leftPointer, rightPointer)).toEqual(6);
  });

});
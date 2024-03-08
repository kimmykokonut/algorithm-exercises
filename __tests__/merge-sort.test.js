import { merge } from "../src/merge-sort";

describe('merge', () => {
  
  // beforeEach(() => {
  //   const unsortedArr = [9, 5, 7, 3, 15, 12];
  // })

  test('it will merge two arrays of one element each', () => {
    const leftArr = [3];
    const rightArr = [6];
    expect(merge(leftArr, rightArr)).toEqual([3,6]);
  });

});
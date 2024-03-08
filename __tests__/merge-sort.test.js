import { merge, mergeSort } from "../src/merge-sort";

describe('merge', () => {

  test('it will merge two arrays of one element each', () => {
    const leftArr = [3];
    const rightArr = [6];
    expect(merge(leftArr, rightArr)).toEqual([3,6]);
  });
  test('it will merge and sort two arrays of one element each', () => {
    const leftArr = [6];
    const rightArr = [3];
    expect(merge(leftArr, rightArr)).toEqual([3,6]);
  });
  test('it will merge and sort two arrays of two elements each', () => {
    const leftArr = [3,5];
    const rightArr = [4,6];
  });
  test('mergeSort() will return an array of one or zero elements', () => {
    const array = [1];
    expect(mergeSort(array)).toEqual([1]);
  });
  test('mergeSort() will sort an array of two elements', () => {
    const array = [7,4];
    expect(mergeSort(array)).toEqual([4,7]);
  });

});
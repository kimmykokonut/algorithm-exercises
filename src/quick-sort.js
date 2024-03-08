export function findPivot(arr, leftPointer, rightPointer) {
  return arr[Math.floor((leftPointer + rightPointer)/2)];
}
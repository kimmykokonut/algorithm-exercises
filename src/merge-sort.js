//const arr = [9, 5, 7, 3, 15, 12];

export function merge(leftArr, rightArr) {
  let mergedArray = [];
  if (leftArr[0] > rightArr[0]) {
    mergedArray.push(rightArr[0]);
    mergedArray.push(leftArr[0]);
  } else {
    mergedArray.push(leftArr[0]);
    mergedArray.push(rightArr[0]);
  }
  return mergedArray;
}
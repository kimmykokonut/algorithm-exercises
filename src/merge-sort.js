//const arr = [9, 5, 7, 3, 15, 12];

export function merge(leftArr, rightArr) {
  let mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while ((leftIndex < leftArr.length) && (rightIndex < rightArr.length)) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      mergedArray.push(leftArr[leftIndex]);
      leftIndex ++;
    } else {
      mergedArray.push(rightArr[rightIndex]);
      rightIndex ++;
    }
  }
  mergedArray = mergedArray.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
  return mergedArray;
}

export function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const midpoint = Math.floor(array.length / 2);
  const leftArr = array.slice(0, midpoint);
  const rightArr = array.slice(midpoint);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
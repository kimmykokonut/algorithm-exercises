//Write a function that determines whether a sorted array includes a specified value.If the array doesn't include the value, the function should return -1. 
//Given the following prompt, start by trying to write a brute force algorithm(one that counts from the first element) and then try to write a binary search algorithm.

const sortedArray = [3, 9, 14, 34, 45, 56, 63, 72, 88, 101, 132, 151, 168, 192];

const bruteBinarySearcher = (value, array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
console.log(bruteBinarySearcher(14, sortedArray));
console.log(bruteBinarySearcher(361, sortedArray));
//
const binarySearcher = (value, array) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (array[mid] === value) {
      return mid;
    } else if (value < array[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
console.log(binarySearcher(14, sortedArray));
console.log(binarySearcher(361, sortedArray));
//
const recursiveBinarySearcher = (value, array, startIndex = 0, endIndex = array.length - 1) => {
  let midIndex = Math.floor((startIndex + endIndex)/2);
  if (array[midIndex] === value) {
    return midIndex;
  } else if (startIndex >= endIndex) {
    return -1;
  } else if (array[midIndex] < value) {
    startIndex = midIndex + 1;
    return recursiveBinarySearcher(value, array, startIndex, endIndex);
  } else if (array[midIndex] > value) {
    endIndex = midIndex -1;
    return recursiveBinarySearcher(value, array, startIndex, endIndex);
  }
}
console.log(recursiveBinarySearcher(14, sortedArray));
console.log(recursiveBinarySearcher(361, sortedArray));
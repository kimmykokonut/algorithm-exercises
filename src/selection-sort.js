const selectSort = (arr) => {
  for (let cI = 0; cI < arr.length; cI++) {
    for (let indexToCompare = cI + 1; indexToCompare < arr.length; indexToCompare++) {
      if (arr[cI] > arr[indexToCompare]) {
        const higherValue = arr[cI];
        arr[cI] = arr[indexToCompare];
        arr[indexToCompare] = higherValue;
      }
    }
  }
  return arr;
}
const array = [3, 2, 1];
console.log(selectSort(array));
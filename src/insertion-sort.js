//didn't set up jest test but ran debugger
exArray = [9, 5, 7, 3, 15, 12];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let indexOfSortedSection = i - 1;
    let valueToInsert = arr[i];
    while ((indexOfSortedSection >= 0) && (arr[indexOfSortedSection] > valueToInsert)) {
      let newValue = arr[indexOfSortedSection];
      arr[indexOfSortedSection + 1] = newValue;
      indexOfSortedSection--;
    }
    arr[indexOfSortedSection + 1] = valueToInsert;
  }
  return arr;
}
console.log(insertionSort(exArray));
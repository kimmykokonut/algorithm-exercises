const bubble = (arr, passes = 0) => {
  let swapped = false;
  for (let i = 0; i < arr.length - passes; i++) {
    if (arr[i] > arr[i + 1]) {
      let higherValue = arr[i];
      let lower = arr[i+1];
      arr[i] = lower;
      arr[i+1] = higherValue;
      //OR 1 less line
      // let min = arr[i + 1];
      // arr[i + 1] = arr[i];
      // arr[i] = min;
      swapped = true;
    }
  }
  passes++;
  if (swapped === true) {
    return bubble(arr, passes);
  } else {
    return arr;
  }
}
const array = [9, 5, 7, 3, 15, 12];
console.log(bubble(array));
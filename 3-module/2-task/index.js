function filterRange(arr, a, b) {
  let newArray = [];
  arr.forEach((item) => {
    if (item >= a && item <= b) {
      newArray.push(item);
    }
  });
  return newArray;
}

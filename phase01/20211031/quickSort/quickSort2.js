let quickSort = function (arr, left, right) {
  const partition = function (arr, left, right) {
      var privet = left,
          index = privet + 1;
      for (var i = index; i <= right; i++) {
          if (arr[i] < arr[privet]) {
              [arr[i], arr[index]] = [arr[index], arr[i]];
              index++;
          }
      }
      [arr[privet], arr[index - 1]] = [arr[index - 1], arr[privet]];
      return index - 1;
  };
  if (left < right) {
      partitionIndex = partition(arr, left, right);
      quickSort(arr, left, partitionIndex - 1);
      quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
};
const arr = [3, 5, 2, 1, 4, 6, 7, 8, 9]
const result = quickSort(arr,0,arr.length);
console.log(result)
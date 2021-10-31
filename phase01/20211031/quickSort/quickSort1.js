var quickSort = function(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    var pivot = arr[0];
    var left = [];
    var right = [];
  
    for (var i =1 ; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
  };
  const arr = [3, 5, 2, 1, 4, 6, 7, 8, 9]
  const result = quickSort(arr);
  console.log(result)
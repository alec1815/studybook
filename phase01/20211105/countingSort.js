function countingSort(arr) {
    var len = arr.length,
      result = [],
      count = [],
      min = (max = arr[0]);
    for (var i = 0; i < len; i++) {
      count[arr[i]] = count[arr[i]] ? count[arr[i]] + 1 : 1;
      min = min <= arr[i] ? min : arr[i];
      max = max >= arr[i] ? max : arr[i];
    }
    for (var j = min; j < max; j++) {
      count[j + 1] = (count[j + 1] || 0) + (count[j] || 0);
    }
    for (var k = len - 1; k >= 0; k--) {
      result[count[arr[k]] - 1] = arr[k];
      count[arr[k]]--;
    }
    return result;
  }
  let d;
  
  while ((d = readline())) {
    let arr = JSON.parse(d);
    console.log(countingSort(arr));
  }
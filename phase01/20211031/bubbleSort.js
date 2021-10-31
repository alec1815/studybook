function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {// 相邻元素两两对比
          [arr[j],arr[j + 1]] = [arr[j + 1],arr[j]]// 元素交换
        }
      }
    }
    return arr;
  }
const arr = [3, 5, 2, 1, 4, 6, 7, 8, 9]
const result = bubbleSort(arr);
console.log(result)
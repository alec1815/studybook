function selectionSort(arr) {
    var len = arr.length;
    var minIndex;
    for (var i = 0; i < len - 1; i++) {
        minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) { // 寻找最小的数
                minIndex = j; // 将最小数的索引保存
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr;
}
const arr = [3, 5, 2, 1, 4, 6, 7, 8, 9]
const result = selectionSort(arr);
console.log(result)
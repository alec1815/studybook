let quickSort = function (arr) {
    const sort = function (arr, left, right) {
        if (left > right) return
        let i = left,
            j = right
        const privet = arr[i]
        while (i < j) {
            while (i < j && arr[j] >= privet) {
                j--
            }
            arr[i] = arr[j]
            while (i < j && arr[j] <= privet) {
                i++
            }
            arr[j] = arr[i]
        }
        arr[i] = privet
        sort(arr, left, i - 1)
        sort(arr, i + 1, right)
    }

    sort(arr, 0, arr.length - 1)
    return arr
};
const arr = [3, 5, 2, 1, 4, 6, 7, 8, 9]
const result = quickSort(arr)
console.log(result)
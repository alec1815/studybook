/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let left = 0,
        right = s.length - 1; // 设置俩个指针分别指向区间边界位置
    while(left <= right) {
            // 交换元素， 同时缩小区间
          let temp = s[right]
          s[right--] = s[left];
          s[left++] = temp;
    }
};
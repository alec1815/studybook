/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function (head) {
    let nums = []
    let node = head
    //遍历链表
    while(node !== null) {
        nums.unshift(node.val)
        node = node.next
    }
    return nums
}
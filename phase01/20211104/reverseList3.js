/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(!head || !head.next) return head
    let pre = reverseList(head.next)
    head.next.next = head
    head.next = null
    return pre
};
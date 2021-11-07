/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var swapPairs = function(head) {
    let ret = new ListNode(-1,head)
    let temp = ret
    while(temp.next&&temp.next.next){
        let pre = temp.next
        let cur = temp.next.next
        pre.next = cur.next
        cur.next = pre
        temp.next = cur
        temp = pre
    }
    return ret.next
};
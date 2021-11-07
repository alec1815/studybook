/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(!head) return null
    var pre=null
    var cur = head
    while(cur){
        const next = cur.next;
        cur.next = pre;
        pre = cur
        cur=next
    }
    return pre
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(!head) return null
    var pre=null
    var cur = head
    while(cur){
        [cur.next,pre,cur] = [pre,cur,cur.next]
    }
    return pre
};
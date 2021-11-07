/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
    if(!head) return null
    let temp = new ListNode(-1,head)
    pre = temp
    cnt = right-left+1
    while(--left){
        pre = pre.next
    }
    pre.next = reverse(pre.next,cnt)
    return ret.next
 };
 
 var reverse = function(head,n){
     let pre = null
     let cur = head
     while(n--){
         [cur.next,pre,cur]=[pre,cur,cur.next];
     }
     head.next = cur
     return pre
 }
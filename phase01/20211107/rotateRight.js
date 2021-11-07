/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function(head, k) {
    if(!head) return null
    let pre = head
    let size = 1
    while(pre.next){
        pre = pre.next
        size ++
    }
    pre.next = head
    for(let i = 0;i<size-k%size-1;i++){
        head = head.next
    }
    pre = head.next
    head.next = null
    return pre
};
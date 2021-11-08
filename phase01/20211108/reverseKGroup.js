/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
    let temp = new ListNode(0,head)
    let p = temp
    do{
        p.next = reverse(p.next,k)
        for(let i = 0; i < k && p; i++) p = p.next
        if(p == null) break
    }while(true)
    return temp.next
};

var reverse = function(head,n){
    let pre = head
    let cur = head
    let cnt =  n
    while(--n && pre) pre = pre.next
    if(pre == null) return head
    pre = null
    while(cnt--){
        [cur.next,pre,cur] = [pre,cur,cur.next]
        // let next = cur.next
        // cur.next = pre
        // pre = cur
        // cur = next
    }
    head.next = cur
    return pre
}
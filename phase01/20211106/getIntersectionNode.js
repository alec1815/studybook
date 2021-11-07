/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
 var getIntersectionNode = function(headA, headB) {
    let pro = headA
    let cur = headB
    while (pro !== cur) {
        pro = pro === null ? headB : pro.next;
        cur = cur === null ? headA : cur.next;
    }
    return pro;
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
       if(head == null || head.next == null) return null;
       let fast = head;
       let slow = head;
       while(fast !== null && fast.next !== null){
           fast = fast.next.next;
           slow = slow.next;
           if(fast == slow){
               let temp = head;
               while(temp !== fast){
                   fast = fast.next;
                   temp = temp.next;
               }
               return  fast;
           }
       }
       return null;
};

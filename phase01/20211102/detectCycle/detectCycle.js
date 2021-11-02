/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let pointer = head;
    let map = new Map();
    while (pointer !== null) {
      if (map.has(pointer)) {
        return pointer; 
      } else {
        map.set(pointer);
        pointer = pointer.next; 
      }
    }
    return null; 
};

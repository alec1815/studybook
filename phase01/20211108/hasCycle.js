/**
 * test
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let pointer = head;
  let map = new Map();
  while (pointer !== null) {
    if (map.has(pointer)) {
      return true;
    } else {
      map.set(pointer);
      pointer = pointer.next;
    }
  }
  return false;
};
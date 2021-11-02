/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    try {
      JSON.stringify(head);
      return false;
    } catch (err) {
      return true;
    }
};

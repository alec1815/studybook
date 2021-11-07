/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
    if (!root) {
        return true
    }
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.abs(left - right) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};
var maxDepth = function(root) {
    if(!root) {
        return 0
    } else {
        let left =  maxDepth(root.left)
        let right =  maxDepth(root.right)
        return 1 + Math.max(left, right)
    }
};
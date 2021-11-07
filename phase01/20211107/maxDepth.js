/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    function loop(node, depth = 1) {
        if (!node) {
            return depth - 1;
        }
        if (!node.left && !node.right) {
            return depth;
        }
        const leftDepth = loop(node.left, depth + 1);
        const rightDepth = loop(node.right, depth + 1);
        return Math.max(leftDepth, rightDepth);
    }

    return loop(root);
};
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
  function traversal (root) {
    if (root === null) {
        return null
    } else {
        [root.left, root.right] = [traversal(root.right), traversal(root.left)]
        return root
    }
  }
  return  traversal(root)
};
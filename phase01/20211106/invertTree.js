/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    // base case
    if (root == null) {
      return null;
    }
    // root 节点需要交换它的左右子节点
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
  
    // 让左右子节点继续翻转它们的子节点
    invertTree(root.left);
    invertTree(root.right);
    return root;
  };
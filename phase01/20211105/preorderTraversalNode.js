let d;

function convertBinaryTree(arr) {
  let root;
  let insertNode = function(parentNode, childNode) {
    if (!childNode || childNode.val == "") return;
    if (childNode.val < parentNode.val) {
      if (parentNode.left === null) {
        parentNode.left = childNode;
      } else {
        insertNode(parentNode.left, childNode);
      }
    } else {
      if (parentNode.right === null) parentNode.right = childNode;
      else insertNode(parentNode.right, childNode);
    }
  };

  arr.forEach((val) => {
    let node = {
      val: val,
      left: null,
      right: null,
    };
    if (root) insertNode(root, node);
    else root = node;
  });
  return root;
}

const preorderTraversalNode = (node, res) => {
  if (node === null) return;

  res.push(node.val); // 加入根元素
  preorderTraversalNode(node.left, res); // 递归左子树
  preorderTraversalNode(node.right, res); // 递归右子树
};
var preorderTraversal = function(root) {
  let res = [];
  if (root === null) return res;
  preorderTraversalNode(root, res);
  return res;
};

while ((d = readline())) {
  let tree = convertBinaryTree(d.split(","));
  console.log(preorderTraversal(tree));
}
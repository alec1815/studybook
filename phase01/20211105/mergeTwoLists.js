let d;

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function generateList(array) {
  let fakeHead = new ListNode(0);
  let current = fakeHead;
  for (let index = 0; index < array.length; index++) {
    current.next = { val: array[index], next: null };
    current = current.next;
  }
  return fakeHead.next;
}

function generateArray(list) {
  let res = [];
  while (list) {
    res.push(list.val);
    list = list.next;
  }
  return res;
}

var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

while ((d = readline())) {
  let arr = JSON.parse(d);
  console.log(arr[0]);
  let list0 = generateList(arr[0]);
  let list1 = generateList(arr[1]);
  let list = mergeTwoLists(list0, list1);

  console.log(generateArray(list));
}
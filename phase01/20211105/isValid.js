let d;

var isValid = function(s) {
  let m = s.length;
  if (m % 2 !== 0) return false;
  let map = new Map([
    ["{", "}"],
    ["(", ")"],
    ["[", "]"],
  ]);
  let stk = [];
  for (ch of s) {
    if (map.has(ch)) {
      stk.push(ch);
      //console.log(stk);
    } else {
      if (map.get(stk[stk.length - 1]) !== ch || stk.length == 0) return false;
      else stk.pop();
    }
  }
  if (stk.length == 0) return true;
  else return false;
};

while ((d = readline())) {
  console.log(isValid(d));
}
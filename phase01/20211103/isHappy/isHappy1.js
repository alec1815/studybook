var isHappy = function(n) {
  if (n === 1) return true;
  const map = new Map();
  var sum = 0;
  while (!map.has(n)) {
    map.set(n);
    while (n) {
      sum += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    if (sum == 1) {
      return true;
    }
    n = sum;
    sum = 0;
  }
  return false;
};
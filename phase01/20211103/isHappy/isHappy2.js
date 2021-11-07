var isHappy = function(n) {
    var sum = 0;
    var count = 100;
    while (count >= 0) {
      while (n !== 0) {
        sum += Math.pow((n % 10),2);
        n = Math.floor(n / 10);
      }
      if (sum === 1) return true;
      count--;
      n = sum;
      sum = 0;
    }
    return false;
  };

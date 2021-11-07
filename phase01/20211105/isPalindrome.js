var isPalindrome = function(x) {
    const s = x.toString().split("");
    let j = s.length - 1;
    for (var i = 0; i < s.length - 1; i++) {
      if (s[i] !== s[j]) {
        return false;
      }
      if (i === j) {
        break;
      }
      j--;
    }
    return true;
  };
  
  let d;
  
  while ((d = readline())) {
    console.log(isPalindrome(Number(d)));
  }
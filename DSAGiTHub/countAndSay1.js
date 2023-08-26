//Added new line from GitHub

const n = 6;
var countAndSay = function (n) {
  let n1 = n - 1;
  let sum = "11";

  if (n === 1) {
    return "1";
  } else if (n === 2) {
    return sum;
  }
  for (let i = 3; i <= n; i++) {
    let count = 0;
    let arr = sum.split("");
    let temp = "";
    sum = "";
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[j + 1]) {
        count++;
      } else {
        count++;
        temp = "" + count + arr[j];
        sum = sum + temp;
        count = 0;
        temp = "";
      }
    }
  }
  return sum;
};

console.log(countAndSay(n));

//String reverse without using inbult function

let input = "let me live in peace";
const reverseWithoutInbuit = (str) => {
  let arr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    arr += str[i];
  }
  return arr;
};

console.log("reverseWithoutInbuit :", reverseWithoutInbuit(input));

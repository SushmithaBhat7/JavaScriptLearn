//String reverse without reversing of individual words

//split the string to space and convert to array
//reverse the array
//join the array with space

let input = "I love internet surfing";

let stringReverse = (str) => {
  let arr = str.split(" ");
  arr = arr.reverse();
  arr = arr.join(" ");
  return arr;
};

console.log("stringReverse :", stringReverse(input));

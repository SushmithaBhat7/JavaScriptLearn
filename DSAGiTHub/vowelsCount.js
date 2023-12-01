//To find vowels and its count in a given string

let input = "geeks for gaaks for gaaks for GEEKS";

const vowelsCount = (str) => {
  let arr = str.split("");
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "a" ||
      arr[i] === "e" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "u" ||
      arr[i] === "A" ||
      arr[i] === "E" ||
      arr[i] === "I" ||
      arr[i] === "O" ||
      arr[i] === "U"
    ) {
      obj[arr[i]] = obj.hasOwnProperty(arr[i]) ? obj[arr[i]] + 1 : 1;
    }
  }
  return obj;
};

console.log("vowelsCount :", vowelsCount(input));

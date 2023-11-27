// Ankit jain
// aNkIT jaIn

const input = "Ankit jain";

const alternateUpperCase = (input) => {
  let arr = input.split(" ");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    for (let j = 0; j < str.length; j++) {
      if (j % 2 === 0) {
        result.push(str[j].toLowerCase());
      } else {
        result.push(str[j].toUpperCase());
      }
    }
    if (i < arr.length - 1) {
      result.push(" ");
    }
  }

  return result.toString().replaceAll(",", "");
};

console.log("alternateUpperCase :", alternateUpperCase(input));

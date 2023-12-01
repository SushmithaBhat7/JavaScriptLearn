//To find longest word from a string using custom code

//split a string to space and convert to an array
//iterate through the values of the array find the largest
//return the largest words length

let input = "My name is Ankit Jain & i'm from morena";

const longestString = (str) => {
  let arr = str.split(" ");
  let len = 0;
  let resultString = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > len) {
      len = arr[i].length;
      resultString = arr[i];
    }
  }

  return resultString;
};

console.log("longestString :", longestString(input));

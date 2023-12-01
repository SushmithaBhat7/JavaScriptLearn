//To find character occurrence from the string

//string to array
//create an empty length variable
//iterate through an array
//find the charector and update length
//return length

let input = "geekkkkss";

const charOccurance = (str, ch) => {
  let arr = str.split("");
  let len = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ch) {
      len += 1;
    }
  }
  return len;
};

console.log("charOccurance :", charOccurance(input, "k"));

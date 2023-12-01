//To find character occurrence from the string

//string to array
//create an empty object
//iterate through an array
//find the charector and update charector and occurance
//return obj[keyCharector] = value

let input = "geekkkkss";

const charOccurance = (str, ch) => {
  let arr = str.split("");
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ch) {
      obj[arr[i]] = obj.hasOwnProperty(arr[i]) ? obj[arr[i]] + 1 : 1;
    }
  }
  return obj[ch];
};

console.log("charOccurance :", charOccurance(input, "k"));

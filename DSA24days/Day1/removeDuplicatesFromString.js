//Que : Remove Duplicate characters from String

//convert string to lowerCase
//convert string to array using split
//create a new output array, ex : resArr
//iterate each element of an array by using loop
//check if the resArr includes the iterated charector
//if false push it to resArr else continue
//convert resArr to string
//return resArr

let input = "Ankita";

const removeDuplicatesFromString = (str) => {
  let arr = str.toLowerCase().split("");
  let resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!resArr.includes(arr[i])) {
      resArr.push(arr[i]);
    }
  }
  return resArr.toString().replaceAll(",", "");
};

console.log("removeDuplicatesFromString :", removeDuplicatesFromString(input));

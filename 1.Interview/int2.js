// [4:17 PM] Chandra Ramnath
// Find the First Non-Repeating Element:
// Given an array of integers, find the first element that does not have any duplicate in the array.
// Input: [2, 3, 4, 3, 2, 5, 6]
// Output: 4

//Algorithm
//Create a function that takes array as an input and return a number
//Create an empty object
//interate throughout the array
//key = array value, value = length
//Discard the object elements whoes length is greater than 1
//the object elements left out check their index element and return the smallest index element

const input = [2, 3, 4, 3, 2, 5, 6];

const findNonRepeatingElem = (arr) => {
  let resObjc = {};
  let resNonRepeatingArr = [];
  let ind = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    resObjc[arr[i]] = resObjc.hasOwnProperty(arr[i]) ? resObjc[arr[i]] + 1 : 1;
  }
  for (let key in resObjc) {
    if (resObjc[key] == 1) {
      resNonRepeatingArr.push(key);
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (resNonRepeatingArr[index] === arr[j]) {
      if (j < ind) {
        ind = j;
      }
      index++;
    }
  }
  //Return the First unique Element
  return resNonRepeatingArr[ind];
};

console.log(findNonRepeatingElem(input));

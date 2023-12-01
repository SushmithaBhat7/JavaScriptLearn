//Remove Duplicate characters from array of element and find the count of an elements using set

//create a new set
//iterate through each value of the array
//add all iteration inside set
//return arr.length

let inputStr = "Aankitaa";

let removeDuplicatesSet = (str) => {
  let set = new Set();
  let strArr = str.toLowerCase().split("");
  for (let i = 0; i < strArr.length; i++) {
    set.add(strArr[i]);
  }
  let arr = [...set];
  return arr.length;
};

console.log("removeDuplicatesSet :", removeDuplicatesSet(inputStr));

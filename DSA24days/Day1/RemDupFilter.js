// Remove Duplicate characters from array of element using filter

//apply filter to array
//check if indexOf of the element and index are same
//if they are not same they are duplicate

let input = [1, 2, 1, 3, 1];

let removeDuplicatesFilter = (arr) => {
  let resArr = arr.filter((item, index) => arr.indexOf(item) === index);

  return resArr;
};

console.log("removeDuplicatesFilter :", removeDuplicatesFilter(input));

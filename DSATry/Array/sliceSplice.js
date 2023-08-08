const arr1 = [1,2,3,4,5,6,7];
const newarr1 = arr1.slice(2,5); //Returns whole new array from start till upto that index
const newarr2 = arr1.slice(2); //Returns whole new array from start till last index
console.log(arr1);
console.log(newarr1);
console.log(newarr2);

const arr2 = [1,2,3,4,5,6];
const ouptputSplice = arr2.splice(2,1); //Returns the element removed, no of elements to be removed
const ouptputSplice2 = arr2.splice(2); //removes from that element to last

console.log(arr2);
console.log(ouptputSplice);
console.log(ouptputSplice2);


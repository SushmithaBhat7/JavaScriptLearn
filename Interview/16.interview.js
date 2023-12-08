const person = {
  firstName: "Sushmitha",
  lastName: "Bhat",
};

const { firstName, lastName } = person;

console.log(firstName, lastName);

//array destructuring
let arr = [1, 2, 3, 4, 5];
const [a, b, ...rest] = arr;
console.log(a, b, rest);

let arr2 = [1, 2, 3];
const [...restA] = arr2;
console.log(restA[restA.length - 1]);

let arr3 = [1, 2, 3];
const [, , c] = arr3;
console.log(c);

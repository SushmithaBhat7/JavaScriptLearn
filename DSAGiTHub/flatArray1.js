// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6, 7, 8, 9],
//   [10, 11, 12, 13, 14, 15],
// ];

let arr = [
  [1, 2, [1, 2, [1, 2]]],
  [3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15],
];
const outArr = [];

function flatArr(arr) {
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      flatArr(item);
    } else {
      outArr.push(item);
    }
  });
  return outArr;
}
console.log(flatArr(arr));

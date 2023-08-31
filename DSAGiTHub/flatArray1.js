// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6, 7, 8, 9],
//   [10, 11, 12, 13, 14, 15],
// ];

let arr = [
  [1, 2, [1, 2]],
  [3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15],
];

function flatArr(arr) {
  const outArr = [];
  arr.forEach((item) => {
    item.forEach((elem) => {
        elem.isArray?elem.forEach
      outArr.push(elem);
    });
  });
  return outArr;
}
console.log(flatArr(arr));

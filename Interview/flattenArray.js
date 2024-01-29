const arr = [
  [1, 2, [10, 11, 12]],
  [4, 5, 6],
  [7, 8, 9],
];

let outArr = [];

const flattenArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      let result = flattenArr(arr[i]);
      outArr = [...outArr, ...result];
    } else {
      outArr.push(arr[i]);
    }
  }
  return outArr;
};

console.log(flattenArr(arr));

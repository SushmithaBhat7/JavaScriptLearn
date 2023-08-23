const arr = [1, 2, 3, 4, 5];
console.log(arr);

const arrV1 = (arr) => {
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    arrNew.push(arr[i] + 1);
  }
  return arrNew;
};
//multiply by 2 for only odd numbers

const arrV2 = (arr) => {
  let arrNew = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      arrNew.push(arr[i] * 2);
    }
    arrNew.push(arr[i]);
  }
};

console.log(arrV1(arr));

const arrMap1 = arr.map((item) => item + 1);
console.log(arrMap1);

const arrMap2 = arr.map((item) => {
  if (item % 2 !== 0) {
    return item * 2;
  }
  return item;
});
console.log(arrMap2);

let arrInput = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callbackFn) {
  let arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callbackFn(this[i], i, this));
  }
  return arr;
};
// map : (callbackfn: (value: number, index: number, array: number[])

const resArr = arrInput.map((item) => item * 2);

console.log("resArr : ", resArr);

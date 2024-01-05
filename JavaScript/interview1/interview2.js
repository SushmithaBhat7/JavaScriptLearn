let inputArr = [1, 2, 3, 4];

Array.prototype.myFilter = function (callbackFn) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      arr.push(this[i]);
    }
  }

  return arr;
};

let resArr = inputArr.myFilter((item, index) => item % 2 === 0);
console.log("resArr : ", resArr);

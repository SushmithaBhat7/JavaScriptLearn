let inputArr = [1, 2, 3, 4, 5];

//reduce : (callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[])
let resArr = inputArr.reduce((accumulator, currentValue, index, array) => {
  accumulator += currentValue;
  return accumulator;
});

console.log(resArr);

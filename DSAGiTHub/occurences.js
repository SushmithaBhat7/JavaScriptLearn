const input = "cCaaAAbbbBBB";

const frequencySort = (input) => {
  const reduceOutput = input.split("").reduce((acc, current) => {
    acc[current] = acc.hasOwnProperty(current) ? acc[current] + 1 : 1;
    return acc;
  }, {});
  const arrValues = Object.values(reduceOutput);
  const arrKeys = Object.keys(reduceOutput);
  const outArr = [];
  let jIndex = 0;
  for (let i = 0; i <= arrValues.length; i++) {
    const max = Math.max(...arrValues);
    const ind = arrValues.indexOf(max);
    const char = arrKeys[ind];
    arrValues.splice(ind, 1);
    arrKeys.splice(ind, 1);
    for (let j = 0; j < max; j++, jIndex++) {
      outArr[jIndex] = char;
    }
  }
  return outArr;
};

console.log(frequencySort(input));

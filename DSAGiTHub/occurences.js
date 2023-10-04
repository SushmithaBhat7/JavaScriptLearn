const input = "cCaaAAbbbBBB";

const frequencySort = (input) => {
  const resduceOutput = input.reduce((acc, current) => {
    acc[current] = acc.hasOwnProperty(current) ? acc[current] + 1 : 1;
    return acc;
  }, {});
};

console.log(frequencySort(input));

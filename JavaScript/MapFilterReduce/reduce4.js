// previous[current] = previous.hasOwnProperty(current)? previous[current]+1 : 1;

const str = "Sushmitha";

// "output" {s:2,u:1,h:2,m:1,i:1,t:1,a:1}

const objcStr = str
  .toLowerCase()
  .split("")
  .reduce((accumulator, current) => {
    accumulator[current] = accumulator.hasOwnProperty(current)
      ? accumulator[current] + 1
      : 1;
    return accumulator;
  }, {});

console.log({ objcStr });

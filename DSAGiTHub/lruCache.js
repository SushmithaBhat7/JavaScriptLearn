const arr = [4, 3, 4, 2, 1, 1, 2];

const lruCache = (arr) => {
  const outArr = [];
  //   for (let i = 0; i < arr.length; i++) {
  //     if (outArr.includes(arr[i])) {
  //       const ind = outArr.indexOf(arr[i]);
  //       outArr.splice(ind, 1);
  //       outArr.unshift(arr[i]);
  //       console.log({ outArr });
  //     } else {
  //       outArr.push(arr[i]);
  //       console.log({ outArr });
  //     }
  //   }
  return outArr;
};

console.log(lruCache(arr));

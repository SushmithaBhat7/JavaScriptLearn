var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

const findPath = (object, path) => {
  let output;
  const arr = path.split(".");
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      output = object[arr[i]];
    } else {
      if (output.hasOwnProperty(arr[i])) {
        output = output[arr[i]];
      } else {
        return undefined;
      }
    }
  }
  return output;
};

console.log(findPath(obj, "a.b.c")); // 12
console.log(findPath(obj, "a.b")); // {c: 12, j: false}
console.log(findPath(obj, "a.b.d")); // undefined
console.log(findPath(obj, "a.c")); // undefined
console.log(findPath(obj, "a.b.c.d")); // undefined
console.log(findPath(obj, "a.b.c.d.e")); // undefined
console.log(findPath(obj, "a.b.j")); //false
console.log(findPath(obj, "a.b.j.k")); //undefined
console.log(findPath(obj, "a.k")); //null

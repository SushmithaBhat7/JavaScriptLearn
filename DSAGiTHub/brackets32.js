let s = "(([]){})";

/*
if(!input) => These are inputs removed
null
undefined
false
""
0
*/

const validParanthesis = (input) => {
  const splittedArr = input.split("");

  const [firstElem] = splittedArr;

  if (
    typeof input !== "string" ||
    !input ||
    input.length % 2 !== 0 ||
    !["{", "(", "["].includes(firstElem)
    // !["{", "(", "["].includes(splittedArr[0])
  ) {
    return false;
  }

  const objc = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stackarr = [];

  for (let i = 0; i < splittedArr.length; i++) {
    const currentElem = splittedArr[i];
    const lastPushedStackElem = stackarr[stackarr.length - 1];

    if (objc[lastPushedStackElem] === currentElem) {
      stackarr.pop(); // lastPushedStackElem is removed from stack
      continue; //current elem is not added to stack
    }
    stackarr.push(currentElem);
  }
  return stackarr.length === 0;
};

console.log(validParanthesis(s));

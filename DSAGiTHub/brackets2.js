let s = "(([]){})";

/*
if(!s) => These are inputs removed
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

  const stackArr = [];

  for (let i = 0; i < splittedArr.length; i++) {
    const currentElem = splittedArr[i]; // ")"
    const recentlyPushedStackElem = stackArr[stackArr.length - 1]; // ]

    // Check for {}
    if (recentlyPushedStackElem === "{" && currentElem === "}") {
      stackArr.pop();
      continue;
    }

    // Check for []
    if (recentlyPushedStackElem === "[" && currentElem === "]") {
      stackArr.pop();
      continue;
    }

    // Check for ()
    if (recentlyPushedStackElem === "(" && currentElem === ")") {
      stackArr.pop();
      continue;
    }

    stackArr.push(currentElem); // ([}}])

    // Handle false case
  }
  return stackArr.length === 0;
};

console.log(validParanthesis(s));

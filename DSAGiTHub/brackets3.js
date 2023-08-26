//Added a line from GitHub

const validParanthesisV2 = (input) => {
  const splittedArr = input.split("");

  const [firstElem] = splittedArr;

  const pairsMapping = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  if (
    typeof input !== "string" ||
    !input ||
    input.length % 2 !== 0 ||
    !pairsMapping.hasOwnProperty(firstElem)
  ) {
    return false;
  }

  const stackArr = [];

  for (let i = 0; i < splittedArr.length; i++) {
    const currentElem = splittedArr[i]; // ")"
    const recentlyPushedStackElem = stackArr[stackArr.length - 1]; // ]

    if (pairsMapping[recentlyPushedStackElem] === currentElem) {
      stackArr.pop();
      continue;
    }

    stackArr.push(currentElem);
  }
  return stackArr.length === 0;
};

console.log(validParanthesisV2("(([]){})"));

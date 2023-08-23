const NUMBER_REGEX_WITH_DOTS_DASHES = "XYZ";
const NUMBER_REGEX_WITH_DOTS = "NUMBER_REGEX_WITH_DOTS";

const formatNumberFieldValue = (inputValue) => {
  if (inputValue[0] === "-" || inputValue[0] === "+") {
    if (inputValue.length > 1) {
      if (
        inputValue[inputValue.length - 1] == "+" ||
        inputValue[inputValue.length - 1] == "-"
      ) {
        return inputValue.slice(0, -1);
      } else if (
        inputValue.slice(1).includes("-") ||
        inputValue.slice(1).includes("+")
      ) {
        return (
          inputValue[0] +
          inputValue.slice(1).replace(NUMBER_REGEX_WITH_DOTS, "")
        );
      } else {
        return inputValue.replace(NUMBER_REGEX_WITH_DOTS_DASHES, "");
      }
    } else {
      return inputValue.replace(NUMBER_REGEX_WITH_DOTS_DASHES, "");
    }
  } else {
    if (inputValue.replace(NUMBER_REGEX_WITH_DOTS_DASHES, "") !== "") {
      return "+" + inputValue.replace(NUMBER_REGEX_WITH_DOTS_DASHES, "");
    } else {
      return inputValue.replace(NUMBER_REGEX_WITH_DOTS_DASHES, "");
    }
  }
};

const formatNumberFieldValue2 = (inputValue) => {
  if (inputValue[0] === "-" || inputValue[0] === "+") {
  }
};

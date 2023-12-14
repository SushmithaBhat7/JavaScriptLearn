import { useRef, useEffect, useState, useMemo } from "react";

const OtpComponent = ({
  numberOfInput,
  value,
  hasErrored,
  isInputSecure,
  isInputNumber,
}) => {
  const inputRefs = useRef([]);
  const [inputs, setInputs] = useState([]);

  useEffect(() => {
    if (!numberOfInput) {
      //setInputs([]);
      return;
    }

    const inputArr = [];
    for (let i = 0; i < numberOfInput; i++) {
      const inp = {};
      inp.value = value.charAt(i) || "";
      inputArr.push(inp);
    }

    setInputs(inputArr);
  }, [numberOfInput, value]);

  const inputType = useMemo(() => {
    if (isInputSecure) return "password";
    if (isInputNumber) return "number";
    return "text";
  }, [isInputSecure, isInputNumber]);

  const handleInputChange = (index, e) => {
    console.log("inputRefs: ", inputRefs, e);
    if (e.keyCode === 8 && index !== 0) {
      inputRefs.current[index].isDirty = true;
      inputRefs.current[index].value = "";
      inputRefs.current[index - 1].value = "";
      inputRefs.current[index - 1].focus();
      return;
    }

    const newIndex = index + 1;
    if (inputRefs.current.length === newIndex) {
      return;
    }

    inputRefs.current[newIndex].isDirty = true;
    inputRefs.current[newIndex].focus();
  };

  return (
    <div>
      {inputs &&
        inputs.map((_, index) => (
          <input
            key={index}
            ref={(currentRef) => (inputRefs.current[index] = currentRef)}
            defaultValue={
              inputRefs?.current[index]?.isDirty
                ? inputRefs.current[index].value
                : _.value
            }
            type={inputType}
            onKeyUp={(e) => handleInputChange(index, e)}
            maxLength={1}
            style={{
              width: "40px",
              marginRight: "10px",
              outline: "none",
              border: "1px solid silver",
            }}
          />
        ))}
      {hasErrored && <span style={{ color: "red" }}>Error!</span>}
    </div>
  );
};

OtpComponent.defaultProps = {
  hasErrored: false,
  isInputSecure: false,
  isInputNumber: false,
};

export default OtpComponent;

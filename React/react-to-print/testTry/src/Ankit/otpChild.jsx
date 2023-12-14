import { useEffect, useMemo, useRef, useState } from "react";

const InputOtpComponent = ({
  value,
  numberOfInput,
  hasErrored,
  isInputSecure,
  isInputNumber,
  handleOtpVerify,
}) => {
  const [inputs, setInputs] = useState([]);
  const inputRefArray = useRef([]);

  useEffect(() => {
    const inputsArr = value
      ? value.split("")
      : new Array(numberOfInput).fill("");
    setInputs(inputsArr);
  }, [numberOfInput, value]);

  useEffect(() => {
    const dataToVerify = inputs.join("");
    handleOtpVerify(dataToVerify);
  }, [inputs, handleOtpVerify]);

  const inputType = useMemo(() => {
    if (isInputSecure) return "password";
    if (isInputNumber) return "number";
    return "text";
  }, [isInputSecure, isInputNumber]);

  const onInputChange = (e, index) => {
    const { value } = e.target;
    if (!value) return;

    const newInputs = [...inputs];
    newInputs[index] = value[0];
    setInputs(newInputs);

    const nextInput = inputRefArray.current[index + 1];
    if (nextInput) nextInput.focus();
  };

  const handleBackButton = (e, index) => {
    const isBackspace = e.key === "Backspace";
    const isEnter = e.key === "Enter";

    if (isBackspace) {
      const newArr = [...inputs];
      newArr[index] = "";
      setInputs(newArr);

      const prevInput = inputRefArray.current[index - 1];
      if (prevInput) {
        prevInput.focus();
        prevInput.select();
      }
      return;
    }

    if (isEnter && inputRefArray.current[index + 1]) {
      inputRefArray.current[index + 1].focus();
    }
  };

  const handleClearBtn = () => {
    const clearInputArray = Array(numberOfInput).fill("");
    setInputs(clearInputArray);
  };

  return (
    <>
      <div className="inputsContainer">
        {inputs.map((_, index) => (
          <input
            className={hasErrored ? "inputErr" : ""}
            ref={(input) => (inputRefArray.current[index] = input)}
            key={index}
            value={inputs[index]}
            type={inputType}
            onChange={(e) => onInputChange(e, index)}
            onKeyUp={(e) => handleBackButton(e, index)}
          />
        ))}
      </div>
      <div className="btnComponent">
        <button className="clearBtn btn btn-primary" onClick={handleClearBtn}>
          Clear
        </button>
        <button
          className="verifyBtn btn btn-primary"
          disabled={!inputs.every((element) => element !== "")}
        >
          Verify
        </button>
      </div>
    </>
  );
};

export default InputOtpComponent;

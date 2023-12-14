import { useEffect, useMemo, useRef, useState } from "react";

const InputOtpComponent = ({
  value,
  numberOfInput,
  hasErrored,
  isInputSecure,
  isInputNumber,
  handleOtpVerify,
}) => {
  const valueArr = value.split("").slice(0, numberOfInput);
  const [inputs, setInputs] = useState(new Array(numberOfInput).fill(""));
  const inputRefArray = useRef([]);

  useEffect(() => {
    if (valueArr.length > 0) {
      setInputs(valueArr);
    }
  }, []);
  useEffect(() => {
    const dataToVerify = inputs.join("");
    handleOtpVerify(dataToVerify);
  }, [inputs]);

  const inputType = useMemo(() => {
    return isInputSecure ? "password" : isInputNumber ? "number" : "text";
  }, [isInputSecure, isInputNumber]);

  const areAllInputsEmpty = inputs.every((value) => value === "");

  const handleClickInputChange = (e, index) => {
    console.log("e.target.value :", e.target.value);
    let newArr = [...inputs];
    if (e.target.value.charAt(0)) {
      newArr[index] = e.target.value.charAt(0);
      setInputs(newArr);
      if (inputRefArray.current[index + 1]) {
        inputRefArray.current[index + 1].focus();
      }
    }
  };

  const handleBackButton = (e, index) => {
    if (e.key == "Backspace") {
      const newArr = [...inputs];
      newArr[index] = "";
      setInputs(newArr);

      if (inputRefArray.current[index - 1]) {
        inputRefArray.current[index - 1].focus();
        inputRefArray.current[index - 1].select();
      }
    } else if (e.key == "Enter") {
      if (inputRefArray.current[index + 1]) {
        inputRefArray.current[index + 1].focus();
      }
    }
  };

  const handleClearBtn = () => {
    let clearInputArray = new Array(numberOfInput).fill("");
    setInputs(clearInputArray);
  };
  console.log("inputs :", inputs);
  console.log("hasErrored :", hasErrored);
  return (
    <>
      <div className="inputsContainer">
        {inputs.map((_, index) => {
          return (
            <input
              className={hasErrored ? "inputErr" : ""}
              ref={(input) => (inputRefArray.current[index] = input)}
              key={index}
              value={inputs[index]}
              type={inputType}
              onChange={(e) => handleClickInputChange(e, index)}
              onKeyUp={(e) => handleBackButton(e, index)}
            />
          );
        })}
      </div>
      <div className="btnComponent">
        <button
          className="clearBtn"
          disabled={areAllInputsEmpty}
          onClick={handleClearBtn}
        >
          Clear
        </button>
        <button
          className="verifyBtn"
          disabled={!inputs.every((element) => element !== "")}
        >
          Verify
        </button>
      </div>
    </>
  );
};
export default InputOtpComponent;

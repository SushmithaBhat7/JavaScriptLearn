import React, { useRef, useState, useEffect, useMemo } from "react";

const Otp = ({
  numberOfInput,
  value,
  errored,
  isInputSecure,
  isInputNumber,
  onOTPSubmitted,
}) => {
  const inpRef = useRef([]);
  //setting input field state
  const [inputFieldsVal, setInputFieldsVal] = useState([]);
  //first focus
  useEffect(() => {
    let temp = [];
    _value = String(value);
    for (let i = 0; i < numberOfInput; i++) {
      if (isInputNumber && !isNaN(_value)) {
        temp[i] = Number(_value[i]) || "";
      } else {
        temp[i] = _value[i] || "";
      }
    }
    setInputFieldsVal(temp);
  }, [numberOfInput, value]);
  //for checking wrong otp
  useEffect(() => {
    const otpdata = inputFieldsVal.join("");
    onOTPSubmitted(otpdata);
  }, [inputFieldsVal]);
  // deriving type of input field
  const inpuType = useMemo(() => {
    if (isInputSecure) {
      return "password";
    }
    if (isInputNumber) {
      return "number";
    }
    return "text";
  }, [isInputSecure, isInputNumber]);

  //input onchange function
  const onInpuChange = (e, i) => {
    let temp = [...inputFieldsVal];
    temp[i] = e.target.value.charAt(0);
    setInputFieldsVal(temp);
    if (e.target.value && i < numberOfInput - 1) {
      inpRef.current[i + 1].focus();
    }
  };
  //function to handle backspace
  const handleBackspaceAndEnter = (e, i) => {
    if (e.key === "Backspace" && !e.target.value && i > 0) {
      inpRef.current[i - 1].focus();
      inpRef.current[i - 1].select();
    }
    if (e.key === "Enter" && e.target.value && i < numberOfInput - 1) {
      inpRef.current[i + 1].focus();
    }
  };
  //fxn to clear
  const clear = () => {
    setInputFieldsVal(new Array(numberOfInput).fill(""));
    inpRef.current[0].focus();
  };

  return (
    <div className="otpContainer">
      <h4>Enter Received Code</h4>
      <div className="iputContainer">
        {inputFieldsVal.map((item, i) => {
          return (
            <input
              type={inpuType}
              maxLength={1}
              value={item}
              ref={(ele) => (inpRef.current[i] = ele)}
              key={i}
              onChange={(e) => onInpuChange(e, i)}
              onKeyUp={(e) => handleBackspaceAndEnter(e, i)}
              className={errored && "inpErr"}
            />
          );
        })}
      </div>
      <div className="btns">
        <button
          onClick={() => {
            alert(inputFieldsVal.join(""));
          }}
        >
          Show Otp
        </button>
        <button onClick={clear}>clear</button>
      </div>
    </div>
  );
};

Otp.defaultProps = {
  numberOfInput: 4,
  value: "abcd",
  isInputSecure: false,
  isInputNumber: false,
  errored: false,
};
export default Otp;

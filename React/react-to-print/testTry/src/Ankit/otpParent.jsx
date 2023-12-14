import { useState } from "react";
import InputOtpComponent from "./otpChild";
import "./style.css";

const OtpMainComponent = () => {
  const otpValue = "";
  const numberOfInput = 6;
  const [hasError, setHasError] = useState(false);

  const handleOtpVerify = (dataToVerify) => {
    const isError =
      dataToVerify !== otpValue && dataToVerify.length === numberOfInput;
    setHasError(isError);
  };

  return (
    <div className="outerBody">
      <div className="innerBoxView">
        <h3 className="labelDiscription">Enter Received Code</h3>
        <InputOtpComponent
          value={otpValue}
          numberOfInput={6}
          hasErrored={hasError}
          isInputSecure={false}
          isInputNumber={false}
          handleOtpVerify={handleOtpVerify}
        />
      </div>
    </div>
  );
};

export default OtpMainComponent;

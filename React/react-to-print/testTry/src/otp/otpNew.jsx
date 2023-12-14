import { useState } from "react";
import InputOtpComponent from "./otpChild";

const OtpMainComponent = () => {
  const otpValue = "";
  const numberOfInput = 6;
  const [hasErrored, setHasErrored] = useState(false);
  const handleOtpVerify = (dataToVerify) => {
    if (dataToVerify != otpValue && dataToVerify.length == numberOfInput) {
      setHasErrored(true);
    } else {
      setHasErrored(false);
    }
  };
  console.log("hasErrored :", hasErrored);
  return (
    <div className="outerBody">
      <div className="innerBoxView">
        <h3 className="labelDiscription">Enter Received Code</h3>
        <InputOtpComponent
          value={otpValue}
          numberOfInput={6}
          hasErrored={hasErrored}
          isInputSecure={true}
          isInputNumber={true}
          handleOtpVerify={handleOtpVerify}
        />
      </div>
    </div>
  );
};

export default OtpMainComponent;

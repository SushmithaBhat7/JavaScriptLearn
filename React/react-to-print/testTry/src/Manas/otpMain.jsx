import "./styles.css";
import Otp from "./otp";
import { useState } from "react";

export default function App() {
  let otp = "abcd";
  let numberOfInput = 4;
  const [errored, hasErrored] = useState(false);
  const onOTPSubmitted = (data) => {
    if (otp != data && data.length === numberOfInput) {
      hasErrored(true);
    } else {
      hasErrored(false);
    }
  };
  return (
    <div className="App">
      <Otp
        numberOfInput={4}
        value={otp}
        errored={errored}
        isInputSecure={false}
        isInputNumber={false}
        onOTPSubmitted={onOTPSubmitted}
      />
    </div>
  );
}

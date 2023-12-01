import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Example from "./reactToPDF.jsx";
import OtpInputView from "./otp/otp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <OtpInputView />
  </React.StrictMode>
);

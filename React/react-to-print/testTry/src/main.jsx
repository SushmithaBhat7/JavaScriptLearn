import React from "react";
import ReactDOM from "react-dom/client";
// import FormDisplay from "./Int/objcDisplay";
// import ParentTreeComponent from "./treeNode/treeNode";
import PageB from "./Theme/pageB";
import PageA from "./Theme/pageA";
import { ThemeProvider } from "@emotion/react";
import HocComponent from "./HOC/hocMain";
import WithHocComponent from "./HOC/withHoc";
import CalculatorComponent from "./UseReducer/calculator";
// import "./index.css";
// import Example from "./reactToPDF.jsx";
// import OtpInputView from "./otp/otp.jsx";
//import OtpMainComponent from "./otp/otpNew.jsx";
// import ParentComponent from "./Interview/parent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <CalculatorComponent />
  </>
);

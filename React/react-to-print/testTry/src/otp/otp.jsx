import { useRef, useState } from "react";

const OtpInputView = () => {
  const [firstState, setFirststate] = useState("");
  const [secondState, setSecondState] = useState("");
  const [thirdState, setThirdState] = useState("");
  const [fourthState, setFourthState] = useState("");

  const [clearBtn, setClearBtn] = useState(true);
  const [getOtpBtn, setOtpBtn] = useState(true);

  const inputRefFirst = useRef(null);
  const inputRefSec = useRef(null);
  const inputRefThird = useRef(null);
  const inputRefFourth = useRef(null);

  const inputRefs = useRef([]);

  const handleClickFirst = (e) => {
    console.log("e :", e);
    setFirststate(e.target.value);

    inputRefSec.current.focus();
  };
  const handleClickSecond = (e) => {
    console.log("e :", e);
    setSecondState(e.target.value);
    console.log("seconState :", secondState);
    inputRefThird.current.focus();
  };
  const handleClickThird = (e) => {
    console.log("e :", e);
    setThirdState(e.target.value);
    console.log("thirdState :", thirdState);
    inputRefFourth.current.focus();
  };
  const handleClickFourth = (e) => {
    console.log("e :", e);
    setFourthState(e.target.value);
    console.log("fourthState :", fourthState);
    inputRefFourth.current.focus();
  };
  const handleClickFourthKeyDown = (e) => {
    console.log("e :", e);
    if (e.key === "Backspace") {
      setFourthState("");
      setTimeout(() => {
        inputRefThird.current.focus();
      }, 200);
    }
  };
  const handleClickThirdKeyDown = (e) => {
    console.log("e :", e);
    if (e.key === "Backspace") {
      setThirdState("");
      setTimeout(() => {
        inputRefSec.current.focus();
      }, 200);
    }
  };
  const handleClick = (e) => {
    console.log("e :", e);
    if (e.key === "Backspace") {
      setSecondState("");
      inputRefFirst.current.focus();
      //   setTimeout(() => {
      //     inputRefFirst.current.focus();
      //   }, 200);
    }
  };
  const handleClickFirstKeyDown = (e) => {
    console.log("e :", e);
    if (e.key === "Backspace") {
      inputRefFirst.current.value = "";
      return;
    }
    inputRefFirst.current.value = e.target.value;
    inputRefSec.current.focus();
    // setTimeout(() => {
    //   inputRefSec.current.focus();
    // }, 200);
  };
  console.log("secondstate :", secondState);
  //   console.log("firstState :", firstState);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          alignItems: "center",
          justifyContent: "center",
          margin: "12px",
          padding: "10px",
          height: "100vh",
        }}
      >
        <div
          className="inputContainer"
          style={{ display: "flex", gap: "12px" }}
        >
          <input
            type="text"
            className="firstInput"
            // value={firstState}
            // onChange={handleClickFirst}
            onKeyUp={handleClickFirstKeyDown}
            ref={inputRefFirst}
          />
          <input
            type="text"
            className="secondInput"
            // value={secondState}
            // onChange={handleClickSecond}
            onKeyUp={handleClick}
            ref={inputRefSec}
          />
          <input
            type="text"
            className="thirdInput"
            // value={thirdState}
            // onChange={handleClickThird}
            onKeyUp={handleClickThirdKeyDown}
            ref={inputRefThird}
          />
          <input
            type="text"
            className="fourthInput"
            // value={fourthState}
            // onChange={handleClickFourth}
            onKeyUp={handleClickFourthKeyDown}
            ref={inputRefFourth}
          />
        </div>
        <div className="btnContainer" style={{ display: "flex", gap: "12px" }}>
          <button
            className="clearBtn"
            disabled={
              !(
                firstState !== "" ||
                secondState !== "" ||
                thirdState !== "" ||
                fourthState !== ""
              )
              // !firstState || !secondState || !thirdState || !fourthState
            }
          >
            Clear
          </button>
          <button
            className="getOtpBtn"
            disabled={
              !firstState || !secondState || !thirdState || !fourthState
            }
          >
            Get OTP
          </button>
          {/* {firstState !== "" &&
          secondState !== "" &&
          thirdState !== "" &&
          fourthState !== ""} */}
        </div>
      </div>
    </div>
  );
};

export default OtpInputView;

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

  const handleClick = (e) => {
    console.log("e :", e);
  };

  const handleClickFirst = (e) => {
    console.log("e :", e);
    if (e.key === "Backspace") {
      setFirststate("");
      setTimeout(() => {
        inputRefFirst.current.focus();
      }, 200);
    } else {
      setFirststate(e.key);
      console.log("e.key :", e.key);

      setTimeout(() => {
        inputRefSec.current.focus();
      }, 200);
    }
  };
  const handleClickSecond = (e) => {
    console.log("e :", e);
    if (e.key === "Backspace") {
      setSecondState("");
      setTimeout(() => {
        inputRefFirst.current.focus();
      }, 200);
    } else {
      setSecondState(e.key);
      console.log("e.key :", e.key);
      console.log("secondstate :", secondState);
      setTimeout(() => {
        inputRefThird.current.focus();
      }, 200);
    }
  };
  const handleClickThird = (e) => {
    console.log("e :", e);
    if (e.key === "Backspace") {
      setThirdState("");
      setTimeout(() => {
        inputRefSec.current.focus();
      }, 200);
    } else {
      setThirdState(e.key);
      console.log("e.key :", e.key);
      console.log("secondstate :", secondState);
      setTimeout(() => {
        inputRefFourth.current.focus();
      }, 200);
    }
  };
  const handleClickFourth = (e) => {
    console.log("e :", e);
    if (e.key === "Backspace") {
      setFourthState("");
      setTimeout(() => {
        inputRefThird.current.focus();
      }, 200);
    } else {
      setFourthState(e.key);
      console.log("e.key :", e.key);
      console.log("secondstate :", secondState);
      setTimeout(() => {
        inputRefFourth.current.focus();
      }, 200);
    }
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
            value={firstState}
            key={firstState}
            onKeyDown={handleClickFirst}
            ref={inputRefFirst}
          />
          <input
            type="text"
            className="secondInput"
            key={secondState}
            value={secondState}
            // onChange={handleClickSecond}
            onKeyDown={handleClickSecond}
            ref={inputRefSec}
          />
          <input
            type="text"
            className="thirdInput"
            value={thirdState}
            key={thirdState}
            onKeyDown={handleClickThird}
            ref={inputRefThird}
          />
          <input
            type="text"
            className="fourthInput"
            value={fourthState}
            key={fourthState}
            onKeyDown={handleClickFourth}
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
          <button className="getOtpBtn" disabled={getOtpBtn}>
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

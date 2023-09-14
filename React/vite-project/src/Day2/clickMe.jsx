import { useState } from "react";

const ClickMeComponent = () => {
  const [btnActive, setBtn] = useState(false);
  const handleClick = () => {
    setBtn(!btnActive);
  };
  return (
    <div>
      {/* <button onClick={handleClick}>{btnActive ? "Clicked" : "click Me"}</button> */}
      <button
        onClick={handleClick}
        style={{ backgroundColor: btnActive ? "red" : "blue" }}
      >
        {btnActive ? "Clicked" : "click Me"}
      </button>
      {btnActive && <p>Button is clicked</p>}
    </div>
  );
};

export default ClickMeComponent;

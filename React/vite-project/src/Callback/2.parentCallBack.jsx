import { useState } from "react";
import ChildcallComp from "./2.childCallBack";

const ParentCallComponent = () => {
  const [showMessage, setShowMessage] = useState(false);
  const handleClick = () => {
    // setShowMessage((value)=>!value);
    setShowMessage(!showMessage);
  };
  return (
    <div>
      {showMessage && <p>Im clicked</p>}
      <ChildcallComp handleclick={handleClick} />
    </div>
  );
};
export default ParentCallComponent;

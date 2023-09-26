import { useState } from "react";
import ChildCallBackComponent from "./childCallback";

const ParentCallBackComponent = () => {
  const [uName, setName] = useState("Gunjan");
  const handleChangeCallBack = (message) => {
    // setName(e.target.value);
    setName(message);
  };
  return (
    <div className="Container">
      <ChildCallBackComponent
        uName={uName}
        handleChangeCallBack={handleChangeCallBack}
      />
      <p>CallBackName : {uName}</p>
    </div>
  );
};
export default ParentCallBackComponent;

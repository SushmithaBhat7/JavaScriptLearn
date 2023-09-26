import { useState } from "react";
import OutputChild from "./outputParent";

const InputComponent = () => {
  const [uName, setName] = useState({ parent: "" });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setName((item) => ({ ...item, [id]: value }));
  };
  return (
    <div className="container">
      <OutputChild uName={uName} />
      <div className="ParentDiv">
        <input id="parent" value={uName.parent} onChange={handleChange} />
      </div>
    </div>
  );
};
export default InputComponent;

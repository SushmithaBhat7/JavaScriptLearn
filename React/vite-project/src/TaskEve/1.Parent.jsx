import { useState } from "react";
import ChildComponentCounter from "./1.Child";

const ParentComponentCounter = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter((value) => value + 1);
  };
  console.log("Before Parent Render");
  return (
    <div>
      <button onClick={handleCounter}>Click Me</button>
      <p>counter :{counter}</p>
      <ChildComponentCounter />
      <ChildComponentCounter />
      <ChildComponentCounter />
      <ChildComponentCounter />
      <ChildComponentCounter />
      <ChildComponentCounter />
      <ChildComponentCounter />
    </div>
  );
};
export default ParentComponentCounter;

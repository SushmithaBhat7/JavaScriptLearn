import { useState } from "react";

const ParentCompTime = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter((value) => value + 1);
  };
  return (
    <div>
      <button onClick={handleCounter}>Click Me</button>
      <p>Counter :{counter}</p>
    </div>
  );
};
export default ParentCompTime;

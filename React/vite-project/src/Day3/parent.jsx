import { useState } from "react";
import ChildCounter from "./2.child-counter";
const ParentCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <ChildCounter uName="Romesh" uCity="Gwalior" counter={counter} />
      <button onClick={() => setCounter((val) => val + 1)}>Increment</button>
      <button onClick={() => setCounter((val) => val - 1)}>Decrement</button>
    </>
  );
};

export default ParentCounter;

import { useEffect, useMemo, useState } from "react";

const CodeFlowV1 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const newVal = useMemo(() => {
    console.log("UseMemo with counter", counter);
    return counter + 1;
  }, [counter]); // This is synchroneous it goes line by line on rerender
  //this rerenders only when counter variable is changed

  useEffect(() => {
    console.log("UseEffect with counter: ", counter);
  }, [counter]); // This use effect runs after the rerender ie, after Direct counter
  //this rerenders only when counter variable is changed

  console.log("Direct counter: ", counter, newVal);
  //this rerenders everytime

  return (
    <div>
      <p onClick={() => setCounter((val) => val + 1)}>{counter}</p>
      <p onClick={() => setCounter2((val) => val + 1)}>{counter2}</p>
    </div>
  );
};

export default CodeFlowV1;

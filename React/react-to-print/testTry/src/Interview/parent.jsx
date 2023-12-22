import { useState } from "react";

const ParentComponent = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    //Stale clousre
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
    setCounter((prevValue) => prevValue + 1);
  };
  return (
    <>
      <button onClick={handleCounter}>Counter Inc</button>
      <p>{counter}</p>
    </>
  );
};
export default ParentComponent;

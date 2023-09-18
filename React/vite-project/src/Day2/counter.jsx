import { useState } from "react";

const CounterComponent = () => {
  const [counter, setCounter] = useState(10);
  const handleIncCounter = (e) => {
    // setCounter((item) => {
    //   //   item < 98 ? item + 2 : 100;
    //   item + 2;
    // });
    setCounter(
      parseInt(e.target.value) < 98 ? parseInt(e.target.value) + 2 : 100
    );
  };
  const handleDncCounter = (e) => {
    // setCounter((item) => (item > 2 ? item - 2 : 0));
    // setCounter((item) => {
    //   item - 2;
    // });
    setCounter(e.target.value > 2 ? e.target.value - 2 : 0);
  };
  return (
    <div className="Container">
      <button name="increment" value={counter} onClick={handleIncCounter}>
        Increment
      </button>
      <button name="decrement" value={counter} onClick={handleDncCounter}>
        Decrement
      </button>
      <p>The number is :{counter}</p>
    </div>
  );
};

export default CounterComponent;

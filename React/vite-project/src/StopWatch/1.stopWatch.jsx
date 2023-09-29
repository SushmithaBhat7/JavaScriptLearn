import { useState } from "react";

const StopWatchComponent = () => {
  const [startTime, setStartTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const onChangeStartTimer = () => {
    setStartTime(new Date().getTime());
    setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 100);
  };
  let secondsPassed = 0;
  if (startTime != null && currentTime != null) {
    secondsPassed = (currentTime - startTime) / 1000;
  }
  return (
    <>
      <p>{startTime}</p>
      <button onClick={onChangeStartTimer}>Start</button>
      <button>Restart</button>
    </>
  );
};
export default StopWatchComponent;

import { useState } from "react";

const MissionComponent = () => {
  const [switchBtn, setSwitch] = useState({
    openTunnel: true,
    enablePower: true,
    startCountDown: true,
    launchMissile: true,
  });
  const handleSwitch = (e) => {
    const { name } = e.target;
    // setSwitch(switchBtn.[name]);
    setSwitch((item) => ({ ...item, [name]: false }));
  };
  return (
    <div>
      <button onClick={handleSwitch} name="enablePower">
        Open Tunnel
      </button>
      <button
        disabled={switchBtn.enablePower}
        onClick={handleSwitch}
        name="startCountDown"
      >
        Enable Power
      </button>
      <button
        disabled={switchBtn.startCountDown}
        onClick={handleSwitch}
        name="launchMissile"
      >
        Start CountDown
      </button>
      <button
        disabled={switchBtn.launchMissile}
        onClick={handleSwitch}
        // name="launchMissile"
      >
        Launch Missile
      </button>
      {!switchBtn.launchMissile && <p>Mission Succesful</p>}
    </div>
  );
};

export default MissionComponent;

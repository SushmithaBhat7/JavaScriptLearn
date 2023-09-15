import { useState } from "react";

const MissionComponent = () => {
  const [switchOpenBtn, setOpenBtn] = useState(false);
  const [switchEnableBtn, setEnableBtn] = useState(true);
  const [switchStartBtn, setStartBtn] = useState(true);
  const [switchLaunchBtn, setLaunchBtn] = useState(true);

  const [firstOpenClick, setFirstOpenClick] = useState(true);
  const [firstEnableClick, setFirstEnableClick] = useState(true);
  const [firstStartClick, setFirstStartClick] = useState(true);
  const [firstLaunchClick, setFirstLaunchClick] = useState(true);

  const handleOpenSwitch = () => {
    setFirstOpenClick(!firstOpenClick);
    setOpenBtn(!switchOpenBtn);
  };
  const handleEnableSwitch = () => {
    setFirstEnableClick(!firstEnableClick);
    if (firstEnableClick) {
      setEnableBtn(!switchEnableBtn);
    } else {
      setOpenBtn(!switchOpenBtn);
    }
  };
  const handleStartSwitch = () => {
    setFirstStartClick(!firstStartClick);
    if (firstStartClick) {
      setStartBtn(!switchStartBtn);
    } else {
      setEnableBtn(!switchEnableBtn);
    }
  };
  const handleLaunchSwitch = () => {
    setFirstLaunchClick(!firstLaunchClick);
    if (firstLaunchClick) {
      setLaunchBtn(!switchLaunchBtn);
    } else {
      setStartBtn(!switchStartBtn);
      setLaunchBtn(!switchLaunchBtn);
    }
  };
  return (
    <div>
      <button onClick={handleOpenSwitch} name="enablePower">
        Open Tunnel
      </button>
      <button
        disabled={!switchOpenBtn}
        onClick={handleEnableSwitch}
        name="startCountDown"
      >
        Enable Power
      </button>
      <button
        disabled={switchEnableBtn}
        onClick={handleStartSwitch}
        name="launchMissile"
      >
        Start CountDown
      </button>
      <button
        disabled={switchStartBtn}
        onClick={handleLaunchSwitch}
        name="success"
      >
        Launch Missile
      </button>
      {switchOpenBtn &&
        !switchEnableBtn &&
        !switchStartBtn &&
        !switchLaunchBtn && <p>Mission Succesful</p>}
    </div>
  );
};

export default MissionComponent;

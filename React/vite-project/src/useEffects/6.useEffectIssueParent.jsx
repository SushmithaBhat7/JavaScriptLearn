import { useState } from "react";
import ChildV1 from "./6.useEffectIssueChild1";
import ChildV2 from "./6.useEffectIssueChild2";

const ParentDay15 = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle((prevState) => !prevState)}>
        Toggle Component
      </button>

      {toggle ? <ChildV1 /> : <ChildV2 />}
    </div>
  );
};

export default ParentDay15;

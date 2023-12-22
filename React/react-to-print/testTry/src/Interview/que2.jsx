// Parent v1
import { useState } from "react";
import ChildComp from "./2.child";
const ParentV1 = () => {
  const [counter, setCounter] = useState(0);

  console.log("Parent Re-Render");
  return (
    <>
      <p onClick={() => setCounter((count) => count + 1)}>Counter: {counter}</p>
      <ChildComp
        data={{
          name: "Rahul",
          city: "Pune",
          details: {
            info: true,
            meta: {
              verse: true,
            },
          },
        }}
      />
    </>
  );
};

export default ParentV1;


// Child
import { memo } from "react";

const Child = (props) => {
  console.log("Re-Render Child", props);

  return (
    <div>
      <p>Child Comp</p>
    </div>
  );
};

const ChildComp = memo(Child);
export default ChildComp;


// Parent v2
import { useState } from "react";
import ChildComp from "./2.child";
const ParentV2 = () => {
  const [counter, setCounter] = useState(0);
  const [profile, setProfile] = useState({
    name: "Rahul",
    city: "Pune",
    details: {
      info: true,
      meta: {
        verse: true,
      },
    },
  });

  const onProfileChange = () => {
    setProfile((prev) => {
      return {
        ...prev,
        name: "Rahul",
      };
    });
  };

  console.log("Parent Re-Render");
  return (
    <>
      <h1>V2</h1>
      <button onClick={onProfileChange}>Profile Change</button>
      <p onClick={() => setCounter((count) => count + 1)}>Counter: {counter}</p>
      <ChildComp data={profile} />
    </>
  );
};

export default ParentV2;

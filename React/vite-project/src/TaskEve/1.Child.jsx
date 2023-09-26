import { memo } from "react";

const ChildComponentCounter = () => {
  console.log("Before Rendering");
  return <p>My Name is Sushmitha</p>;
};
const ChildComp = memo(ChildComponentCounter);
export default ChildComp;

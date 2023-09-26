import { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [uName, setUName] = useState("");
  // const{lName,setLName} = useState("");
  const [counter, setCounter] = useState(0);
  const handleChange = (e) => {
    setUName(e.target.value);
  };

  useEffect(() => {
    console.log("component Did Mount");
  }, []);
  useEffect(() => {
    setCounter(uName.length);
  }, [uName]);
  return (
    <div>
      <input type="text" value={uName} onChange={handleChange} />
      <p>counter:{counter}</p>
    </div>
  );
};
export default UseEffectComponent;

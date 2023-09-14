import { useState } from "react";

const FormComponentColor = () => {
  const [color, setColor] = useState({
    red: false,
    green: false,
    purple: false,
    pink: false,
  });
  const arr = [];

  const handleColor = (e) => {
    const { name, checked } = e.target;
    setColor((item) => ({ ...item, [name]: checked }));
    if (checked) {
      arr.push([name]);
    } else {
      arr.pop([name]);
    }
  };
  const str = arr.join(",");
  //   const renderList = arr.map((item) => {
  //     <div>{item}</div>;
  //   });

  return (
    <div className="container">
      <div className="redClass">
        <label htmlFor="">Red</label>
        <input
          type="checkbox"
          name="red"
          checked={color.red}
          onChange={handleColor}
        />
      </div>
      <div className="redClass">
        <label htmlFor="">Green</label>
        <input
          type="checkbox"
          name="green"
          checked={color.green}
          onChange={handleColor}
        />
      </div>
      <div className="redClass">
        <label htmlFor="">Purple</label>
        <input
          type="checkbox"
          name="purple"
          checked={color.purple}
          onChange={handleColor}
        />
      </div>
      <div className="redClass">
        <label htmlFor="">Pink</label>
        <input
          type="checkbox"
          name="pink"
          checked={color.pink}
          onChange={handleColor}
        />
      </div>
      <p>
        you have selected : {color.red ? "red" : ""}
        {color.green ? ",green" : ""}
        {color.purple ? ",purple" : ""}
        {color.pink ? ",pink" : ""}
      </p>
      {/* <p>You have selected : {renderList}</p> */}
      <p>You selected : {str}</p>
    </div>
  );
};
export default FormComponentColor;

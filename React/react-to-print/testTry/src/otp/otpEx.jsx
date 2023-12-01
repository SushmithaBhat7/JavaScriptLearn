import { useRef, useState } from "react";
import css from "./Input.module.css";
const InputTask = () => {
  let Allref = useRef([]);

  let [inputs] = useState(new Array(4).fill({}));

  const getfocus = (e, index) => {
    const indexextra = index + 1;

    console.log(indexextra);
    console.log("all ref", Allref);
    if (Allref.current.length === indexextra) {
      return;
    } else {
      Allref.current[indexextra].focus();
    }
  };

  console.log(inputs);
  return (
    <div className={css.main}>
      {inputs.map((item, index) => {
        return (
          <input
            type="text"
            ref={(mycurrref) => (Allref.current[index] = mycurrref)}
            key={index}
            className={css.input}
            onChange={(e) => getfocus(e, index)}
          />
        );
      })}
    </div>
  );
};

export default InputTask;

import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementByAmount,
  divideByAmount,
  increment,
  incrementByAmount,
  moduloByAmount,
  multiplyByAmount,
} from "../features/calculatorSlice";
import { useState } from "react";

const Calculator = () => {
  const calculate = useSelector((state) => state.calculator.value);
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0);
  return (
    <div>
      <div>{calculate}</div>
      <div>
        <button onClick={() => dispatch(increment())}>INC</button>
        <button onClick={() => dispatch(decrement())}>DEC</button>
      </div>
      <div>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(number))}>ADD</button>
        <button onClick={() => dispatch(decrementByAmount({ number }))}>
          SUB
        </button>
        <button onClick={() => dispatch(multiplyByAmount(number))}>MUL</button>
        <button onClick={() => dispatch(divideByAmount(number))}>DEL</button>
        <button onClick={() => dispatch(moduloByAmount(number))}>MOD</button>
      </div>
    </div>
  );
};

export default Calculator;

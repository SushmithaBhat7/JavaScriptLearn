import { useReducer } from "react";

const CalculatorComponent = () => {
  const initialState = {
    count: 0,
  };
  const reducer = (state, actions) => {
    switch (actions) {
      case "Increment":
        return { count: state.count + 1 };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>count : {state.count}</p>
      <button
        onClick={() => {
          dispatch("Increment");
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default CalculatorComponent;

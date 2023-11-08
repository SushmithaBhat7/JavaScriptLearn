import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import Calculator from "./pages/calculator.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Calculator />
  </Provider>
);

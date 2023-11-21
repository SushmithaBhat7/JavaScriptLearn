import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";
// import Calculator from "./pages/calculator.jsx";
// import Products from "./features/products/products.jsx";
// import MyCart from "./features/cart/Cart.Layout.jsx";
import UsersList from "./features/Users/users.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {/* <Calculator /> */}
    {/* <div style={{ display: "flex", gap: 12 }}>
      <div style={{ flex: "70%" }}>
        <Products />
      </div>
      <div style={{ flex: "25%" }}>
        <MyCart />
      </div>
    </div> */}
    <UsersList />
  </Provider>
);

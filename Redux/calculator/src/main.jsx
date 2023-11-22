import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./redux/store.js";
import { Provider } from "react-redux";
// import Calculator from "./pages/calculator.jsx";
// import Products from "./features/products/products.jsx";
// import MyCart from "./features/cart/Cart.Layout.jsx";
import UsersList from "./features/Users/users.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDetails from "./features/Users/userDetails.jsx";

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
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<UsersList />} />
        <Route exact path="/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

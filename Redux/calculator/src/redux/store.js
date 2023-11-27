import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "../features/calculatorSlice";
import cartSlice from "../features/cart/cartSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import usersSlice from "../features/Users/users.Slice";
import userDetailsSlice from "../features/Users/userDetails.Slice";

const setMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
    myCart: cartSlice,
    myUsers: usersSlice,
    myUserDetails: userDetailsSlice,
  },
  middleware: (current) => current({ thunk: false }).concat(setMiddleware),
});

setMiddleware.run(rootSaga);

export default store;

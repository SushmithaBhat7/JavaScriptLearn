import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "../features/calculatorSlice";
import cartSlice from "../features/cart/cartSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import usersSlice from "../features/Users/users.Slice";

const setMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
    myCart: cartSlice,
    myUsers: usersSlice,
  },
  middleware: (current) => current({ thunk: false }).concat(setMiddleware),
});

setMiddleware.run(rootSaga);

export default store;

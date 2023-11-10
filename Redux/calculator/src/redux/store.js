import { configureStore } from "@reduxjs/toolkit";
import calculatorSlice from "../features/calculatorSlice";
import cartSlice from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    calculator: calculatorSlice,
    myCart: cartSlice,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
let quantity = 1;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) {
        state.data.push([...action.payload], (quantity = 1));
      } else {
        state.data.quantity++;
      }
    },
    removeFromCart: (state, action) => {},
    updateQuantity: (state, action) => {},
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;

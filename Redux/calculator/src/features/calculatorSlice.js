import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log("action.payload", action.payload);
      state.value += +action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= +action.payload.number;
    },
    multiplyByAmount: (state, action) => {
      state.value *= action.payload;
    },
    divideByAmount: (state, action) => {
      state.value /= action.payload;
    },
    moduloByAmount: (state, action) => {
      state.value %= action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  multiplyByAmount,
  divideByAmount,
  moduloByAmount,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;

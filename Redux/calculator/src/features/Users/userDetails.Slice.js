import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: null,
};

const userDetailSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    getUsersDetailList: (state) => {
      state.isLoading = true;
    },
    getUsersDetailListSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.results;
    },
    getUsersDetailListFailure: (state) => {
      state.isLoading = false;
      state.data = {};
    },
  },
});

export const {
  getUsersDetailList,
  getUsersDetailListSuccess,
  getUsersDetailListFailure,
} = userDetailSlice.actions;

export default userDetailSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  isLoading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersList: (state) => {
      state.isLoading = true;
    },
    getUsersListSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload.results;
    },
    getUsersListFailure: (state) => {
      state.isLoading = true;
      state.data = [];
    },
  },
});

export const { getUsersList, getUsersListSuccess, getUsersListFailure } =
  usersSlice.actions;

export default usersSlice.reducer;

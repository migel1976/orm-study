import { User } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../app/serivices/user";
import { RootState } from "../../app/store";

interface InitialState {
  user: User[] | null;
}

const initialState: InitialState = {
  employees: null,
};

const slice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.getAllEmployees.matchFulfilled, (state, action) => {
        state.employees = action.payload;
      })
  },
});

export default slice.reducer;

export const selectEmployees = (state: RootState) =>
  state.employees.employees;

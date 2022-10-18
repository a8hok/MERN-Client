import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postSignupData = createAsyncThunk("user", async (data) => {
  return axio.post(`/api/signup`, data);
});

export const SignupReducer = createSlice({
  name: "signup",
  initialState: {
    signupData: [],
    loading: false,
  },
  reducer: {},
  extraReducers: {
    [postSignupData.pending]: (state, action) => {
      state.loading = true;
      state.signupData = {
        response: "success",
      };
      state.loading = true;
    },
    [postSignupData.fulfilled]: (state, action) => {
      state.signupData = action.payload;
      state.loading = false;
    },
    [postSignupData.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

const signupReducer = SignupReducer.reducer;
export default signupReducer;

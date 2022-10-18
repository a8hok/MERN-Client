import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const userProfileData = createAsyncThunk(
  "userdata",
  async (userEmail) => {
    return axio.get(`/api/userProfile?userEmail=${userEmail}`);
  }
);
export const userDataReducer = createSlice({
  name: "userData",
  initialState: {
    userData: [],
    userDataloading: false,
  },

  extraReducers: {
    [userProfileData.pending]: (state, action) => {
      state.loading = true;
    },
    [userProfileData.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = action.payload.data;
    },
    [userProfileData.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default userDataReducer.reducer;

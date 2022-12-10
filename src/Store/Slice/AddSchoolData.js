import { axio } from "../../Config/Config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postSchools = createAsyncThunk("School",async (data) => {
    return axio.post(`/api/addschool`, data);
  }
);

const postSchoolsReducer = createSlice({
    name: "schools",
    initialState: {
      postSchoolsData: [],
      loading: true,
    },
    extraReducers: {
      [postSchools.pending]: (state, action) => {
        state.loading = true;
      },
      [postSchools.fulfilled]: (state, action) => {
        state.postSchoolsData = action.payload.data;
        state.loading = false;
      },
      [postSchools.rejected]: (state, action) => {
        state.loading = false;
      },
    },
  });
  
  export default postSchoolsReducer.reducer;
  


import { axio } from "../../Config/Config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postUniversities = createAsyncThunk(
  "Universities",
  async (data) => {
    return axio.post(`/api/exceltojson`, data);
  }
);

const postUniversitiesReducer = createSlice({
  name: "Universities",
  initialState: {
    postUniversitiesData: [],
    loading: true,
  },
  extraReducers: {
    [postUniversities.pending]: (state, action) => {
      state.loading = true;
    },
    [postUniversities.fulfilled]: (state, action) => {
      state.postUniversitiesData = action.payload.data;
      state.loading = false;
    },
    [postUniversities.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default postUniversitiesReducer.reducer;

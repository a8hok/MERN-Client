import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axio } from "../../Config/Config";

export const postProgramme = createAsyncThunk("programme", (data) => {
  return axio.post(`/api/programme`, data);
});

const postProgrammeReducer = createSlice({
  name: "programme",
  initialState: {
    programmeData: [],
    programmeLoading: true,
  },
  extraReducers: {
    [postProgramme.pending]: (state) => {
      state.programmeLoading = true;
    },
    [postProgramme.fulfilled]: (state, action) => {
      state.programmeData = action.payload.data;
      state.programmeLoading = false;
    },
    [postProgramme.rejected]: (state, action) => {
      state.programmeLoading = false;
    },
  },
});

export default postProgrammeReducer.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const getProgrammeInfo = createAsyncThunk("Programme", async () => {
  return axio.get(`/api/programme`);
});

const ProgrammeReducer = createSlice({
  name: "Programme",
  initialState: {
    programmeData: [],
    programmeLoading: false,
  },
  reducer: {},
  extraReducers: {
    [getProgrammeInfo.pending]: (state, action) => {
      state.programmeLoading = true;
    },
    [getProgrammeInfo.fulfilled]: (state, action) => {
      state.programmeData = action.payload.data.data;
      state.programmeLoading = false;
    },
    [getProgrammeInfo.rejected]: (state, action) => {
      state.programmeLoading = false;
    },
  },
});


export default ProgrammeReducer.reducer;

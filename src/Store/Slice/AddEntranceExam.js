import { axio } from "../../Config/Config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postEntranceExam = createAsyncThunk("Entrance",async (data) => {
    return axio.post(`/api/post-entrance`, data);
  }
);

const postEntranceReducer = createSlice({
    name: "Entrance",
    initialState: {
      postEntranceData: [],
      EntranceLoading: true,
    },
    extraReducers: {
      [postEntranceExam.pending]: (state, action) => {
        state.EntranceLoading = true;
      },
      [postEntranceExam.fulfilled]: (state, action) => {
        state.postEntranceData = action.payload.data;
        state.EntranceLoading = false;
      },
      [postEntranceExam.rejected]: (state, action) => {
        state.EntranceLoading = false;
      },
    },
  });
  
const entranceReducer = postEntranceReducer.reducer;
export default entranceReducer;

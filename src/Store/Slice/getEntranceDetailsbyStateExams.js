import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getEntranceInfoByStateExams = createAsyncThunk("getbyStateExams/Entrance", async (examName) => {
  return axio.get(`/api/get-EntranceStateExams?examName=${examName}`);
});

const EntranceInfo = createSlice({
    name: "StateExamsEntrance",
    initialState: {
        EntranceDataByStateExams: [],
        StateExamEntranceLoading: true,
      },
    extraReducers: {
        [getEntranceInfoByStateExams.pending]: (state, action) => {
            state.StateExamEntranceLoading = true
        },
        [getEntranceInfoByStateExams.fulfilled]: (state, action) => {
            state.EntranceDataByStateExams = action.payload.data.data;
            state.StateExamEntranceLoading = false
        },
        [getEntranceInfoByStateExams.rejected]: (state, action) => {
            state.StateExamEntranceLoading = false
        }
    }
})

const EntranceDetailsByStateExams = EntranceInfo.reducer;

export default EntranceDetailsByStateExams;

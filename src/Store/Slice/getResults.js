import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getResults = createAsyncThunk("Results", async () => {
  return axio.get(`/api/getResults`);
});

const ResultsInfo = createSlice({
    name: "Results",
    initialState: {
        ResultsData: [],
        ResultsLoading: true,
      },
    extraReducers: {
        [getResults.pending]: (state, action) => {
            state.ResultsLoading = true
        },
        [getResults.fulfilled]: (state, action) => {
            state.ResultsData = action.payload.data.data;
            state.ResultsLoading = false
        },
        [getResults.rejected]: (state, action) => {
            state.ResultsLoading = false
        }
    }
})

const ResultsDetails = ResultsInfo.reducer;

export default ResultsDetails;

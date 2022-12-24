import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const postResultsData = createAsyncThunk("Results", async(data) => {
    return axio.post(`/api//postResults`, data);
});

const ResultsData = createSlice({
    name: "FinalResults",
    initialState: {
        allResultsData: [],
        ResultsLoading: true
    },
    reducer: {},
    extraReducers: {
        [postResultsData.pending]: (state, action) => {
            state.ResultsLoading = true
        },
        [postResultsData.fulfilled]: (state, action) => {
            state.ResultsLoading = false
        },
        [postResultsData.rejected]: (state, action) => {
            state.ResultsLoading = false
        }
    }
})

const ResultsDetailsReducer = ResultsData.reducer;

export default ResultsDetailsReducer;

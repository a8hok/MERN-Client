import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const postCollageData = createAsyncThunk("Collage", async(data) => {
    return axio.post(`/api//postcollage`, data);
});

const CollageData = createSlice({
    name: "CollageExcel",
    initialState: {
        allCollageData: [],
        CollageLoading: true
    },
    reducer: {},
    extraReducers: {
        [postCollageData.pending]: (state, action) => {
            state.CollageLoading = true
        },
        [postCollageData.fulfilled]: (state, action) => {
            state.CollageLoading = false
        },
        [postCollageData.rejected]: (state, action) => {
            state.CollageLoading = false
        }
    }
})

const CollageDetailsReducer = CollageData.reducer;

export default CollageDetailsReducer;

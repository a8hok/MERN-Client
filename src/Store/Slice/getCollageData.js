import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getCollageInfo = createAsyncThunk("excel/Collage", async () => {
  return axio.get(`/api/getcollage`);
});

const CollageInfo = createSlice({
    name: "CollageExcel",
    initialState: {
        CollageData: [],
        eventLoading: true,
      },
    extraReducers: {
        [getCollageInfo.pending]: (state, action) => {
            state.eventLoading = true
        },
        [getCollageInfo.fulfilled]: (state, action) => {
            state.CollageData = action.payload.data.data;
            state.eventLoading = false
        },
        [getCollageInfo.rejected]: (state, action) => {
            state.eventLoading = false
        }
    }
})

const CollageDetails = CollageInfo.reducer;

export default CollageDetails;

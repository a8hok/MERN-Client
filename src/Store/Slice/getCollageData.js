import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getCollageInfo = createAsyncThunk("excel/Collage", async () => {
  return axio.get(`/api/getcollage`);
});

const CollageInfo = createSlice({
    name: "CollageExcel",
    initialState: {
        CollageData: [],
        CollageLoading: true,
      },
    extraReducers: {
        [getCollageInfo.pending]: (state, action) => {
            state.CollageLoading = true
        },
        [getCollageInfo.fulfilled]: (state, action) => {
            state.CollageData = action.payload.data.data;
            state.CollageLoading = false
        },
        [getCollageInfo.rejected]: (state, action) => {
            state.CollageLoading = false
        }
    }
})

const CollageDetails = CollageInfo.reducer;

export default CollageDetails;

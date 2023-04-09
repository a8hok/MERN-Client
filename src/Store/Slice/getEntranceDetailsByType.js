import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getEntranceInfoByType = createAsyncThunk("getbytype/Entrance", async (type) => {
  return axio.get(`/api/get-EntranceType?type=${type}`);
});

const EntranceInfo = createSlice({
    name: "Entrance",
    initialState: {
        EntranceData: [],
        EntranceLoading: true,
      },
    extraReducers: {
        [getEntranceInfoByType.pending]: (state, action) => {
            state.EntranceLoading = true
        },
        [getEntranceInfoByType.fulfilled]: (state, action) => {
            state.EntranceData = action.payload.data.data;
            state.EntranceLoading = false
        },
        [getEntranceInfoByType.rejected]: (state, action) => {
            state.EntranceLoading = false
        }
    }
})

const EntranceDetails = EntranceInfo.reducer;

export default EntranceDetails;

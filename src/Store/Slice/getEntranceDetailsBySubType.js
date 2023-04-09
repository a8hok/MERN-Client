import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getEntranceInfoBySubType = createAsyncThunk("getbysubtype/Entrance", async (subType) => {
  return axio.get(`/api/get-EntranceSubType?subType=${subType}`);
});

const EntranceInfo = createSlice({
    name: "subTypeEntrance",
    initialState: {
        EntranceDataBySubType: [],
        EntranceLoading: true,
      },
    extraReducers: {
        [getEntranceInfoBySubType.pending]: (state, action) => {
            state.EntranceLoading = true
        },
        [getEntranceInfoBySubType.fulfilled]: (state, action) => {
            state.EntranceDataBySubType = action.payload.data.data;
            state.EntranceLoading = false
        },
        [getEntranceInfoBySubType.rejected]: (state, action) => {
            state.EntranceLoading = false
        }
    }
})

const EntranceDetailsBySubType = EntranceInfo.reducer;

export default EntranceDetailsBySubType;

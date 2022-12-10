import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getContentInfo = createAsyncThunk("Content", async (topic) => {
  return axio.get(`/api/get-content?topic=${topic}`);
});

const ContentInfo = createSlice({
    name: "Content",
    initialState: {
        ContentData: [],
        ContentLoading: true,
      },
    extraReducers: {
        [getContentInfo.pending]: (state, action) => {
            state.ContentLoading = true
        },
        [getContentInfo.fulfilled]: (state, action) => {
            state.ContentData = action.payload.data.data;
            state.ContentLoading = false
        },
        [getContentInfo.rejected]: (state, action) => {
            state.ContentLoading = false
        }
    }
})

const ContentDetails = ContentInfo.reducer;

export default ContentDetails;

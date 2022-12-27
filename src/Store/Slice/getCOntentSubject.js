import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getContentSubjectInfo = createAsyncThunk("Content", async (subject) => {
  return axio.get(`/api/get-contentsubject?subject=${subject}`);
});

const ContentSubjectInfo = createSlice({
    name: "Content",
    initialState: {
        ContentSubjectData: [],
        ContentSubjectLoading: true,
      },
    extraReducers: {
        [getContentSubjectInfo.pending]: (state, action) => {
            state.ContentSubjectLoading = true
        },
        [getContentSubjectInfo.fulfilled]: (state, action) => {
            state.ContentSubjectData = action.payload.data.data;
            state.ContentSubjectLoading = false
        },
        [getContentSubjectInfo.rejected]: (state, action) => {
            state.ContentSubjectLoading = false
        }
    }
})

const ContentSubjectDetails = ContentSubjectInfo.reducer;

export default ContentSubjectDetails;

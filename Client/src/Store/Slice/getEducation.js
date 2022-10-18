import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getEducationInfo = createAsyncThunk("excel/education", async () => {
  return axio.get(`/api/geteducation`);
});

const educationInfo = createSlice({
    name: "educationExcel",
    initialState: {
        educationData: [],
        eventLoading: true,
      },
    extraReducers: {
        [getEducationInfo.pending]: (state, action) => {
            state.eventLoading = true
        },
        [getEducationInfo.fulfilled]: (state, action) => {
            state.educationData = action.payload.data.data;
            state.eventLoading = false
        },
        [getEducationInfo.rejected]: (state, action) => {
            state.eventLoading = false
        }
    }
})

const educationDetails = educationInfo.reducer;

export default educationDetails

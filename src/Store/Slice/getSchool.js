import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getSchoolData = createAsyncThunk("school", async() => {
    return axio.get(`/api/getschool`);
});

const schoolData = createSlice({
    name: "schoolExcel",
    initialState: {
        allSchoolData: [],
        schoolLoading: true
    },
    reducer: {},
    extraReducers: {
        [getSchoolData.pending]: (state, action) => {
            state.schoolLoading = true
        },
        [getSchoolData.fulfilled]: (state, action) => {
            state.allSchoolData = action.payload.data.data;
            state.schoolLoading = false
        },
        [getSchoolData.rejected]: (state, action) => {
            state.schoolLoading = false
        }
    }
})

const schoolDetailsReducer = schoolData.reducer;

export default schoolDetailsReducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getGVResource = createAsyncThunk("GVResource", async(data) => {
    return axio.post(`/api/getGVResource`, data)
})

const gettingGVReducer = createSlice({
    name: "get/GV",
    initialState: {
        GVdata: [],
        GVloading: false
    },
    extraReducers: {
        [getGVResource.pending]: (state, action) => {
            state.GVloading = true
        },
        [getGVResource.fulfilled]: (state, action) => {
            state.GVdata = action.payload.data.data;
            state.GVloading = false;
        },
        [getGVResource.rejected]: (state, action) => {
            state.GVloading = false;
        }
    }
});

const getGVSlice = gettingGVReducer.reducer;

export default getGVSlice;

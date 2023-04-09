import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getGSSVResource = createAsyncThunk("GSSVResource", async(data) => {
    return axio.post(`/api/getGSSVResource`, data)
})

const gettingGSSVReducer = createSlice({
    name: "get/GSSV",
    initialState: {
        GSSVdata: [],
        GSSVloading: false
    },
    extraReducers: {
        [getGSSVResource.pending]: (state, action) => {
            state.GSSVloading = true
        },
        [getGSSVResource.fulfilled]: (state, action) => {
            state.GSSVdata = action.payload.data.data;
            state.GSSVloading = false;
        },
        [getGSSVResource.rejected]: (state, action) => {
            state.GSSVloading = false;
        }
    }
});

const getGSSVSlice = gettingGSSVReducer.reducer;

export default getGSSVSlice;

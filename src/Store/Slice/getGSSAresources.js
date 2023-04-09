import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getGSSAResource = createAsyncThunk("GSSAResource", async(data) => {
    return axio.post(`/api/getGSSAResource`, data)
})

const gettingGSSAReducer = createSlice({
    name: "get/GSSA",
    initialState: {
        GSSAdata: [],
        GSSAloading: false
    },
    extraReducers: {
        [getGSSAResource.pending]: (state, action) => {
            state.GSSAloading = true
        },
        [getGSSAResource.fulfilled]: (state, action) => {
            state.GSSAdata = action.payload.data.data;
            state.GSSAloading = false;
        },
        [getGSSAResource.rejected]: (state, action) => {
            state.GSSAloading = false;
        }
    }
});

const getGSSASlice = gettingGSSAReducer.reducer;

export default getGSSASlice;

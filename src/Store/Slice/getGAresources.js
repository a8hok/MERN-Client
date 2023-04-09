import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getGAResource = createAsyncThunk("GAResource", async(data) => {
    console.log(data)
    return axio.post(`/api/getfilteredResource`, data)
})

const gettingGAReducer = createSlice({
    name: "get/GA",
    initialState: {
        GAdata: [],
        GAloading: false
    },
    extraReducers: {
        [getGAResource.pending]: (state, action) => {
            state.GAloading = true
        },
        [getGAResource.fulfilled]: (state, action) => {
            state.GAdata = action.payload.data.data;
            state.GAloading = false;
        },
        [getGAResource.rejected]: (state, action) => {
            state.GAloading = false;
        }
    }
});

const getGASlice = gettingGAReducer.reducer;

export default getGASlice;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axio } from "../../Config/Config";

export const PostResources = createAsyncThunk("addResources", (data) => {
    return axio.post(`/api/addResource`, data)
})

const postResourceReducer = createSlice({
    name: "add/resource",
    initialState: {
        addedResource: [],
        addingResourceLoading: false
    },
    extraReducers: {
        [PostResources.pending]: (state, action) => {
            state.addingResourceLoading = true
        },
        [PostResources.fulfilled]: (state, action) => {
            state.addingResourceLoading = false;
            state.addedResource = action.payload.data;
        },
        [PostResources.rejected]: (state, action) => {
            state.addingResourceLoading = false
        }
    }
});

const postResourceSlice = postResourceReducer.reducer;

export default postResourceSlice

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axio } from "../../Config/Config";

export const editBlogData = createAsyncThunk("editBlog", (data) => {
    return axio.put(`/api/updateselectedblog`, data);
});

const editBlogReducer = createSlice({
    name: "update_blog",
    initialState: {
        updatedBlogData: [],
        updateBlogloading: false
    },
    extraReducers: {
        [editBlogData.pending]: (state, action) => {
            state.updateBlogloading = true
        },
        [editBlogData.fulfilled]: (state, action) => {
            state.updateBlogloading = false
            state.updatedBlogData = action.payload.data
        },
        [editBlogData.rejected]: (state, action) => {
            state.updateBlogloading = false
        }
    }
});

const updateBlogReducer = editBlogReducer.reducer;

export default updateBlogReducer;

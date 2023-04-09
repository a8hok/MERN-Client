import { axio } from "../../Config/Config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const toAddNewBlog = createAsyncThunk("AddBlogs", async(data) => {
    return axio.post(`/api/addblog`, data)
});

const postBlog = createSlice({
    name: "Blogs",
    initialState: {
        addedBlogs: [],
        loadingAddingBlog: false,
    },
    extraReducers: {
        [toAddNewBlog.pending]: (state, action) => {
            state.loadingAddingBlog = true
        },
        [toAddNewBlog.fulfilled]: (state, action) => {
            state.loadingAddingBlog = false
            state.addedBlogs = action.payload
        },
        [toAddNewBlog.rejected]: (state, action) => {
            state.loadingAddingBlog = false
        }
    }
});

const addBlogReducer = postBlog.reducer;

export default addBlogReducer;

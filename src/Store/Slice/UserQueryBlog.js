import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const postQueryFromBlogPages = createAsyncThunk("blogquery", async(data) => {
    console.log(data)
    return axio.post(`/api/userquery`, data);
});

const postqueryForBlogs = createSlice({
    name: "queryfromBlog",
    initialState: {
        blogsentStatus: {},
        sentBlogLoading: false
    },
    extraReducers: {
        [postQueryFromBlogPages.pending]: (state, action) => {
            state.sentBlogLoading = true;
        },
        [postQueryFromBlogPages.fulfilled]: (state, action) => {
            state.sentBlogLoading = false;
            state.blogsentStatus = action.payload.data;
        },
        [postQueryFromBlogPages.rejected]: (state, action) => {
            state.sentBlogLoading = false;
        }
    }
});

const postQueryBlogReducer = postqueryForBlogs.reducer;

export default postQueryBlogReducer;

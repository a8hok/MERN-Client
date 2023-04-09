import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import { axio } from "../../Config/Config";

export const deleteSelectedBlog = createAsyncThunk("deleteBlog", async (blogID) => {
    const response = await axio.delete(`/api/deleteBlog/${blogID}`)
    return response
})

const deleteingSelectedBlog = createSlice({
    name: "delete-Blog",
    initialState: {
        deleteBlogLoading: true
    },
    extraReducers: {
        [deleteSelectedBlog.pending]: (state, action) => {
            state.deleteBlogLoading = true
        },
        [deleteSelectedBlog.fulfilled]: (state, action) => {
            state.deleteBlogLoading = false
        },
        [deleteSelectedBlog.rejected]: (state, action) => {
            console.log(state, action)
        }
    }
})

const removingSelectedBlog = deleteingSelectedBlog.reducer;

export default removingSelectedBlog;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getAllBlogbydata = createAsyncThunk("getblogall", async() => {
    return axio.get(`/api/getallblogdata`)
});

const selectedBlogbyall = createSlice({
    name: "allBlog",
    initialState: {
        alldataBlog: [],
        allblogLoading: false
    },
    extraReducers: {
        [getAllBlogbydata.pending]: (state, action) => {
            state.allblogLoading = true
        },
        [getAllBlogbydata.fulfilled]: (state, action) => {
            state.allblogLoading = false
            state.alldataBlog = action.payload.data.data
        },
        [getAllBlogbydata.rejected]: (state, action) => {
            state.allblogLoading = false
        }
    }
});

const AllBlogReducer = selectedBlogbyall.reducer;

export default AllBlogReducer;

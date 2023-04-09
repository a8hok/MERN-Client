import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getBlogbyFiltereddata = createAsyncThunk("getblogfiltered", async(data) => {
    const {Domain, subDomain} = data;
    console.log(Domain, subDomain)
    return axio.get(`/api/getselectiveblog?Domain=${Domain}&subDomain=${subDomain}`)
});

const selectedBlogbyFilter = createSlice({
    name: "filteredBlog",
    initialState: {
        selectedBlog: [],
        blogLoading: false
    },
    extraReducers: {
        [getBlogbyFiltereddata.pending]: (state, action) => {
            state.blogLoading = true
        },
        [getBlogbyFiltereddata.fulfilled]: (state, action) => {
            state.blogLoading = false
            state.selectedBlog = action.payload.data.data
        },
        [getBlogbyFiltereddata.rejected]: (state, action) => {
            state.blogLoading = false
        }
    }
});

const selectedBlogReducer = selectedBlogbyFilter.reducer;

export default selectedBlogReducer;

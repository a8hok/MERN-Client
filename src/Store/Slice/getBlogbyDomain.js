import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getBlogbyDomain = createAsyncThunk("getblogbyDomaindata", async(data) => {
    // const {Domain, subDomain} = data;
    // console.log(Domain, subDomain)
    return axio.get(`/api/blogbydomain?Domain=${data}`)
});

const selectedBlogbyDomain = createSlice({
    name: "DomainBlog",
    initialState: {
        selectedDomainBlog: [],
        DomainblogLoading: false
    },
    extraReducers: {
        [getBlogbyDomain.pending]: (state, action) => {
            state.DomainblogLoading = true
        },
        [getBlogbyDomain.fulfilled]: (state, action) => {
            state.DomainblogLoading = false
            state.selectedDomainBlog = action.payload.data.data
        },
        [getBlogbyDomain.rejected]: (state, action) => {
            state.DomainblogLoading = false
        }
    }
});

const selectedBlogbyDomainReducer = selectedBlogbyDomain.reducer;

export default selectedBlogbyDomainReducer;

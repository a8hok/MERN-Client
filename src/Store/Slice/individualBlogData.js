import {createSlice} from '@reduxjs/toolkit';

const getIndividualBlogData = createSlice({
    name: "selectedBlogData",
    initialState: {
        selectedBlog: {}
    },
    reducers: {
        selectingBlogData(state, action){
            state.selectedBlog = action.payload
        }
    }
})

export const BlogSelectAction = getIndividualBlogData.actions;

const selectedData = getIndividualBlogData.reducer;

export default selectedData;

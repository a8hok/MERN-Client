import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const AddNewContentData = createAsyncThunk("ContentData", async(data) => {
    await axio.post("/api/add-content", data)
});

const postContentData = createSlice({
    name: "content",
    initialState: {
        postContentData: [],
        addContentLoading: true
    },
    extraReducers: {
        [AddNewContentData.pending]: (state, action) => {
            state.addContentLoading = true;
        },
        [AddNewContentData.fulfilled]: (state, action) => {
            state.postContentData = action.payload.data;
            state.addContentLoading = false;
        },
        [AddNewContentData.rejected]: (state, action) => {
            state.addContentLoading = false;
        },
    },
});

const addContent = postContentData.reducer;

export default addContent;

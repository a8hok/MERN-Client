import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const editingEvent = createAsyncThunk("EditEvent", async(data) => {
    return axio.put(`/api/editevent`, data)
})

const editEventReducer = createSlice({
    name: "eventEditor",
    initialState: {
        editedEventData: [],
        editEventLoading: true,
    },
    extraReducers:{
        [editingEvent.pending]: (state, action) => {
            state.editEventLoading = true;
        },
        [editingEvent.fulfilled]: (state, action) => {
            state.editEventLoading = false;
            state.editedEventData = action.payload;
        },
        [editingEvent.rejected]: (state, action) => {
            state.editEventLoading = false;
        }
    }
})

const editedEventReducer = editEventReducer.reducer;

export default editedEventReducer

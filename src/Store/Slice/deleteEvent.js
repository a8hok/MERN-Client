import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import { axio } from "../../Config/Config";

export const deleteSelectedEvent = createAsyncThunk("deleteEvent", async (eventId) => {
    console.log(eventId)
    const response = await axio.delete(`/api/delete-event/${eventId}`)
    return response
})

const deleteingSelectedEvent = createSlice({
    name: "delete-Event",
    initialState: {
        deleteEventLoading: true
    },
    extraReducers: {
        [deleteSelectedEvent.pending]: (state, action) => {
            state.deleteEventLoading = true
        },
        [deleteSelectedEvent.fulfilled]: (state, action) => {
            state.deleteEventLoading = false
        },
        [deleteSelectedEvent.rejected]: (state, action) => {
            console.log(state, action)
        }
    }
})

const removingSelectedEvent = deleteingSelectedEvent.reducer;

export default removingSelectedEvent;

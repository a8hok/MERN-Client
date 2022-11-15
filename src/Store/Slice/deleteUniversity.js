import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import { axio } from "../../Config/Config";

export const deleteSelectedUniversity = createAsyncThunk("deleteUniversity", async (S_No) => {
    const response = await axio.delete(`/api/delete-universities/${S_No}`)
    return response
})

const deleteingSelectedUniversity = createSlice({
    name: "delete-University",
    initialState: {
        deleteLoading: true
    },
    extraReducers: {
        [deleteSelectedUniversity.pending]: (state, action) => {
            state.deleteLoading = true
        },
        [deleteSelectedUniversity.fulfilled]: (state, action) => {
            state.deleteLoading = false
        },
        [deleteSelectedUniversity.rejected]: (state, action) => {
            console.log(state, action)
        }
    }
})

const removingSelectedUniversity = deleteingSelectedUniversity.reducer;

export default removingSelectedUniversity;

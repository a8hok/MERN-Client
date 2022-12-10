import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import { axio } from "../../Config/Config";

export const deleteSelectedSchool = createAsyncThunk("deleteSchool", async (SlNo) => {
    const response = await axio.delete(`/api/delete-school/${SlNo}`)
    return response
})

const deleteingSelectedSchool = createSlice({
    name: "delete-School",
    initialState: {
        deleteSchoolLoading: true
    },
    extraReducers: {
        [deleteSelectedSchool.pending]: (state, action) => {
            state.deleteSchoolLoading = true
        },
        [deleteSelectedSchool.fulfilled]: (state, action) => {
            state.deleteSchoolLoading = false
        },
        [deleteSelectedSchool.rejected]: (state, action) => {
            console.log(state, action)
        }
    }
})

const removingSelectedSchool = deleteingSelectedSchool.reducer;

export default removingSelectedSchool;

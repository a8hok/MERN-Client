import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import { axio } from "../../Config/Config";

export const deleteSelectedProgramme = createAsyncThunk("deleteProgramme", async (SNo) => {
    const response = await axio.delete(`/api/delete-programme/${SNo}`)
    return response
})

const deleteingSelectedProgramme = createSlice({
    name: "delete-programme",
    initialState: {
        deleteProgramLoading: true
    },
    extraReducers: {
        [deleteSelectedProgramme.pending]: (state, action) => {
            state.deleteProgramLoading = true
        },
        [deleteSelectedProgramme.fulfilled]: (state, action) => {
            state.deleteProgramLoading = false
        },
        [deleteSelectedProgramme.rejected]: (state, action) => {
            console.log(state, action)
        }
    }
})

const removingSelectedProgramme = deleteingSelectedProgramme.reducer;

export default removingSelectedProgramme;

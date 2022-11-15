import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import { axio } from "../../Config/Config";

export const deleteSelectedCollage = createAsyncThunk("deletecollage", async (SNo) => {
    const response = await axio.delete(`/api/delete-collage/${SNo}`)
    return response
})

const deleteingSelectedcollage = createSlice({
    name: "delete-collage",
    initialState: {
        deleteProgramLoading: true
    },
    extraReducers: {
        [deleteSelectedCollage.pending]: (state, action) => {
            state.deleteProgramLoading = true
        },
        [deleteSelectedCollage.fulfilled]: (state, action) => {
            state.deleteProgramLoading = false
        },
        [deleteSelectedCollage.rejected]: (state, action) => {
            console.log(state, action)
        }
    }
})

const removingSelectedcollage = deleteingSelectedcollage.reducer;

export default removingSelectedcollage;

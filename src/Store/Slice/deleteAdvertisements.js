import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import { axio } from "../../Config/Config";

export const deleteSelectedAdvertisement = createAsyncThunk("deleteAdvertisement", async (advertisementID) => {
    const response = await axio.delete(`/api/delete-advertisement/${advertisementID}`)
    return response
})

const deleteingSelectedAdvertisement = createSlice({
    name: "delete-Advertisement",
    initialState: {
        deleteAdvertisementLoading: true
    },
    extraReducers: {
        [deleteSelectedAdvertisement.pending]: (state, action) => {
            state.deleteAdvertisementLoading = true
        },
        [deleteSelectedAdvertisement.fulfilled]: (state, action) => {
            state.deleteAdvertisementLoading = false
        },
        [deleteSelectedAdvertisement.rejected]: (state, action) => {
            console.log(state, action)
        }
    }
})

const removingSelectedAdvertisement = deleteingSelectedAdvertisement.reducer;

export default removingSelectedAdvertisement;

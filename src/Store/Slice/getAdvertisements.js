import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getAdvertisementsInfo = createAsyncThunk("excel/Advertisements", async () => {
  return axio.get(`/api/get-advertisement`);
});

const AdvertisementsInfo = createSlice({
    name: "Advertisements",
    initialState: {
        AdvertisementsData: [],
        AdvertisementsLoading: true,
      },
    extraReducers: {
        [getAdvertisementsInfo.pending]: (state, action) => {
            state.AdvertisementsLoading = true
        },
        [getAdvertisementsInfo.fulfilled]: (state, action) => {
            state.AdvertisementsData = action.payload.data.data;
            state.AdvertisementsLoading = false
        },
        [getAdvertisementsInfo.rejected]: (state, action) => {
            state.AdvertisementsLoading = false
        }
    }
})

const AdvertisementsDetails = AdvertisementsInfo.reducer;

export default AdvertisementsDetails;

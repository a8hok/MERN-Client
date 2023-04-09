import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const EditAdvertisement = createAsyncThunk("EditAdvertisement", async (data) => {
  return axio.put("/api/editadvertisement",data);
});

const EditAdvertisementReducer = createSlice({
  name: "Edit/Advertisement",
  initialState: {
    EditAdvertisementData: [],
    EditAdvertisementpostloading: false,
  },
  reducer: {},
  extraReducers: {
    [EditAdvertisement.pending]: (state, action) => {
      state.EditAdvertisementpostloading = true;
    },
    [EditAdvertisement.fulfilled]: (state, action) => {
      state.EditAdvertisementpostloading = false;
      state.EditAdvertisementdata = action.payload;
    },
    [EditAdvertisement.rejected]: (state, action) => {
      state.EditAdvertisementpostloading = false;
    },
  },
});



const editAdvertisementReducer = EditAdvertisementReducer.reducer;

export default editAdvertisementReducer;
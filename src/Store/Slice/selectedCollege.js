import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const getSelectedCollegeInfo = createAsyncThunk(
  "College",
  async (c_id) => {
    return axio.get(
      `/api/getselectedcollege/?c_id=${c_id}`
    );
  }
);

export const selectedCollegeReducer = createSlice({
  name: "Universities",
  initialState: {
    SelectedCollegesData: [],
    universitiesLoading: false,
  },
  reducer: {},
  extraReducers: {
    [getSelectedCollegeInfo.pending]: (state, action) => {
      state.universitiesLoading = true;
    },
    [getSelectedCollegeInfo.fulfilled]: (state, action) => {
      state.SelectedCollegesData = action.payload.data.data;
      state.universitiesLoading = false;
    },
    [getSelectedCollegeInfo.rejected]: (state, action) => {
      state.universitiesLoading = false;
    },
  },
});

const selectedCollege = selectedCollegeReducer.reducer;

export default selectedCollege;

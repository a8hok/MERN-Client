import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const getSelectedSchoolInfo = createAsyncThunk(
  "Schools",
  async (SlNo) => {
    return axio.get(
      `/api/getselectedschool/?SlNo=${SlNo}`
    );
  }
);

export const selectedCollegeReducer = createSlice({
  name: "School",
  initialState: {
    SelectedSchoolData: [],
    universitiesLoading: false,
  },
  reducer: {},
  extraReducers: {
    [getSelectedSchoolInfo.pending]: (state, action) => {
      state.universitiesLoading = true;
    },
    [getSelectedSchoolInfo.fulfilled]: (state, action) => {
      state.SelectedSchoolData = action.payload.data.data;
      state.universitiesLoading = false;
    },
    [getSelectedSchoolInfo.rejected]: (state, action) => {
      state.universitiesLoading = false;
    },
  },
});

const selectedSchool = selectedCollegeReducer.reducer;

export default selectedSchool;

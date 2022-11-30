import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const getSelectedUniversityInfo = createAsyncThunk(
  "University",
  async (S_no) => {
    return axio.get(
      `/api/getselecteduniversity/?S_No=${S_no}`
    );
  }
);

export const selecteduniversityReducer = createSlice({
  name: "Universities",
  initialState: {
    SelectedUniversitiesData: [],
    universitiesLoading: false,
  },
  reducer: {},
  extraReducers: {
    [getSelectedUniversityInfo.pending]: (state, action) => {
      state.universitiesLoading = true;
    },
    [getSelectedUniversityInfo.fulfilled]: (state, action) => {
      state.SelectedUniversitiesData = action.payload.data.data;
      state.universitiesLoading = false;
    },
    [getSelectedUniversityInfo.rejected]: (state, action) => {
      state.universitiesLoading = false;
    },
  },
});

const selectedUniversity = selecteduniversityReducer.reducer;

export default selectedUniversity;

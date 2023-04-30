import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const getSelectedUniversityInfo = createAsyncThunk(
  "University",
  async (U_id) => {
    return axio.get(
      `/api/getselecteduniversity/?U_id=${U_id}`
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

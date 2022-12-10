import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getUniversityInfoByName = createAsyncThunk(
  "Universities",
  async (data) => {
    return axio.get(`/api/search?Name=${data.searchedUniversity}`);

  }
);

const searchUniversityReducer = createSlice({
  name: "Universities",
  initialState: {
    SearchedUniversity: [],
    SearchedUniversityLoading: true,

  },
  reducers: {},
  extraReducers: {
    [getUniversityInfoByName.pending]: (state, action) => {
      state.SearchedUniversityLoading = true;
    },
    [getUniversityInfoByName.fulfilled]: (state, action) => {
      state.SearchedUniversity = action.payload;
      state.SearchedUniversityLoading = false;
    },
    [getUniversityInfoByName.rejected]: (state, action) => {
      state.SearchedUniversityLoading = false;

    },
  },
});

const searchUniversityByName = searchUniversityReducer.reducer;
export default   searchUniversityByName

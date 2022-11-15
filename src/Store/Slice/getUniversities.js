import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const getUniversitiesInfo = createAsyncThunk(
  "Universities",
  async (data) => {
    const alternative = 1;
    return axio.get(
      `/api/universities/?limit=${data.pageSize}&page=${
        data.pageIndex === 0 ? alternative : data.pageIndex
      }`
    ); //
  }
);

export const universitiesReducer = createSlice({
  name: "Universities",
  initialState: {
    universitiesData: [],
    universitiesLoading: false,
  },
  reducer: {},
  extraReducers: {
    [getUniversitiesInfo.pending]: (state, action) => {
      state.universitiesLoading = true;
    },
    [getUniversitiesInfo.fulfilled]: (state, action) => {
      state.universitiesData = action.payload.data.data;
      state.universitiesLoading = false;
    },
    [getUniversitiesInfo.rejected]: (state, action) => {
      state.universitiesLoading = false;
    },
  },
});

const universities = universitiesReducer.reducer;

export default universities;

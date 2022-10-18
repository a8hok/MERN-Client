import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axio } from "../../Config/Config";

export const editUniversities = createAsyncThunk("Universities", (data) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: data
  };
  return axio(`/api/edit-universities`, requestOptions);
});

const EditUniversitiesReducer = createSlice({
  name: "Universities",
  initialState: {
    programmeData: [],
    programmeLoading: true,
  },
  extraReducers: {
    [editUniversities.pending]: (state) => {
      state.programmeLoading = true;
    },
    [editUniversities.fulfilled]: (state, action) => {
      state.programmeData = action.payload.data;
      state.programmeLoading = false;
    },
    [editUniversities.rejected]: (state, action) => {
      state.programmeLoading = false;
    },
  },
});

export default EditUniversitiesReducer.reducer;

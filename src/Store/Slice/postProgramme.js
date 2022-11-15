import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axio } from "../../Config/Config";

export const postProgramme = createAsyncThunk("programme", (data) => {
  console.log(data)
  return axio.post(`/api/programme`, data)
  // const formData = new FormData();
  // formData.append("SNo", data.SNo);
  // formData.append("ProgrammeType", data.ProgrammeType);
  // formData.append("Programme", data.Programme);
  // formData.append("Name", data.Name);
  // formData.append("Discipline", data.Discipline)

  // const config = {
  //   headers: {
  //     "Content-Type": "multipart/form-data"
  //   }
  // }
  
  // await axio.post(`/api/programme`, formData, config)
});

const postProgrammeReducer = createSlice({
  name: "programme",
  initialState: {
    programmeData: [],
    programmeLoading: true,
  },
  extraReducers: {
    [postProgramme.pending]: (state) => {
      state.programmeLoading = true;
    },
    [postProgramme.fulfilled]: (state, action) => {
      state.programmeData = action.payload.data;
      state.programmeLoading = false;
    },
    [postProgramme.rejected]: (state, action) => {
      state.programmeLoading = false;
    },
  },
});

export default postProgrammeReducer.reducer;
